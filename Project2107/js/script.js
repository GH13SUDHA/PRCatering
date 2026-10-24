// PR Catering Services - Accordion Menu

document.addEventListener("DOMContentLoaded", function () {

    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(function (accordion) {

        accordion.addEventListener("click", function () {

            const panel = this.nextElementSibling;

            // Close all other panels
            accordions.forEach(function (item) {

                if (item !== accordion) {
                    item.classList.remove("active");
                    item.nextElementSibling.style.display = "none";
                }

            });

            // Open/Close current panel
            if (panel.style.display === "block") {
                panel.style.display = "none";
                this.classList.remove("active");
            } else {
                panel.style.display = "block";
                this.classList.add("active");
            }

        });

    });

});