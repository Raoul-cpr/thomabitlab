const logo_menu =document.querySelector('.logo_menu');
const ul =document.querySelector('.ul');
const cancel_menu=document.querySelector('.cancel_menu');

logo_menu.addEventListener('click', () => {
    ul.classList.toggle('show');
    logo_menu.classList.toggle('view');
    cancel_menu.classList.toggle('cancel');
});

cancel_menu.addEventListener('click', () => {
    ul.classList.toggle('show');
    logo_menu.classList.toggle('view');
    cancel_menu.classList.toggle('cancel');
    
});
