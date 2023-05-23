var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split(' ').map(a => Number(a));

let a = lines.shift()
let b = Number(lines.shift())
let c = Number(lines.shift())

let total = (b + c*0.15)
console.log(`TOTAL = R$ ${total.toFixed(2)}`)