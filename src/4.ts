class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature():number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}



abstract class House {
  protected  door: boolean;
  protected key: Key;
  protected tenants: Person[];
  constructor(key:Key) {
    this.door = false; 
    this.key = key;
    this.tenants = [];
  }
  
  abstract openDoor(key: Key): void;
   
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log('The person has been let into the house.');
    } else {
      console.log('The door is closed. The person cannot enter.');
    }
  }

  
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('Двері відчинено.');
    } else {
      console.log('Невірний ключ. Двері залишаються закритими.');
    }
  }
}




const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};