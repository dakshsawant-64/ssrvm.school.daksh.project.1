import { useState } from "react";

function Register() {
  const [shopName, setShopName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Later, this data will be sent to the backend.
    console.log({
      shopName,
      ownerName,
      email,
      phone,
      whatsapp,
      address,
      password,
    });
  };

  return (
    <main className="register-page">
      <h2>Register Your Shop</h2>

      <form className="register-form" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Shop Name"
          value={shopName}
          onChange={(e) => setShopName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Owner Name"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="WhatsApp Number (Optional)"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
        />

        <textarea
          placeholder="Shop Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          rows="4"
          required
        />

        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register Shop</button>
      </form>
    </main>
  );
}

export default Register;