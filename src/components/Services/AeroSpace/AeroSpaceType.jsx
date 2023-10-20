import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../../css/ServicesCss/Clearance/ClearanceType.css";

function AeroSpaceType() {
  return (
    <>
      <Container fluid className="position-relative">
        <div className="container-cc-type-serv">
          <h3 className="main-title-cc-type-serv">
          Our Aviation and Defence
          Services Include:
          </h3>
        </div>
        <img
          className="bg-main-img"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
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
                  <Card.Title>
                  Flow Management
                  </Card.Title>
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
                  <Card.Title>  Production Logistics</Card.Title>
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
                  <Card.Title>
                  Return and repair programs
                  </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </div>
      </Container>


      <Container fluid className="position-relative">
        <img
          className="bg-main-img"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
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
      </Container>
    </>
  );
}

export default AeroSpaceType;
