/* set the width of the sidebar to 100% (show it) */
function openNav() {
    document.getElementById("mySidebar").style.width = "100%";
}

/* set the width of the sidebar to 0% (hide it) */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

function openPortfolio(evt, portfolioName) {
    var i, tabcontent, tablinks;

    // get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(portfolioName).style.display = "block";
    evt.currentTarget.className += " active";
}