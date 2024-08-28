// closures
function ola(){
    let nome = 'joao'
    return function(){
        console.log(`Ola $(nome)`)
    }
}

function eAgora(){
    let cont = 1
    function f1(){
        console.log(cont)
    }
    cont++
    function f2(){
        console.log(cont)
    }
    cont++
    //return{f1,f2}
    return[f1,f2]
}

let funcoes = eAgora()
//funcoes.f1()
//funcoes('f2')()
funcoes[0]()
funcoes[1]()

// Objetos Javascript literais(JSON: Javascript Object Notation) - Cap 2
// pessoa chamada joao com 17 anos

let pessoa = {
    nome : 'joao',
    idade : 17
}

console.log(pessoa.nome)
console.log(pessoa['idade'])

// pessoa chamada maria com 21 anos e mora na rua B, numero 64

let pessoa2 = {
    nome2 : 'maria',
    idade2 : 21,
    endereco : {
        rua : 'Rua B',
        numero : 64
    }
}


console.log (pessoa2['nome2'], pessoa2['idade2'], pessoa2['endereco']['rua'])
console.log(pessoa2.endereco.numero)

// exemplo de forms

let pessoa3 = {
    'Seu nome' : 'Alicia',
}
console.log(pessoa3['Seu nome'])

// concessionária com CNPJ e endereço com rua, numero e bairro. Ela possui alguns carros em estoque.
// cada carro tem marca, modelo e ano de fabricação

let concessionaria = {
    nome3 : 'Ze dos automotivo',
    cnpj : '15.008.005/0001-21',
    endereco2 : {
        rua2 : 'Av.Ricardo Jafet',
        numero2 : ', 51',
        bairro : 'Ipiranga',
    },
    estoque : [
        {   marca: 'Toyota',
            modelo : 'Corolla',
            ano: 2015
        },
        {
            marca: 'VW',
            modelo: 'Gol',
            ano: 2005
        }
    ]

}

// exibir corolla
console.log(concessionaria.estoque[0].modelo) // ou estoque[0]['modelo]

// com for, mostrando o modelo de cada veiculo
// pesquisar sobre for/of no site mdn
for (let veiculo of concessionaria.estoque){
    console.log(veiculo.modelo)
}

// operação somar, que soma dois valores, implementanda com uma arrow function que nao usa return
// operação subtrair, que subtrai dois valores, implementada com uma function regular
let calculadora = {
    somar : (a,b) => a + b,
    subtrair : function(a,b){
        // return a - b;
        return this.somar(a, -b)
    }
}

console.log(calculadora.somar(2, 2))
console.log(calculadora.subtrair(4, 2))