import ProductList from "../components/ProductList";
import products from "../data/products";

function ProductsPage() {
  return (
    <section className="page">
      <h2>Products</h2>
      <p className="muted">Pick your next favorite book.</p>
      <ProductList products={products} />
    </section>
  );
}

export default ProductsPage;