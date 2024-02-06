// Getting references to the HTML elements
let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

// Adding a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Getting the current scroll position
    let value = window.scrollY;

    // Adjusting the marginTop of the text element based on the scroll position
    text.style.marginTop = value * 2.5 + 'px';

    // Adjusting the top and left positions of the leaf element for a parallax effect
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';

    // Adjusting the left positions of hill5 and hill4 for a parallax effect
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';

    // Adjusting the top position of hill1 for a parallax effect
    hill1.style.top = value * 1 + 'px';
});
