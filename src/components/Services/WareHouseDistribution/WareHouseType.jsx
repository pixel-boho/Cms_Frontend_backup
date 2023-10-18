import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../../css/ServicesCss/WareHouse/WareHouseType.css";

function WareHouseType() {
  return (
    <>
      <Container fluid className="container-whd-type-serv">
        <h3 className="main-title-whd-type-serv">
          Types of Storage <br />
          We Provide
        </h3>
        <img
          className="bg-main-img"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
        <Row className="card-whd-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/WareHouse/DryStorage.jpg"
                className="whd-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Dry Storage
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
                src="images/WareHouse/TemperatureControlledStorage.jpg"
                className="whd-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Temperature Controlled Storage
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
                src="images/WareHouse/ChemicalandDangerousGoodsStorage.jpg"
                className="whd-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Chemical and Dangerous Goods Storage</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="card-whd-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/WareHouse/OpenYardStorage.jpg"
                className="whd-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Open Yard Storage</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container fluid className="container-whd-type-serv">
        <h3 className="main-title-whd-type-serv">
          Locations We Provide Warehousing and
          <br /> Distribution in Oman
        </h3>
        <img
          className="bg-main-img-one"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
        <Row className="card-whd-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/WareHouse/Muscat.jpg"
                className="whd-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Muscat</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/WareHouse/Barka.jpg"
                className="whd-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Barka</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/WareHouse/SoharIndustrialArea.jpg"
                className="whd-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Sohar Industrial Area</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="card-whd-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/WareHouse/SoharFreeZone.jpg"
                className="whd-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Sohar Free Zone</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container fluid className="container-whd-type-serv">
        <h3 className="main-title-whd-type-serv">
          Value-Added Services <br />
          (VAS) We Provide
        </h3>
        <img
          className="bg-main-img-two"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
        <Row className="card-whd-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/WareHouse/ContainerStuffingandDestuffing.jpg"
                className="whd-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Container Stuffing and Destuffing</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/WareHouse/Co-Packing.jpg"
                className="whd-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Co-Packing
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
                src="images/WareHouse/CrossDockingServices.jpg"
                className="whd-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Cross Docking Services</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="card-whd-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/WareHouse/Fumigation.jpg"
                className="whd-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Fumigation</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/WareHouse/IndustrialPacking.jpg"
                className="whd-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Industrial Packing</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/WareHouse/Kitting.jpg"
                className="whd-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Kitting</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container fluid className="container-whd-type-serv">
        <img
          className="bg-main-img-three"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
        <Row className="card-whd-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/WareHouse/Labelling.jpg"
                className="whd-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Labelling
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
                src="images/WareHouse/LashingandSecuringServices.jpg"
                className="whd-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Lashing and Securing Services</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/WareHouse/PackagingandRepackaging.jpg"
                className="whd-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Packaging and Repackaging</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="card-whd-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/WareHouse/PickandPack.jpg"
                className="whd-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Pick and Pack
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
                src="images/WareHouse/ProductEmbellishment.jpg"
                className="whd-type-serv-general"
              />
              <Card.Body>
                <Card.Title>Product Embellishment</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/WareHouse/ProductRework.jpg"
                className="whd-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Product Rework
                  <br />
                  <br />
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container fluid className="container-whd-type-serv">
        <img
          className="bg-main-img-four"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
        <Row className="card-whd-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/WareHouse/PromotionalPacking.jpg"
                className="whd-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Promotional Packing
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
                src="images/WareHouse/SpecializedPipeHandlingandCrossdocking.jpg"
                className="whd-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Specialized Pipe Handling and Cross-docking
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

export default WareHouseType;
