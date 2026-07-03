function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h2>ShopConnect</h2>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#">Browse Shops</a>
        </li>

        <li>
          <a href="#">Search</a>
        </li>

        <li>
          <a href="#">Login</a>
        </li>

        <li>
          <a href="#">Register Shop</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;