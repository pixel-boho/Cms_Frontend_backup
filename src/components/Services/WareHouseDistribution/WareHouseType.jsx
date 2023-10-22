import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../../css/ServicesCss/Clearance/ClearanceType.css";

function WareHouseType() {
  return (
<<<<<<< Updated upstream
    <>
      <Container fluid className="container-whd-type-serv">
        <h3 className="main-title-whd-type-serv">
          Types of Storage <br />
          We Provide
        </h3>
=======
    <div className="warehouse-container">
      <Container fluid className="position-relative">
        <div className="container-cc-type-serv">
          <h3 className="main-title-cc-type-serv  pb-3">
            Types of Storage We Provide
          </h3>
        </div>
>>>>>>> Stashed changes
        <img
          className="bg-main-img"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
<<<<<<< Updated upstream
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
=======
        <div className="container-cc-type-serv">
          <div className="card-cc-type-serv row">
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/WareHouse/DryStorage.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title> Dry Storage<br/><br/></Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/WareHouse/TemperatureControlledStorage.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Temperature Controlled Storage</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/WareHouse/ChemicalandDangerousGoodsStorage.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Chemical and Dangerous Goods Storage</Card.Title>
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
                  src="images/WareHouse/OpenYardStorage.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Open Yard Storage</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </div>
      </Container>

      <Container fluid className="position-relative">
        <div className="container-cc-type-serv">
          <h3 className="main-title-cc-type-serv  pb-3 pt-3">
            Locations We Provide Warehousing and Distribution in Oman
          </h3>
        </div>
>>>>>>> Stashed changes
        <img
          className="bg-main-img-one"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
<<<<<<< Updated upstream
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
=======
        <div className="container-cc-type-serv">
          <div className="card-cc-type-serv row">
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/WareHouse/Muscat.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Muscat</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/WareHouse/Barka.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Barka</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/WareHouse/SoharIndustrialArea.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Sohar Industrial Area</Card.Title>
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
                  src="images/WareHouse/SoharFreeZone.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Sohar Free Zone</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </div>
      </Container>

      <Container fluid className="position-relative">
        <div className="container-cc-type-serv">
          <h3 className="main-title-cc-type-serv  pb-3 pt-3">
            Value-Added Services (VAS) We Provide
          </h3>
        </div>
>>>>>>> Stashed changes
        <img
          className="bg-main-img-two"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
<<<<<<< Updated upstream
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
=======
        <div className="container-cc-type-serv">
          <div className="card-cc-type-serv row">
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/WareHouse/ContainerStuffingandDestuffing.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Containe Stuffing and Destuffing</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/WareHouse/Co-Packing.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Co-Packing<br/><br/></Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/WareHouse/CrossDockingServices.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Cross Docking Services<br/><br/></Card.Title>
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
                  src="images/WareHouse/Fumigation.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Fumigation</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/WareHouse/IndustrialPacking.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Industrial Packing</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/WareHouse/Kitting.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Kitting</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </div>
      </Container>

      <Container fluid className="position-relative">
        <div className="container-cc-type-serv"></div>
>>>>>>> Stashed changes
        <img
          className="bg-main-img-three"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
<<<<<<< Updated upstream
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
=======
        <div className="container-cc-type-serv">
          <div className="card-cc-type-serv row">
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/WareHouse/Labelling.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Labelling</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/WareHouse/LashingandSecuringServices.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Lashing and Securing Services</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/WareHouse/PackagingandRepackaging.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Packaging and Repackaging</Card.Title>
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
                  src="images/WareHouse/PickandPack.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Pick and Pack</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/WareHouse/ProductEmbellishment.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Product Embellishment</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/WareHouse/ProductRework.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>ProductRework</Card.Title>
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
          className="bg-main-img-four"
          src="images/CargoService/cargo-mixed.png"
          alt=""
          style={{ transform: "translateY(0%)" }}
        />
<<<<<<< Updated upstream
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
=======
        <div className="container-cc-type-serv">
          <div className="card-cc-type-serv row">
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/WareHouse/PromotionalPacking.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Promotional Packing<br/><br/></Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/WareHouse/SpecializedPipeHandlingandCrossdocking.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>
                    Specialized Pipe Handling and Cross-docking
                  </Card.Title>
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

export default WareHouseType;
