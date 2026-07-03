import ProductCard from "./ProductCard";

function SearchResults({ results }) {
  if (!results || results.length === 0) {
    return (
      <div className="search-results">
        <h2>Search Results</h2>
        <p>No products found.</p>
      </div>
    );
  }

  return (
    <div className="search-results">
      <h2>Search Results</h2>

      <div className="products">
        {results.map((product) => (
          <ProductCard
            key={product.id}
            productName={product.productName}
            price={product.price}
            quantity={product.quantity}
            available={product.available}
            shopName={product.shopName}
            phone={product.phone}
            email={product.email}
            address={product.address}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
