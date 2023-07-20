const button = document.querySelector("button");
const body = document.querySelector("body");
const colors = [
    'voilet',
    'indigo',
    'blue',
    'green',
    'yellow',
    'orange',
    'red',
    'black',
    'white',
    'palegreen'
]
body.style.backgroundColor = 'palegreen';
document.addEventListener('click', function(){
    const colIndex = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colIndex];

});
