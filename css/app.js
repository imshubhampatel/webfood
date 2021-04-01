$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});
function onMyClick() {
    const hemburger = document.getElementById('hemburger');
    const items = document.getElementById('menu-item');
    const menuColor = document.getElementById('nav-container');
    hemburger.classList.toggle('change');
    menuColor.classList.toggle('change-bg');
    items.classList.toggle('remove');

}

let body = document.body;
body.addEventListener("onclick", () => {
    console.log('recommended Desktop site');
})