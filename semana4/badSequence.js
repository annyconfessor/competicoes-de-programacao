// link: https://codeforces.com/problemset/problem/1214/C

const stack = [] // pilha que vai receber os "abre parenteses"

const aux = [] // array auxiliar que vai comparar se os parenteses que temos tem correspondente

let moves = 0 // var que vai conferir a quant de verificacoes

// mock de items com a entrada dos parenteses
const mockItems = [
  {
    id: 1,
    value: '('
  },
  {
    id: 2,
    value: '('
  },
  {
    id: 3,
    value: ')'
  },
  {
    id: 4,
    value: ')'
  }
]

// input para a entrada da sequencia
const InputBracket = () => {
  return(
    <input />
  )
}
