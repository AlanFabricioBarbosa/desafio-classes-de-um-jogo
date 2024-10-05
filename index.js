class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack() {
    let attackType;
    switch (this.type.toLowerCase()) {
      case "mago":
        attackType = "magia";
        break;
      case "guerreiro":
        attackType = "espada";
        break;
      case "monge":
        attackType = "artes marciais";
        break;
      case "ninja":
        attackType = "shuriken";
        break;
      default:
        attackType = "ataque desconhecido";
    }
    console.log(`O ${this.type} ${this.name} atacou usando ${attackType}`);
  }
}

const hero1 = new Hero("Alan", 25, "Monge");
const hero2 = new Hero("Felipão da DIO", 30, "Guerreiro");
const hero3 = new Hero("Arthur", 20, "Mago");

hero1.attack();
hero2.attack();
hero3.attack();
