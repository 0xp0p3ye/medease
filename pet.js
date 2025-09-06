//OBJECT SETUP//
class Pet {
    constructor(name, play, hunger, thirst) {
        this._name = name;
        this._play = 50;
        this._hunger = 50;
        this._thirst = 50;
        this._intervalID = 0;
    }
    //getters//
    get name() {
        return this._name;
    }
    get play() {
        return this._play;
    }
    get hunger() {
        return this._hunger;
    }
    get thirst() {
        return this._thirst;
    }
    get intervalID() { //Global variable to store the ID of the interval.//
        return this._intervalID; 
    }
    playWith() {
        this._play ++;
        this._hunger -= 0.5;
        this._thirst -= 0.5;
    }
    giveFood() {
        this._hunger ++;
        this._play -= 0.5;
        this._thirst -= 0.5;
    }
    giveDrink() {
        this._thirst ++;
        this._play -= 0.5;
        this._hunger -= 0.5;
    }
    alone() {
        this._play --;
        this._hunger --;
        this._thirst --;
    }   
}

//~subclass setup~//
class Dog extends Pet {
    constructor(name, walks) {
        super(name);
        this._walks = walks;
    }
    walkDog() {
        this._walks ++
        this._play += 2;
        this._thirst --;
        this._hunger --;
    }
}

class Cat extends Pet {
    constructor(name, groomed) {
        super(name);
        this._groomed = groomed;
    }
    lickSelf() {
        this._groomed ++;
    }

}

class Bunny extends Pet {
    constructor(name, anxiety) {
        super(name);
        this._anxiety = anxiety;
    }
    petBunny() {
        this._anxiety ++;
    }
}

//~subclass setup~//
function alive(cyberPet){
    cyberPet.intervalID = setInterval(()=>{
        if (cyberPet.playWith == true || cyberPet.giveDrink == true || cyberPet.giveFood == true) {
            clearInterval(cyberPet.intervalID);
        } else {
            cyberPet.alone();
            console.log(cyberPet);
        }
    }, 3000)
};

// //~testing the interval function~//
// console.log(ted);
// alive(ted);
// console.log(ted);














