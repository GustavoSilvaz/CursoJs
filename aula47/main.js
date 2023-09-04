const data = new Date('1987-04-27 00:00:00');
const diaSem = data.getDay();
let diaSemText;

switch (diaSem)  {
        case 0 :
        diaSemText='Domingo';
        break ;
        case 1 :
        diaSemText='Segunda';
        break ;
        case 2 :
        diaSemText='Terça';
        break ;
        case 3 :
        diaSemText='Quarta';
        break ;
        case 4 :
        diaSemText='Quinta';
        break ;
        case 5 :
        diaSemText='Sexta';
        break ;
        case 6 :
        diaSemText='Sábado';
        break ;
}

console.log(diaSemText)
