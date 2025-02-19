/* eslint-disable react/prop-types */
import { Col, Container, Form, Row } from "react-bootstrap";
import BookCard from "./BookCard";
import { Component } from "react";

class AllTheBooks extends Component {
  state = {
    search: "",
  };

  handleSearch = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    const booksFiltrati = this.props.books.filter((book) => {
      return book.title.toLowerCase().includes(this.state.search.toLowerCase());
    });

    return (
      <Container>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Cerca un libro"
              value={this.state.search}
              onChange={this.handleSearch}
            />
          </Form.Group>
        <Row className="my-3 row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          {booksFiltrati.map((book) => {
            return (
              <Col key={book.asin}>
                <BookCard
                  img={book.img}
                  title={book.title}
                  category={book.category}
                  price={book.price}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
