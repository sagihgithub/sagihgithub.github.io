//set main menu background on scroll
$(function () {
    $(document).scroll(function () {
        //var $nav = $(".fixed-top");
        var $nav = $("#main-menu");
        //$nav.toggleClass('scrolled top-shadow', $(this).scrollTop() > $nav.height());
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
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
