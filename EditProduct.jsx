import { useState } from "react";

function EditProduct() {
  // Temporary sample data.
  // Later this will come from MongoDB.
  const [product, setProduct] = useState({
    productName: "Arduino Uno",
    description: "Microcontroller development board",
    price: 650,
    quantity: 15,
    category: "Electronics",
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

    // Later this will update the product in MongoDB.
    console.log("Updated Product:", product);
  };

  return (
    <main className="edit-product-page">
      <h1>Edit Product</h1>

      <form className="edit-product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="productName"
          value={product.productName}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          rows="4"
          value={product.description}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
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

        <button type="submit">Save Changes</button>
      </form>
    </main>
  );
}

export default EditProduct;