import { useState } from "react";

function AddProduct() {
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    image: "",
    available: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProduct((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later this will send the product to MongoDB.
    console.log(product);
  };

  return (
    <main className="add-product-page">
      <h1>Add Product</h1>

      <form className="add-product-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={product.productName}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Product Description"
          value={product.description}
          onChange={handleChange}
          rows="4"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={product.quantity}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
        />

        <input
          type="url"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
        />

        <label>
          <input
            type="checkbox"
            name="available"
            checked={product.available}
            onChange={handleChange}
          />
          Product Available
        </label>

        <button type="submit">Add Product</button>

      </form>
    </main>
  );
}

export default AddProduct;