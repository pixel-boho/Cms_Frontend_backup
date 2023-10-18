import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../../css/ServicesCss/ProjectCargo/ProjectCargoType.css";

function ProjectCargoType() {
  return (
    <>
      <Container fluid className="container-pcs-type-serv">
        <h3 className="main-title-pcs-type-serv">
          Project Cargo Services
          <br /> We Provide
        </h3>
        <img
          className="bg-main-img"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
        <Row className="card-pcs-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/ProjectCargoService/LoadingandRiggingSolutions.jpg"
                className="pcs-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Loading and Rigging Solutions – Cranes for heavy lift
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/ProjectCargoService/PositioningandInstallationServices.jpg"
                className="pcs-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Positioning and Installation Services – Jacking and Skidding
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/ProjectCargoService/ProjectPlanningandManagement.jpg"
                className="pcs-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Project Planning and Management – End to End
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="card-pcs-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/ProjectCargoService/ProjectSupervisionandMonitoring.jpg"
                className="pcs-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Project Supervision and Monitoring
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
                src="images/ProjectCargoService/ProjectStudySurveyTechnicalCommercial.jpg"
                className="pcs-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Project Study and Survey with Technical and Commercial
                  Proposal
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
                src="images/ProjectCargoService/Arrangingtransportationpermitsandpolice.jpg"
                className="pcs-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Arranging transportation permits and police escorts from local
                  authorities
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container fluid className="container-pcs-type-serv">
        <img
          className="bg-main-img-one"
          src="images/CargoService/cargo-mixed.png"
          alt=""
        />
        <Row className="card-pcs-type-serv">
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/ProjectCargoService/Arrangingtransportationfromlocalauthorities.jpg"
                className="pcs-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Transport using special equipment – Multi Axle, Semi Modular,
                  SPMT and Lowbed Trailers
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
                src="images/ProjectCargoService/Arrangeprojectcargomovementbyoceanfreight.jpg"
                className="pcs-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Arrange project cargo movement by ocean freight using special
                  equipment (Flat Rack and Open Top containers), Break-Bulk or
                  Ro-Ro carriers.
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-child">
              <Card.Img
                src="images/ProjectCargoService/RouteSiteSurveyfeasibility.jpg"
                className="pcs-type-serv-general"
              />
              <Card.Body>
                <Card.Title>
                  Route and Site Survey with feasibility study
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
        </Row>
      </Container>
    </>
  );
}

export default ProjectCargoType;
