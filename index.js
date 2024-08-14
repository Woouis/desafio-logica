class genericHero{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }
    atacar(){
        let ataque;

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

    
   
    console.log(`O ${this.tipo} atacou usando ${ataque}`);

    }

}

const herois = [
    new genericHero("Merlin", 30, "mago"),
    new genericHero("Arthur", 35, "guerreiro"),
    new genericHero("Bruce", 28, "monge"),
    new genericHero("Hattori", 22, "ninja")
]

herois.forEach(heroi => heroi.atacar());