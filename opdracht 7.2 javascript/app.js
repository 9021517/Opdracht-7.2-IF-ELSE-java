const productPrijs = 50;

const userInput = prompt("Hoeveel geld heb je? Vul het bedrag in:");
const geld = parseFloat(userInput);

if (isNaN(geld)) {
    console.log("Vul alstublieft een geldig nummer in.");
} else {
   if (geld >= productPrijs) {
        console.log("Je hebt genoeg geld om het product te kopen!");
    } else {
        console.log("Helaas, je hebt niet genoeg geld om het product te kopen.");
    }
}
