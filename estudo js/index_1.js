// if
// switch case
// ? : 

// const x = 4

// if (x > 4) {
//     console.log(x)
// } else if (x === 4 ) {
//     console.log("Igual a 4")
// } else {
//     console.log("Menor que 4")
// }

// switch (8) {
//     case 3:
//         console.log("É 3")
//         break;
//     case 8 :
//         console.log("É 8")
//     case 7:
//         console.log("7")
//     default:
//         console.log("Nenhum hein")
// }

// const x = 4
// const y = x > 4 ? "maior que 4" : "menor ou igual a 4"
// const z = x > 4 ? 
//     "maior que 4" : 
//     x === 4 ? 
//         "Igual a 4" : 
//         "menor"
// //condição ? valor_Se_verdadeiro : valor_se_falso
// console.log(z)

// for - while - do while


// for (declaração; condição de execução; atribuição) {}
// for (let i = 0; i < 10; i += 1) {
//         console.log(i)
//     }
    
// for (x of [5, 2, 3]) {
//     console.log(x)
// }

const obj = {
    name: "Otávio",
    idade: 4,
    email: "oscandido10@gmail.com"
}

for (y in obj) {
    console.log(obj.name)
}

console.log(Object.entries(obj))

x = 1
while (x === 1){
    console.log("kkkk")
}

do {
    var x = 4
    console.log(x)
    if (x == 1)
        break
    x += 1
} while (x != 1)

do {
    var x = 4
    console.log(x)
    if (x == 1)
continue    
    x -= 1
} while (x != 1)

/*
                                            variaveis

var: declara uma variável global ou local de escopo da função, opcionalmente inicializando-a com um valor.
let: declara uma variável local de escopo do bloco, opcionalmente inicializando-a com um valor.
const: declara uma constante local de escopo do bloco, apenas de leitura.
*/

/*
                                              do

Uma forma simples e engraçada de explicar o “do” do JavaScript é imaginar que
ele é um amigo insistente que quer te convencer a fazer alguma coisa. Por exemplo:
*/

//__________________________________________________________

// Você não quer ir ao cinema, mas o seu amigo "do" insiste
do {
    console.log("Vamos ao cinema, vai ser divertido!");
  } while (vontadeDeIrAoCinema == false); // Enquanto você não quiser ir, ele vai repetir a frase
  
  // Você quer comer pizza, mas o seu amigo "do" quer te levar para um restaurante japonês
  do {
    console.log("Vamos comer sushi, é muito bom!");
  } while (preferenciaPorPizza == true); // Enquanto você preferir pizza, ele vai repetir a frase


// ________________________________________________________


// Você tem zero reais na carteira, mas quer comprar um sorvete
var dinheiro = 0;
var sorvete = 5;

// Usando o laço while, você não vai nem tentar comprar o sorvete, pois a condição é falsa
while (dinheiro >= sorvete) {
  console.log("Comprando um sorvete...");
  dinheiro -= sorvete;
}

// Usando o laço do...while, você vai tentar comprar o sorvete pelo menos uma vez, mesmo que a condição seja falsa
do {
  console.log("Tentando comprar um sorvete...");
  dinheiro -= sorvete;
} while (dinheiro >= sorvete);

//__________________________________________________________

/*
                                                        funçoes

Uma function é uma forma de criar um pedaço de código que pode ser usado várias vezes (msm coisa q vimos com ciro 
em python) Por exemplo:
*/

// Uma function que soma dois números
function somar(a, b) {
    return a + b;
  }

// Declarar uma constante chamada pi e guardar o valor 3.14 nela
const pi = 3.14;

//__________________________________________________________


// arrow function é uma forma "simplificada"

// Uma arrow function que recebe dois parâmetros e retorna a soma deles
let somar = (a, b) => a + b;

// Uma função tradicional que recebe dois parâmetros e retorna a soma deles
let somar = function(a, b) {
    return a + b;
  };
  
//__________________________________________________________

/*
callbacks 

Uma função de callback é uma função que é passada como um argumento para outra função, e que é chamada dentro 
dessa função depois que alguma coisa acontece ou alguma tarefa é concluída. Por exemplo:
*/

// Uma função que recebe um número e uma função de callback
function dobrar(numero, callback) {
    // Multiplica o número por 2 e chama a função de callback com o resultado
    let resultado = numero * 2;
    callback(resultado);
  }
  
  // Uma função que recebe um valor e mostra na tela
  function mostrar(valor) {
    console.log("O valor é " + valor);
  }
  
  // Chama a função dobrar com o número 5 e a função mostrar como argumentos
  dobrar(5, mostrar); // Isso vai imprimir "O valor é 10"

  
//__________________________________________________________
/*
                                    "listas" 

Uma função de callback é uma função que é passada como um argumento para outra função, e que é chamada dentro 
dessa função depois que alguma coisa acontece ou alguma tarefa é concluída. Por exemplo:
*/

// Uma array que guarda os nomes de quatro frutas
let frutas = ["Maçã", "Banana", "Laranja", "Manga"];

// Acessando o primeiro valor da array de frutas
let primeiraFruta = frutas[0]; // Maçã

// Acessando o último valor da array de frutas
let ultimaFruta = frutas[frutas.length - 1]; // Manga

// Modificando o segundo valor da array de frutas
frutas[1] = "Morango"; // Agora a array é ["Maçã", "Morango", "Laranja", "Manga"]

// Adicionando um novo valor ao final da array de frutas
frutas.push("Melancia"); // Agora a array é ["Maçã", "Morango", "Laranja", "Manga", "Melancia"]

// Removendo o último valor da array de frutas
let frutaRemovida = frutas.pop(); // Agora a array é ["Maçã", "Morango", "Laranja", "Manga"] e frutaRemovida é "Melancia"

/* 
O método splice é usado para adicionar ou remover elementos de uma array em qualquer posição. Ele recebe 
três parâmetros: o índice onde a alteração deve começar, o número de elementos que devem ser removidos e os 
elementos que devem ser adicionados. Por exemplo:
*/

// Removendo dois elementos da array de frutas a partir do índice 1
frutas.splice(1, 2); // Agora a array é ["Maçã", "Manga"]

// Adicionando três elementos na array de frutas a partir do índice 1
frutas.splice(1, 0, "Banana", "Laranja", "Morango"); // Agora a array é ["Maçã", "Banana", "Laranja", "Morango", "Manga"]

// Removendo e guardando o primeiro elemento da array de frutas
let primeiraFruta_ = frutas.shift(); // Agora primeiraFruta_ é "Maçã" e frutas é ["Banana", "Manga"]

// Adicionando dois elementos no início da array de frutas
let novoTamanho = frutas.unshift("Maçã", "Laranja"); // Agora novoTamanho é 4 e frutas é ["Maçã", "Laranja", "Banana", "Manga"]

//__________________________________________________________

//map

// Uma função que recebe um nome de fruta e retorna o seu plural
function pluralizar(fruta) {
    return fruta + "s";
  }
  
  // Criando um novo array com os plurais das frutas usando o método map
  let frutasPlural = frutas.map(pluralizar); // Agora frutasPlural é ["Maçãs", "Bananas", "Laranjas", "Mangas"]

  
//forEach 

// Uma função que recebe um nome de fruta e imprime na tela
function imprimir(fruta) {
    console.log("Eu gosto de " + fruta);
  }
  
  // Executando a função imprimir para cada fruta usando o método forEach
  frutas.forEach(imprimir); // Isso vai imprimir "Eu gosto de Maçã", "Eu gosto de Banana", etc.

  // Uma função que recebe um nome de fruta e retorna true se ela tem a letra A
function temA(fruta) {
    return fruta.includes("A");
  }
  
  // Criando um novo array com as frutas que têm a letra A usando o método filter
  let frutasComA = frutas.filter(temA); // Agora frutasComA é ["Maçã", "Banana", "Laranja"]
  
// Um array de números
let numeros = [1, 2, 3, 4, 5];

// Uma função que recebe dois números e retorna a soma deles
function somar(a, b) {
  return a + b;
}

// Usando o método reduce para aplicar a função somar a cada elemento do array
let total = numeros.reduce(somar); // O resultado é 15








