import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../../css/ServicesCss/Clearance/ClearanceType.css";

function ServiceCargoType() {
  return (
    <div className="sea-freight-container">
  

      <Container fluid className="position-relative">
        <img
          className="bg-main-img"
          src="images/CargoService/cargo-mixed.png"
          alt=""
          style={{ transform: "translateY(0%)" }}
        />
        <div className="container-cc-type-serv">
          <div className="card-cc-type-serv row">
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/OceanFreight/RORO.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>RORO</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ServiceCargoType;
