import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Nav( {cartCount} ) {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#D32F2F' }}>
      <div className="container">
        {/* شعار المطعم */}
        <Link className="navbar-brand fw-bold" to="/"> The Fry Spot </Link>

        {/* زر الـ toggle للشاشات الصغيرة */}
        <button onClick={() => navigate("/cart")}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* روابط التنقل */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/specials">Specials</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">Menu</Link>
            </li>
          </ul>

          <Link to="/cart" className="btn btn-warning ms-3">
            🛒 Cart <span className="badge bg-dark text-white ms-1">{cartCount}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
