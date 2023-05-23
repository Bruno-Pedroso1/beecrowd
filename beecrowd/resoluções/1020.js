var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split("").map(a => Number(a));

let dias = Number(lines.shift())

let ano = Math.floor(dias / 365);
dias %= 365;
let mes = Math.floor(dias / 30);
dias %= 30;

console.log(`${ano} ano(s)`)
console.log(`${mes} mes(es)`)
console.log(`${dias} dia(s)`)