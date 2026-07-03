function ProductCard({
  productName,
  price,
  quantity,
  available,
  shopName,
  phone,
  email,
  address,
}) {
  return (
    <div className="product-card">
      <h3>{productName}</h3>

      <p>
        <strong>Price:</strong> ₹{price}
      </p>

      <p>
        <strong>Quantity:</strong> {quantity}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {available ? "Available ✅" : "Unavailable ❌"}
      </p>

      <hr />

      <h4>{shopName}</h4>

      <p>📞 {phone}</p>
      <p>📧 {email}</p>
      <p>📍 {address}</p>

      <button>Contact Shop</button>
    </div>
  );
}

export default ProductCard;