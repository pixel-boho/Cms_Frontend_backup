import React from "react";
import "./../../css/Market/BlogSpecial.css"; // Assuming the CSS file is in the same directory

function BlogSpecial() {
  const cardData = [
    {
      image: "images/BlogBanner/cs02.png",
      title: "Smooth sailing through customs clearance in Oman: A guide to",
      text: "When it comes to international trade and business operations, efficient and compliant customs clearance is",
      link: "/smooth_sailing_through_customs_clearance_in_oman_a_guide_to_ensuring_compliance_avoiding_penalties_and_navigating_potential_pitfalls",
    },
    {
      image: "images/BlogBanner/cs01.png",
      title:
        "How GCC free trade zones can help business simplify customs clearance?",
      text: "In today’s competitive business environment, operational efficiency and streamlining processes are of",
      link: "/how_gcc_free_trade_zones_can_help_businesses_simplify_customs_clearance?",
    },
    {
      image: "images/BlogBanner/cs03.png",
      title:
        "The digital transformation of customs clearance and how technology",
      text: "Customs clearance is essential to ensure the smooth flow of products across borders in the fast-paced",
      link: "the_digital_transformation_of_customs_clearance_and_how_technology_is_transforming_the_process",
    },

    {
      image: "images/BlogBanner/cs06.png",
      title:
        "The impact of UAE-Oman transportation on trade and commerce to driving",
      text: "In today’s global economy, businesses are always looking for ways to expand their reach and increase",
      link: "/the_impact_of_uae_oman_transportation_on_trade_and_commerce_to_driving_economic_growth",
    },

    {
      image: "images/BlogBanner/cs05.png",
      title:
        "The role of cross-border transportation in promoting trade facilitation",
      text: "Globalisation has brought immense opportunities for businesses to expand their reach beyond",
      link: "/the_role_of_cross_border_transportation_in_promoting_trade_facilitation_and_regional_integration_in_gcc",
    },

    {
      image: "images/BlogBanner/cs04.png",
      title:
        "The future outlook for event and exhibition logistics in GCC, including the",
      text: "Events and exhibitions are an increasingly important part of business and marketing in the GCC region",
      link: "/the_future_outlook_for_event_and_exhibition_logistics_in_gcc_including_the_potential_for_growth_and_development",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row blog-mu-main-size">
        {cardData.map((data, index) => (
          <div
            key={index}
            className="col-lg-4 col-md-6 col-sm-12 blog-mu-main-pads"
          >
            <div className="card blog-mu-custom-card">
              <img
                src={data.image}
                className="card-img-top blog-mu-card-img-top"
                alt="Card Image"
              />
              <div className="card-body blog-mu-card-body">
                <h6 className="card-title blog-mu-card-title">
                  {data.title}....
                </h6>
                <p className="card-text blog-mu-card-text">{data.text}....</p>
                <a
                  className="blog-mu-read-more"
                  href={data.link}
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#193377",
                    textDecoration: "none",
                  }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSpecial;
