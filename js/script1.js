import { info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

const arrKeys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'] 
let currentKeyIndex 

const keyElement = document.querySelector('#key')
 
const generateKey = () => {
    currentKeyIndex = Math.floor(Math.random() * arrKeys.length)
    keyElement.textContent = arrKeys[currentKeyIndex]

}

window.addEventListener('keydown', (e) => {
    e.preventDefault()
    const pressedKey = e.key.toLowerCase()
    if(pressedKey === arrKeys[currentKeyIndex]) {
        success({text: 'True👍', delay: 500})
        generateKey()
    } else {
        error({text: 'False🫤', delay: 500})
    }
})

const gameBtn = document.querySelector('.start')
gameBtn.addEventListener('click', () => {
    info({text: 'The game started😊', delay: 500})
    generateKey()
})