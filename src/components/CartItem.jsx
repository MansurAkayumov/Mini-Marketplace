import './CartItem.css'

function CartItem({ item, onRemove, onUpdateQuantity }) {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10) || 0
    onUpdateQuantity(item.id, newQuantity)
  }

  const handleRemove = () => {
    onRemove(item.id)
  }

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-info">
        <h4 className="cart-item-title">{item.title}</h4>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
        <div className="cart-item-controls">
          <label>
            Quantity:
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={handleQuantityChange}
              className="quantity-input"
            />
          </label>
          <button onClick={handleRemove} className="remove-btn">
            Remove
          </button>
        </div>
        <p className="cart-item-subtotal">
          Subtotal: ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  )
}

export default CartItem

