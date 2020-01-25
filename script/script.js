var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider__context");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
};

$(document).ready(function () {
    $("#monthly").click(function () {
        $(".kind__suitable").show();
        $(".kind__suitable__2").hide();
        $(".kind__suitable__3").hide();
    })
    $("#quartarly").click(function () {
        $(".kind__suitable__2").show();
        $(".kind__suitable").hide();
        $(".kind__suitable__3").hide();
    })
    $("#yearly").click(function () {
        $(".kind__suitable__3").show();
        $(".kind__suitable").hide();
        $(".kind__suitable__2").hide();
    }) 
})
