const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let randWords = "";

let sWord = ['python', 'javascript', 'css', 'cpp', 'php', 'csharp', 'html', 'reactjs', 'angular', 'swift', 'android', 'rubby', 'java', 'typescript', 'nodejs', 'expressjs', 'nextjs', 'vuejs']

const createNewWords = () => {
    let ranNum = Math.floor(Math.random() * sWord.length);
    let newTempSwords = sWord[ranNum];
    return newTempSwords;
}

const scrambleWord = (arr) => {

    for (let i = arr.length - 1; i > 0; i--) {
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i + 1));

        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

btn.addEventListener('click', () => {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = createNewWords();//generating the random word from array
        randWords = scrambleWord(newWords.split("")).join(""); //generating Scrambled word for showing on the display
        msg.innerHTML = `Guess the word : ${randWords}`

    } else {
        let tempWord = guess.value;
        if (tempWord === newWords) {
            play = false;
            msg.innerHTML = `Great you gussed Right ! it is ${newWords}`;
            btn.innerHTML = "Start Again";
            guess.classList.toggle('hidden');
            guess.value = "";
        } else {
            msg.innerHTML = `You guessed wrong ! Guess Again - ${randWords}`;
        }
    }
})
