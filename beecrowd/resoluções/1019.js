var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split("").map(a => Number(a));

let segundos = Number(lines.shift())

let horas = Math.floor(segundos / 3600);
segundos %= 3600;
let minutos = Math.floor(segundos / 60);
segundos %= 60;

console.log(`${horas}:${minutos}:${segundos}`);