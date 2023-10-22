import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../../css/ServicesCss/EventLogistics/EventLogisticsType.css";

function EventLogisticsType() {
  return (
    <>
      <Container fluid className="position-relative">
        <div className="container-cc-type-serv">
          <h3 className="main-title-cc-type-serv  pb-3">Event Logistics Services Offer</h3>
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
                  src="images/EventLogistics/SupplyChainandTransportSolutions.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Supply Chain and Transport Solutions</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/EventLogistics/TimeCriticalFreightMovement.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Time Critical Freight Movement</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/EventLogistics/SpecialCustomsOperations.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Special Customs Operations<br/><br/></Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </div>

        <div className="container-cc-type-serv air-freight-second">
          <div className="card-cc-type-serv row">
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/EventLogistics/WarehousingandEventSpecificCargoHandling.jpg"
                  className="cc-type-serv-general"
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
              <Card className="card-child-service">
                <Card.Img
                  src="images/EventLogistics/VenueDeliveriesandOnsiteHandling.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Venue Deliveries and Onsite Handling</Card.Title>
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

export default EventLogisticsType;
