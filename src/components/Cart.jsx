import { useState, useEffect } from 'react'
import CartList from './CartList'
import './Cart.css'

function Cart({ items, onRemove, onUpdateQuantity }) {
  const [total, setTotal] = useState(0)
  const [itemCount, setItemCount] = useState(0)

  useEffect(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )
    setItemCount(count)
    setTotal(totalPrice)
  }, [items])

  return (
    <div className="cart">
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-summary">
            <p className="cart-count">Items: {itemCount}</p>
            <p className="cart-total">Total: ${total.toFixed(2)}</p>
          </div>
          <CartList
            items={items}
            onRemove={onRemove}
            onUpdateQuantity={onUpdateQuantity}
          />
        </>
      )}
    </div>
  )
}

export default Cart

