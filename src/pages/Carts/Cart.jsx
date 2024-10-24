import "./Cart.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Cart({ carts, setCarts }) {
  return (
    <div className="cart-container">
      <div className="carts-itemps-container">
        {carts.map((cart) => {
          return (
            <Card style={{ width: "18rem" }} key={cart.id}>
              <Card.Img variant="top" src={cart.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{cart.title}</Card.Title>
                <Card.Text>
                  <b>${cart.price.toFixed(2)}</b>{" "}
                </Card.Text>
                <Button
                  variant="outline-danger"
                  onClick={() =>
                    setCarts(carts.filter((item) => item.id !== cart.id))
                  }
                >
                  Remove form Carts
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <h4>
        Item :{carts.length} item - Total Price: $
        {carts.reduce((prev,cart)=> {
          return prev + cart.price
        },0).toFixed(2)}
      </h4>
      <button className="btn btn-warning"><span className="bi bi-credit-card-fill">&nbsp;</span>Checkout</button>
    </div>
  );
}

export default Cart;
