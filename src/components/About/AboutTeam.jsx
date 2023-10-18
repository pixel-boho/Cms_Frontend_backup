import React from "react";
import "../../css/AboutCss/AboutTeam.scss";

const AboutTeam = () => {
  return (
    <>
      <div className="container-fluid about-bg-team">
        <div className="row">
          <h1 className="about-team-head">Our Team</h1>
          <p className="team-parag-team text-center"></p>
        </div>

        <div className="row text-center about-team-clr">
          <div className="col-lg">
            <img
              src="/images/AboutTeam/chief.png"
              alt="Team Member"
              className="team-members-team"
            />
            <h5>Name</h5>
            <p>Founder & Chairman</p>
          </div>
          <div className="col-lg">
            <img
              src="/images/AboutTeam/chief.png"
              alt="Team Member"
              className="team-members-team"
            />
            <h5>Name</h5>
            <p>Chief Operating Officer</p>
          </div>
          <div className="col-lg">
            <img
              src="/images/AboutTeam/chief.png"
              alt="Team Member"
              className="team-members-team"
            />
            <h5>Name</h5>
            <p>General Manager - Oman</p>
          </div>
        </div>

        <div className="row text-center about-team-clr-one">
          <div className="col-lg">
            <img
              src="/images/AboutTeam/chief.png"
              alt="Team Member"
              className="team-members-team"
            />
            <h5>Name</h5>
            <p>Commercial Director</p>
          </div>
          <div className="col-lg">
            <img
              src="/images/AboutTeam/chief.png"
              alt="Team Member"
              className="team-members-team"
            />
            <h5>Name</h5>
            <p>Country Manager - UAE </p>
          </div>
          <div className="col-lg team-about-pad">
            <img
              src="/images/AboutTeam/chief.png"
              alt="Team Member"
              className="team-members-team"
            />
            <h5>Name</h5>
            <p>Branch Manager - Qatar </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTeam;
