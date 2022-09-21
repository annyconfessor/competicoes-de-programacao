// link: https://cses.fi/problemset/task/2216
// se a posicao do item > posicao do anterior, entao vou precisar de mais uma rodada
// rodadas sao as quantidades de vezes que eu preciso percorrer o vetor para ir colocando cada item do vetor em ordem crescente
// da p fazer com um map comparando se a chave do proximo vetor eh menor ou maior
// eh uma solucao linear

const n = [2, 3, 5, 6, 7, 0]

const res = n.forEach((item) => {
  let aux
  aux = item
  console.log('aux', aux)
  return aux
})

const result = res.map()

return res