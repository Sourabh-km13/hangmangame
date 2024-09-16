import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import img from '../assets/images/image7.svg'

export default function Lose() {
    const location= useLocation()
    return(
        <div  className="min-h-screen flex flex-col gap-4 items-center">
            <div className='text-3xl text-red-400'>{`Given word:${location.state.orignalWord}`}</div>
            
            <div className='text-3xl text-violet-600'>You Lose, Hanged!!</div>

            <img className='w-40 h-40 ' src={img} alt="hanged img" />
            <Link to='/'  className="text-blue-700 text-2xl px-2 py-1 mx-2 my-8 border-2 border-gray-400 rounded-md shadow-md
             hover:text-cyan-400 duration-300 hover:shadow-cyan-400/40">Play Again</Link>

        </div>
        
        )
  
}
