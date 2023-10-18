import React from "react";
import "./../../css/Achievements.css";

const achievementsData = [
  {
    id: 1,
    image: "images/Achievement/Achievements01.jpg",
    title:
      "Awarded Best Customs Clearance Company of 2021 & 2022 by Oman Customs",
  },
  {
    id: 2,
    image: "images/Achievement/Achievements02.jpg",
    title: "15 Years of Excellence",
  },
  {
    id: 3,
    image: "images/Achievement/Achievements03.jpg",
    title: "Honored with Smart Workplace 2022 Award by Dubai Customs",
  },
];
const Achievements = () => {
  return (
    <>
      <div className="container-fluid achievement-heading-sized-one">
        <div className="col-lg-12">
          <h1 className="achiev-heading-width text-center">Achievements</h1>
        </div>
      </div>

      <div className="container-fluid  d-none d-lg-flex">
        <div className="row">
          {achievementsData.map((achievement) => (
            <div className="col" key={achievement.id}>
              <div className="achievement-bg-first">
                <div className="achievement-card">
                  <img
                    src={achievement.image}
                    alt={`Achievement ${achievement.id}`}
                  />
                </div>
              </div>
              <div className="achievement-bg-first-text pt-1">
                <h3 className="text-center achie-head-sub">
                  {achievement.title}
                </h3>
              </div>
              <p className="text-center achie-head-sub-one"></p>
            </div>
          ))}
        </div>
      </div>

      <div className="row achievement-r-response d-flex d-lg-none ">
        {achievementsData.map((achievement) => (
          <div
            className="col-lg-12 justify-content-center"
            key={achievement.id}
          >
            <div className="achievement-bg-first">
              <div className="achievement-card">
                <img
                  src={achievement.image}
                  alt={`Achievement ${achievement.id}`}
                />
              </div>
            </div>

            <div className="achievement-bg-first-text pt-1">
              <h3 className="text-center achie-head-sub">
                {achievement.title}
              </h3>
            </div>
            <p className="text-center achie-head-sub-one"></p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Achievements;
