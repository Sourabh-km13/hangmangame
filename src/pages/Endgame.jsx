import React from 'react'

import { Link, useLocation } from 'react-router-dom';

export default function Endgame() {
   
    const location=useLocation( )
   
        return(
        <div className="h-screen text-center">
            <div className='text-3xl mx-2 my-1 text-green-400'>{`Given word:${location.state.orignalWord}`}</div>
            
            <div className='text-3xl mx-2 my-10 text-violet-600'>You Won!!</div>
            <Link to='/'  className="text-blue-700 text-2xl px-2 py-1 mx-2 my-8 border-2 border-gray-400 rounded-md shadow-md
             hover:text-cyan-400 duration-300 hover:shadow-cyan-400/40">Play Again</Link>
        </div>
        )
    

}
