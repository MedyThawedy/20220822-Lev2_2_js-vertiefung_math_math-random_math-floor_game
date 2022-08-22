/*

Schreibe ein kleines Spiel/Programm – das wie folgt funktioniert:

Das Programm “denkt” sich eine Zahl zwischen 1-10 mithilfe von Math.Random aus und Du musst sie erraten.
Nach Eingabe deiner Zahl sagt dir das Programm (in der Konsole), ob du richtig oder falsch geraten hast.

Hinweis: In der Ergebnisvorschau wird die Methode prompt() verwendet.

*/

let nrInput;
let guessedNr;


let fnGuessNr = () => {

    // generating a random integer from 1 to 10
    const random = Math.floor(Math.random() * 10) + 1;
    guessedNr = random;
    return guessedNr;

}

let fnCompare = () => {

    nrInput = Number(document.getElementById('idInput').value);

    if (nrInput === guessedNr) {
        console.log('Richtig! Du hast gewonnen! Du hast ', nrInput, ' eingegeben und die Nummer ist :', guessedNr);
        document.getElementById('idOutput').innerHTML = 'Richtig! Du hast gewonnen! Du hast ' + nrInput + ' eingegeben und die Nummer ist :' + guessedNr;
    } else {
        console.log('Falsch! Du hast verloren! Die Nummer lautet : ' + guessedNr);
        document.getElementById('idOutput').innerHTML = 'Falsch! Du hast verloren! Die Nummer lautet : ' + guessedNr;
    }

}

let fnStart = () => {
    document.getElementById('idOutput').innerHTML = '';
    fnGuessNr();
    fnCompare();

} 