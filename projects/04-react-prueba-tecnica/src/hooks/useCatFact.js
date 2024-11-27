import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then((newFact) => {
      setFact(newFact)
    })
  }

  // recuperar el fact cada vez que carga la pagina
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
