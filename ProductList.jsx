import ProductCard from "./ProductCard";

function ProductList() {
  // Temporary sample data.
  // Later this will come from MongoDB.
  const products = [
    {
      id: 1,
      productName: "Arduino Uno",
      price: 650,
      quantity: 15,
      available: true,
      shopName: "Daksh Electronics",
      phone: "9876543210",
      email: "shop@email.com",
      address: "Borivali West, Mumbai",
    },
    {
      id: 2,
      productName: "Ultrasonic Sensor",
      price: 180,
      quantity: 8,
      available: true,
      shopName: "Tech World",
      phone: "9123456789",
      email: "techworld@email.com",
      address: "Mumbai",
    },
  ];

  return (
    <div className="products">
      {products.map((product) => (
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
  );
}

export default ProductList;