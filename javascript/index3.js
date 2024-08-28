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

