// Diferenças entre os tipos de variáveis var e let
// Variáveis consntantes = não mudam valor o valor da variável até se encerrar seu tempo de vida
function showWithVar() {
    var text = 'luiz carolos';
    if (true){
        var text = "Olá, eu sou o Luiz Carlos";
    }
    console.log(text);
}
// variaveis let não podem ser sobreescritas
function showWithLet() {
    let text = 'willian';
    text = 'texte';
    if(true){
        let text = 'textp';
    }

    console.log(text);
}

function showWithConst(){
    //isso dará erro
    const text = "Constante";
    // text = "OI!"; 

    // Isso dá certo

    var obj = {
        name:"Constante"
    };

    obj.name = "AAAA"

    // Não dá para alterar a variável obj, mas o valor da sua propriedade é possível alterar;
}