// SHOW Menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
const navLink = document.querySelectorAll('.nav__link')

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
})

function linkAction() {
    navMenu.classList.remove('show-menu');

}
navLink.forEach(e => {
    e.addEventListener('click', linkAction);
})

//hiển thị màu khi kéo scroll trên header
function scrollHeader() {
    const header = document.getElementById('header')
    if(this.scrollY >= 100) {
        header.classList.add('scroll-header')
    }else {
        header.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll', scrollHeader)


// Swiper

// let swiper = new Swiper(".discover__container", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     loop: true,
//     spaceBetween: 32,
//     coverflowEffect: {
//         rotate: 0,
//     },
// })
var swiper = new Swiper(".discover__container", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// VIDEO
const videoFile = document.getElementById('video-file')
const videoButton = document.getElementById('video-button')
const videoIcon = document.getElementById('video-icon')
const video = document.querySelector('.video')



function runVideo() {
    if(videoFile.paused) {
        videoFile.play();
        video.classList.add('playing');
    }else {
        videoFile.pause();
        video.classList.remove('playing');
    }
}

function finalVideo() {
    // video.classList.remove('playing');
    videoFile.play();
}

videoButton.addEventListener('click', runVideo);
videoFile.addEventListener('ended', finalVideo);

// Scroll Up
const showScroll = document.querySelector('.scrollup');
function ShowScroll() {
    if(this.scrollY > 200) {
        showScroll.classList.add('show-scroll')
    }else {
        showScroll.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', ShowScroll)


//Scroll section active  (nghĩa là kéo đến phần nào thì hiển thị sáng phần đó)

const sections = document.querySelectorAll('section[id]');

function sectionActive() {
    const scrollY = window.pageYOffset
    
    sections.forEach(current => {
        const scrollTop = current.offsetTop
        const scrollHeight = current.offsetHeight
        const sectionId = current.getAttribute('id')
        if(scrollY > scrollTop && scrollY <= scrollTop + scrollHeight) {
            document.querySelector(`.nav__menu a[href*=${sectionId}`).classList.add('active-link')
        }else {
            document.querySelector(`.nav__menu a[href*=${sectionId}`).classList.remove('active-link')

        }
    })
}

window.addEventListener('scroll', sectionActive);

//Light-dark
var test = false;
const navMenuClass = document.querySelector('.nav__menu')
const navDark = document.querySelector('.nav__dark')
function darkLight () {

    // isMoon = !isMoon;
    // if(isMoon) {
    //     isSun = true;
    // }else {
    //     isSun = false;
    // }
    // if(isMoon) {
    //     navMenuClass.classList.toggle('playing',isMoon);
    //     document.body.classList.add('dark-theme')
    // }
    // else if(!isSun) {
    //     document.body.classList.remove('dark-theme',isSun);
    // }
    
    test = !test;
    navMenuClass.classList.toggle('playing',test);
    if(test) {
        document.body.classList.add('dark-theme')
    }
    else  {
        document.body.classList.remove('dark-theme',test);
    }


    // const themeButton = document.getElementById('theme-button')
    // const darkTheme = 'dark-theme'
    // const iconTheme = 'ri-sun-line'

    // // Previously selected topic (if user selected)
    // const selectedTheme = localStorage.getItem('selected-theme')
    // const selectedIcon = localStorage.getItem('selected-icon')

    // // We obtain the current theme that the interface has by validating the dark-theme class
    // const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    // const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

    // // We validate if the user previously chose a topic
    // if (selectedTheme) {
    // // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    // document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    // themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
    // }

    // // Activate / deactivate the theme manually with the button
    // themeButton.addEventListener('click', () => {
    //     // Add or remove the dark / icon theme
    //     document.body.classList.toggle(darkTheme)
    //     themeButton.classList.toggle(iconTheme)
    //     // We save the theme and the current icon that the user chose
    //     localStorage.setItem('selected-theme', getCurrentTheme())
    //     localStorage.setItem('selected-icon', getCurrentIcon())
    // })
    
}
navDark.addEventListener('click', darkLight)


const sr = ScrollReveal ({
    distance: '60px',
    duration: 2800,
    // reset: true,
})
sr.reveal(`.home__data, .home__social-link, .home__ifo,
        .discover__container, .experience__data, .experience__overlay, .place__card,
        .sponsor__content, .footer__data, .footer__rights`, {
    origin: 'top',
    interval: 100,
})
sr.reveal(`.about__data, .video__description, .subscribe__description`, {
    origin: 'left',
})
sr.reveal(`.about__img-overlay, .video__content, .subscribe__form`, {
    origin: 'right',
    interval: 100,
})
