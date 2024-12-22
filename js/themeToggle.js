// themeToggle.js

// Function to toggle the theme and save it to localStorage
function toggleTheme() {
    let isDarkMode = document.body.classList.contains('theme-dark');
    
    if (isDarkMode) {
        document.body.classList.remove('theme-dark');
        document.body.classList.add('theme-light');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('theme-light');
        document.body.classList.add('theme-dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Function to apply the saved theme when the page loads
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('theme-dark');
        document.body.classList.remove('theme-light');
    } else {
        document.body.classList.add('theme-light');
        document.body.classList.remove('theme-dark');
    }
}

// Add event listener to the toggle switch
document.addEventListener('DOMContentLoaded', function() {
    applySavedTheme(); // Apply saved theme on page load

    const themeToggle = document.getElementById('theme-toggle1');
    themeToggle.addEventListener('change', toggleTheme); // Toggle theme on switch change
});
