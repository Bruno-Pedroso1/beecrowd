var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(' ').map(a => Number(a));


let [primeiro, segundo, terceiro] = pegarValores(lines.shift())
let [quarto, quinto, sexto] = pegarValores(lines.shift())
let primeiraCompra = segundo*terceiro
let segundaCompra = quinto*sexto
let total = primeiraCompra+segundaCompra
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)