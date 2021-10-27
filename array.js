//You know that arrays can store any objects, like objects containing information about pets.

//Use this array of pet data objects,

 const petsData = [
    {   petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {   petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {   petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {   petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {   petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog"
    }
];
var index = parseInt(petsData.length)
console.log(index)
var indexVal = index - 1 
let userIn = prompt("Please enter a number between 0 and " +indexVal+ ".") 
console.log(petsData.length)

if(userIn == 0){
    document.getElementById("dog1").innerHTML = petsData[0].petName + " the dog is " + petsData[0].age + " years old."+ "This dog weighs " + petsData[0].weightInKilos + " kilos and is a " + petsData[0].breed + " Breed.";
}
else if(userIn == 1){
    document.getElementById("dog2").innerHTML = petsData[1].petName + " the dog is " + petsData[1].age + " years old."+ "This dog weighs " + petsData[1].weightInKilos + " kilos and is a " + petsData[1].breed + " Breed.";
}
else if(userIn == 2){
    document.getElementById("dog3").innerHTML = petsData[2].petName + " the dog is " + petsData[2].age + " years old."+ "This dog weighs " + petsData[2].weightInKilos + " kilos and is a " + petsData[2].breed + " Breed.";
}
else if(userIn == 3){
    document.getElementById("dog4").innerHTML = petsData[3].petName + " the dog is " + petsData[3].age + " years old."+ "This dog weighs " + petsData[3].weightInKilos + " kilos and is a " + petsData[3].breed + " Breed.";
}
else if(userIn == 4){
    document.getElementById("dog5").innerHTML = petsData[4].petName + " the dog is " + petsData[4].age + " years old."+ "This dog weighs " + petsData[4].weightInKilos + " kilos and is a " + petsData[4].breed + " Breed.";
}
else{
    alert("PLEASE INPUT A VALID NUMBER.")
}


