import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Maskedtext } from './../components/maskedText/Maskedtext';
import Keyboard from './../components/keyboard/Keyboard';





function PlayGame() {
    const location= useLocation()
    const word=location.state.value
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);

    function handleLetterClick(letter) {
        if(word.toUpperCase().includes(letter)) {
            console.log('Correct');
        } else {
            console.log('Wrong');
            setStep(step + 1);
        }

        setGuessedLetters([...guessedLetters, letter]);
    }
    
    return (
        <>
            <h1>Guess the word</h1>
            <Maskedtext
            orignalWord={word}
            guessedletters={guessedLetters}
            />
            <br />
          <div>
            <Keyboard
            guessedword={guessedLetters}
            orignalword={word}
            onletterclick={handleLetterClick}/>
          </div>
            <Link to='/start'  className="text-blue-400">Start Game Link</Link>
        </>
    );
}

export default PlayGame;