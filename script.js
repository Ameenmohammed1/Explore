const menu = document.querySelector('#menu');
const navbar = document.querySelector('.navbar')
const intu = document.querySelector('.fa-solid')

function clickAction (e){
navbar.classList.toggle('active')
intu.classList.toggle('fa-xmark')
}
menu.addEventListener('click',clickAction)