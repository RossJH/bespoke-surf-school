/* --------  Open/close Menu --------*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/* --------  Remove Menu Mobile  --------*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //when clicking on each nav link we remove the show menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/* --------  Change Background Header Color on Scroll --------*/
function scrollHeader() {
    const header = document.getElementById('header')
    /* when scroll is grwater than 100 viewport height add */
    if (this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)


/* --------  Image swipe carousel--------*/
var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


/*
/* --------  Video ----- couldnt make it work on mobile. 

const videoFile = document.getElementById('video-file'),
    videoButton = document.getElementById('video-button'),
    videoIcon = document.getElementById('video-icon')

function playPause() {
    if (videoFile.paused) {
        //Play video
        videoFile.play()
        //we change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-fill')
    } else {
        //Pause video
        videoFile.pause()

        //We change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-fill')
    }
}

videoButton.addEventListener('click', playPause)

function finalVideo() {
    //Videoends icon changes back to play.
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-fill')
}
//ended when the video ends
videoFile.addEventListener('ended', finalVideo)*/




/* --------  ScrollUp Section Show Btn on Scroll --------*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    //when the scroll is higher than 560viewport height remove. 
    if (this.scrollY >= 100) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp)


/* --------  ScrollUp Section Active Link --------*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/* --------  Dark / Light Theme --------*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//Previosly selected type (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//Obtain current theme that the interface has by validating the dark theme class.
const getCurrentTheme = () => document.body.classList.contains('darkTheme') ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains('iconTheme') ? 'ri-moon-fill' : 'ri-sun-line'


//Validate if the user previously chose a type
if (selectedTheme) {
    //If the valiation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme. 
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme)
}

//Activate / deactivate the theme manually with the button 
themeButton.addEventListener('click', () => {
    //add or remove the dark / icon theme 
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //Save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon)
})


/* --------  Accordion FAQ Page --------*/
const accordion = document.getElementsByClassName('container-faq');

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}