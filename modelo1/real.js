const h1 = document.querySelector('.container h1');
h1.innerHTML='Só pra você ver';

function getdiaSemText(diaSem){
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
}

function getMesText(mes) {
    let mesText;

    switch (mes) {
        case 0:
        mesText = 'Janeiro';
        return mesText;
        case 1:
        mesText = 'Fevereiro';
        return mesText;
        case 2:
        mesText = 'Março';
        return mesText;
        case 3:
        mesText = 'Abril';
        return mesText;
        case 4:
        mesText = 'Maio';
        return mesText;
        case 5:
        mesText = 'Junho';
        return mesText;
        case 6:
        mesText = 'Julho';
        return mesText;
        case 7:
        mesText = 'Agosto';
        return mesText;
        case 8:
        mesText = 'Setembro';
        return mesText;
        case 9:
        mesText = 'Outubro';
        return mesText;
        case 10:
        mesText = 'Novembro';
        return mesText;
        case 11:
        mesText = 'Dezembro';
        return mesText;
}
}

function criaDate(data){
    const diaSem = data.get
    const mesText = Data.get
}

h1.innerHTML=getdiaSemText(data.getDay());