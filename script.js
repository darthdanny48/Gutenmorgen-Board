// ===== Uhr & Datum =====

function updateClock() {

    const now = new Date();

    document.getElementById("clock").textContent =

        now.toLocaleTimeString("de-DE", {

            hour: "2-digit",

            minute: "2-digit"

        });

    document.getElementById("date").textContent =

        now.toLocaleDateString("de-DE", {

            weekday: "long",

            day: "numeric",

            month: "long",

            year: "numeric"

        });

}

updateClock();

setInterval(updateClock, 1000);

// ===== Fun Facts =====

const facts = [

    "Honig ist das einzige Lebensmittel, das praktisch nie verdirbt.",

    "Ein Oktopus hat drei Herzen.",

    "Bananen sind Beeren, Erdbeeren dagegen nicht.",

    "Die Erde dreht sich mit rund 1.670 km/h.",

    "Kängurus können nicht rückwärts laufen."

];

// ===== Witze =====

const jokes = [

    "Warum können Geister so schlecht lügen? Weil man durch sie hindurchsieht.",

    "Treffen sich zwei Fische. Sagt der eine: Hi! Sagt der andere: Wo?",

    "Was macht ein Pirat am Computer? Er drückt die Enter-Taste.",

    "Warum gehen Uhren nie zur Schule? Sie laufen bereits.",

    "Warum war der Kalender traurig? Er hatte zu viele Termine."

];

// ===== Heute vor ... =====

const history = [

    "1969 startete Apollo 11 zum Mond.",

    "1989 fiel die Berliner Mauer.",

    "2002 wurde der Euro als Bargeld eingeführt.",

    "1886 wurde das erste Auto patentiert.",

    "1961 flog der erste Mensch ins All."

];

// ===== Lernaufgaben =====

const english = [

    "🇬🇧 Übersetze: 'Ich spiele heute Fußball.'",

    "🇬🇧 Übersetze: 'Meine Schwester liest ein Buch.'",

    "🇬🇧 Übersetze: 'Wir gehen morgen ins Kino.'"

];

const german = [

    "🇩🇪 Bestimme Subjekt und Prädikat: 'Der Hund schläft.'",

    "🇩🇪 Welche Wortart ist 'schnell'?",

    "🇩🇪 Bestimme das Objekt: 'Anna kauft einen Ball.'"

];

const math = [

    "➕ 48 + 37 = ?",

    "➖ 92 − 48 = ?",

    "📐 Wie viele Ecken hat ein Sechseck?"

];

// ===== Auswahl =====

const day = new Date().getDay();

document.getElementById("fact").textContent =

    facts[new Date().getDate() % facts.length];

document.getElementById("history").textContent =

    history[new Date().getDate() % history.length];

document.getElementById("joke").textContent =

    jokes[new Date().getDate() % jokes.length];

let exercise = "";

switch (day) {

    case 1:

    case 3:

    case 0:

        exercise = english[Math.floor(Math.random() * english.length)];

        break;

    case 2:

    case 5:

        exercise = german[Math.floor(Math.random() * german.length)];

        break;

    case 4:

    case 6:

        exercise = math[Math.floor(Math.random() * math.length)];

        break;

}

document.getElementById("exercise").textContent = exercise;

