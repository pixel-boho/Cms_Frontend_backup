import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../../css/ServicesCss/ServiceCargoType.css";

function ServiceCargoType() {
  return (
    <>
      <Container fluid className="container-offcs-type-serv">
        <h3 className="main-title-offcs-type-serv">
          Types of Cargo We Handle
          <br /> for Ocean Freight
        </h3>
        <img
          className="bg-main-img"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
        <Row className="card-offcs-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/OceanFreight/General.jpg"
                className="offcs-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  General
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
                src="images/OceanFreight/DangerousGoods.jpg"
                className="offcs-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Dangerous Goods
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
                src="images/OceanFreight/PerishablesandTemperatureControlled.jpg"
                className="offcs-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Perishables and Temperature Controlled</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h3 className="main-second-offcs-type-serv-title">
          Types Of Ocean Freight <br />
          Services We Offer
        </h3>
        <Row className="card-offcs-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/OceanFreight/FullContainerLoad.jpg"
                className="offcs-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Full Container Load (FCL)</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/OceanFreight/LessthanContainerLoad.jpg"
                className="offcs-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Less than Container Load (LCL)</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/OceanFreight/BreakBulk.jpg"
                className="offcs-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Break Bulk
                  <br />
                  <br />
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container fluid className="container-offcs-type-serv">
        <img
          className="bg-main-img-one"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
        <Row className="card-offcs-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/OceanFreight/RORO.jpg"
                className="offcs-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  RORO
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

export default ServiceCargoType;
