/*Меню бургер*/

document.addEventListener("DOMContentLoaded", function () {
    const iconMenu = document.querySelector('.header_burger');
    const headerMenu = document.querySelector('.header_menu');
    if (iconMenu) {
        iconMenu.addEventListener("click", function (e) {
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            headerMenu.classList.toggle('_active');
        });
    }


    /*Прокрутка при клике*/

    const menuLinks = document.querySelectorAll(".navigation[data-goto]");
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

                /*Закрытие меню*/
                if (iconMenu.classList.contains('_active')) {
                    document.body.classList.remove('_lock');
                    iconMenu.classList.remove('_active');
                    headerMenu.classList.remove('_active');
                }

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                });
                e.preventDefault();
            }
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function () {
        window.location.href = "recording.html";
    });
});