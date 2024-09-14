export function MaskedTextmaking(orignalWord , guessedLetters) {
    console.log('gsl2',guessedLetters);
    
    guessedLetters=guessedLetters.map(char=>char.toUpperCase()
    )
    const guessedLetterset= new Set(guessedLetters)

    const maskedWord=orignalWord.toUpperCase().split('').map((char)=>{
            if(guessedLetterset.has(char)){
                return char
            }
            else{
                return '_'
            }
    })
    return maskedWord
}
