for(let i=1; i <= 100; i++){
    const box = document.createElement('div')
    box.classList.add('box');
    document.querySelector('.container').appendChild(box);
}
const btn = document.querySelector('btn')
const romdonColorBlock = document.querySelectorAll('.box');

function RandomHexColorCode() {
    var chart = "0123456789abcdef";
    var colorLength = 6;
    var color = "";

    for(var i=0; i<colorLength; i++){
        var randomColor = Math.floor(Math.random() * chart.length);
        color += chart.substring(randomColor, randomColor+1);
    }
    return "#" + color;
}
function addColor() {
    romdonColorBlock.forEach(item => {
        var newcolor = RandomHexColorCode();
        item.style.backgroundColor = newcolor;
        item.innerHTML = newcolor
    })
}