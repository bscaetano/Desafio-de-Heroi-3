class Heroi {
constructor(nome = "", idade = "", tipo = "") {
this.nome = nome;
this.idade = idade;
this.tipo = tipo;
}
}
var heroi = new Heroi("", "", "");
var ataque = "soco";

function chamadaHeroi() {
heroi.nome = prompt(" Qual é o nome de seu herói? ");
heroi.idade = prompt(" Qual é a idade de seu herói? ");
heroi.tipo = prompt(" Os tipos de herói são: mago, guerreiro, monge, ninja; qual o tipo do seu herói? ");

while (heroi.tipo !== "mago" &&
heroi.tipo !== "guerreiro" &&
heroi.tipo !== "monge" &&
heroi.tipo !== "ninja") {
window.alert(" Tipo errado, escolha um tipo válido ");
heroi.tipo = prompt(" Os tipos de herói são: mago, guerreiro, monge, ninja; qual o tipo do seu herói? ");
}

ataque = heroi.tipo === "mago" ? "magia" :
heroi.tipo === "guerreiro" ? "espada" :
heroi.tipo === "monge" ? "artes marciais" :
heroi.tipo === "ninja" ? "shuriken" : ataque;

window.alert(` Bem vido! O nome de seu heroi é ${heroi.nome}, ${heroi.idade} anos de idade e é do tipo ${heroi.tipo} `);

}

function atacar() {
window.alert(`O ${heroi.tipo} atacou usando ${ataque}`);
}

chamadaHeroi();