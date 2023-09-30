// work with menu burger
const overlay = document.querySelector(".js-overlay");
const menu = document.querySelector(".js-menu");
const openMenuBtn = document.querySelector(".js-menu-open");
const closeMenuBtn = document.querySelector(".js-menu-close");

const handleMenuOpen = () => {
    document.body.classList.add("is-menu-open");
    overlay.classList.add("active");
    menu.classList.add("active");
};

const handleMenuClose = () => {
    document.body.classList.remove("is-menu-open");
    overlay.classList.remove("active");
    menu.classList.remove("active");
};

openMenuBtn.addEventListener("click", handleMenuOpen);
closeMenuBtn.addEventListener("click", handleMenuClose);
overlay.addEventListener("click", (event) => {
    if (event.target.classList.contains("overlay")) {
        handleMenuClose();
    } else {
        return;
    }
});

// work with anchors link
function scrollToAnchor(anchorId) {
    const targetElement = document.getElementById(anchorId);
    if (targetElement) {
        const offsetTop = targetElement.offsetTop - 95;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
        });
    }
}

const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const anchorId = this.getAttribute("href").substring(1); 
        scrollToAnchor(anchorId);
        handleMenuClose();
    });
});


// work with swiper
var swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    lazyLoading: true,
});