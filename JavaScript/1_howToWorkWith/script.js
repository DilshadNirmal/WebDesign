let submitBtn = document.getElementById('submitBtn'),
    links = document.querySelector('.links'),
    h1 = document.querySelector('h1');

submitBtn.addEventListener('click', function(event) {
    alert('i have been clicked');
});


links.addEventListener('mouseenter', mouseEnter);

function mouseEnter() {
    console.log('the mouse entered the links');
    links.removeEventListener('mouseenter', mouseEnter);
}

h1.addEventListener('mouseover', () => {
    h1.style.color = 'red';
});

document.addEventListener('keyup', whatKeyPressed);

function whatKeyPressed(event) {
    console.log(event.code);
}

document.addEventListener('DOMContentLoaded', (e) => console.log('dom content loaded perfectly'));