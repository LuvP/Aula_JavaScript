function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    /* console.log(document.getElementById("agradecimento")) */
    /* alert("Obrigado por clicar"); */
}



function redirecionar(){
    window.open("https://globallab.org/en/#.X-IsflOYWmQ");
    window.location.href = "https://globallab.org/en/#.X-IsflOYWmQ";
}

function trocar(elemento){
  //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por clicar"
} 

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse em cima"
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/* 
function validaIdade(idade){
    var validar;
    if(idade >= 18 ){
        validar = "Maior de Idade";
    }else{
        validar = "Menor de idade";
    }
    return validar
    
}

var idade = prompt("Qual a sua idade?")
console.log(validaIdade(idade));

 */

/* function soma(n1, n2){
    return n1 + n2;
} */

//DATE
/* var d = new Date();
alert(d);
alert(d.getHours());
alert(d.getMonth()); */

//FOR
/* var count;
for(count= 0; count <= 5; count++){
    alert(count);
}; */

//WHILE
/* var count = 0;
while (count <= 5){
    console.log(count)
    alert(count);
    count = count + 1; 
    count++;
} */



//PROMPT
/* var idade = prompt("Qual sua idade");

if (idade => 18){
    alert("maior de idade");
} else {
    alert("menor de idade");
} */


//LISTA DE DICIONÁRIOS
/* var frutas = [{nome:"maça", cor: "vermelha"}, {nome:"uva", cor:"roxa"}, {nome:"Pêra", cor:"Amarela"}];
console.log(frutas);
alert(frutas[1].nome) */


//DICIONÁRIO
/* var fruta = {nome: "maça", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor); */


//LISTA

/* var lista = ["maça", "pera", "laranja"];

console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));


console.log(lista.length); = mostra a quantidade de elementos na lista
console.log(lista.reverse);

lista.push("uva"); = poẽ um item na lista 
lista.pop() = tira o ultimo item da lista
 */



 // SOMA DE STRINGS
/* (nome + " tem" + idade + " anos");
(idade + idade2) -> Somou as duas strings(idade) */

/*
var nome = "Lucas Vinícius";
var idade = "21";
var idade2 = "10";
alert(idade + idade2) 

Concatena os dois números
*/

// Comenta em apenas uma linha
/* Comenta em varias, apenas escolher a área de comentario*/

/*
var nome = "Lucas Vinícius";
var idade = 21;
var idade2 = 10;
alert(nome + " tem" + idade + " anos");
*/