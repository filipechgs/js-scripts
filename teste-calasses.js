class Personagem {
    #nome;
    // Um compo privado pode ser evocado no construtor se ele já estiver declarado antes;
    constructor(nome) {
        this.#nome = nome; 
    }



    SubClasse = class {  // Pode declarar uma classe dentro de outra se a segunda for uma expressão;
        constructor(guerreiro, paladino, ladrão){ // Dentro dessa classe um novo contrutor pode ser chamado;
            this.guerreiro = guerreiro;
            this.paladino = paladino;
            this.ladrão = ladrão;
        }

    }

    #subclasse = new this.SubClasse(true, false, true);

    get nome(){ // Pode ter mais de um métdo get;
        console.log(this.#nome);
    }
    get subclasse(){
        console.log(this.#subclasse);
    }

 

}
const personagem = new Personagem("Lylian Shelby");

personagem.nome;
personagem.subclasse;

