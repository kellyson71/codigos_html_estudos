
//1

var var1 = 5
console.log(var1 * 2)
console.log(var1 / 2)

//2
var var2 = 5
console.log(var2 * 1, var2 * 2, var2 * 3, var2 * 4, var2 * 5, var2 * 6, var2 * 7, var2 * 8, var2 * 9, var2 * 10)

//3
var var3 = 5
var var4 = 2


if (var3 < var4) {
    console.log (var3)
}
else{
    console.log (var4)
}

//4
var mes = 4
var dia = 5

if (mes === 3 && dia >= 21 || mes === 4 || mes === 5 || mes === 6 && dia < 21){
    console.log("outono")
}
if (mes === 6 && dia >= 21 || mes === 7 || mes === 8 || mes === 9 && dia < 23){
    console.log("Inverno")
}
if (mes === 9 && dia >= 23 || mes === 10 || mes === 11 || mes === 12 && dia < 21){
    console.log("Primavera")
}
if (mes === 12 && dia >= 21 || mes === 1 || mes === 2 || mes === 3 && dia < 21){
    console.log("Verão")
}

//6
var var11 = 0
var var12 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < var12.length; i ++){
    var11 += var12[i]

}
console.log (var11)

//7
function parOuImpar(vetor) {

    let resultado = [];
    for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 == 0) {
        resultado.push('par');
    } else {
        resultado.push('impar');
    }
    }
    return resultado;
}
//8
function nomesComA(nomes) {
    let resultado = [];
    for (let i = 0; i < nomes.length; i++) {
      if (nomes[i].charAt(0) == 'A') {
        resultado.push(nomes[i]);
      }
    }
    return resultado;
  }
  
