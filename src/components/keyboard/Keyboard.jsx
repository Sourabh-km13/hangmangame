const characters='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
function Keyboard({guessedword,orignalword,onletterclick}) {
    const originalLetters = new Set(orignalword.toUpperCase().split(''));
    const guessedLettersSet = new Set(guessedword);
    const buttonStyle = function(letter) {
        if(guessedLettersSet.has(letter)) {
            return `${originalLetters.has(letter) ? 'bg-green-500' : 'bg-red-500'}`;
        } else {
            return 'bg-blue-500';
        }
    }

    function handleClick(event){
        const character=event.target.value
        onletterclick?.(character)
    }
    const buttons=characters.map(letter=>{
        return(
            <button 
            key={`button-${letter}`}
                value={letter}
                onClick={handleClick}
                disabled={guessedLettersSet.has(letter)}
                className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}
            >
                {letter}
            </button>
        )
    })
    return(
        <div className="w-1/2 my-6">
        {buttons}
        </div>
    )
}
export default Keyboard