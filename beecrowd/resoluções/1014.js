var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split(' ').map(a => Number(a));

let a = Number(lines.shift())
let b = Number(lines.shift())
let kml = a/b
console.log(`${kml.toFixed(3)} km/l`)