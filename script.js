const menu = document.querySelector('.bi-list');
const close = document.querySelector('.bi-x')
const navigation = document.querySelector('.navigation');
const section = document.querySelector('section');

menu.addEventListener('click', () => {
    menu.style.display = 'none';
    close.style.display = 'block';
    section.style.display ='none'
    navigation.style.display= 'flex';
})

close.addEventListener('click', () => {
    close.style.display = 'none';
    menu.style.display = 'block';
    navigation.style.display = 'none';
    section.style.display ='block'
})

