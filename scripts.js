let time = 5000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img"),
    max = images.length;


function nextImage(){
    //0 console.log(images)

    //4
        // images[currentImageIndex].classList.remove("selected")
        images[currentImageIndex].classList.remove("selected", "animated", "fadeInLeft")
    //2
        currentImageIndex++
    //3
        if(currentImageIndex >= max)
            currentImageIndex = 0
                
    //1
    // images[currentImageIndex].classList.add("selected","animate__animated","animate__fadeInLeft")
    images[currentImageIndex].classList.add("selected","animated","fadeInLeft")
}    

function start() {
    // console.log("window loaded")
    setInterval( () => {
        // console.log("funcao rodada")
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)