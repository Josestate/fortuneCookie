import React from 'react';
import '../PhraseCard/PhraseCard.css'

export default function PhraseCard({randomPhrase}) {
  return (
    <section>
        <h2>{ randomPhrase.phrase }</h2>
    </section>
  )
}
