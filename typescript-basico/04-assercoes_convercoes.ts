// Como trabalhar com assercoes e conversoes

let meu_nome: any = "Willian";

// isso dará erro
meu_nome.length;

// forma correta
let count = (<string>meu_nome).length;

let objeto = {
    name: "Willian"
};

// assercao errada
objeto.texto = "Estudandooooooooooo";

// assercao correta

(<any>objeto).texto = "aaaaaaaaaaaaaaaaaaa";


let num =2;

let numString = num + "";
console.log("numero convertido para string", numString);

let stringNum = "123";
let numConverted = +stringNum;
console.log("conversao de string para number", numConverted);