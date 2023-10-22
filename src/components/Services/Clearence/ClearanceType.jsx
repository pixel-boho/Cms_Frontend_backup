import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../../css/ServicesCss/Clearance/ClearanceType.css";

function ClearanceType() {
  return (
    <>
      <Container fluid className="position-relative">
        <div className="container-cc-type-serv">
          <h3 className="main-title-cc-type-serv pb-3">
            Customs Clearance Services
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
                  src="images/Clearance/GeneralGoodsClearance.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>General Goods Clearance</Card.Title>
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
                  <Card.Title>Dangerous Goods Clearance</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
            <Card className="card-child-service">
                <Card.Img
                  src="images/Clearance/LivestockClearance.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>
                    Livestock Clearance
                 
                  </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </div>
        <div className="container-cc-type-serv">
          <div className="card-cc-type-serv row">
            <Col md={4}>
<<<<<<< Updated upstream
              <Card className="card-child-service">
                <Card.Img
                  src="images/Clearance/LivestockClearance.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>
                    Livestock Clearance
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
                  src="images/Clearance/TemporaryImportandExportClearance.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Temporary Import and Export Clearance</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
=======
            <Card className="card-child-service">
>>>>>>> Stashed changes
                <Card.Img
                  src="images/Clearance/FreeZoneClearance.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>
                    Free Zone Clearance
<<<<<<< Updated upstream
                    <br />
                    <br />
=======
                    
                  </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
            <Card className="card-child-service">
                <Card.Img
                  src="images/Clearance/DutyExemptionClearance.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Duty Exemption Clearance</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
            <Card className="card-child-service">
                <Card.Img
                  src="images/Clearance/TransitClearance.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>
                    Transit Clearance
                 
>>>>>>> Stashed changes
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
          className="bg-main-img-one"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
        <div className="container-cc-type-serv">
          <div className="card-cc-type-serv row">
            <Col md={4}>
            <Card className="card-child-service">
                <Card.Img
                  src="images/Clearance/HealthandMedicalGoodsClearance.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Health and Medical Goods Clearance</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
            <Card className="card-child-service">
                <Card.Img
                  src="images/Clearance/TemporaryImportandExportClearance.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Temporary Import and Export Clearance</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
            <Card className="card-child-service">
                <Card.Img
                  src="images/Clearance/FreeTradeAgreement(FTA)Clearance.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Free Trade Agreement (FTA) Clearance</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
<<<<<<< Updated upstream
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/Clearance/DutyExemptionClearance.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Duty Exemption Clearance</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/Clearance/TransitClearance.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>
                    Transit Clearance
                    <br />
                    <br />
                  </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
=======
>>>>>>> Stashed changes
          </div>
        </div>
        <div className="container-cc-type-serv">
          <div className="card-cc-type-serv row">
            <Col md={4}>
<<<<<<< Updated upstream
              <Card className="card-child-service">
                <Card.Img
                  src="images/Clearance/On-BoardCourierClearance.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>
                    On-Board Courier Clearance
                    <br />
                    <br />
                    <br />
                  </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
=======
            <Card className="card-child-service">
>>>>>>> Stashed changes
                <Card.Img
                  src="images/Clearance/Cross-Border.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>
                    Cross-Border Clearance (Origin and Destination)
<<<<<<< Updated upstream
                    <br />
                    <br />
=======
                 
>>>>>>> Stashed changes
                  </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
            <Card className="card-child-service">
                <Card.Img
                  src="images/Clearance/PerishablesandTemperatureControlledCargoClearance.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>
                    Perishables and Temperature Controlled Cargo Clearance
                  </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
            <Card className="card-child-service">
                <Card.Img
                  src="images/Clearance/DutyDepositRefundProcessing.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Duty Deposit Refund Processing</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </div>
      </Container>

      <Container fluid className=" position-relative">
        <img
          className="bg-main-img-two"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
        <div className="container-cc-type-serv">
          <div className="card-cc-type-serv row">
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/Clearance/Servicestoobtainpermits.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>
                    Services to obtain permits, approvals and No Objection from
                    Ministry
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
                  src="images/Clearance/DocumentationServicesObtainingCertificateofOrigin,LegalisationandAttestation.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>
                    Documentation Services: Obtaining Certificate of Origin,
                    Legalisation and Attestation
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
                  src="images/Clearance/SupportandAdvisory.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>
                    Support and Advisory services to obtain duty exemption from
                    Ministry of Commerce and Industry
                  </Card.Title>
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
                  src="images/Clearance/On-BoardCourierClearance.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>
                    On-Board Courier Clearance
                  
                  </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </div>
      </Container>

      <Container fluid className="position-relative">
        <div className=" container-cc-type-serv">
          <h3 className="main-title-cc-type-serv  pb-3 pt-3">
            Locations We Provide Customs Clearance Services in Oman
          </h3>
        </div>
        <img
          className="bg-main-img-three"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
        <div className=" container-cc-type-serv">
          <div className="card-cc-type-serv row">
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/Clearance/MuscatAirport.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>
                    Muscat Airport
<<<<<<< Updated upstream
                    <br />
                    <br />
=======
                 
>>>>>>> Stashed changes
                  </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/Clearance/SoharPortandFreeZone.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Sohar Port and Free Zone</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/Clearance/WajajahBorder.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Wajajah Border</Card.Title>
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
                  src="images/Clearance/WadiJizziBorder.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>
                    Wadi Jizzi Border
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
                  src="images/Clearance/DuqmPort.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>
                    Duqm Port
<<<<<<< Updated upstream
                    <br />
                    <br />
=======
                    
>>>>>>> Stashed changes
                  </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/Clearance/SalalahPortandFreeZone.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Salalah Port and Free Zone</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </div>
      </Container>

      <Container fluid className="position-relative">
        <div className="container-cc-type-serv">
          <h3 className="main-title-cc-type-servpt-3 pb-3 pt-3">
            Locations We Provice Customs Clearance Service in UAE
          </h3>
        </div>
        <img
          className="bg-main-img-four"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
        <div className="container-cc-type-serv">
          <div className="card-cc-type-serv row">
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/Clearance/JebelAliPortandFreeZone.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Jebel Ali Port and Free Zone</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/Clearance/SharjahPort.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>
                    Sharjah Port
<<<<<<< Updated upstream
                    <br />
                    <br />
=======
                  
>>>>>>> Stashed changes
                  </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/Clearance/DubaiAirportandFreeZone.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Dubai Airport and Free Zone</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
          <div className="card-cc-type-serv row">
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/Clearance/SharjahAirportandFreeZone.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>Sharjah Airport & SAIF Zone</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-child-service">
                <Card.Img
                  src="images/Clearance/HattaBorder.jpg"
                  className="cc-type-serv-general"
                />
                <Card.Body>
                  <Card.Title>
                    Hatta Border
<<<<<<< Updated upstream
                    <br />
                    <br />
=======
                  
>>>>>>> Stashed changes
                  </Card.Title>
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

export default ClearanceType;
