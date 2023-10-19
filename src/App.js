import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./css/global.css";

// Home page Components
import Navbar from "./components/Home/Navbar";
import Header from "./components/Home/Header";
import Services from "./components/Home/Services";
import Network from "./components/Home/Network";
import ChooseUs from "./components/Home/ChooseUs";
import Differentiators from "./components/Home/Differentiators";
import Achievements from "./components/Home/Achievements";
import Highlights from "./components/Home/Highlights";
import Blog from "./components/Home/Blog";
import Industries from "./components/Home/Industries";
import Footer from "./components/Home/Footer";
import Form from "./components/Home/Form";
import Modal from "./components/Modal/Modal";

// Home page Services Navbar Components
import ServicesNavbar from "./components/Services/ServicesNavbar";

//customs clearence
import ClearanceHeader from "./components/Services/Clearence/ClearanceHeader";
import ClearanceType from "./components/Services/Clearence/ClearanceType";

//air freight
import AirFreightHeader from "./components/Services/AirFreight/AirFreightHeader";
import AirFreighttype from "./components/Services/AirFreight/AirFreighttype";

//road freight
import RoadFreightHeader from "./components/Services/RoadFreight/RoadFreightHeader";
import RoadFreightType from "./components/Services/RoadFreight/RoadFreightType";

// Ocean Freight
import ServiceOceanHeader from "./components/Services/OceanFreight/ServiceOceanHeader";
import ServiceCargoType from "./components/Services/OceanFreight/ServiceCargoType";

//project cargo
import ProjectCargoHeader from "./components/Services/ProjectCargo/ProjectCargoHeader";
import ProjectCargoType from "./components/Services/ProjectCargo/ProjectCargoType";

// Specialized Services
import SpecializedHeader from "./components/Services/SpecializedServices/SpecializedHeader";
import ShipSpareLogistics from "./components/Services/SpecializedServices/ShipSpareLogistics";
import CivilDefenseTransportation from "./components/Services/SpecializedServices/CivilDefenseTransportation";
import EventLogistics from "./components/Services/SpecializedServices/EventLogistics";

//warehouse distribution
import WareHouseHeader from "./components/Services/WareHouseDistribution/WareHouseHeader";
import WareHouseType from "./components/Services/WareHouseDistribution/WareHouseType";

//aerospace
import AeroSpaceHeader from "./components/Services/AeroSpace/AeroSpaceHeader";
import AeroSpaceType from "./components/Services/AeroSpace/AeroSpaceType";

//ship spare logistics
import ShipSpareHeader from "./components/Services/ShipSpare/ShipSpareHeader";

//EventLogisticsHeader
import EventLogisticsHeader from "./components/Services/EventLogistics/EventLogisticsHeader";
import EventLogisticsType from "./components/Services/EventLogistics/EventLogisticsType";

//civil defense transportation
import CivilDefenseHeader from "./components/Services/CivilDefenseTransformation/CivilDefenseHeader";

// Cargo Service
import OtherServices from "./components/Services/OtherServices";

// About Section
import AboutHeader from "./components/About/AboutHeader";
import AboutStory from "./components/About/AboutStory";
import AboutMilestones from "./components/About/AboutMilestones";
import AboutTeam from "./components/About/AboutTeam";
import AboutSimply from "./components/About/AboutSimply";
import AboutCertified from "./components/About/AboutCertified";

// Dedicated Blogs
import CustomsHeader from "./components/Services/CustomsDedicatedBlogs/CustomsHeader";
import CustomsCentered from "./components/Services/CustomsDedicatedBlogs/CustomsCentered";

//contact us
import ContactUs from "./components/Contact/ContactUs";
import ContactUsForm from "./components/Contact/ContactUsForm";

//industries
import OurIndustriesHeader from "./components/Industries/OurIndustriesHeader";
import IndustriesOil from "./components/Industries/IndustriesOil";
import IndustriesBeverages from "./components/Industries/IndustriesBeverages";
import IndustriesChemical from "./components/Industries/IndustriesChemical";
import IndustriesRetail from "./components/Industries/IndustriesRetail";
import IndustriesEnergy from "./components/Industries/IndustriesEnergy";
import IndustriesMotive from "./components/Industries/IndustriesMotive";
import IndustriesPharma from "./components/Industries/IndustriesPharma";
import IndustriesAeros from "./components/Industries/IndustriesAeros";
import IndustriesMfg from "./components/Industries/IndustriesMfg";

//CareersOman, UAE, Qatar, Saudi
import CareersHeader from "./components/Careers/CareersHeader";
import CareersOffices from "./components/Careers/CareersOffices";
import CareersHeaderUae from "./components/Careers/CareersHeaderUae";
import CareersOfficesUae from "./components/Careers/CareersOfficesUae";
import CareersHeaderQatar from "./components/Careers/CareersHeaderQatar";
import CareersHeaderSaudi from "./components/Careers/CareersHeaderSaudi";
import CareersOfficesQatar from "./components/Careers/CareersOfficesQatar";
import CareersOfficesSaudi from "./components/Careers/CareersOfficesSaudi";

//For all blogs
import BlogSpecial from "./components/Market/BlogSpecial";
import BlogSpecialHeader from "./components/Market/BlogSpecialHeader";

//first dedicated blog
import FirstBlogHeader from "./components/BlogDedicated/FirstBlogHeader";
import FirstBlog from "./components/BlogDedicated/FirstBlog";

//second dedicated blog
import SecondBlogHeader from "./components/BlogDedicated/SecondBlogHeader";
import SecondBlog from "./components/BlogDedicated/SecondBlog";

//third dedicated blog
import ThirdBlogHeader from "./components/BlogDedicated/ThirdBlogHeader";
import ThirdBlog from "./components/BlogDedicated/ThirdBlog";

//fourth dedicated blog
import FourthBlogHeader from "./components/BlogDedicated/FourthBlogHeader";
import FourthBlog from "./components/BlogDedicated/FourthBlog";

//third dedicated blog
import FifthBlogHeader from "./components/BlogDedicated/FifthBlogHeader";
import FifthBlog from "./components/BlogDedicated/FifthBlog";

//careers page
import CareersForm from "./components/CareersForm/CareersForm";
import CareersFormHeader from "./components/CareersForm/CareersFormHeader";

//Other services Seperate
import OtherServicesCustomsClearance from "./components/OtherServicesSeperated/OtherServicesCustomsClearance";
import OtherServicesAerospace from "./components/OtherServicesSeperated/OtherServicesAerospace";
import OtherServicesAirFreight from "./components/OtherServicesSeperated/OtherServicesAirFreight";
import OtherServicesProjectCargo from "./components/OtherServicesSeperated/OtherServicesProjectCargo";
import OtherServicesRoadFreight from "./components/OtherServicesSeperated/OtherServicesRoadFreight";
import OtherServicesSeaFreight from "./components/OtherServicesSeperated/OtherServicesSeaFreight";
import OtherServicesSS from "./components/OtherServicesSeperated/OtherServicesSS";
import OtherServicesWD from "./components/OtherServicesSeperated/OtherServicesWD";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="overflow-hidden">
              <Navbar />
              <Header />
              <Services />
              <Network />
              <ChooseUs />
              <Differentiators />
              <Achievements />
              <Highlights />
              <Industries />
              <Blog />
              <Form />
              <Footer />
            </div>
          }
        />

        <Route
          path="/about_us"
          element={
            <>
              <ServicesNavbar />
              <AboutHeader />
              <AboutStory />
              <AboutMilestones />
              <AboutTeam />
              <AboutSimply />
              <AboutCertified />
              <Form />
              <Footer />
            </>
          }
        />

        <Route
          path="/customs_clearance"
          element={
            <>
              <ServicesNavbar />
              <ClearanceHeader />
              <ClearanceType />
              <OtherServicesCustomsClearance />
              <Industries />
              <Form />
              <Footer />
            </>
          }
        />

        <Route
          path="/road_freight"
          element={
            <>
              <ServicesNavbar />
              <RoadFreightHeader />
              <RoadFreightType />
              <OtherServicesRoadFreight />
              <Industries />
              <Form />
              <Footer />
            </>
          }
        />

        <Route
          path="/sea_freight"
          element={
            <>
              <ServicesNavbar />
              <ServiceOceanHeader />
              <ServiceCargoType />
              <OtherServicesSeaFreight />
              <Industries />
              <Form />
              <Footer />
            </>
          }
        />

        <Route
          path="/air_freight"
          element={
            <>
              <ServicesNavbar />
              <AirFreightHeader />
              <AirFreighttype />
              <OtherServicesAirFreight />
              <Industries />
              <Form />
              <Footer />
            </>
          }
        />

        <Route
          path="/project_cargo_services"
          element={
            <>
              <ServicesNavbar />
              <ProjectCargoHeader />
              <ProjectCargoType />
              <OtherServicesProjectCargo />
              <Industries />
              <Form />
              <Footer />
            </>
          }
        />

        <Route
          path="/warehouse_distribution"
          element={
            <>
              <ServicesNavbar />
              <WareHouseHeader />
              <WareHouseType />
              <OtherServicesWD />
              <Industries />
              <Form />
              <Footer />
            </>
          }
        />

        <Route
          path="/specialized_services"
          element={
            <>
              <ServicesNavbar />
              <SpecializedHeader />
              <ShipSpareLogistics />
              <EventLogistics />
              <CivilDefenseTransportation />
              <OtherServicesSS />
              <Industries />
              <Form />
              <Footer />
            </>
          }
        />

        <Route
          path="/aerospace"
          element={
            <>
              <ServicesNavbar />
              <AeroSpaceHeader />
              <AeroSpaceType />
              <OtherServicesAerospace />
              <Industries />
              <Form />
              <Footer />
            </>
          }
        />

        <Route
          path="/ship_spare_logistics"
          element={
            <>
              <ServicesNavbar />
              <ShipSpareHeader />
              <OtherServices />
              <Industries />
              <Form />
              <Footer />
            </>
          }
        />

        <Route
          path="/event_logistics"
          element={
            <>
              <ServicesNavbar />
              <EventLogisticsHeader />
              <EventLogisticsType />
              <OtherServices />
              <Industries />
              <Form />
              <Footer />
            </>
          }
        />

        <Route
          path="/civil_defense_transportation"
          element={
            <>
              <ServicesNavbar />
              <CivilDefenseHeader />
              <OtherServices />
              <Industries />
              <Form />
              <Footer />
            </>
          }
        />

        <Route
          path="/industries"
          element={
            <>
              <ServicesNavbar />
              <OurIndustriesHeader />
              <IndustriesOil />
              <IndustriesBeverages />
              <IndustriesChemical />
              <IndustriesRetail />
              <IndustriesEnergy />
              <IndustriesMotive />
              <IndustriesPharma />
              <IndustriesAeros />
              <IndustriesMfg />
              <Services />
              <Form />
              <Footer />
            </>
          }
        />

        <Route
          path="/market_updates"
          element={
            <>
              <ServicesNavbar />
              <BlogSpecialHeader />
              <BlogSpecial />
              <Form />
              <Footer />
            </>
          }
        />

        <Route
          path="/smooth_sailing_through_customs_clearance_in_oman_a_guide_to_ensuring_compliance_avoiding_penalties_and_navigating_potential_pitfalls"
          element={
            <>
              <ServicesNavbar />
              <CustomsHeader />
              <CustomsCentered />
              <Form />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact_us"
          element={
            <>
              <ServicesNavbar />
              <ContactUs />
              <ContactUsForm />
              <Footer />
            </>
          }
        />

        {/* location oman */}
        <Route
          path="/oman"
          element={
            <>
              <ServicesNavbar />
              <CareersHeader />
              <CareersOffices />
              <Services />
              <Form />
              <Footer />
            </>
          }
        />

        <Route
          path="/uae"
          element={
            <>
              <ServicesNavbar />
              <CareersHeaderUae />
              <CareersOfficesUae />
              <Services />
              <Form />
              <Footer />
            </>
          }
        />

        <Route
          path="/qatar"
          element={
            <>
              <ServicesNavbar />
              <CareersHeaderQatar />
              <CareersOfficesQatar />
              <Services />
              <Form />
              <Footer />
            </>
          }
        />

        <Route
          path="/saudi"
          element={
            <>
              <ServicesNavbar />
              <CareersHeaderSaudi />
              <CareersOfficesSaudi />
              <Services />
              <Form />
              <Footer />
            </>
          }
        />
        <Route
          path="/modal"
          element={
            <>
              <Modal />
            </>
          }
        />

        <Route
          path="/careers"
          element={
            <>
              <ServicesNavbar />
              <CareersFormHeader />
              <CareersForm />
              <Footer />
            </>
          }
        />

        <Route
          path="/how_gcc_free_trade_zones_can_help_businesses_simplify_customs_clearance?"
          element={
            <>
              <ServicesNavbar />
              <FirstBlogHeader />
              <FirstBlog />
              <Form />
              <Footer />
            </>
          }
        />

        <Route
          path="/the_digital_transformation_of_customs_clearance_and_how_technology_is_transforming_the_process"
          element={
            <>
              <ServicesNavbar />
              <SecondBlogHeader />
              <SecondBlog />
              <Form />
              <Footer />
            </>
          }
        />

        <Route
          path="/the_impact_of_uae_oman_transportation_on_trade_and_commerce_to_driving_economic_growth"
          element={
            <>
              <ServicesNavbar />
              <ThirdBlogHeader />
              <ThirdBlog />
              <Form />
              <Footer />
            </>
          }
        />

        <Route
          path="/the_role_of_cross_border_transportation_in_promoting_trade_facilitation_and_regional_integration_in_gcc"
          element={
            <>
              <ServicesNavbar />
              <FourthBlogHeader />
              <FourthBlog />
              <Form />
              <Footer />
            </>
          }
        />

        <Route
          path="/the_future_outlook_for_event_and_exhibition_logistics_in_gcc_including_the_potential_for_growth_and_development"
          element={
            <>
              <ServicesNavbar />
              <FifthBlogHeader />
              <FifthBlog />
              <Form />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
