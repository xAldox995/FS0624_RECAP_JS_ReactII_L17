import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";

class MyFooter extends Component {
render() {
    return(
        <Container>
        <Row className="text-center text-md-start">
          {/* Logo e About */}
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="fw-bold">BookStore</h5>
            <p className="small">
              Il tuo shop online per libri di ogni genere. Scopri il nostro
              catalogo e lasciati ispirare dalle migliori letture.
            </p>
          </Col>

          {/* Link Utili */}
          <Col md={4} className="mb-3 mb-md-0">
            <h6 className="fw-bold">Navigazione</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">Home</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Catalogo</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Offerte</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Contatti</a></li>
            </ul>
          </Col>

          {/* Contatti e Social */}
          <Col md={4} className="text-center text-md-end">
            <h6 className="fw-bold">Contattaci</h6>
            <p className="small mb-1">Email: support@bookstore.com</p>
            <p className="small">Telefono: +39 0123 456 789</p>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="#" className="text-dark"><Facebook size={20} /></a>
              <a href="#" className="text-dark"><Twitter size={20} /></a>
              <a href="#" className="text-dark"><Instagram size={20} /></a>
            </div>
          </Col>
        </Row>

        <hr className="my-3" />

        {/* Copyright */}
        <Row>
          <Col className="text-center">
            <p className="small mb-0">&copy; {new Date().getFullYear()} BookStore. Tutti i diritti riservati.</p>
          </Col>
        </Row>
      </Container>
    )
}
}

export default MyFooter