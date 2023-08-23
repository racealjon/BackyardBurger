// Dark mode
const toggle = document.getElementById('darkmode');
const body = document.querySelector('body')

toggle.addEventListener('click' , function(){
    this.classList.toggle('bxs-moon')
    if(this.classList.toggle('bx-sun')){
        body.style.background = 'white';
        body.style.color = '#5d617a';
        body.style.transition = '2s';
    }else{
        body.style.background = '#5d617a';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
})


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll  =() =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}


