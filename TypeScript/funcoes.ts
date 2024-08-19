// function log(): void {
//     console.log("Uma mensagem");
// }

// function soma(n1: number, n2: number): number {
//     return n1 + n2
// }

// function falhar(message: string): never {
//     throw new Error(message);
// }

// function yesOrNot(txt: string): boolean {
//     if (txt.toLowerCase() == "y") {
//         return true
//     } else if (txt.toLowerCase() == "n") {
//         return false
//     }
//     // Toda função tipada precisa de um retorno obrigatorio
//     return falhar("Falhou vc passou algo diferente de Y ou N");
// }

// console.log(soma(5, 6))
// console.log(yesOrNot("x"))
// console.log("Hothoyhoy")

// let valorString: string = "5";
// let convertido: number = Number.parseInt(valorString, 10);
// console.log(`${valorString} string -> ${convertido} number`)

function soma(a?: number, b?: number, c?: number): number {
    return (a ?? 0) + (b ?? 0) + (c ?? 0)
}

console.log(soma(2, 5))