/*
*---------------------------------------------------------- 
*   Scroll To Top
*---------------------------------------------------------- 
* - Define variable
* - Calculate thè document height and set the offset to a quarter of that value
* - Add event listeners for scroll and click
*---------------------------------------------------------- 
*/

var btn = document.getElementById('back-to-top'),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos, docHeight,
    isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

// Calculate the document height
/*
*   Note: 
*   firefox and webkit returns the document height differently. 
*/
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);

if (docElem !== 'undefined') {
    offset = docHeight / 4;
}

// Add scroll event listener
window.addEventListener('scroll', function(event) {
    // console.log('scrolling..');
    scrollPos = body.scrollTop || docElem.scrollTop;
    btn.className = (scrollPos > offset) ? 'visible' : '';
});