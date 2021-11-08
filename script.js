const num = document.querySelector('#text')
const container = document.querySelector('.container')
const countdown_container = document.querySelector('.countdown-container')
const btn = document.querySelector('.btn')

let count = +3

let interval = setInterval(changeNum, 800)

function changeNum() {
    num.innerHTML = count
    if(num.innerHTML < 0) {
        count = num.innerHTML = 3
        container.classList.remove('hidden')
        setInterval(() => container.classList.add('scaleUp'), 0)
        countdown_container.classList.add('hidden')
        clearInterval(interval)
    }
    count --
}

btn.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(changeNum, 800)
    container.classList.add('hidden')
    setInterval(() => container.classList.add('scaleUp'), 0)
    countdown_container.classList.remove('hidden')
})