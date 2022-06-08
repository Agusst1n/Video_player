const more_videos = document.querySelector('.more_videos')
const cargarDatos = ()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(res => {
        let data = res
        console.log(data)

        for(let i = 0; i < data.length; i++){
            //!test

            let vid = document.createElement('video')
            vid.src = `${data[i].urlMedia}`
            vid.classList = 'vid'

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



            //creacion de elementos
            let other_videos = document.createElement('div')
            let miniauture_contain = document.createElement('div')
            let miniauture = document.createElement('img')
            let title_contain = document.createElement('div')
            let title_video = document.createElement('h4')
            let channel = document.createElement('p')
            let view = document.createElement('p')

            //colocacion de calses o archivos
            other_videos.className = 'other_videos'
            title_contain.classList = 'title_contain'
            miniauture_contain.className = 'miniauture_contain'
            miniauture.className = 'miniauture'
            view.className = 'view'
            view.textContent = `${data[i].views} views`
            channel.className = 'channel_name'
            channel.textContent = `${data[i].channel}`
            title_video.textContent = `${data[i].title}`
            miniauture.src = `${data[i].miniature}`

            //agregandolo a sus respectivos padres
            title_contain.appendChild(title_video)
            title_contain.appendChild(channel)
            title_contain.appendChild(view)
            miniauture_contain.appendChild(vid)
            other_videos.appendChild(miniauture_contain)
            other_videos.appendChild(title_contain)
            more_videos.appendChild(other_videos)
        }
    })

    
}
cargarDatos()


