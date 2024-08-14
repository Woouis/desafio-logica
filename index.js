let nome = 'Santoryu'
let quantidadeExperiencia =  7004
let nivel = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal', 'Radiante']
        switch(this.tipo){
            case "mago":
                ataque = "magia"
                break;
            case "guerreiro":
                ataque = "espada"
                break;
            case "monge":
                ataque = "artes marciais"
                break;
            case "ninja":
                ataque = "shuriken"
                break;

        }

if(quantidadeExperiencia <1000)
    console.log('0 herói de nome '+nome, 'está no nível de '+nivel[0])
else if(quantidadeExperiencia>=1001 && quantidadeExperiencia<=2000){
    console.log('0 herói de nome '+nome, 'está no nível de '+nivel[1])
} else if(quantidadeExperiencia>=2001 && quantidadeExperiencia<=5000){
    console.log('0 herói de nome '+nome, 'está no nível de '+nivel[2])
} else if(quantidadeExperiencia>=5001 && quantidadeExperiencia<=7000){
    console.log('0 herói de nome '+nome, 'está no nível de '+nivel[3])
} else if(quantidadeExperiencia>=7001 && quantidadeExperiencia<=8000){
    console.log('0 herói de nome '+nome, 'está no nível de '+nivel[4])
} else if(quantidadeExperiencia>=8001 && quantidadeExperiencia<=9000){
    console.log('0 herói de nome '+nome, 'está no nível de '+nivel[5])
} else if(quantidadeExperiencia>=9001 && quantidadeExperiencia<=10.000){
    console.log('0 herói de nome '+nome, 'está no nível de '+nivel[6])
} else if(quantidadeExperiencia>=10001){
    console.log('0 herói de nome '+nome, 'está no nível de '+nivel[7])
} else{
    console.log('INDEFINIDO')
}