import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../../css/ServicesCss/Clearance/ClearanceType.css";

function ServiceCargoType() {
  return (
    <>
      <Container fluid className="position-relative">
        <div className="container-cc-type-serv">
          <h3 className="main-title-cc-type-serv">
          Types of Cargo We Handle
          for Ocean Freight
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
                  src="images/OceanFreight/General.jpg"
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
                  src="images/OceanFreight/DangerousGoods.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Dangerous Goods</Card.Title> 
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/OceanFreight/PerishablesandTemperatureControlled.jpg" 
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Perishables and Temperature Controlled</Card.Title> 
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </div>

{/* 
        <h3 className="main-title-cc-type-serv container-cc-type-serv">
          Types of Cargo We Handle
          for Ocean Freight
          </h3> */}


        <div className="container-cc-type-serv">
          <div className="card-cc-type-serv row">
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/OceanFreight/FullContainerLoad.jpg" 
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>
                  Full Container Load (FCL) 
                  </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/OceanFreight/LessthanContainerLoad.jpg"
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
                  src="images/OceanFreight/BreakBulk.jpg" 
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>
                  Break Bulk
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
                  src="images/OceanFreight/RORO.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>RORO</Card.Title> 
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

export default ServiceCargoType;