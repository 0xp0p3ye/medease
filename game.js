// ///////////////////TIME FOR THE DOM////////////////////
// //PULL FROM HTML//
// const petNameCard = document.querySelector("#petName");
// const petSubClassCard = document.querySelector("#petSubClass");
// const petIcon = document.querySelector("#petIcon");

// window.addEventListener("click", () =>{
//     //add new pet//
    
// })

// petNameCard.append(cyberPet);
//ADD PETS//
// const ted = new Dog("Ted", 50);
// // const simba = new Cat("Simba", 50);
// // const lola = new Bunny("Lola", 30);

//buttons//
const buttonPlayWith = document.getElementById("buttonPlayWith");
const buttonFeed = document.getElementById("buttonFeed");
const buttonWater = document.getElementById("buttonWater");
const buttonWalk = document.getElementById("buttonWalk");
const buttonKillPet = document.getElementById("buttonKillPet");
//get progress bars by ID//
const objectLvlPlay = document.getElementById("objectLvlPlay");
const objectLvlHunger = document.getElementById("objectLvlHunger");
const objectLvlThirst = document.getElementById("objectLvlThirst");
const objectLvlWalks = document.getElementById("objectLvlWalks");
const petBoxSingular = document.getElementById("petBoxSingular");
const buttonRevivePet = document.getElementById("buttonRevivePet");

//petIcon//
document.getElementById("petIcon").src="/img/cyberPetDogNeutral.png";


//Interacting with Pet//
buttonPlayWith.addEventListener("click", ()=>{ //increases value of play level when clicked//
    objectLvlPlay.value+=20;
})
buttonPlayWith.addEventListener("mousedown", ()=>{ //makes dog happy when interacted with//
    petIcon.src="/img/cyberPetDogHappy.png";
})
buttonPlayWith.addEventListener("mouseup", ()=>{ //returns dog to neutral state on mouse release//
    petIcon.src="/img/cyberPetDogNeutral.png";
})
buttonFeed.addEventListener("click", ()=>{ //increases value of hunger level when clicked//
    objectLvlHunger.value+=20;
})
buttonFeed.addEventListener("mousedown", ()=>{
    petIcon.src="/img/cyberPetDogHappy.png";
})
buttonFeed.addEventListener("mouseup", ()=>{
    petIcon.src="/img/cyberPetDogNeutral.png";
})
buttonWater.addEventListener("click", ()=>{//increases value of thirst level when clicked//
    objectLvlThirst.value+=20;
})
buttonWater.addEventListener("mousedown", ()=>{
    petIcon.src="/img/cyberPetDogHappy.png";
})
buttonWater.addEventListener("mouseup", ()=>{
    petIcon.src="/img/cyberPetDogNeutral.png";
})
buttonWalk.addEventListener("click", ()=>{//increases value of walks level when clicked//
    objectLvlWalks.value+=20;
})
buttonWalk.addEventListener("mousedown", ()=>{
    petIcon.src="/img/cyberPetDogHappy.png";
})
buttonWalk.addEventListener("mouseup", ()=>{
    petIcon.src="/img/cyberPetDogNeutral.png";
})
buttonKillPet.addEventListener("click", () => { //to send dog to farm//
    objectLvlPlay.value=0;
    objectLvlHunger.value=0;
    objectLvlThirst.value=0;
    objectLvlWalks.value=0;
    petIcon.src="/img/cyberPetDogRip.png";
    petBoxSingular.style.background = "grey";
    buttonKillPet.style.display = "none";
    buttonRevivePet.style.display = "block";
})
buttonRevivePet.addEventListener("click", () => { //to revive dog//
    objectLvlPlay.value=1000;
    objectLvlHunger.value=100;
    objectLvlThirst.value=100;
    objectLvlWalks.value=100;
    petIcon.src="/img/cyberPetDogNeutral.png";
    petBoxSingular.style.background = " #F4CEC7";
    buttonKillPet.style.display = "block";
    buttonRevivePet.style.display = "none";
})

objectLvlPlay.value = 100;
objectLvlHunger.value = 100;
objectLvlThirst.value = 100;
objectLvlWalks.value = 100;

let play = setInterval(() => {
    objectLvlPlay.value--;
}, 1000); 
let hunger = setInterval(() => {
    objectLvlHunger.value--;
}, 1100); 
let thirst = setInterval(() => {
    objectLvlThirst.value--;
}, 1200); 
let walks = setInterval(() => {
    objectLvlWalks.value--;
}, 2000); 

if(objectLvlPlay.value == 0) {
    clearInterval(play);
}
if(objectLvlHunger.value == 0) {
    clearInterval(hunger);
}
if(objectLvlThirst.value == 0) {
    clearInterval(thirst);
}
if(objectLvlWalks.value == 0) {
    clearInterval(walks);
}

