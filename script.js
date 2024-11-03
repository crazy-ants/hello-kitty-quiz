"use strict"

let image = document.querySelector('#image');
let title = document.querySelector('#title');
let btnYes = document.querySelector('#btnYes');
let btnNo = document.querySelector('#btnNo');
let happySound = new Audio("assets_happy-cat.mp3")
let sadSound = new Audio("assets_crying-cat.mp3")

btnYes.addEventListener('click', () => {
    image.src = "happyhellokitty.gif"
    title.innerHTML = "Aww I love you too 😘"
    sadSound.pause()
    happySound.play()
    happySound.loop = true
})

let btnYesScale = 1;
let btnNoScale = 1;

btnNo.addEventListener('click', () => {
    image.src = "https://media.tenor.com/VfQsyC5zDDoAAAAM/hello-kitty-crying.gif"
    title.innerHTML = "Oh no, please click yes"
    happySound.pause()
    sadSound.play()
    sadSound.loop = true
    btnNoScale -= 0.1;
    btnYesScale += 0.1;
    btnNo.style.transform = `scale(${btnNoScale})`
    btnYes.style.transform = `scale(${btnYesScale})`
});