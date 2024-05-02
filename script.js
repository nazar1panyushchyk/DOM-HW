// task1
const button = document.querySelector('#buttonClick');
console.log(button);

const input = document.querySelector('#form');
console.log(input);

button.addEventListener('click', function() {
    const newText = input.value;
    button.innerHTML = newText;
})

// task2
const img = document.querySelector('.image')
console.log(img);

const image = document.querySelector('.image');
image.src = './img/planetimg.jpg';

// task3
const link = document.querySelector('.link');
console.log(link);

const ahref = document.querySelector('.link');
ahref.href = 'https://www.w3schools.com/tags/att_a_href.asp';

const picture = document.querySelector('.picture');
console.log(picture);

const pictures = document.querySelector('.picture');
pictures.alt = 'Новий опис зображення';

// task4
const list = document.querySelector('.list');
console.log(list);

const firstElement = document.querySelector('li:first-child');
firstElement.textContent = 'new text';



