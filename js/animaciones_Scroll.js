const items = document.querySelectorAll(".animacion_scroll")

document.addEventListener("scroll", function () {
    for (i = 0; i < items.length; i++) {
        if (items[i].getBoundingClientRect().top < 600) {
            items[i].style.opacity = "1";
            items[i].style.transform = "translateX(0px)";
        }
    }

});