/*
*---------------------------------------------------------- 
*   Scroll To Top
*---------------------------------------------------------- 
* - Define variable
* - Calculate thè document height and set the offset to a quarter of that value
* - Add event listeners for scroll and click
*---------------------------------------------------------- 
*/

let btn = document.getElementById('back-2-top'),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos, docHeight;

// Calculate the document height
/*
*   Note: 
*   firefox and webkit returns the document height differently. 
*/

docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.scrollHeight, docElem.offsetHeight, docElem.clientHeight);

if (docElem !== 'undefined') {
    offset = docElem / 4;
}

// Add scroll event listener
window.addEventListener('scroll', function(event) {
    // console.log('scrolling..');
    scrollPos = body.scrollTop || docElem.scrollTop;
    btn.className = (scrollPos > offset) ? 'visible' : '';
});