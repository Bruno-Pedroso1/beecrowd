var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split(' ').map(a => Number(a));

let a = Number(lines.shift())
let b = Number(lines.shift())
let media = (a*3.5 + b*7.5)/11
console.log(`MEDIA = ${media.toFixed(5)}`)
