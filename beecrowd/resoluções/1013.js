var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(' ').map(a => Number(a));

let [a, b, c] = pegarValores(lines.shift());
let maiorAB = (a + b + Math.abs(a - b))/2
let maior = (maiorAB + c + Math.abs(maiorAB - c))/2
console.log(`${maior} eh o maior`)