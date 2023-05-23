var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
//const pegarValores = (line) => line.split(' ').map(a => Number(a));

let a = Number(lines.shift())
let n = 3.14159
let area = n * (a*a)
console.log(`A=${area.toFixed(4)}`)
