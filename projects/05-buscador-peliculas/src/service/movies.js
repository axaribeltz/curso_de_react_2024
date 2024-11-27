const API_KEY = '8bd45a54'

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${search}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Title,
      poster: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error al buscar una película')
  }
}
