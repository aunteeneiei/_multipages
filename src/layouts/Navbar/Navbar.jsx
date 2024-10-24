import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ tab, setTab, products, carts, setToken }) {
  return (
    <div className="navbar-container">
      <Link to={"/home"}>
        <button
          className={
            "btn " + (tab === "home" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("home")}
        >
          Home
        </button>
      </Link>

      <Link to={"/calculator"}>
        <button
          className={
            "btn " +
            (tab === "calculator" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("calculator")}
        >
          Calculator
        </button>
      </Link>
      <Link to={"/Animetion"}>
        <button
          className={
            "btn " +
            (tab === "Animetion" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("Animetion")} 
        >
          Animetion
        </button>
      </Link>

      <Link to={"/components"}>
        <button
          className={
            "btn " +
            (tab === "compponant" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("compponant")}
        >
          Components
        </button>
      </Link>

      <Link to={"/todo"}>
        <button
          className={
            "btn " + (tab === "todo" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("todo")}
        >
          Todo
        </button>
      </Link>

      <Link to={"/product"}>
        <button
          className={
            "btn " + (tab === "product" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("product")}
        >
          Product ({products.length})
        </button>
      </Link>

      <Link to={"/cart"}>
        <button
          style={{ position: "relative", boxShadow: "0 0 0.25 rem gray" }}
          className={
            "btn " + (tab === "cart" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("cart")}
        >
          Cart
          {carts.length > 0 && (
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {carts.length < 10 ? carts.length : "9+"}
              <span class="visually-hidden">unread messages</span>
            </span>
          )}
        </button>
        <button
          className="btn btn-outline-danger"
          style={{ marginLeft: "1rem" }}
          onClick={() => {
            setToken("");
          }}
        >
          Logout
        </button>
      </Link>
    </div>
  );
}

export default Navbar;
