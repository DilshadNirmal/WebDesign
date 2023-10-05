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

// Add click event listener
btn.addEventListener('click', function(event) {
    // console.log('button clicked.');
    event.preventDefault();

    if (isFirefox) {
        docElem.scrollTo(0, 0);
    } else {
        window.scrollTo(0, 0);
    }
} );

/*
*---------------------------------------------------------- 
*   Auto Completion
*---------------------------------------------------------- 
* - Define the variable
* - Focus the input (if you need to...)
*---------------------------------------------------------- 
*/

var targetInput = document.getElementById('contact-country'),
    results = document.getElementById('autocomplete-results'),
    countryList = ['Albania', 'Colombia', 'Cuba', 'El Salvador', 'Jordan', 'Kenya', 'Nepal', 'Romania', 'Sri Lanka', 'Wales'],
    matches = [],
    resultsCursor = 0;

// Focus the input
// targetInput.focus();

// Add event listener for the input keydown
targetInput.addEventListener('keydown', function(event) {
    if (event.code == 'Enter') {
        event.preventDefault();
    }
});

// Add event listener for the input keyup
targetInput.addEventListener('keyup', function(event) {
    /*
    * Key codes
    *
    * Enter: 13
    * Arrow up: 38
    * Arrow down: 40
    */

    results.innerHTML = '';
    toggleResults('hide');

    if (this.value.length > 0) {
        matches = getMatches(this.value);

        if (matches.length > 0) {
            displayMatches(matches);
        }
    }

    if (results.classList.contains('visible')) {
        switch(event.code) {
            case 'Enter':
                targetInput.value = results.children[resultsCursor].innerHTML;
                toggleResults('hide');
                resultsCursor = 0;

                break;
            case 'ArrowUp':
                if (resultsCursor > 0) {
                    resultsCursor--;

                    moveCursor(resultsCursor);
                }

                break;
            case 'ArrowDown':
                if (resultsCursor < (matches.length - 1)) {
                    resultsCursor++;

                    moveCursor(resultsCursor);
                }

                break;
        }
    }
});

// Define a function for checking if the input value matches any of the country names
function getMatches(inputText) {
    var matchList = [];

    for (var i = 0; i < countryList.length; i++) {
        if (countryList[i].toLowerCase().indexOf(inputText.toLowerCase()) != -1) {
            matchList.push(countryList[i]);
        }
    }

    return matchList;
}

// Define a function for displaying autocomplete results
function displayMatches(matchList) {
    var j = 0;

    while (j < matchList.length) {
        results.innerHTML += '<li class="result">' + matchList[j] + '</li>';
        j++;
    }

    // The first child gets a class of "highlighted"
    moveCursor(resultsCursor);

    // Show the results
    toggleResults('show');
}

// Define a function for moving the cursor in the results list
function moveCursor(pos) {
    for (var x = 0; x < results.children.length; x++) {
        results.children[x].classList.remove('highlighted');
    }

    results.children[pos].classList.add('highlighted');
}

// Define a function for toggling the results list
function toggleResults(action) {
    if (action == 'show') {
        results.classList.add('visible');
    } else if (action == 'hide') {
        results.classList.remove('visible');
    }
}