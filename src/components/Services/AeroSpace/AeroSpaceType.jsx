import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../../css/ServicesCss/AeroSpace/AeroSpaceType.css";

function AeroSpaceType() {
  return (
    <>
      <Container fluid className="container-adl-type-serv">
        <h3 className="main-title-adl-type-serv">
          Our Aviation and Defence <br />
          Services Include:
        </h3>
        <img
          className="bg-main-img"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
        <Row className="card-adl-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/AeroSpace/ComplexProjectManagement.jpg"
                className="adl-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Complex Project Management
                  <br />
                  <br />
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/AeroSpace/CustomandComplianceFormalities.jpg"
                className="adl-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Custom and Compliance Formalities</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/AeroSpace/LogisticsConsulting.jpg"
                className="adl-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Logistics Consulting
                  <br />
                  <br />
                  <br />
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="card-adl-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/AeroSpace/FlowManagement.jpg"
                className="adl-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Flow Management
                  <br />
                  <br />
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/AeroSpace/ProductionLogistics.jpg"
                className="adl-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Production Logistics
                  <br />
                  <br />
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/AeroSpace/Returnandrepairprograms.jpg"
                className="adl-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Return and repair programs</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container fluid className="container-adl-type-serv">
        <img
          className="bg-main-img-one"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
        <Row className="card-adl-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/AeroSpace/Engineexperts.jpg"
                className="adl-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Engine experts
                  <br />
                  <br />
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AeroSpaceType;
