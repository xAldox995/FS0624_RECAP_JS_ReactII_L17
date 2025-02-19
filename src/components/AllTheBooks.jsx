import { Col } from "react-bootstrap";
// import horrors from "../data/horror.json";
import BookCard from "./BookCard";

const AllTheBooks = ({books}) => {
  return books.map((book) => {
    return (
      <Col key={book.asin}>
        <BookCard img={book.img} title={book.title} category={book.category} price={book.price}/>
      </Col>
    );
  });
};

export default AllTheBooks;
