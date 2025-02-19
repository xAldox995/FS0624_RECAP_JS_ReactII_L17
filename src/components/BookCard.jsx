/* eslint-disable react/prop-types */
import { Component } from "react";
import { Card } from "react-bootstrap";

class BookCard extends Component {
  state = {
    selected: false,
  };

  switchState = () => {
    this.setState({
      selected: !this.state.selected
    })
  };

  render() {
    const cardStyle = {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    };

    const imgStyle = {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    };

    const bodyStyle = {
      height: "150px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    };
    return (
      <Card style={cardStyle}
      className={`h-100 shadow-sm rounded ${this.state.selected ? "border border-5 border-danger" : "border-0"}`}
      onClick= {this.switchState}
      >
        <Card.Img
          style={imgStyle}
          variant="top"
          src={this.props.img}
          className="book-img"
        />

        <Card.Body
          style={bodyStyle}
          className="d-flex flex-column justify-content-between"
        >
          <Card.Title className="text-truncate fw-bold">
            {this.props.title}
          </Card.Title>

          <Card.Text className="small text-muted">
            {this.props.category}
          </Card.Text>
          <strong>{this.props.price} €</strong>
        </Card.Body>
      </Card>
    );
  }
}
export default BookCard;
