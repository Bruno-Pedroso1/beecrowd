var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split("").map(a => Number(a));

let a = Number(lines.shift())
console.log(`${a*2} minutos`)