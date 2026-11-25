document.addEventListener("DOMContentLoaded", function () {

    // Display Today's Date Automatically
    const dateElement = document.querySelector(".date-text");

    if (dateElement) {
        const today = new Date();

        const options = {
            day: "numeric",
            month: "long",
            year: "numeric"
        };

        const formattedDate = today.toLocaleDateString(
            "en-IN",
            options
        );

        dateElement.innerHTML =
            "<b>Today's Date:</b> " + formattedDate;
    }

    // Welcome Message
    console.log("Welcome to Shriraksha's Personal Website!");

    // Smooth Scrolling
    document.documentElement.style.scrollBehavior = "smooth";

    // Navigation Link Handling
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.removeAttribute("aria-current");
            });

            link.setAttribute("aria-current", "page");
        });
    });

});
