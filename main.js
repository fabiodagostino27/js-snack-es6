// Esercizio 1
let arrayBike = [
    {
        "nome": "Specialized S-Works Tarmac",
        "peso": 5.8
    },
    {
        "nome": "Trek Emonda SLR 9",
        "peso": 6.2
    },
    {
        "nome": "Cannondale SuperSix EVO",
        "peso": 7.1
    },
    {
        "nome": "Bianchi Oltre XR4",
        "peso": 7.0
    },
    {
        "nome": "Pinarello Dogma F12",
        "peso": 6.9
    },
    {
        "nome": "Cervélo R5",
        "peso": 6.5
    },
    {
        "nome": "Colnago C64",
        "peso": 7.3
    },
    {
        "nome": "Orbea Orca OMX",
        "peso": 5.7
    },
    {
        "nome": "Scott Addict RC",
        "peso": 6.4
    },
    {
        "nome": "Giant TCR Advanced Pro",
        "peso": 7.0
    }
]

let lightestBike;

for (i = 0, k = i + 1; i < arrayBike.length; i++) {
    let element1 = arrayBike[i];
    let element2 = arrayBike[k];
    
    if (element1.peso < element2.peso) {
        lightestBike = element1
    }
}

console.log(lightestBike)


// Esercizio 2
let arrayFootballClubs = [
    {
      "nome": "Juventus",
      "punti_fatti": 0,
      "falli_subiti": 0
    },
    {
      "nome": "Inter Milan",
      "punti_fatti": 0,
      "falli_subiti": 0
    },
    {
      "nome": "AC Milan",
      "punti_fatti": 0,
      "falli_subiti": 0
    },
    {
      "nome": "AS Roma",
      "punti_fatti": 0,
      "falli_subiti": 0
    },
    {
      "nome": "Napoli",
      "punti_fatti": 0,
      "falli_subiti": 0
    },
    {
      "nome": "Lazio",
      "punti_fatti": 0,
      "falli_subiti": 0
    },
    {
      "nome": "Fiorentina",
      "punti_fatti": 0,
      "falli_subiti": 0
    },
    {
      "nome": "Atalanta",
      "punti_fatti": 0,
      "falli_subiti": 0
    },
    {
      "nome": "Torino",
      "punti_fatti": 0,
      "falli_subiti": 0
    },
    {
      "nome": "Bologna",
      "punti_fatti": 0,
      "falli_subiti": 0
    }
]

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

for (let i in arrayFootballClubs) {
    arrayFootballClubs[i].punti_fatti = randomNum(30, 90);
    arrayFootballClubs[i].falli_subiti = randomNum(60, 100);
}

console.log(arrayFootballClubs)




