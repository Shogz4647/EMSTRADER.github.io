// PRELOADER
const Interval = function(){
    const preLoader = document.getElementById('preloader');
    preLoader.classList.add('interval');
};
window.addEventListener('load', Interval);

const username = document.querySelector('#username');
const fullname = document.querySelector('#full-name');
const email = document.querySelector('#email');
const email2 = document.querySelector('#email2');
const password = document.querySelector('#password');
const formBtn = document.querySelector('#form-btn');
