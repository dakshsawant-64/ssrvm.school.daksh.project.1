function ContactShop({
  shopName,
  ownerName,
  phone,
  whatsapp,
  email,
  address,
}) {
  return (
    <main className="contact-shop">
      <h1>Contact Shop</h1>

      <div className="contact-card">
        <h2>{shopName}</h2>

        <p>
          <strong>Owner:</strong> {ownerName}
        </p>

        <p>
          <strong>Phone:</strong> {phone}
        </p>

        <p>
          <strong>WhatsApp:</strong> {whatsapp}
        </p>

        <p>
          <strong>Email:</strong> {email}
        </p>

        <p>
          <strong>Address:</strong> {address}
        </p>

        <div className="contact-buttons">
          <a href={`tel:${phone}`}>
            <button>📞 Call</button>
          </a>

          <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
            <button>💬 WhatsApp</button>
          </a>

          <a href={`mailto:${email}`}>
            <button>📧 Email</button>
          </a>
        </div>
      </div>
    </main>
  );
}

export default ContactShop;