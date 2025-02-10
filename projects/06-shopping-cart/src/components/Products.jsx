import '../css/Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icon'
import { useCart } from '../hooks/useCart'

export function Products ({ products }) {
  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {products.map(product => {
          const isProductInCart = checkProductInCart(product)

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - {product.price}€
              </div>
              <div>
                <button
                  className={`product-item ${isProductInCart ? 'in-cart' : 'not-in-cart'}`}
                  onClick={() => isProductInCart
                    ? removeFromCart(product)
                    : addToCart(product)}
                >
                  {
                    isProductInCart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                  }
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
