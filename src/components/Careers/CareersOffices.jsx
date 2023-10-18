import React, { useState } from "react";
import "./../../css/CareersCss/CareersOffices.css";

const officeDetails = [
  {
    name: "Sohar Freezone",
    address: "P.O. Box 608, P.C: 322, W. Sohar, Sultanate Of OMAN",
    tel: "+968 26755598, +968 94290081",
    fax: "+968 26755550",
    email: "office@alsioman.com",
    countryManager: "Gokul Gopinath",
    managerTel: "+968 26755598, +968 94290081",
    managerEmail: "gokul@alsioman.com",
  },
  {
    name: "Falaj Al Qabil",
    address: "P.O. Box 609, P.C: 323, W. Falaj, Sultanate Of OMAN",
    tel: "+968 26755597, +968 94290082",
    fax: "+968 26755551",
    email: "falaj@alsioman.com",
    countryManager: "John Doe",
    managerTel: "+968 26755597, +968 94290082",
    managerEmail: "john@alsioman.com",
  },

  {
    name: "Wajajah Border",
    address: "P.O. Box 609, P.C: 323, W. Falaj, Sultanate Of OMAN",
    tel: "+968 26755597, +968 94290082",
    fax: "+968 26755551",
    email: "falaj@alsioman.com",
    countryManager: "John Doe",
    managerTel: "+968 26755597, +968 94290082",
    managerEmail: "john@alsioman.com",
  },

  {
    name: "Wadijizzi Border",
    address: "P.O. Box 609, P.C: 323, W. Falaj, Sultanate Of OMAN",
    tel: "+968 26755597, +968 94290082",
    fax: "+968 26755551",
    email: "falaj@alsioman.com",
    countryManager: "John Doe",
    managerTel: "+968 26755597, +968 94290082",
    managerEmail: "john@alsioman.com",
  },

  {
    name: "Aqar",
    address: "P.O. Box 609, P.C: 323, W. Falaj, Sultanate Of OMAN",
    tel: "+968 26755597, +968 94290082",
    fax: "+968 26755551",
    email: "falaj@alsioman.com",
    countryManager: "John Doe",
    managerTel: "+968 26755597, +968 94290082",
    managerEmail: "john@alsioman.com",
  },

  {
    name: "Muscat",
    address: "P.O. Box 609, P.C: 323, W. Falaj, Sultanate Of OMAN",
    tel: "+968 26755597, +968 94290082",
    fax: "+968 26755551",
    email: "falaj@alsioman.com",
    countryManager: "John Doe",
    managerTel: "+968 26755597, +968 94290082",
    managerEmail: "john@alsioman.com",
  },

  {
    name: "Salalah",
    address: "P.O. Box 609, P.C: 323, W. Falaj, Sultanate Of OMAN",
    tel: "+968 26755597, +968 94290082",
    fax: "+968 26755551",
    email: "falaj@alsioman.com",
    countryManager: "John Doe",
    managerTel: "+968 26755597, +968 94290082",
    managerEmail: "john@alsioman.com",
  },
  {
    name: "Duqm",
    address: "P.O. Box 609, P.C: 323, W. Falaj, Sultanate Of OMAN",
    tel: "+968 26755597, +968 94290082",
    fax: "+968 26755551",
    email: "falaj@alsioman.com",
    countryManager: "John Doe",
    managerTel: "+968 26755597, +968 94290082",
    managerEmail: "john@alsioman.com",
  },
];

const CareersOffices = () => {
  const [selectedOffice, setSelectedOffice] = useState(0);

  const handleOfficeClick = (index) => {
    setSelectedOffice(index);
  };

  return (
    <>
      <div className="container-fluid office-oman-head-pad">
        <div className="col-lg-12 office-oman-head-pad-office">
          <h3>Offices in Oman</h3>
        </div>
        <div className="row text-center office-oman-head-offices-pad">
          {officeDetails.map((office, index) => (
            <div
              className={`col-lg office-main-office-list ${
                selectedOffice === index ? "selected-office" : ""
              }`}
              key={index}
              onClick={() => handleOfficeClick(index)}
            >
              {office.name}
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid office-bg-off-c">
        <div className="row">
          <div className="col-lg office-column">
            <img src="images/OfficesSevicePage/Office-map.png" alt="" />
            {[...Array(officeDetails.length)].map((_, index) => (
              <i
                key={index}
                className={`bi bi-geo-alt-fill ${
                  selectedOffice === index ? "office-selected-icon" : ""
                }`}
                id={`location${index + 1}`}
              ></i>
            ))}
          </div>

          <div className="col-lg">
            {selectedOffice !== null && (
              <div className="row">
                <div className="office-info" id="head-office-info1">
                  <h6>{`${officeDetails[selectedOffice].name}`}</h6>
                  <p>{officeDetails[selectedOffice].address}</p>
                  <p>{`Tel: ${officeDetails[selectedOffice].tel}`}</p>
                  <p>{`FAX: ${officeDetails[selectedOffice].fax}`}</p>
                  <p>{`Email: ${officeDetails[selectedOffice].email}`}</p>
                </div>
                <div className="office-info-one" id="country-manager-info1">
                  <h6>Country Manager</h6>
                  <p>{officeDetails[selectedOffice].countryManager}</p>
                  <p>{`Tel: ${officeDetails[selectedOffice].managerTel}`}</p>
                  <p>{`Email: ${officeDetails[selectedOffice].managerEmail}`}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersOffices;
