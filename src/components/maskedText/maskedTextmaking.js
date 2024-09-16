export function MaskedTextmaking(orignalWord , guessedLetters) {
    
    
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
