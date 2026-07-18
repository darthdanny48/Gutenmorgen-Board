// ==============================

// GUTENMORGEN-BOARD

// ==============================

// ---------- Uhr & Datum ----------

function updateClock() {

    const now = new Date();

    document.getElementById("clock").innerHTML =

        now.toLocaleTimeString("de-DE", {

            hour: "2-digit",

            minute: "2-digit"

        });

    document.getElementById("date").innerHTML =

        now.toLocaleDateString("de-DE", {

            weekday: "long",

            day: "numeric",

            month: "long",

            year: "numeric"

        });

}

updateClock();

setInterval(updateClock, 1000);

// ---------- Fun Facts ----------

const facts = [

"Honig ist das einzige Lebensmittel, das praktisch niemals verdirbt.",

"Kraken besitzen drei Herzen.",

"Bananen sind Beeren – Erdbeeren dagegen nicht.",

"Ein Blitz ist etwa fünfmal heißer als die Oberfläche der Sonne.",

"Koalas schlafen bis zu 22 Stunden täglich.",

"Die Erde dreht sich mit rund 1670 km/h um ihre Achse.",

"Wasser dehnt sich beim Gefrieren aus."

];

// ---------- Witze ----------

const jokes = [

"Warum können Geister so schlecht lügen? Weil man durch sie hindurchsieht.",

"Was macht ein Pirat am Computer? Er drückt die Enter-Taste.",

"Warum gehen Uhren nie in Rente? Sie laufen einfach weiter.",

"Treffen sich zwei Fische. Sagt der eine: Hi! Sagt der andere: Wo?",

"Warum hat der Kalender immer so viel zu tun? Er hat viele Termine."

];

// ---------- Heute vor... ----------

const history = [

"1969 startete Apollo 11 zum Mond.",

"1989 fiel die Berliner Mauer.",

"2002 wurde der Euro als Bargeld eingeführt.",

"1903 hoben die Gebrüder Wright erfolgreich ab.",

"1990 wurde Deutschland wiedervereinigt."

];

// ---------- Lernaufgaben ----------

const english = [

'Übersetze: "Ich spiele heute Fußball."',

'Übersetze: "Meine Schwester liest ein Buch."',

'Übersetze: "Wir fahren morgen nach München."',

'Übersetze: "Der Hund schläft im Garten."'

];

const german = [

"Setze die richtigen Satzzeichen.",

"Nenne drei Nomen mit Artikel.",

"Schreibe den Satz im Präteritum.",

"Finde das Verb im Satz."

];

const math = [

"27 × 6 = ?",

"144 : 12 = ?",

"Wie groß ist die Winkelsumme im Dreieck?",

"Berechne: 18²"

];

// ---------- Tagesinhalte ----------

const day = new Date().getDay();

document.getElementById("fact").innerHTML =

facts[new Date().getDate() % facts.length];

document.getElementById("joke").innerHTML =

jokes[new Date().getDate() % jokes.length];

document.getElementById("history").innerHTML =

history[new Date().getDate() % history.length];

const exercise = document.getElementById("exercise");

switch(day){

case 1:

case 3:

case 5:

exercise.innerHTML =

english[new Date().getDate() % english.length];

break;

case 2:

case 4:

exercise.innerHTML =

german[new Date().getDate() % german.length];

break;

default:

exercise.innerHTML =

math[new Date().getDate() % math.length];

}

// ==============================

// HINTERGRUND JE NACH TAGESZEIT

// ==============================

function updateBackground() {

    const hour = new Date().getHours();

    const bg = document.querySelector(".background");

    let image =

        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80";

    if (hour < 6) {

        image =

        "https://images.unsplash.com/photo-1508261303786-6d3f1c0d6d0f?auto=format&fit=crop&w=2000&q=80";

    } else if (hour < 11) {

        image =

        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80";

    } else if (hour < 18) {

        image =

        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80";

    } else {

        image =

        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2000&q=80";

    }

    bg.style.backgroundImage = `url(${image})`;

}

updateBackground();

// ==============================

// WETTER (DEMO)

// ==============================

const weather = {

    temperature: 24,

    morning: 17,

    noon: 26,

    evening: 20,

    wind: 8,

    rain: 10,

    sunrise: "05:43",

    sunset: "21:18",

    condition: "Sonnig"

};

document.querySelector(".temp").innerHTML =

`☀️ ${weather.temperature}°`;

document.querySelector(".condition").innerHTML =

weather.condition;

const forecastValues =

document.querySelectorAll(".forecastBox .value");

forecastValues[0].innerHTML = weather.morning + "°";

forecastValues[1].innerHTML = weather.noon + "°";

forecastValues[2].innerHTML = weather.evening + "°";

// ==============================

// AUTOMATISCHE AKTUALISIERUNG

// ==============================

setInterval(() => {

    updateClock();

}, 1000);

// ==============================

// SPÄTER:

// OpenWeather API

// Feiertage API

// Google Kalender

// Apple Kalender

// Fun-Facts API

// ==============================

console.log("Gutenmorgen-Board gestartet.");

