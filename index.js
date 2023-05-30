const progressBar = document.createElement('div')
progressBar.classList.add('scroll-progress-bar')

document.querySelector("#main-body").before(progressBar)

function handleProgressBar(){
    
    let progress = Math.max(0,Math.min(Math.round(window.scrollY/(document.body.clientHeight-window.innerHeight) * 10000),10000))/100
    progressBar.style.setProperty("--_current-progress",`${progress}%`)

}

handleProgressBar()
window.addEventListener('scroll',handleProgressBar)