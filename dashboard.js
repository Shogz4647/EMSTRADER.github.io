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

// REFER US
const referBtn = document.querySelector('.main-body > .refer-us-section > .refer-us-input > button');
referBtn.onclick = function(){
   referBtn.classList.add('copied');
   const referInput = document.querySelector('.refer-input-text');
   referInput.select();
   document.execCommand('copy');
   window.getSelection().removeAllRanges();
   
   setTimeout(function(){
    referBtn.classList.remove('copied');
   }, 2500);
};