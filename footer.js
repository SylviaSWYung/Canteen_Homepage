// navigation.js

// Function to toggle the visibility of submenus
function toggleSubmenu(event) {
    const parentNavItem = event.target.closest('li');
    const submenu = parentNavItem.querySelector('ul');

    if (submenu) {
        submenu.classList.toggle('show');
    }
}

// Add event listeners to navigation items
const navItems = document.querySelectorAll('li[part="nav-item"]');
navItems.forEach(item => {
    item.addEventListener('click', toggleSubmenu);
});
