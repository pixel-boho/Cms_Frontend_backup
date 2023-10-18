import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../../css/ServicesCss/RoadFreight/RoadFreightType.css";

function RoadFreightType() {
  return (
    <>
      <Container fluid className="container-rfgt-type-serv">
        <h3 className="main-title-rfgt-type-serv">
          Types of Road Freight <br />
          Services We Offer
        </h3>
        <img
          className="bg-main-img"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
        <Row className="card-rfgt-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/RoadFreight/FullTruckLoad.jpg"
                className="rfgt-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Full Truck Load (FTL)
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
                src="images/RoadFreight/LessthanTruckload.jpg"
                className="rfgt-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Less than Truckload (LTL)</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/RoadFreight/DomesticTransportation.jpg"
                className="rfgt-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Domestic Transportation</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="card-rfgt-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/RoadFreight/GCCTransportation.jpg"
                className="rfgt-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  GCC Transportation
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
                src="images/RoadFreight/HeavyHaulage.jpg"
                className="rfgt-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Heavy Haulage
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
                src="images/RoadFreight/SpecialEquipmentRental.jpg"
                className="rfgt-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Special Equipment Hire and Rental</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container fluid className="container-rfgt-type-serv">
        <img
          className="bg-main-img-one"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
        <Row className="card-rfgt-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/RoadFreight/MallDeliveries.jpg"
                className="rfgt-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Mall Deliveries
                  <br />
                  <br />
                  <br />
                  <br />
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
                src="images/RoadFreight/TemperatureControlled.jpg"
                className="rfgt-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Temperature Controlled
                  <br />
                  <br />
                  <br />
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
                src="images/RoadFreight/DangerousGoodsTransportation –usingChemical.jpg"
                className="rfgt-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Dangerous Goods Transportation – using Chemical Approved /
                  Civil Defense Approved Trucks
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="card-rfgt-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/RoadFreight/OilfieldDeliveriesandBPSpecTrucks.jpg"
                className="rfgt-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Oilfield Deliveries – using PDO, Oxy and BP Spec Trucks
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

export default RoadFreightType;
