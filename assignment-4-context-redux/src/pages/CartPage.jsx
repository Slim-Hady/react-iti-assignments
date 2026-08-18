import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeItem,
  selectCartItems,
  selectCartTotal,
} from "../redux/slices/cartSlice";

function CartPage() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  if (items.length === 0) {
    return (
      <section className="page">
        <h2>Your cart is empty 🛒</h2>
        <p className="muted">Add some products to get started.</p>
      </section>
    );
  }

  return (
    <section className="page">
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button className="btn btn-clear" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </button>
      </div>

      {items.map((item) => (
        <div className="cart-item" key={item.id}>
          <span className="cart-item-name">
            {item.name} × {item.quantity}
          </span>
          <span className="cart-item-price">${item.price * item.quantity}</span>
          <button
            className="btn btn-remove"
            onClick={() => dispatch(removeItem(item.id))}
          >
            Remove
          </button>
        </div>
      ))}

      <div className="cart-total">
        <strong>Total: ${total}</strong>
      </div>
    </section>
  );
}

export default CartPage;