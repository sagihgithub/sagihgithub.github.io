
//set main menu background on scroll
$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
//set main menu background on scroll

//FAQ
function toggleAccordion(elm) {
    let items = document.querySelectorAll(".accordion button");
    let itemToggle = elm.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        elm.setAttribute('aria-expanded', 'true');
    }
}
//FAQ
