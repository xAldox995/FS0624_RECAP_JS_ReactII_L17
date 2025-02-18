import { Col } from "react-bootstrap";
import horrors from "../data/horror.json";
import BookCard from "./BookCard";

const AllTheBooks = () => {
  return horrors.map((book) => {
    return (
      <Col key={book.asin}>
        {/* <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              <p>{book.category}</p>
              <strong>{book.price} €</strong>
            </Card.Text>
          </Card.Body>
        </Card> */}
        <BookCard img={book.img} title={book.title} category={book.category} price={book.price}/>
      </Col>
    );
  });
};

export default AllTheBooks;
