// 1. Faça um algoritmo que receba 10 números inteiros e armazene-os em um array.
// Depois armazene em um array PAR todos os números que forem pares, e em um
// array ÍMPAR os que forem ímpares, no final exiba os três vetores.

// let numero: number
// let ArrayNumeros = []
// let ArraysPares = []
// let indexPar = 0
// let ArraysImpares = []
// let indexImpar = 0

// for (let contador = 0; contador < 10; contador++) {
//     numero = parseInt(prompt("Insira um número"))
//     ArrayNumeros.push(numero)

//     if (ArrayNumeros[contador] % 2 == 0) {
//         ArraysPares[indexPar] = ArrayNumeros[contador]
//         indexPar++
//     } else if (ArrayNumeros[contador] % 2 != 0) {
//         ArraysImpares[indexImpar] = ArrayNumeros[contador]
//         indexImpar++
//     }
// }
// console.log(ArrayNumeros)
// console.log(ArraysPares)
// console.log(ArraysImpares)

// 2. Faça um algoritmo com dois arrays A e B e preencha ambos com 10 elementos
// cada. Depois salve em um terceiro array somente os números que estiverem nos
// dois primeiros e forem maiores que 5. Exiba o último array no final.

// Ex.: arrayA[5,6,2,4,8,7,3,6,7,1]
// arrayB[8,5,3,1,4,7,8,2,3,6]
// Deve ser exibido no último array apenas os números arrayC[6,8,8,7,6,7]

// let numeroA: number
// let numeroB: number
// let ArrayNumerosA = []
// let ArrayNumerosB = []
// let ArrayNumerosC = []
// let indexC = 0

// for (let indexAB = 0; indexAB < 10; indexAB++) {
//     numeroA = parseInt(prompt("Insira um número para o Index A"))
//     ArrayNumerosA.push(numeroA)
//     numeroB = parseInt(prompt("Insira um número para o Index B"))
//     ArrayNumerosB.push(numeroB)
// }

// for (let index = 0; index < 10; index++) {
//     for (let index2 = 0; index2 < 10; index2++) {
//         if (ArrayNumerosA[index] == ArrayNumerosB[index2] && ArrayNumerosA[index] > 5) {
//             ArrayNumerosC.push(ArrayNumerosA[index])
//         }
//     }
// }

// console.log(ArrayNumerosA)
// console.log(ArrayNumerosB)
// console.log(ArrayNumerosC)

// 3. Crie uma classe Aluno com as propriedades: nome: string
// idade: number
// altura: number
// sexo: string

// Depois crie um array e preencha-o com alguns objetos da classe Aluno, e crie as
// seguintes funções:

// ● Que exibe quantos alunos com mais de 13 anos tem uma altura menor do
// que a média da altura de todos os alunos;

// ● Que retorne a maior altura entre as mulheres;

// ● Que retorne o nome do aluno mais novo entre os homens;

// ● Que retorne o primeiro Aluno que tiver a idade par ou tiver mais que 1,90 de
// altura.

let Alunos: Aluno[] = []
let qtdeAluno: number
let somaAltura = 0
let mediaAltura = 0

class Aluno {
    Nome: string
    Idade: number
    Altura: number
    Sexo: string

    constructor(nome: string, idade: number, altura: number, sexo: string) {
        this.Nome = nome
        this.Idade = idade
        this.Altura = altura
        this.Sexo = sexo
    }
}

let aluno1 = new Aluno("Francisco", 15, 1.95, "masculino")
Alunos.push(aluno1)

let aluno2 = new Aluno("Isabela", 15, 1.65, "feminino")
Alunos.push(aluno2)

let aluno3 = new Aluno("Gabriel", 14, 1.59, "masculino")
Alunos.push(aluno3)

let aluno4 = new Aluno("Lucas", 16, 1.90, "masculino")
Alunos.push(aluno4)

let aluno5 = new Aluno("Thaires", 15, 1.63, "feminino")
Alunos.push(aluno5)


function ExibirAluno(Alunos: Aluno[]): void {

    for (let index = 0; index < Alunos.length; index++) {
        qtdeAluno = Alunos.length
        somaAltura = somaAltura + Alunos[index].Altura

    }
    mediaAltura = somaAltura / qtdeAluno
    console.log("A média das alturas dos Alunos é: " + mediaAltura)
    for (let index2 = 0; index2 < Alunos.length; index2++) {
        if (Alunos[index2].Idade > 13 && Alunos[index2].Altura < mediaAltura) {
            console.log(Alunos[index2])
        }
    }
}
function MaiorAlturaMulher(Alunos: Aluno[]): number {
    let maiorAltura = 0
    for (let index = 0; index < Alunos.length; index++) {
        if (Alunos[index].Altura > maiorAltura && Alunos[index].Sexo == "feminino") {
            maiorAltura = Alunos[index].Altura
        }
    }
    for (let index = 0; index < Alunos.length; index++) {
        if (Alunos[index].Altura == maiorAltura && Alunos[index].Sexo == "feminino") {
            return Alunos[index].Altura
        }
    }
}
function RetornarAlunoMaisNovo(Alunos: Aluno[]): string {
    let menorIdade = 100
    for (let index = 0; index < Alunos.length; index++) {
        if (Alunos[index].Idade < menorIdade && Alunos[index].Sexo == "masculino") {
            menorIdade = Alunos[index].Idade
        }
    }
    for (let index = 0; index < Alunos.length; index++) {
        if (Alunos[index].Idade == menorIdade && Alunos[index].Sexo == "masculino") {
            return Alunos[index].Nome
        }
    }
}
function RetornarPrimeiroAluno(Alunos: Aluno[]): Aluno {
    for (let index = 0; index < Alunos.length; index++) {
        if (Alunos[index].Idade % 2 == 0 || Alunos[index].Altura > 1.90) {
            return Alunos[index]
        }
    }
}