let tempo = Number(lines.shift())
let velocidade = Number(lines.shift())
let distancia = tempo*velocidade
let kml = distancia/12
console.log(kml.toFixed(3))
