import './App.scss'
import quoteService from './services/quote'

import React, {useEffect, useState} from 'react'
const Title = ({header}) => {
  return (
    <div>
    <h1 className="header">{header}</h1>
    </div>
  )
}

const Quote = ({quote, newQuote}) => {
  return (
    <div>
      <div>"{[quote[1]]}" - {quote[2]}</div>
      <button onClick={newQuote}>Get New Quote</button>
    </div>
  )
}

// Main
const App = () => {
  const [quote, setQuote] = useState('')
  const [clicked, setClicked] = useState(false)


  const newQuote = () => {
    if(clicked === false) {
      setClicked(true)
    }

    setClicked(!clicked)
  }

  useEffect(() => {
    quoteService.getQuote().then(initialQuote => {
      setQuote(initialQuote)
    })


  }, [clicked])

  return (
    <div>
    <Title header="Motivational Quote"/>
    <Quote quote={quote} newQuote={newQuote}/>
  </div>
  )
  
}
  

export default App