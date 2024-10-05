document.querySelectorAll('.menu-item').forEach(function (menu) {
    // Add event listener to the entire menu item, not just the arrow
    menu.addEventListener('click', function (e) {
        e.stopPropagation(); // Stop the event from bubbling up

        // Toggle the active class to expand or collapse the submenu
        menu.classList.toggle('active');

        // Get the next sibling submenu that comes after the menu item
        let submenu = menu.nextElementSibling;

        // Check if the submenu is currently expanded
        if (submenu.style.height && submenu.style.height !== "0px") {
            // If it's already expanded, collapse it
            submenu.style.height = "0px";
        } else {
            // If it's collapsed, set the height to its scrollHeight to expand it
            submenu.style.height = submenu.scrollHeight + "px";
        }
    });

    // Initialize submenu to be collapsed on page load
    let submenu = menu.nextElementSibling;
    if (submenu) {
        submenu.style.height = "0px"; // Ensure submenu starts collapsed
    }
});
