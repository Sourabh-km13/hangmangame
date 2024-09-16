import React, { useState } from 'react'
import { MaskedTextmaking } from './maskedTextmaking'
import { useNavigate } from 'react-router-dom'


 export function Maskedtext({guessedletters,orignalWord,hint}) {
   const navigate= useNavigate()
    
    const result=MaskedTextmaking(orignalWord,guessedletters)
    if(result.join('')===orignalWord.toUpperCase()){
        setTimeout(() => {
            
            navigate('/end',{state:{orignalWord}})
        }, 500);
    }
    
    

    return(
        <>
        <h1 className='text-xl mx-2 text-white'>Guess the word</h1>
        {
            result.map((char, idx)=>{
               return <span key={idx} className='mx-2 text-lg text-amber-400'>
                 {char}
               </span>
            })
        }
        <div className='mx-2 text-white underline text-lg'>Hint : {hint}</div>
        </>
    )
    
}
