// import { cargarDatos } from "./API"
// import data from './data.json'

const video = document.getElementById("video")
const audio = document.getElementById("audio")
const play = document.getElementById("play")
const control = document.getElementById("control")
const backwardSeconds = document.getElementById("backwardSeconds")
const forwardSeconds = document.getElementById("forwardSeconds")
const fullScreen = document.getElementById("fullScreen")
let play_div = document.querySelector('.play_div')
let play_icon_center = document.querySelector('.play_icon_center')
let video_container = document.querySelector('.video-container')

let duration

video.removeAttribute("controls")

video.addEventListener("playing",()=>{
    play_icon_center.style.display = "none"
    video_container.style.filter = 'none'
    // play_icon_center.style.filter = 'none'

})
video.addEventListener("pause",()=>{
    play_icon_center.style.display = "block"
    // video_container.style.filter = 'blur(1px)'
    play_icon_center.style.filter = 'none'


    //agregar un set time out para que desaparezca el icono despues de 1 segundo 

})

video.addEventListener("loadeddata",(event)=>{
    duration = event.target.duration
})

video.addEventListener("timeupdate",(event)=>{
    const percentage = (event.target.currentTime/duration)*100
    control.value = percentage
})

// on input se activa en cada step del range
control.oninput = (event)=>{
    video.currentTime = (duration/100)*event.target.value
}

backwardSeconds.onclick = () =>{
    video.currentTime = video.currentTime-10
}
forwardSeconds.onclick = () =>{
    video.currentTime = video.currentTime+10
}

fullScreen.onclick = ()=>{
    video.requestFullscreen()
}

play_div.addEventListener('click', ()=>{
    // console.log('click')
        if(video.paused){
        video.play()
        play_div.classList.toggle('active')
    }else{
        video.pause()
        play_div.classList.toggle('active')
    }
})


play_icon_center.addEventListener('click', ()=>{
    // console.log('click')
        if(video.paused){
        video.play()
        play_div.classList.toggle('active')
    }else{
        video.pause()
        play_div.classList.toggle('active')
    }
})


