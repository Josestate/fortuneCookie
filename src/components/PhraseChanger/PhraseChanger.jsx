import React from 'react'
import getRandom from '../../utils/getRandom'
import phrases from '../../utils/phrases.json'
import '../PhraseChanger/PhraseChanger.css'

export default function phraseChanger({ randomPhrase, setRandomPhrase }) {
    const handleclick = () => { 
        const val = getRandom(phrases)
        console.log(val)
        setRandomPhrase(val)
     }
  return (
    <button onClick={handleclick}>See other</button>
  )
}
