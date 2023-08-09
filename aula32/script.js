//const pessoa = {
 //   peso: "90kg",
 //   idade: "11",
  //  nome:"Lucas",
 //   sobrenome: "Oliveira"

//};

//console.log(pessoa.peso)

function criauser (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    };
}

const pessoa1 = criauser('Gustavo','Silva',21);

console.log(pessoa1.nome);

aaaa