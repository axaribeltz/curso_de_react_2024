import '../css/Header.css'
import { Filters } from './Filters'

export function Header () {
  return (
    <header className='header'>
      <h1>SHOP</h1>
      <Filters />
    </header>
  )
}
