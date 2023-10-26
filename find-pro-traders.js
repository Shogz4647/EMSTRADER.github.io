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
};

// PRO TRADERS SECTION
const copyBtn1 = document.querySelector('.main-body > .master-traders-section > .master-trader-1 > .trader-name > .copy');
copyBtn1.onclick = function(){
    document.querySelector('.copy-btn-pop-up-section-1').classList.add('show')
    document.querySelector('.copy-btn-pop-up-section-1 > .copy-btn-pop-up-1').classList.add('show')
    document.querySelector('body').classList.add('static')
}
const popUpCloseBtn1 = document.querySelector('.copy-btn-pop-up-section-1 > .copy-btn-pop-up-1 > .pop-up-confirm-section > .close');
popUpCloseBtn1.onclick = function(){
    document.querySelector('.copy-btn-pop-up-section-1').classList.remove('show')
    document.querySelector('.copy-btn-pop-up-section-1 > .copy-btn-pop-up-1').classList.remove('show')
    document.querySelector('body').classList.remove('static')
}



const copyBtn2 = document.querySelector('.main-body > .master-traders-section > .master-trader-2 > .trader-name > .copy');
copyBtn2.onclick = function(){
    document.querySelector('.copy-btn-pop-up-section-2').classList.add('show')
    document.querySelector('.copy-btn-pop-up-section-2 > .copy-btn-pop-up-2').classList.add('show')
    document.querySelector('body').classList.add('static')
}
const popUpCloseBtn2 = document.querySelector('.copy-btn-pop-up-section-2 > .copy-btn-pop-up-2 > .pop-up-confirm-section > .close');
popUpCloseBtn2.onclick = function(){
    document.querySelector('.copy-btn-pop-up-section-2').classList.remove('show')
    document.querySelector('.copy-btn-pop-up-section-2 > .copy-btn-pop-up-2').classList.remove('show')
    document.querySelector('body').classList.remove('static')
}




const copyBtn3 = document.querySelector('.main-body > .master-traders-section > .master-trader-3 > .trader-name > .copy');
copyBtn3.onclick = function(){
    document.querySelector('.copy-btn-pop-up-section-3').classList.add('show')
    document.querySelector('.copy-btn-pop-up-section-3 > .copy-btn-pop-up-3').classList.add('show')
    document.querySelector('body').classList.add('static')
}
const popUpCloseBtn3 = document.querySelector('.copy-btn-pop-up-section-3 > .copy-btn-pop-up-3 > .pop-up-confirm-section > .close');
popUpCloseBtn3.onclick = function(){
    document.querySelector('.copy-btn-pop-up-section-3').classList.remove('show')
    document.querySelector('.copy-btn-pop-up-section-3 > .copy-btn-pop-up-3').classList.remove('show')
    document.querySelector('body').classList.remove('static')
}



const copyBtn4 = document.querySelector('.main-body > .master-traders-section > .master-trader-4 > .trader-name > .copy');
copyBtn4.onclick = function(){
    document.querySelector('.copy-btn-pop-up-section-4').classList.add('show')
    document.querySelector('.copy-btn-pop-up-section-4 > .copy-btn-pop-up-4').classList.add('show')
    document.querySelector('body').classList.add('static')
}
const popUpCloseBtn4 = document.querySelector('.copy-btn-pop-up-section-4 > .copy-btn-pop-up-4 > .pop-up-confirm-section > .close');
popUpCloseBtn4.onclick = function(){
    document.querySelector('.copy-btn-pop-up-section-4').classList.remove('show')
    document.querySelector('.copy-btn-pop-up-section-4 > .copy-btn-pop-up-4').classList.remove('show')
    document.querySelector('body').classList.remove('static')
}




const copyBtn5 = document.querySelector('.main-body > .master-traders-section > .master-trader-5 > .trader-name > .copy');
copyBtn5.onclick = function(){
    document.querySelector('.copy-btn-pop-up-section-5').classList.add('show')
    document.querySelector('.copy-btn-pop-up-section-5 > .copy-btn-pop-up-5').classList.add('show')
    document.querySelector('body').classList.add('static')
}
const popUpCloseBtn5 = document.querySelector('.copy-btn-pop-up-section-5 > .copy-btn-pop-up-5 > .pop-up-confirm-section > .close');
popUpCloseBtn5.onclick = function(){
    document.querySelector('.copy-btn-pop-up-section-5').classList.remove('show')
    document.querySelector('.copy-btn-pop-up-section-5 > .copy-btn-pop-up-5').classList.remove('show')
    document.querySelector('body').classList.remove('static')
}


