/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidebar").style.width = "100%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

var lightbox = $('.gallery a').simpleLightbox(options);