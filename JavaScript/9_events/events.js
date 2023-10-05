document.addEventListener('DOMContentLoaded', function() {
    console.log('the dom has been loaded');
});

var submitBtn = document.getElementById('submitBtn'),
    links = document.querySelector('.links');

submitBtn.addEventListener('click', function(event){
    console.log('button clicked');
});

links.addEventListener('mouseenter', mouseEneter);

function mouseEneter() {
    console.log('mouse entered');
    links.removeEventListener('mouseenter', mouseEneter);
}

document.addEventListener('keypress', function(event){
    console.log(event.key);
});