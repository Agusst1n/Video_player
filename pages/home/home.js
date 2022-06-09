const icon_menu = document.querySelector('.icon_menu')
const icon_menu2 = document.querySelector('.icon_menu2')
const home_navbar = document.querySelector('.home_navbar')
const videos_div = document.querySelector('.videos_div')

icon_menu.onclick = () => {
    console.log('click')
    home_navbar.classList.toggle('active')
}
icon_menu2.onclick = () => {
    console.log('click')
    home_navbar.classList.toggle('active')
}


//FETCH


const cargarDatos = ()=>{
    fetch('./data.json')
    .then(res => res.json())
    .then(res => {
        let data = res
        console.log(data)

        for(let i = 0; i < data.length; i++){
            //!test


            let video = document.createElement('div')
            let vid = document.createElement('video')
            video.className = 'videos'
            vid.className = 'videos_'

            vid.src = `${data[i].urlMedia}`

            vid.addEventListener('mouseenter', () => {
                vid.play()
                vid.muted = true
                // console.log('ok')
            })
            vid.addEventListener('mouseleave', () => {
                vid.currentTime = 0
                vid.pause()
                // console.log('ok')
            })

            video.appendChild(vid)
            videos_div.appendChild(video)
        }
    })

    
}
cargarDatos()
