import { useState } from "react";

function Dashboard() {
  const [shop] = useState({
    shopName: "My Shop",
    ownerName: "Shop Owner",
  });

  return (
    <main className="dashboard">
      <h1>Dashboard</h1>

      <div className="shop-info">
        <h2>{shop.shopName}</h2>
        <p>Owner: {shop.ownerName}</p>
      </div>

      <section className="dashboard-actions">
        <button>Add Product</button>
        <button>View Products</button>
        <button>Edit Shop Details</button>
        <button>Log Out</button>
      </section>

      <section className="dashboard-products">
        <h2>Your Products</h2>

        <p>
          Your products will appear here after they are added to the database.
        </p>
      </section>
    </main>
  );
}

export default Dashboard;