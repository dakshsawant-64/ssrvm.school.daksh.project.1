function ShopProfile({
  shopName,
  ownerName,
  email,
  phone,
  whatsapp,
  address,
}) {
  return (
    <main className="shop-profile">
      <div className="shop-card">
        <h1>{shopName}</h1>

        <p>
          <strong>Owner:</strong> {ownerName}
        </p>

        <p>
          <strong>Email:</strong> {email}
        </p>

        <p>
          <strong>Phone:</strong> {phone}
        </p>

        <p>
          <strong>WhatsApp:</strong> {whatsapp}
        </p>

        <p>
          <strong>Address:</strong> {address}
        </p>

        <div className="contact-buttons">
          <button>📞 Call</button>
          <button>💬 WhatsApp</button>
          <button>📧 Email</button>
        </div>
      </div>
    </main>
  );
}

export default ShopProfile;