import "./Product.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Product({ products, carts, setCarts }) {
  return (
    <div className="product-container">
      <div className="products-itemps-container">
        {products.map((product) => {
          return (
            <Card style={{ width: "18rem" }} key={product.id}>
              <Card.Img variant="top" src={product.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  <b>${product.price.toFixed(2)}</b>{" "}
                </Card.Text>
                {carts.find((cart) => cart.id === product.id) ? (
                  <span className="badge bg-danger">Added</span>
                ) : (
                  <Button
                    variant="outline-primary"
                    onClick={() => setCarts([...carts, product])}
                  >
                   <span className="btn-plus"></span> Add to Carts
                  </Button>
                )}
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
