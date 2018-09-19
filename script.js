const links = document.querySelectorAll('.navigation__link');
function closeMenu(){
    document.querySelector('.navigation__checkbox').checked = false;
}


links.forEach(link => link.addEventListener('click', closeMenu)); 