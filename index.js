// FAQ ACCORDION SECTION
const faqAccordionBtn1 = document.querySelector('.faq-accordion-label-btn-1');
faqAccordionBtn1.onclick = function(){
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-1 .faq-accordion-text-1').classList.toggle('show');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-1').classList.toggle('resize');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-1 .faq-accordion-label-btn-1 .faq-accordion-question-1').classList.toggle('active');
}

const faqAccordionBtn2 = document.querySelector('.faq-accordion-label-btn-2');
faqAccordionBtn2.onclick = function(){
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-2 .faq-accordion-text-2').classList.toggle('show');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-2').classList.toggle('resize');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-2 .faq-accordion-label-btn-2 .faq-accordion-question-2').classList.toggle('active');
}

const faqAccordionBtn3 = document.querySelector('.faq-accordion-label-btn-3');
faqAccordionBtn3.onclick = function(){
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-3 .faq-accordion-text-3').classList.toggle('show');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-3').classList.toggle('resize');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-3 .faq-accordion-label-btn-3 .faq-accordion-question-3').classList.toggle('active');
}

const faqAccordionBtn4 = document.querySelector('.faq-accordion-label-btn-4');
faqAccordionBtn4.onclick = function(){
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-4 .faq-accordion-text-4').classList.toggle('show');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-4').classList.toggle('resize');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-4 .faq-accordion-label-btn-4 .faq-accordion-question-4').classList.toggle('active');
}

const faqAccordionBtn5 = document.querySelector('.faq-accordion-label-btn-5');
faqAccordionBtn5.onclick = function(){
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-5 .faq-accordion-text-5').classList.toggle('show');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-5').classList.toggle('resize');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-5 .faq-accordion-label-btn-5 .faq-accordion-question-5').classList.toggle('active');
}
// FAQ ACCORDION SECTION


// SMALL SCREEN NAVLIST
const smallScreenNavTrigger = document.querySelector(' header > nav > .bi-list ');
smallScreenNavTrigger.onclick = function(){
    document.querySelector(' header > .small-screen-nav-list').classList.add('display');
    document.querySelector('body').classList.add('static');
};
const smallScreenNavClear = document.querySelector('header > .small-screen-nav-list > .bi-x-lg');
smallScreenNavClear.onclick = function(){
    document.querySelector(' header > .small-screen-nav-list').classList.remove('display');
    document.querySelector('body').classList.remove('static');
};



const smallScreenMtBtn = document.querySelector(' header > .small-screen-nav-list > ul > li > .small-screen-mirror-trade');
smallScreenMtBtn.onclick = function(){
    document.querySelector('header > .small-screen-nav-list > ul > li > .small-screen-mirror-trade-dropdown').classList.toggle('show');
    document.querySelector('header > .small-screen-nav-list > ul > li > .small-screen-mirror-trade > i').classList.toggle('rotate');
}

const smallScreenPlBtn = document.querySelector(' header > .small-screen-nav-list > ul > li > .small-screen-planning');
smallScreenPlBtn.onclick = function(){
    document.querySelector('header > .small-screen-nav-list > ul > li > .small-screen-planning-dropdown').classList.toggle('show');
    document.querySelector('header > .small-screen-nav-list > ul > li > .small-screen-planning > i').classList.toggle('rotate');
}

const smallScreenAbBtn = document.querySelector(' header > .small-screen-nav-list > ul > li > .small-screen-about');
smallScreenAbBtn.onclick = function(){
    document.querySelector('header > .small-screen-nav-list > ul > li > .small-screen-about-dropdown').classList.toggle('show');
    document.querySelector('header > .small-screen-nav-list > ul > li > .small-screen-about > i').classList.toggle('rotate');

}

