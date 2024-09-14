import React, { useState } from 'react'
import { MaskedTextmaking } from './maskedTextmaking'

export function Maskedtext({guessedletters,orignalWord}) {
    console.log('gsl',guessedletters);
    console.log('og',orignalWord);
    
    const result=MaskedTextmaking(orignalWord,guessedletters)

    return(
        <>
        {
            result.map((char, idx)=>{
               return <span key={idx} className='mx-1'>
                 {char}
               </span>
            })
        }
        </>
    )
    
}
