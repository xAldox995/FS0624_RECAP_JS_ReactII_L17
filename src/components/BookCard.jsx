/* eslint-disable react/prop-types */
import { Component } from "react";
import { Card } from "react-bootstrap";

class BookCard extends Component {
  render() {
    return (
        <Card className="h-100 shadow-sm rounded border-0">
        <Card.Img
          variant="top"
          src={this.props.img}
          className="book-img"
        />
        
        <Card.Body className="d-flex flex-column justify-content-between">
          
          <Card.Title className="text-truncate fw-bold">{this.props.title}</Card.Title>
          
          
          <Card.Text className="small text-muted">{this.props.category}</Card.Text>
          <strong className="text-primary">{this.props.price} €</strong>
        </Card.Body>
      </Card>
    );
  }
}
export default BookCard;
