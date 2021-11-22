const btn = document.querySelector('.dlej');
const wrapper = document.querySelector('.wrapper');
const header = document.querySelector('header');

function enterSite() {
wrapper.classList.toggle('wrapper');
header.classList.toggle('wrapper');
}

btn.addEventListener('click', enterSite);