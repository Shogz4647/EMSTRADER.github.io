const usernameBtn = document.querySelector('nav > .nav-btns > .profile ');
usernameBtn.onclick = function(){
    document.querySelector('nav > .nav-btns > .profile > .profile-name > .bi-chevron-down').classList.toggle('rotate')
    document.querySelector('.main-body > .profile-dropdown').classList.toggle('show')
}
// PRELOADER
const Interval = function(){
    const preLoader = document.getElementById('preloader');
    preLoader.classList.add('interval');
};
window.addEventListener('load', Interval);

// SIDEBAR
const navBtn = document.querySelector('nav > .bi-list');
const navClear = document.querySelector('.sidebar > .bi-x-lg');
navBtn.onclick = function(){
    document.querySelector('.sidebar').classList.add('show');
}
navClear.onclick = function(){
    document.querySelector('.sidebar').classList.remove('show');
}
