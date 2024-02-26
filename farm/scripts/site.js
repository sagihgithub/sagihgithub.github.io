//set main menu background on scroll
$(function () {
    $(document).on("scroll", function () {
        
        $("#header, #header h5, .portrait-menu-icon").toggleClass('scrolled', $(this).scrollTop() > $("#header").height());
    });
});
//set main menu background on scroll

//fade-in
function reveal() {
    var reveals = document.querySelectorAll(".fade-in-bottom, .fade-in-top");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
//fade-in

function togglePortraitMenu(e) {
    
    if ($('#portrait_menu nav').css('display') == 'none') {        
        $("#portrait_menu nav").css({ "display": "block" });        
    }
    else {        
        $("#portrait_menu nav").css({ "display": "none" });        
    }    
}

function showDrawerMenu() {
    $('.drawer-menu').removeClass('hide-drawer-menu').addClass('show-drawer-menu');
}

function hideDrawerMenu() {
    $('.drawer-menu').removeClass('show-drawer-menu').addClass('hide-drawer-menu');
}
