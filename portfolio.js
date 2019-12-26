var $ = function(id) {
    return document.getElementById(id);
};

/* set the width of the sidebar to 100% (show it) */
function openNav() {
    $("mySidebar").style.width = "100%";
}

/* set the width of the sidebar to 0% (hide it) */
function closeNav() {
    $("mySidebar").style.width = "0";
}