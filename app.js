alert("Boas vindas ao nosso site!");

let nome = "lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = "Erro! Preencha todos os campos!";

alert(mensagemDeErro);

nome = prompt ("Digite o nome:");
idade = prompt ("Digite sua idade:");
if (Number(idade) >= 18) {
    alert("Pode tirar a habilitação!");
}
