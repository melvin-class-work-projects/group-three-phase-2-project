import { Container, Row, Col } from 'react-bootstrap';
import React from "react";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <p>Copyright © Your Company</p>
          </Col>
          <Col xs={12} md={8}>
            <nav>
              <ul>
                <li><a href="/profile.php">Terms of Use</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;