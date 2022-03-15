let head = document.querySelector('h1');
head.textContent = 'Hello world!';

let image = document.querySelector('img');

let next = new Map([['images/firefox-icon.png', 'images/youmu.jpg'], ['images/youmu.jpg', 'images/firefox-icon.png']]);
image.onclick = function () {
    let src = image.getAttribute('src');
    image.setAttribute('src', next[src]);
}


function setUserName() {
    let name = prompt('input user name');
    if (name === null || name === '') {
        setUserName();
    }
    else {
        localStorage.setItem('name', name);
        head.textContent = 'Hello ' + name;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    head.textContent = 'Hello ' + localStorage.getItem('name');
}

let button = document.querySelector('button')
button.onclick = function () {
    setUserName();
};