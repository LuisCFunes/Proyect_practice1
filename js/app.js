//video
const videoplayer = document.querySelector('.video_content');
const video = videoplayer.querySelector('.video_play');
const playbutton = videoplayer.querySelector('.play_btn');


playbutton.addEventListener("click", () => {
    if (video.paused) {
        playbutton.className = 'pause_btn';
        document.getElementById('img_btn')
            .src = "../images/pause-solid.svg";
        video.play()
    } else {
        playbutton.className = 'play_btn';
        document.getElementById('img_btn')
            .src = "../images/play-solid.svg";
        video.pause()
    }
})

//slider
var container_slider = document.querySelector('.slider'),
    btn_left = document.getElementById("btn_left"),
    btn_right = document.getElementById("btn_right");

btn_right.addEventListener("click", function () {
    container_slider.scrollLeft += container_slider.offsetWidth;
});

btn_left.addEventListener("click", function () {
    container_slider.scrollLeft -= container_slider.offsetWidth;
});


//form validation

var form = document.getElementById("form");
function validate(e) {
    var inputName = document.getElementById('name'),
        inputEmail = document.getElementById('email'),
        inputTitle = document.getElementById('title'),
        inputComents = document.getElementById('comments');
    alertSuccess = document.getElementById("alertSuccess"),
        alertError = document.getElementById("alertError");

    if (inputName.value == 0 || inputEmail.value == 0 || inputTitle.value == 0 || inputComents.value == 0) {
        e.preventDefault();
        alertError.classList.remove("hide");
        alertError.classList.add("show");

        setTimeout(function () {
            alertError.classList.remove("show");
            alertError.classList.add("hide");
        }, 2000);
    } else {
        e.preventDefault();
        alertSuccess.classList.remove("hide");
        alertSuccess.classList.add("show");

        setTimeout(function () {
            alertSuccess.classList.remove("show");
            alertSuccess.classList.add("hide");
        }, 2000);
        inputName.value = "";
        inputEmail.value = "";
        inputTitle.value = "";
        inputComents.value = "";
    }

}

form.addEventListener("submit", validate);

//menu responsive
var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar"),
    enlaces = document.getElementById("navbar");

// Click abrir
btnMenuOpen.addEventListener("click", function () {
    menuResponsive.classList.add("active");
});

// Click cerrar
btnMenuClose.addEventListener("click", function () {
    menuResponsive.classList.remove("active");
});

// Cerrar menu con elementos de enlace
enlaces.addEventListener("click", function () {
    menuResponsive.style.transitionDelay = "0.5s";
    menuResponsive.classList.remove("active");
});