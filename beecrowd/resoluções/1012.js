var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(' ').map(a => Number(a));


let [primeiro, segundo, terceiro] = pegarValores(lines.shift())
let retangulo = primeiro*segundo
let pi = 3.14159
let circulo = pi*(terceiro*terceiro)
let quadrado = segundo*segundo
let triangulo = (primeiro*(terceiro/2))
let trapezio = ((primeiro+segundo)/2) * terceiro
console.log(`TRIANGULO: ${triangulo.toFixed(3)}`)
console.log(`CIRCULO: ${circulo.toFixed(3)}`)
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`)
console.log(`QUADRADO: ${quadrado.toFixed(3)}`)
console.log(`RETANGULO: ${retangulo.toFixed(3)}`)
