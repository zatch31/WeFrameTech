document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type: 'loop',
        perPage: 5,
        gap: '20px',
        pagination: false,
        breakpoints: {
            1200: { // For screens smaller than 1200px
                perPage: 4,
            },
            992: { // For screens smaller than 992px
                perPage: 3,
            },
            768: { // For screens smaller than 768px
                perPage: 2,
            },
            576: { // For screens smaller than 576px
                perPage: 1,
            },
        }
    }).mount();
    new Splide('#second-slider', {
        type: 'loop',
        perPage: 5,
        gap: '20px',
        pagination: false,
        breakpoints: {
            1200: { // For screens smaller than 1200px
                perPage: 4,
            },
            992: { // For screens smaller than 992px
                perPage: 3,
            },
            768: { // For screens smaller than 768px
                perPage: 2,
            },
            576: { // For screens smaller than 576px
                perPage: 1,
            },
        }
    }).mount();
});

function activeImage(productImage) {
    const activeElement = document.querySelector('.active-image');
    if (activeElement) {
        activeElement.classList.remove('active-image');
    }
    document.getElementById('active-image').src = productImage.src;
    productImage.classList.add('active-image')
}

function counterPlus() {
    let count = parseInt(document.getElementById('count').innerHTML);

        document.getElementById('count').innerHTML = count + 1;
}

function counterMinus() {
    let count = parseInt(document.getElementById('count').innerHTML);
    if (count - 1 < 1) {
        document.getElementById('count').innerHTML = 1;
    } else {
        document.getElementById('count').innerHTML = count - 1;
    }
}
// Select the search bar
const searchBar = document.querySelector('.search-bar');
const input = searchBar.querySelector('input');

// Add focus event listener to expand the search bar
input.addEventListener('focus', () => {
    searchBar.style.width = '300px';
});

// Add blur event listener to collapse the search bar
input.addEventListener('blur', () => {
    searchBar.style.width = '200px';
});
