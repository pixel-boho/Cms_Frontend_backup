import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../../css/ServicesCss/Clearance/ClearanceType.css";

function AirFreighttype() {
  return (
    <div className="air-freight-container">
      <Container fluid className="position-relative">
        <div className="container-cc-type-serv">
          <h3 className="main-title-cc-type-serv">
            Types of Cargo We Handle for Air Freight
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
                  src="images/AirFreight/General.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>General</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/AirFreight/PerishablesandTemperatureControlled.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>
                    Perishables and Temperature Controlled
                  </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/OceanFreight/DangerousGoods.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title> Dangerous Goods</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </div>

        <div className="container-cc-type-serv air-freight-second">
          <Col xs={12}>
            <h3 className="main-title-cc-type-serv  text-xs-white">
              Types of Air Freight Services We Offer
            </h3>
          </Col>
          <div className="card-cc-type-serv row">
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/AirFreight/Deferred.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Deferred</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/AirFreight/Consolidation.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Consolidation</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/AirFreight/Back-to-Back.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Back-to-Back</Card.Title>
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
          style={{ transform: "translateY(0)" }}
        />
        <div className="container-cc-type-serv">
          <div className="card-cc-type-serv row">
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/AirFreight/Express.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Express</Card.Title>
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

export default AirFreighttype;
