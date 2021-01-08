//While Loop:

const myColor = ["yellow", "blue", "red", "orange"];

let i = 0;
while (i < myColor.length) {
    console.log(myColor[i]);
    i++
}
console.log("Alle kleuren zijn geprint met While Loop")

// For Loop:

for (i = 0; i < myColor.length; i++) {
    console.log(myColor[i]);
}
console.log("Alle kleuren zijn geprint met For Loop")

// forEach

myColor.forEach(element => console.log(element));
console.log("Alle kleuren zijn geprint met forEach")

//1. met for loop neemt het 2 regels in Beslag, met while loop 3 regels.
//2. Met forEach heb ik 1 regel nodig.
//3. Met een Aray Method is alles in 1 regel waardoor het makkelijker leesbaar is en de kans op fouten wordt verkleind.
// Ook is er geen infinite loop mogelijk zodat je computer niet kan crashen.

// Kostte me veel moeite om deze oplossing te vinden...
//Alleen daarom al is het itereren van een object niet slim
const family = {

    vader: "Johan",
    moeder: "Monique",
    kind1: "Dave",
    kind2: "Kelvin",
    katten: "Max en Cleo",
}

for (i in family) {
    console.log(family[i]);
}