import {React,useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import Button from './../components/Button/Button';

export default function Home() {
  const [randomword, setRandomword] = useState('')
  const [randomhint, setRandomhint] = useState('')
  
  useEffect(() => {
    Giveword()
  }, [])
  
  async function Giveword() {
     const a= await fetch('https://sourabh-km13.github.io/Wordlet/Words.json');
     const response= await a.json()
     console.log(response);
     const randno=Math.floor(Math.random()*50)
     setRandomword (response.wordLet[randno].word)
     setRandomhint(response.wordLet[randno].hint)
  }

  return (
   <>
   <div className='h-screen bg-blue-950 flex flex-col justify-center items-center gap-4'>
    <Link to={'/play'} state={{value:randomword,hint:randomhint}}>
    <Button text={'Play Single Player'} styleType='secondary'/>
    </Link>
    <br />
    <Link to={'/start'}>
    <Button text={'Play 2 Player Mode'}/>
    </Link>
   </div>
   </>
  )
}
