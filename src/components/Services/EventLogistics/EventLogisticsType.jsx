import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../../css/ServicesCss/EventLogistics/EventLogisticsType.css";

function EventLogisticsType() {
  return (
    <>
      <Container fluid className="container-ev-l-type-serv">
        <h3 className="main-title-ev-l-type-serv">EVENT SERVICES OFFERED</h3>
        <img
          className="bg-main-img"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
        <Row className="card-ev-l-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/EventLogistics/SupplyChainandTransportSolutions.jpg"
                className="ev-l-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Supply Chain and Transport Solutions</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/EventLogistics/TimeCriticalFreightMovement.jpg"
                className="ev-l-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Time Critical Freight Movement</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/EventLogistics/SpecialCustomsOperations.jpg"
                className="ev-l-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Special Customs Operations</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="card-ev-l-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/EventLogistics/WarehousingandEventSpecificCargoHandling.jpg"
                className="ev-l-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Warehousing and Event Specific Cargo Handling
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/EventLogistics/VenueDeliveriesandOnsiteHandling.jpg"
                className="ev-l-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Venue Deliveries and Onsite Handling
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

export default EventLogisticsType;
