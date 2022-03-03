let head = document.querySelector('h1');
head.textContent = 'Hello world!';

let image = document.querySelector('img');

let next = new Map([['images/firefox-icon.png', 'images/youmu.jpg'], ['images/youmu.jpg', 'images/firefox-icon.png']]);
image.onclick = function () {
    let src = image.getAttribute('src');
    image.setAttribute('src', next[src]);
}