import { FILTERS_BUTTONS } from "../consts"
import { FilterValue } from "../types"

interface Props {
  filterSelected: FilterValue | undefined
  onFilterChange: (filter: FilterValue) => void
}


export const Filters: React.FC<Props> = (
  { filterSelected, onFilterChange }
) => {
  return (
    <ul className="filters">
      {
        Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
          const isSelected = key === filterSelected
          const className = isSelected ? 'selected' : ''

          return (
            <li key={key}>
              <a
                href={href}
                className={className}
                onClick={(event) => {
                  event.preventDefault()
                  onFilterChange(key as FilterValue)
                }}
              >
                {literal}
              </a>
            </li>
          )
        })
      }
    </ul>



    //REACT MAL UTILIZADO:
    // <ul className="filters">
    //   <li>
    //     <a className={`${filterSelected === 'all' ? 'selected' : ''}`} onClick={() => {
    //       onFilterChange('all')
    //     }}>
    //       Todos
    //     </a>
    //   </li>
    //   <li>
    //     <a className={`${filterSelected === 'active' ? 'selected' : ''}`} onClick={() => {
    //       onFilterChange('active')
    //     }}>
    //       Activos
    //     </a>
    //   </li>
    //   <li>
    //     <a className={`${filterSelected === 'completed' ? 'selected' : ''}`} onClick={() => {
    //       onFilterChange('completed')
    //     }}>
    //       Completados
    //     </a>
    //   </li>
    // </ul>


  )
}