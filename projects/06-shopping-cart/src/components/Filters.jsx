import { useId } from 'react'
import '../css/Filters.css'
import { useFilters } from '../hooks/useFilters.js'

export function Filters () {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>
          Precio a partir de:
        </label>
        <input type='range' id={minPriceFilterId} min='0' max='1000' value={filters.minPrice} onChange={handleChangeMinPrice} />
        <span>{filters.minPrice}€</span>
      </div>

      <div>
        <label htmlFor='category'>Categoria</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='beauty'>Estética</option>
          <option value='fragrances'>Fragancias</option>
        </select>
      </div>
    </section>
  )
}
