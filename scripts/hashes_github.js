// const request = require('request')
const fetch = require('node-fetch')
const crypto = require('crypto')
const colors = require('colors')
const request = require('request')

const domain = 'https://coinfy.com'
const respository = `https://api.github.com/repos/elevenyellow/coinfy/git/trees/master`
const extensions = ['js', 'htm', 'html', 'css']

// getTree(respository, file => file.path.indexOf('public') > -1).then(list => {
//     let correct = 0
//     list = list.filter(item => extensions.includes(getExtension(item.path)))
//     list.forEach(item => {
//         const path = domain + item.path.replace('public', '')
//         console.log(path)
//         getFile(path).then(body => {
//             const hash_github = item.sha
//             const hash_domain = shagit(body)
//             if (hash_domain === hash_github) {
//                 correct += 1
//                 console.log(colors.green(`✔ ${hash_github} `) + path)
//             } else
//                 console.log(
//                     colors.red(`✘ ${hash_domain}`) +
//                         ` ${path}\n  ` +
//                         colors.red(hash_github)
//                 )
//         })
//     })
// })

getFile(
    'https://raw.githubusercontent.com/elevenyellow/coinfy/master/public/static/image/logo.svg'
).then(body => {
    console.log(1, body.length, shagit(body))
})

request(
    'https://raw.githubusercontent.com/elevenyellow/coinfy/master/public/static/image/logo.svg',
    (error, response, body) => {
        console.log(2, body.length, shagit(body))
    }
)

html = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" width="750px" height="228px" viewBox="0 0 750 228">
<defs>
<g id="Layer0_0_FILL">
<path fill="#ffffff" stroke="none" d="
M 113.95 59.55
Q 113.95 52.8 108.9 50.05 104.95 47.95 97.9 47.95
L 61.05 47.95
Q 49.7 47.95 45.1 49.2 38.7 50.85 31 57.15
L 13.9 71.45
Q 5.55 78.2 2.75 84.85 0 91 0 102
L 0 124.5
Q 0 135.5 2.75 141.65 5.55 148.3 13.9 155
L 31 169.3
Q 38.7 175.65 45.1 177.4 49.7 178.55 61.05 178.55
L 97.9 178.55
Q 104.95 178.55 108.9 176.4 113.95 173.7 113.95 166.95 113.95 160.15 108.4 157.25 104.65 155.25 97.9 155.25
L 56.9 155.25
Q 50.65 155.25 43.65 149.45
L 29.6 137.65
Q 23.3 132.55 23.3 127.7
L 23.3 98.8
Q 23.3 93.95 29.6 88.85
L 43.65 77.05
Q 50.65 71.2 56.9 71.2
L 97.9 71.2
Q 104.65 71.2 108.4 69.2 113.95 66.4 113.95 59.55
M 196.3 47.85
L 177.9 47.85
Q 166.5 47.85 159.65 50.8 154.3 53.1 144.95 60.95 136.05 68.2 133.25 73.85 130.15 79.8 130.15 91.25
L 130.15 135.05
Q 130.15 146.15 133.65 152.65 136.7 158.45 146.15 166.4 155.25 173.95 161.05 176.2 166.85 178.45 177.9 178.45
L 196.3 178.45
Q 207.3 178.45 213.25 176.2 218.9 173.95 228.05 166.4 237.5 158.45 240.55 152.65 244.15 146.15 244.15 135.05
L 244.15 91.25
Q 244.15 79.8 241.05 73.85 238.2 68.2 229.3 60.95 219.9 53.1 214.65 50.8 207.8 47.85 196.3 47.85
M 177.9 71.1
L 196.3 71.1
Q 204.95 71.1 212.3 77.45 220.8 84.6 220.8 91.25
L 220.8 135.05
Q 220.8 141.65 212.3 148.9 204.95 155.15 196.3 155.15
L 177.9 155.15
Q 169.2 155.15 161.9 148.9 153.5 141.65 153.5 135.05
L 153.5 91.25
Q 153.5 84.6 161.9 77.45 169.2 71.1 177.9 71.1
M 196.85 110.05
Q 196.85 106.75 195.15 105.35 193.6 104.05 190.85 104.05
L 183.45 104.05
Q 180.6 104.05 179.1 105.35 177.45 106.75 177.45 110.05
L 177.45 116.15
Q 177.45 119.4 179.1 120.9 180.6 122.25 183.45 122.25
L 190.85 122.25
Q 193.6 122.25 195.15 120.9 196.85 119.4 196.85 116.15
L 196.85 110.05
M 329.8 64.15
Q 329.8 54.05 326.1 50.85 322.8 47.95 312.5 47.95
L 288 47.95
Q 280.9 47.95 277.15 50.05 272.05 52.8 272.05 59.55 272.05 66.4 277.45 69.2 281.4 71.2 288 71.2
L 306.45 71.2 306.45 155.25 288 155.25
Q 280.9 155.25 277.15 157.4 272.05 160.25 272.05 166.95 272.05 173.7 277.45 176.55 281.4 178.55 288 178.55
L 347.15 178.55
Q 353.9 178.55 357.7 176.55 363.15 173.7 363.15 166.95 363.15 160.25 358.05 157.4 354.25 155.25 347.15 155.25
L 329.8 155.25 329.8 64.15
M 501.05 70.8
Q 498.9 62.35 492.05 56.45 486.75 51.8 482 49.95 477.15 47.95 470.55 47.95
L 453.25 47.95
Q 448.3 47.95 442.75 50.4
L 433.15 55.7 414.35 68.05 414.35 64.95
Q 414.35 57.15 412.3 53.35 409.75 47.95 402.65 47.95 395.5 47.95 392.8 53.35 391 57.15 391 65.2
L 391 162.55
Q 391 169.8 393.15 173.6 395.9 178.55 402.65 178.55 409.4 178.55 412.2 173.6 414.35 169.8 414.35 162.55
L 414.35 94.9 448.65 73.35
Q 452.3 71.2 456 71.2
L 463.65 71.2
Q 473.6 71.2 476.65 75.7 479.05 79.4 479.5 91.1
L 481.9 162.8
Q 482.15 169.8 484.25 173.6 487.1 178.55 493.5 178.55 500.55 178.55 503.15 172.9 505.05 168.9 504.95 161.15
L 502.5 87.9
Q 502 74.9 501.05 70.8
M 635.3 11.6
Q 635.3 4.25 629.7 1.65 626.15 0 618.2 0
L 602.45 0
Q 590.05 0 583.45 1.75 574.3 4.25 566.65 11.6 559.55 18.6 557.2 26.95 555.55 33 555.55 44.85
L 555.55 47.95 548.9 47.95
Q 541.8 47.95 538.05 50.05 532.95 52.8 532.95 59.55 532.95 66.4 538.35 69.2 542.3 71.2 548.9 71.2
L 555.55 71.2 555.55 162.55
Q 555.55 169.8 557.55 173.6 560.35 178.55 567.1 178.55 573.85 178.55 576.7 173.6 578.7 169.8 578.7 162.55
L 578.7 71.2 599.3 71.2
Q 606.05 71.2 609.95 69.2 615.4 66.4 615.4 59.55 615.4 52.8 610.3 50.05 606.4 47.95 599.3 47.95
L 578.7 47.95 578.7 43.3
Q 578.7 31.1 584.05 26.85 588.55 23.2 601.05 23.2
L 619.2 23.2
Q 626.5 23.2 630.2 21.2 635.3 18.35 635.3 11.6
M 750 73.35
L 750 63.9
Q 750 56.7 747.85 52.9 745 47.95 738.25 47.95 731.5 47.95 728.8 52.9 726.65 56.7 726.65 63.9
L 726.65 77.3 695.65 145.9 690.6 145.9 659.35 77.3 659.35 63.9
Q 659.35 56.7 657.25 52.9 654.4 47.95 647.65 47.95 640.9 47.95 638.15 52.9 636 56.7 636 63.9
L 636 74.3
Q 636 81.05 641.6 93.45
L 670.25 156.8
Q 673.9 164.7 674.85 165.9 677.55 169.1 683.95 169.1
L 685.25 169.1 668 204.75 652 204.75
Q 644.9 204.75 641.15 206.85 636 209.55 636 216.3 636 223.15 641.5 226 645.4 228 652 228
L 670 228
Q 678.15 228 681.25 226 684.65 223.9 688.35 215.85
L 747 88.15
Q 750 82 750 73.35 Z"/>
</g>
</defs>
<g transform="matrix( 1, 0, 0, 1, 0,0) ">
<use xlink:href="#Layer0_0_FILL"/>
</g>
</svg>`

console.log(3, html.length, shagit(html))

// UTILS FUNCTIONS

function getFile(url) {
    return fetch(url)
        .then(response => response.text())
        .then(body => body.substr(0, body.length - 1))
}

function sha1(data) {
    const shasum = crypto.createHash('sha1')
    shasum.update(data)
    return shasum.digest('hex')
}

// https://stackoverflow.com/questions/552659/how-to-assign-a-git-sha1s-to-a-file-without-git/552725#552725
function shagit(data) {
    return sha1(`blob ${data.length + 1}\0${data}\n`)
}

function getFolder(url) {
    const files = []
    return fetch(url)
        .then(response => response.json())
        .then(json => {
            if (Array.isArray(json.tree)) {
                json.tree.forEach(item => {
                    files.push({
                        path: item.path,
                        type: item.type,
                        url: item.url,
                        sha: item.sha
                    })
                })
                return files
            } else console.error(json)
        })
}

function getTree(url, filter) {
    const list = []

    function getOneFolder(parent) {
        return getFolder(parent.url).then(files => {
            files.forEach(file => {
                file.path = parent.path + file.path
                file.level = parent.level + 1
                if (file.type === 'tree') file.path = file.path + '/'
                list.push(file)
                // console.log(file.level, file.path)
            })
            goDeep()
        })
    }

    function goDeep() {
        for (let i = 0; i < list.length; ++i) {
            const file = list[i]
            if (file.type === 'tree') {
                list.splice(i--, 1)
                if (filter(file)) {
                    getOneFolder(file)
                    return
                }
            }
        }
        resolve(list)
    }

    let resolve, reject
    return new Promise((_resolve, _reject) => {
        resolve = _resolve
        reject = _reject
        getOneFolder({ url: url, path: '', level: 0 })
    })
}

function getExtension(path) {
    const split = path.split('.')
    return split[split.length - 1]
}
