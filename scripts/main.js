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

var canvas = document.querySelector('.my_canvas');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0, 0, width, height);

ctx.fillStyle = 'rgb(255, 0, 0)';
ctx.fillRect(50, 50, 100, 100);

ctx.fillStyle = 'rgb(0, 255, 0)';
ctx.fillRect(75, 75, 100, 100);

ctx.translate(width / 2, height / 2);
function degToRad(degrees) {
    return degrees * Math.PI / 180;
}
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + (min);
}
var len = 250;
var move_offset = 20;
for (var i = 0; i < len; ++i) {
    ctx.fillStyle = 'rgba(' + (255 - len) + ', 0, ' + (255 - len) + ', 0.9)';
    ctx.beginPath();
    ctx.moveTo(move_offset, move_offset);
    ctx.lineTo(move_offset + len, move_offset);
    var triHeight = len / 2 * Math.tan(degToRad(60));
    ctx.lineTo(move_offset + (len / 2), move_offset + triHeight);
    ctx.lineTo(move_offset, move_offset);
    ctx.fill();

    len--;
    move_offset += 0.7;
    ctx.rotate(degToRad(5));
}