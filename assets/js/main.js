/********************************************************************************
JS Vertiefung CodeFlow Übung lev1_2: Objects - Aufgabenstellung

In dieser Übung werden wir wieder Objekte kennenlernen.
    * Erstelle ein Objekt und speichere es als Variable person
    * Deklariere die Eigenschaft name mit dem Wert deines Namens,
    * Deklariere die Eigenschaft alter mit dem Wert deines Alters,
    * Deklariere die Methode (Funktion) sagNameAlter 
        o Nutze den Befehl alert() im Funktionskörper um name, alter anzuzeigen.
    * Gib in der Konsole person.name und person.alter aus.
    * Rufe die Funktion sagNameAlter aus dem Objekt auf.
*/
let person = {
    name: 'Klaus',
    alter: 57,

    sagNameAlter: function () {
        console.log(`Mein Name ist ${this.name} und bin ${this.alter} Jahre alt.`);
        // alert(`Mein Name ist ${this.name} und bin ${this.alter} Jahre alt.`);
        //alert(`Mein Name ist ${person.name} und bin ${person.alter} Jahre alt.`);
        //alert("Mein Name ist " + this.name + " und bin " + this.alter + " Jahre alt.");
    }
};
// console.log(person.name, person.alter);
console.log(person.name);
console.log(person.alter);
person.sagNameAlter();



/********************************************************************************
JS Vertiefung CodeFlow Übung lev1_4: Objects Accessing - Aufgabenstellung

In dieser Übung lernen wir, wie man auf die Objekte zugreift.
    * Verwende den Code aus dem Kommentarbereich.
    * Greife auf die Werte dieses Objekts zu:
        o "Nala"
        o "Droopy"
    * und lasse dir einmal alle Hundenamen anzeigen
    * Erstelle eine Methode, mit der man die Hundenamen ändern kann und rufe diese Methode auf.
*/
let unsereHaustiere = [
    {
        tiertyp: "Katze",
        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ],
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ],
        addDog: function (dogName) {
            this.names.push(dogName);
        },
        // clearDogs: function () {
        //     this.names = [];
        // }
    }
];

// 1.4
/*
    * Greife auf die Werte dieses Objekts zu:
        o "Nala"
        o "Droopy"
*/
console.log(unsereHaustiere[0].names[1]); // Nala
console.log(unsereHaustiere[1].names[2]); // Droopy



//( lasse dir einmal alle Katzenamen anzeigen)
console.log(unsereHaustiere[0].names);

//* und lasse dir einmal alle Hundenamen anzeigen
console.log(unsereHaustiere[1].names);

// unsereHaustiere[1].names.forEach(elt => {
//     console.log(elt)
// });

unsereHaustiere[1].names = [];
// fuege Balu und Snoopy hinzu
unsereHaustiere[1].addDog("Balu");
unsereHaustiere[1].addDog("Snoopy");
console.log(unsereHaustiere[1].names);


/************************************************************************************
JS Vertiefung CodeFlow Übung lev1_5: Objects Accessing - Aufgabenstellung

In dieser Übung lernen wir wie man auf die Objekt-Inhalte zugreift.
    * Verwende den Code aus dem Kommentar.
    * Greife auf die Eigenschaften dieses Objekts zu und gib folgende Werte in der Konsole aus:
        o Geheimnisse
        o Cola
        o Hefter
Hinweis:
    * Accessing Object Properties
*/
let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);



/*********************************************************************************
JS Vertiefung CodeFlow Übung lev1_6: Objects Arrays Accessing - Aufgabenstellung

In dieser Übung lernen wir, wie man auf die Objekte zugreift.
    * Verwende den Code aus dem Kommentarbereich.
    * Füge zu dem Objekt Deine Lieblingsmusik hinzu.
    * Greife mit console.log auf die Werte dieses Objekts zu:
        o "The Beatles"
        o Von Pink Floyd: "Download"
        o Von Pink Floyd: true
        o 1971 und 1983
        o Von Metallica: "MC"
        o Von Metallica das Wort: Ride
        o Von Led Zeppelin das Wort: IV:
        o Von Pink Floyd das Wort: Floyd
*/
let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "AC/DC",
        title: "Hells Bells",
        release_year: 1980,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];
console.log(myMusic[0].artist);
console.log(myMusic[1].medium[3]);
console.log(myMusic[1].gold);
console.log(`${myMusic[2].release_year} und ${myMusic[3].release_year}`);
console.log(myMusic[3].medium[2]);

// let myText = myMusic[3].title.split(" ");
// console.log(myText[4]);
console.log(myMusic[3].title.split(" ")[4])
// let text = "Hallo+Welt+Wie+geht+es";
// console.log(text.split('+'));
// console.log(myMusic[3].title.split());
// console.log(myMusic[3].title.split(""));
console.log(myMusic[2].title.split(" ")[2]);

console.log(myMusic[1].artist.split(" ")[1]);

// Füge zu dem Objekt Deine Lieblingsmusik hinzu.
myMusic.push(
    {
        artist: "Iron Maiden",
        title: "The Number of the Beast",
        release_year: 1982,
        medium: ["LP", "CD", "Download"],
        gold: false
    }
);
console.log(myMusic);


/****************************************************************************************
JS Vertiefung CodeFlow Übung lev1_7: Objects Arrays Loop Accessing - Aufgabenstellung

In dieser Übung lernen wir, wie man auf die Objekte mit Hilfe von forEach() zugreift.
Verwende den Code aus dem Kommentarbereich.
Greife auf die Eigenschaften des Objekts zu und gib folgende Werte mit forEach()
im HTML aus:
Alle “artist”
Alle “title”
Alle “medium”

Bonus Aufgabe:
Gib alle “release_year” älter als 1975 aus
*/
myMusic.forEach(elt => {
    // document.body.innerHTML += (elt.artist + '<br>');
    document.getElementById("ausgabe").innerHTML += (elt.artist + '<br>');
    document.getElementById("ausgabe").innerHTML += (elt.title + '<br>');
    document.getElementById("ausgabe").innerHTML += (elt.medium + '<br>');

    // document.body.innerHTML += ('<br>')
    document.getElementById("ausgabe").innerHTML += '<br>';
});

// document.getElementById("ausgabe").innerHTML += "=======================================================================<br>";
document.getElementById("ausgabe").innerHTML += ("".padStart(80, "=") + "<br>");

// "unentspannte" Version
// myMusic.forEach(elt => {
//     if (elt.release_year < 1975) {
//         document.getElementById("ausgabe").innerHTML += (elt.artist + '<br>');
//         document.getElementById("ausgabe").innerHTML += (elt.title + '<br>');
//         document.getElementById("ausgabe").innerHTML += (elt.release_year + '<br>');
//         // document.getElementById("ausgabe").innerHTML = document.getElementById("ausgabe").innerHTML + '<br>';
//         document.getElementById("ausgabe").innerHTML += '<br>';
//     }
// });

// "entspannte" Version
let oldMusic = myMusic.filter(elt => elt.release_year < 1975);
oldMusic.forEach(elt => {
    // document.body.innerHTML += (elt.artist + '<br>');
    document.getElementById("ausgabe").innerHTML += (elt.artist + '<br>');
    document.getElementById("ausgabe").innerHTML += (elt.title + '<br>');
    document.getElementById("ausgabe").innerHTML += (elt.release_year + '<br>');

    // document.body.innerHTML += ('<br>')
    document.getElementById("ausgabe").innerHTML += '<br>';
});


/****************************************************************************************
JS Vertiefung CodeFlow Übung lev1_8: Objects Arrays Loop Accessing - Aufgabenstellung
    * Verwende den Code aus dem Kommentarbereich.
    * Greife mithilfe von forEach() oder map() auf Eigenschaften dieses Objekts zu.
    * Schreibe Methoden für das Objekt, die in der Console folgendes ausgeben:
        o name
        o coop
        o city
        o emails
*/

let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    },
];
function showData(student) {
    console.log(student.name);
    console.log(student.coop);
    console.log(student.address.city);
    console.log(student.emails);
}
studentData.forEach(student => showData(student));
