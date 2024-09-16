import { Link, useLocation , useNavigate} from "react-router-dom";
import { useState } from "react";
import { Maskedtext } from './../components/maskedText/Maskedtext';
import Keyboard from './../components/keyboard/Keyboard';
import { Hangman } from './../components/hangman/hangman';

function PlayGame() {
    const location= useLocation()
    const navigate= useNavigate()
    const word=location.state.value
    const hint=location.state.hint
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);

    if (step>=6) {
        setTimeout(() => {
            navigate('/lose',{state:{orignalWord:word}})
        }, 500);
    }
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
            
            <Maskedtext
            orignalWord={word}
            guessedletters={guessedLetters}
            hint={hint}
            />
            <br />
          <div>
            <Keyboard
            guessedword={guessedLetters}
            orignalword={word}
            onletterclick={handleLetterClick}/>

            <Hangman step={step} orignalWord={word}/>
          </div>
            <Link to='/'  className="text-blue-400">Start Again</Link>
        </>
    );
}

export default PlayGame;