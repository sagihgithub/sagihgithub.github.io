
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
