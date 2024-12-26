let swiperBox = document.querySelector('.swiper-box')
let swiperEl = document.querySelectorAll('.swiper-el')
let btnBack = document.getElementById('btnBack')
let btnNext = document.getElementById('btnNext')

let defaultSlide = 0

const showSlide = (index) => {
    const offset = -index * 100;
    swiperBox.style.transform = `translateY(${offset}%)`;
}

const back = () => {
    defaultSlide = (defaultSlide - 1 + swiperEl.length) % swiperEl.length;
    showSlide(defaultSlide)
}

const next = () => {
    defaultSlide = (defaultSlide + 1) % swiperEl.length;
    showSlide(defaultSlide)
}

btnBack.onclick = () => {
    back()
}

btnNext.onclick = () => {
    next()
}


// let time = setTimeout(() => {
//     clearInterval(interval)
// }, 3000)

// clearTimeout(time)


let i = 0;
let interval = setInterval(() => {
    i++
    next()
}, 3000)
