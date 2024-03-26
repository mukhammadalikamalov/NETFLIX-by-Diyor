const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');

searchIcon.addEventListener('click', function () {
    if (searchInput.style.display === 'none') {
        searchInput.style.display = 'block'; // Show the search input
        searchInput.focus(); // Auto-focus on the input when shown
    } else {
        searchInput.style.display = 'none'; // Hide the search input
    }
});

// Get the header element
var header = document.querySelector('.nav');

// Store the initial scroll position
var lastScrollTop = 0;

// Function to handle scroll event
function handleScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add black background to header when scrolling down
    if (scrollTop > lastScrollTop) {
        header.classList.add('nav__black');
    } else {
        // Remove black background when scrolling up
        header.classList.remove('nav__black');
    }

    // Update the last scroll position
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

document.addEventListener("DOMContentLoaded", function () {
    const favElements = document.querySelectorAll('.fav');

    // Add click event listener to each .fav element to toggle animation
    favElements.forEach(function (favElement) {
        favElement.addEventListener('click', function () {
            // Toggle the 'animate' class for this specific favElement
            favElement.classList.toggle('animate');
        });
    });
});
