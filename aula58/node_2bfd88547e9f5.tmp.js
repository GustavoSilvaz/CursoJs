// const nome = 'Guzman';

// let i = 0;

// while (i<nome.length) {
//     console.log(nome[i]);
//     i++;
// }

// console.log('Continua...');

function random(min, max) {
    const r = Math.random () * (max - min) + min;
    return Math.floor(r);
}

let rand = random(1, 50);


while (rand !== 10){
    console.log(`Tentativa ${rand}`);
}