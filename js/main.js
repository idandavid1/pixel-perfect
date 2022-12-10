'use strict'

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}

function onOpenModal(){
    document.querySelector('.modal').classList.remove('hide-modal')
}

function onCloseModal(){
    document.querySelector('.modal').classList.add('hide-modal')
}