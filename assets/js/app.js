const timeout = 2000;

const video = document.querySelector('video')

const MainText = document.querySelector('h1')
const SubText = document.querySelector('h2')
const link = document.querySelector('.redirect')


// Credits

console.log(`
%cWebsite by Axel Durand%c \n (http://axeldurand.eu/)`,
  'font-family: Helvetica, sans-serif; font-size:20px; color:black;',
  'font-size: 10px;');

// fix vh

const appHeight = () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
}
window.addEventListener('resize', appHeight)
appHeight();

// Check if video is loaded

video.addEventListener('canplay', () => {
    setTimeout(() => {
        video.classList.add('loaded')
        isMobile();
    }, timeout)
})


// Function mouse hover text

function mouseOver() {
    MainText.style.display = "none"
    SubText.style.display = "block"
}

function mouseOut() {
    MainText.style.display = "block"
    SubText.style.display = "none"
}

function isMobile() {

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    
    setTimeout(() => {
        mouseOver();
        console.log('hideonmobile')
    }, timeout)
    
  } else {
    link.addEventListener("mouseover", mouseOver)
    link.addEventListener("mouseout", mouseOut)
  }

}
