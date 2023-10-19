import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Services.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Services = () => {
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);
  const carouselRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // useEffect(() => {
  //   const scrollAmount = 298;

  //   const handleMouseEnter = () => {
  //     setIsAutoScrolling(false);
  //   };

  //   const handleMouseLeave = () => {
  //     setIsAutoScrolling(true);
  //   };

  //   const scrollLeft = () => {
  //     if (carouselRef.current) {
  //       carouselRef.current.scrollBy({
  //         left: -scrollAmount,
  //         behavior: "smooth",
  //       });
  //     }
  //   };

  //   const scrollRight = () => {
  //     if (carouselRef.current) {
  //       carouselRef.current.scrollBy({
  //         left: scrollAmount,
  //         behavior: "smooth",
  //       });

  //       if (
  //         carouselRef.current.scrollLeft + carouselRef.current.clientWidth >=
  //         carouselRef.current.scrollWidth
  //       ) {
  //         carouselRef.current.scrollLeft = 0;
  //       }
  //     }
  //   };

  //   const handleAutoScroll = () => {
  //     if (isAutoScrolling) {
  //       scrollRight();
  //     } else {
  //       scrollLeft();
  //     }
  //   };

  //   const intervalId = setInterval(handleAutoScroll, 4000);

  //   if (leftArrowRef.current && rightArrowRef.current && carouselRef.current) {
  //     leftArrowRef.current.addEventListener("click", scrollLeft);
  //     rightArrowRef.current.addEventListener("click", scrollRight);
  //     carouselRef.current.addEventListener("mouseenter", handleMouseEnter);
  //     carouselRef.current.addEventListener("mouseleave", handleMouseLeave);

  //     return () => {
  //       leftArrowRef.current.removeEventListener("click", scrollLeft);
  //       rightArrowRef.current.removeEventListener("click", scrollRight);
  //       carouselRef.current.removeEventListener("mouseenter", handleMouseEnter);
  //       carouselRef.current.removeEventListener("mouseleave", handleMouseLeave);
  //       clearInterval(intervalId);
  //     };
  //   }
  // }, [isAutoScrolling]);

  return (
    <>
      <div className="container-fluid">
        <h1 className="car-service-cards-heading text-center">Our Services</h1>
        <p className="car-service-cards-bold text-center"></p>
      </div>

      <div className="container-fluid car-service-cards">
        <div className="car-wrapper">
          <div className="carousel-container">
            <Swiper
              spaceBetween={0}
              slidesPerView={"auto"}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={false}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="card card-med">
                  <div className="car-img">
                    <img
                      src="./images/Services/custom.png"
                      className="img-card-serve"
                      alt="img"
                      draggable="false"
                    />
                  </div>
                  <h2 className="car-heading-custom">
                    <Link
                      to="/customs_clearance"
                      style={{ color: "#193579", textDecoration: "none" }}
                    >
                      Customs Clearance
                    </Link>
                  </h2>
                  <span className="car-c-parag">
                    <a
                      href="/customs_clearance"
                      style={{ color: "#6a6d78", textDecoration: "none" }}
                    >
                      Streamlined customs clearance for swift and compliant
                      international trade, reducing delays and ensuring smooth
                      global transactions.
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card card-med">
                  <div className="car-img">
                    <img
                      src="./images/Services/custom.png"
                      className="img-card-serve"
                      alt="img"
                      draggable="false"
                    />
                  </div>
                  <h2 className="car-heading-custom">
                    <Link
                      to="/customs_clearance"
                      style={{ color: "#193579", textDecoration: "none" }}
                    >
                      Customs Clearance
                    </Link>
                  </h2>
                  <span className="car-c-parag">
                    <a
                      href="/customs_clearance"
                      style={{ color: "#6a6d78", textDecoration: "none" }}
                    >
                      Streamlined customs clearance for swift and compliant
                      international trade, reducing delays and ensuring smooth
                      global transactions.
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                  </span>
                </div>
              </SwiperSlide>

              {/* Add more card entries for other services as needed */}
              <SwiperSlide>
                <div className="card card-med">
                  <div className="car-img">
                    <img
                      src="./images/Services/road.png"
                      alt="img"
                      className="img-card-serve"
                      draggable="false"
                    />
                  </div>
                  <h2 className="car-heading-custom">
                    <Link
                      to="/road_freight"
                      style={{ color: "#193579", textDecoration: "none" }}
                    >
                      Road Freight
                    </Link>
                  </h2>
                  <span className="car-c-parag">
                    <a
                      href="/road_freight"
                      style={{ color: "#6a6d78", textDecoration: "none" }}
                    >
                      Road freight solutions offering reliable, on-time
                      deliveries, leveraging our extensive network and expertise
                      to optimize your ground transportation needs.
                    </a>{" "}
                    <br />
                    <br />
                  </span>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card card-med">
                  <div className="car-img">
                    <img
                      src="./images/Services/sea.png"
                      className="img-card-serve"
                      alt="img"
                      draggable="false"
                    />
                  </div>
                  <h2 className="car-heading-custom">
                    <Link
                      to="/sea_freight"
                      style={{ color: "#193579", textDecoration: "none" }}
                    >
                      Ocean Freight
                    </Link>
                  </h2>
                  <span className="car-c-parag">
                    <a
                      href="/sea_freight"
                      style={{ color: "#6a6d78", textDecoration: "none" }}
                    >
                      Sea freight solutions which ensure cost-effective, timely
                      cargo transport, utilizing our global network and industry
                      expertise for efficient ocean shipping.
                    </a>
                    <br />
                    <br />
                    <br />
                  </span>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card card-med">
                  <div className="car-img">
                    <img
                      src="./images/Services/air.png"
                      className="img-card-serve"
                      alt="img"
                      draggable="false"
                    />
                  </div>
                  <h2 className="car-heading-custom">
                    <Link
                      to="/air_freight"
                      style={{ color: "#193579", textDecoration: "none" }}
                    >
                      Air Freight
                    </Link>
                  </h2>
                  <span className="car-c-parag">
                    <a
                      href="/air_freight"
                      style={{ color: "#6a6d78", textDecoration: "none" }}
                    >
                      {" "}
                      Air freight services which provide rapid and dependable
                      cargo transport, leveraging our extensive global network
                      and industry know-how for efficient air shipping
                      solutions.
                    </a>
                    <br />
                  </span>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card card-med">
                  <div className="car-img">
                    <img
                      src="./images/Services/cargo.png"
                      className="img-card-serve"
                      alt="img"
                      draggable="false"
                    />
                  </div>
                  <h2 className="car-heading-custom">
                    <Link
                      to="project_cargo_services"
                      style={{ color: "#193579", textDecoration: "none" }}
                    >
                      Project Cargo <br />
                      Services
                    </Link>
                  </h2>
                  <span className="car-c-parag">
                    <a
                      href="/project_cargo_services"
                      style={{ color: "#6a6d78", textDecoration: "none" }}
                    >
                      Specialized in project cargo services, handling complex
                      and oversized shipments with precision, ensuring
                      successful project execution.
                    </a>
                    <br />
                    <br />
                  </span>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card card-med">
                  <div className="car-img">
                    <img
                      src="./images/Services/warehouse.png"
                      className="img-card-serve"
                      alt="img"
                      draggable="false"
                    />
                  </div>
                  <h2 className="car-heading-custom">
                    <Link
                      to="/warehouse_distribution"
                      style={{ color: "#193579", textDecoration: "none" }}
                    >
                      Warehouse Distribution
                    </Link>
                  </h2>
                  <span className="car-c-parag">
                    <a
                      href="/warehouse_distribution"
                      style={{ color: "#6a6d78", textDecoration: "none" }}
                    >
                      Our streamlined solutions ensure efficient storage and
                      delivery, optimizing supply chains with timely and
                      reliable services.
                    </a>
                    <br />
                    <br />
                    <br />
                  </span>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card card-med">
                  <div className="car-img">
                    <img
                      src="./images/Services/special.png"
                      className="img-card-serve"
                      alt="img"
                      draggable="false"
                    />
                  </div>
                  <h2 className="car-heading-custom">
                    <Link
                      to="/specialized_services"
                      style={{ color: "#193579", textDecoration: "none" }}
                    >
                      Specialized <br />
                      Services
                    </Link>
                  </h2>
                  <span className="car-c-parag">
                    <a
                      href="/specialized_services"
                      style={{ color: "#6a6d78", textDecoration: "none" }}
                    >
                      Offering specialized services tailored to meet your unique
                      logistics needs, ensuring exceptional solutions for your
                      business.
                    </a>
                    <br />
                    <br />
                    <br />
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="arrows-service">
          <div className="col-lg-12">
            <div className="col-lg arrow-one-s">
              <img
                src="/images/black-circle-left-arrow.png"
                className="car-bi bi-arrow-left-circle-fill arrow-icon"
                style={{ width: "40px" }}
                ref={leftArrowRef}
                alt="Left Arrow"
              ></img>
            </div>
            <div className="col-lg arrow-two-s">
              <img
                src="/images/black-circle-right-arrow.png"
                className="car-bi bi-arrow-right-circle-fill arrow-icon"
                style={{ width: "40px" }}
                ref={rightArrowRef}
                alt="Right Arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
