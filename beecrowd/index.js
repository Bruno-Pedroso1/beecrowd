var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [a, b, c] = pegarValores(lines.shift())
let raiz = Math.sqrt(Math.pow(b,2)-4*a*c)
let frac = (2*a)
let bhaskara1 = (-b + raiz)/frac
let bhaskara2 = (-b - raiz)/frac

if (raiz < 0){
  console.log("Impossivel calcular")

}if(0 <= raiz && frac >0)  {
  console.log(`R1 = ${bhaskara1.toFixed(5)}`)
  console.log(`R2 = ${bhaskara2.toFixed(5)}`)
}
