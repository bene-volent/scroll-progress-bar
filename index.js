const progressBar = document.querySelector(".scroll-progress-bar")


window.addEventListener('scroll',()=>{
    let progress = Math.round(window.scrollY/(document.body.clientHeight-window.innerHeight) * 10000)/100
    console.log(progress)
    progressBar.style.setProperty("--_current-progress",`${progress}%`)

})