import { useState, useEffect } from 'react'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return

    // recuperar la primera palabra del hecho
    const firstWord = fact.split(' ')[0]
    console.log('La primera palabra:' + firstWord)

    // recuperar las 3 primera palabras del hecho
    const firstThreeWord = fact.split(' ').slice(0, 3).join(' ')
    console.log(`Las tres primeras palabras: ${firstThreeWord}`)

    const imageUrl = `https://cataas.com/cat/says/${firstThreeWord}?fontSize=50&fontColor=white`
    setImageUrl(imageUrl)
  }, [fact])

  return { imageUrl }
}
