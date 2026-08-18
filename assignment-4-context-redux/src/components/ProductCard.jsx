import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>
      <button className="btn" onClick={() => dispatch(addItem(product))}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;