const getDiaDaSemana = (diaSemana) =>{
    switch (diaSemana) {
        case 0:
            return 'Domingo'
            break
          case 1:
            return 'Segunda'
            break    
          case 2:
            return 'Terça'
            break
        case 3:
            return 'Quarta'
            break
        case 4:
            return 'Quinta'
            break
        case 5:
            return 'Sexta'
            break
        case 6:
            return 'Sábado'
            break
        default:
            'Erro'
    }    
}


const data = new Date('2003-05-29 00:00:00');
const diaSemana = getDiaDaSemana(data.getDay());

console.log(diaSemana);
