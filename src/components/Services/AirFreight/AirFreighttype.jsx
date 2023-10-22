import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../../css/ServicesCss/AirFreight/AirFreighttype.css";

function AirFreighttype() {
  return (
<<<<<<< Updated upstream
    <>
      <Container fluid className="container-air-fgt-type-serv">
        <h3 className="main-title-air-fgt-type-serv">
          Types of Cargo We Handle
          <br /> for Air Freight
        </h3>
=======
    <div className="air-freight-container">
      <Container fluid className="position-relative">
        <div className="container-cc-type-serv">
          <h3 className="main-title-cc-type-serv  pb-3">
            Types of Cargo We Handle for Air Freight
          </h3>
        </div>
>>>>>>> Stashed changes
        <img
          className="bg-main-img"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
<<<<<<< Updated upstream
        <Row className="card-air-fgt-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/AirFreight/General.jpg"
                className="air-fgt-type-serv-general"
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
                src="images/AirFreight/PerishablesandTemperatureControlled.jpg"
                className="air-fgt-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Perishables and Temperature Controlled</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/OceanFreight/DangerousGoods.jpg"
                className="air-fgt-type-serv-general"
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
        </Row>
        <h3 className="main-second-air-fgt-type-serv-title">
          Types of Air Freight
          <br /> Services We Offer
        </h3>
        <Row className="card-air-fgt-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/AirFreight/Deferred.jpg"
                className="air-fgt-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Deferred</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/AirFreight/Consolidation.jpg"
                className="air-fgt-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Consolidation</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/AirFreight/Back-to-Back.jpg"
                className="air-fgt-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Back-to-Back</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container fluid className="container-air-fgt-type-serv">
=======
        <div className="container-cc-type-serv">
          <div className="card-cc-type-serv row">
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/AirFreight/General.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>General<br/><br/></Card.Title>
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
                  <Card.Title> Dangerous Goods<br/><br/></Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </div>

        <div className="container-cc-type-serv air-freight-second">
          <Col xs={12}>
            <h3 className="main-title-cc-type-serv  text-xs-white  pb-3 pt-3">
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
>>>>>>> Stashed changes
        <img
          className="bg-main-img-one"
          src="images/CargoService/cargo-mixed.png"
          alt=""
          style={{ transform: "translateY(0)" }}
        />
<<<<<<< Updated upstream
        <Row className="card-air-fgt-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/AirFreight/Express.jpg"
                className="air-fgt-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Express</Card.Title>
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
>>>>>>> Stashed changes
      </Container>
    </div>
  );
}

export default AirFreighttype;
