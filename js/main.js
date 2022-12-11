'use strict'

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}

function onOpenModal(){
    document.body.classList.add('show-modal')
}

function onCloseModal(){
    document.body.classList.remove('show-modal')
}