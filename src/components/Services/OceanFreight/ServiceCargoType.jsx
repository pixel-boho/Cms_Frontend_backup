import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../../css/ServicesCss/ServiceCargoType.css";

function ServiceCargoType() {
  return (
<<<<<<< Updated upstream
    <>
      <Container fluid className="container-offcs-type-serv">
        <h3 className="main-title-offcs-type-serv">
          Types of Cargo We Handle
          <br /> for Ocean Freight
        </h3>
=======
    <div className="sea-freight-container">
      <Container fluid className="position-relative">
        <div className="container-cc-type-serv">
          <h3 className="main-title-cc-type-serv pt-3 pb-3">
            Types Of Cargo We Handle For Ocean Freight
          </h3>
        </div>
>>>>>>> Stashed changes
        <img
          className="bg-main-img"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
<<<<<<< Updated upstream
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
                  <Card.Title>
                    General
                    <br />
                    <br />
                  </Card.Title>
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
                    Dangerous Goods
                    <br />
                    <br />
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
                  <Card.Title>Perishables & Temperature Controlled</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </div>

        <div className="container-cc-type-serv air-freight-second">
          <Col xs={12}>
            <h3 className="main-title-cc-type-serv  text-xs-white pt-3 pb-3">
              Types Of Ocean Freight Services We Offer
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
                  <Card.Title>
                    Full Container Load (FCL)
                    <br />
                    <br />
                  </Card.Title>
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
                  <Card.Title>Less than Container Load (LCL)</Card.Title>
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
                  <Card.Title>
                    RORO
                    <br />
                    <br />
                  </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </div>
      </Container>
    </div>
>>>>>>> Stashed changes
  );
}

export default ServiceCargoType;
