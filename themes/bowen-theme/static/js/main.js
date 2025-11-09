document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    // Toggle nav menu
    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
        this.classList.toggle("active"); // optional: animate hamburger
    });

    // Mobile dropdown toggle
    const dropdownItems = document.querySelectorAll(".nav-item.dropdown > .nav-link");

    dropdownItems.forEach(item => {
        item.addEventListener("click", function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault(); // prevent page jump
                const parentLi = this.parentElement;
                parentLi.classList.toggle("active");
            }
        });
    });
});
