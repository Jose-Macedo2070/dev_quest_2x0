// if e else são condicionais utilizadas para verificar a veracidade de condições pré-determinadas pelo programador


// let nota = 8

// if (nota >= 7) {
//     console.log("Aprovado")
// }
// else if (nota >= 5 && nota <= 6) {
//     console.log("Recuperação")
// }

// else {
//     console.log("Reprovado")
// }



// o switch funciona como se fosse um interruptor se o "case" for o que você escolheu ele vai fazer o que estiver dentro do case, o ideal é que depois de cada case seja colocado um break


const cor = "azul"

switch (cor) {
    case "vermelhor":
        console.log("vermelho");
        break;

    case "azul":
        console.log("azul");
        break;

    default:
        console.log("cor não encontrada");

}