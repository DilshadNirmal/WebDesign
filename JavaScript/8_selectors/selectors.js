let firstItem = document.getElementById('text-1'),
    myList = document.getElementsByClassName('mylist'),
    paragraphs = document.getElementsByTagName('p'),
    images = document.querySelectorAll('img'); 

console.log(images);

firstItem.style.color = 'red';

myList[1].style.display = 'none';

for (let index = 0; index < paragraphs.length; index++) {
    paragraphs[index].style.color = 'blue';
}

