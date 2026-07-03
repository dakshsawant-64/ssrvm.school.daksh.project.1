import SearchBar from "./SearchBar";
import ProductList from "./ProductList";

function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Welcome to ShopConnect</h1>

        <p>
          Find products from nearby shops, compare prices, and contact shop
          owners directly.
        </p>

        <SearchBar />
      </section>

      <section className="products-section">
        <h2>Available Products</h2>

        <ProductList />
      </section>
    </main>
  );
}

export default Home;