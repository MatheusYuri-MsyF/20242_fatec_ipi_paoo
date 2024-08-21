const nomes = ['Ana', 'Antonio', 'Alex']

//every 
const resultado = nomes.every(n => n[0] === 'A' || n[0] === 'a')
console.log(resultado) // true

// verifica se pelo menos um começa com A
const resultado2 = nomes.some(n => n[0] === 'A' || n[0] === 'a')
console.log(resultado2)

//reduce
const numeros = [1,2,3,4]
const resultado3 = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual)
console.log(resultado3)

// Funções Regulares e Arrow Functions

// Regular ex:
function hello (){
    console.log('oi')
}
hello()

function hello(nome){
    console.log('Oi, ' + nome)
}
hello('João')

// Arrow ex:
const helloArrow = () => {console.log('Hello')}  // nome = parametro => corpo e return
helloArrow()
const helloNome = nome => console.log('Oi, ' + nome)

const dobro = n => n * 2
console.log(dobro(5))

const ehPar = n => n % 2 === 0 //true or false

//arrow e regular com valor padrao
const triplo = function (n = 5){
    return 3 * n
}