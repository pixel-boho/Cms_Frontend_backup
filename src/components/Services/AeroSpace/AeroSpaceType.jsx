import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../../css/ServicesCss/AeroSpace/AeroSpaceType.css";

function AeroSpaceType() {
  return (
<<<<<<< Updated upstream
    <>
      <Container fluid className="container-adl-type-serv">
        <h3 className="main-title-adl-type-serv">
          Our Aviation and Defence <br />
          Services Include:
        </h3>
=======
    <div className="aerospace-container" >
      <Container fluid className="position-relative">
        <div className="container-cc-type-serv">
          <h3 className="main-title-cc-type-serv">
            Our Aviation and Defence Services Include:
          </h3>
        </div>
>>>>>>> Stashed changes
        <img
          className="bg-main-img"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
<<<<<<< Updated upstream
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
=======
        <div className="container-cc-type-serv">
          <div className="card-cc-type-serv row">
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/AeroSpace/ComplexProjectManagement.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title> Complex Project Management</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/AeroSpace/CustomandComplianceFormalities.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Custom and Compliance Formalities</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/AeroSpace/LogisticsConsulting.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title> Logistics Consulting</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </div>

        <div className="container-cc-type-serv">
          <div className="card-cc-type-serv row">
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/AeroSpace/FlowManagement.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Flow Management</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/AeroSpace/ProductionLogistics.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title> Production Logistics</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/AeroSpace/Returnandrepairprograms.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Return and repair programs</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </div>
      </Container>

      <Container fluid className="position-relative">
>>>>>>> Stashed changes
        <img
          className="bg-main-img-one"
          src="images/CargoService/cargo-mixed.png"
          alt=""
          style={{ transform: "translateY(0)" }}
        />
<<<<<<< Updated upstream
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
=======
        <div className="container-cc-type-serv">
          <div className="card-cc-type-serv row">
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/AeroSpace/Engineexperts.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Engine experts</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </div>
>>>>>>> Stashed changes
      </Container>
    </div>
  );
}

export default AeroSpaceType;
