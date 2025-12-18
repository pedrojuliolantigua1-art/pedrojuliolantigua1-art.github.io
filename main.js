const main_img = document.querySelector('.main_img')
const thumbnails1 = document.querySelectorAll('.thumbnail1')
const thumbnails2 = document.querySelectorAll('.thumbnail2')
const thumbnails3 = document.querySelectorAll('.thumbnail3')
const thumbnails4 = document.querySelectorAll('.thumbnail4')

//Este javascript es el del cambio de las imagenes cada Thumbnail es lo que permite que funcionen simplemente cambia la imagen de cada uno
//en la parte de abajo donde dice main_img.src = "Aqui pones la imagen que va al dar clic a ese boton"
thumbnails1.forEach(thumb => {
    thumb.addEventListener('click', function(){
        const active = document.querySelector('.active')
        active.classList.remove('active')
        thumb.classList.add('active')
        main_img.src  = "./victoria-secret.mp4"
    })
})

thumbnails2.forEach(thumb => {
    thumb.addEventListener('click', function(){
        const active = document.querySelector('.active')
        active.classList.remove('active')
        thumb.classList.add('active')
        main_img.src = "./lorealvid.mp4"
    })
})

thumbnails3.forEach(thumb => {
    thumb.addEventListener('click', function(){
        const active = document.querySelector('.active')
        active.classList.remove('active')
        thumb.classList.add('active')
        main_img.src = "./Mac.mp4";
    })
})

thumbnails4.forEach(thumb => {
    thumb.addEventListener('click', function(){
        const active = document.querySelector('.active')
        active.classList.remove('active')
        thumb.classList.add('active')
        main_img.src = "./maybellinevid.mp4"
    })

})



