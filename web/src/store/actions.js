import React from 'react'
import { collect } from 'dop'
import routes from '/const/routes'
import { state } from '/store/state'
import { encryptAES128CTR } from '/api/security'

export function setHref(href) {
    state.location.href = href
}

export function createWallet(symbol, address) {
    state.wallets[symbol][address] = {
        label: '',
        balance: 0,
        last_update: 0 // last time we checked balance in timestamp
    }
    updateSession()
}
export function setPublicKey(symbol, address, public_key) {
    state.wallets[symbol][address].public_key = public_key
    updateSession()
}
export function setPrivateKey(symbol, address, private_key, password) {
    state.wallets[symbol][address].private_key = encryptAES128CTR(
        private_key,
        password
    )
    updateSession()
}
export function deleteWallet(symbol, address) {
    const collector = collect()
    delete state.wallets[symbol][address]
    setHref(routes.home())
    collector.emit()
    updateSession()
}


export function updateSession() {
    const wallets = JSON.stringify(state.wallets)
    window.localStorage.setItem('wallets', wallets)
}


export function exportWallets() {
    const wallets = JSON.stringify(state.wallets)
    const a = document.createElement('a')
    const file = new Blob([wallets], {type: 'application/json;charset=UTF-8'})
    const date = new Date().toJSON().replace(/\..+$/,'')
    a.href = URL.createObjectURL(file)
    a.download = `WEDONTNEEDBANKS_backup--${date}.json`
    a.click()
}


export function importWallets() {
    const input = document.createElement('input')
    input.type = 'file'
    input.addEventListener('change', e=>{
        const file = input.files[0]
        if ( file.type.indexOf('json') > -1 || file.type.indexOf('text') > -1 || file.type==='' ) {
            const reader = new FileReader()
            reader.onload = e => {
                const dataString = e.target.result
                try {
                    const wallets = JSON.parse(dataString)
                    console.log( wallets );
                } catch(e) { 
                    console.log(e, dataString)
                    alert('Invalid format')
                }
            }
            reader.readAsText(file)
        }
        else {
            // console.log( file.type );
            addNotification(<span><strong>Invalid format</strong><br/>caca</span>, undefined, 10000)
            addNotification(<strong>Invalid der format</strong>, 'red', 7500)
            addNotification(<strong>Invalid format</strong>, 'green', 5000)
        }
    })
    input.click()
}


export function closeSession() {
    window.localStorage.removeItem('wallets')
    window.location.href = '/'
}

let idNotification = 1
export function addNotification(text, color, timeout=5000) {
    state.notifications[idNotification] = {
        id: idNotification,
        text: text,
        color: color,
        timeout: timeout
    }
    idNotification += 1
}

export function removeNotification(id) {
    delete state.notifications[id]
}
