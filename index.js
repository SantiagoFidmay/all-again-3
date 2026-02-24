import Pizza from "./models/Pizza.js";
import Receita from "./models/Receita.js";

//1. Usuário define o tamanho da pizza
const tamanho = new Pizza(35, 0.5)
const pesoPizza = tamanho.getPesoUnitario()

console.log(`O peso da pizza é: `,pesoPizza.toFixed(2),`g`)

//2. Verificar produção
const receita = new Receita()

const qtdeIngredientes = receita.calcularQtdeIngredientes()
const qtdePizza = receita.calcularQtdePizza(pesoPizza)

console.log(`A quantidade de pizza M é: ${qtdePizza}`)
console.log(`-------------- Quantidade de ingredientes ----------------`)
console.table(qtdeIngredientes)