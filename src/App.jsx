import { useState } from 'react';
import './App.css';
import getRandom from './utils/getRandom';
import phrases from './utils/phrases.json';
import PhraseCard from './components/PhraseCard/PhraseCard';
import PhraseChanger from './components/PhraseChanger/PhraseChanger'

function App() {
  const initialVal = getRandom(phrases);
  const [randomPhrase, setRandomPhrase] = useState(initialVal);
  const [imageSelected, setImageSelected] = useState(1)

  const objStyle = { 
    backgroundImage : `url('../public/fondo${imageSelected}.png')`
   }
   
  return (
    <main style={objStyle}>
      <h1>Fortune cookie</h1>
      <PhraseCard randomPhrase={randomPhrase} />
      <PhraseChanger setRandomPhrase={setRandomPhrase} />
    </main>
  )
}

export default App
