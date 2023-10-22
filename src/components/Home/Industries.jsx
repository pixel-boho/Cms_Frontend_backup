import React, { useState, useEffect, useRef } from "react";
import "./../../css/Industries.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card } from "react-bootstrap";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const SlideNextBtn = () => {
  const swiper = useSwiper();
  return (
    <button
      type="button"
      onClick={() => swiper.slidePrev()}
      className="outline-none border-0 bg-transparent"
    >
      <img
        style={{ width: "45px", paddingRight: "5px" }}
        src="/images/black-circle-left-arrow.png"
        alt=""
      />
    </button>
  );
};
const SlidePrevBtn = () => {
  const swiper = useSwiper();

  return (
    <button
      type="button"
      onClick={() => swiper.slideNext()}
      className="outline-none border-0 bg-transparent"
    >
      <img
        style={{ width: "45px", paddingLeft: "5px" }}
        src="/images/black-circle-right-arrow.png"
        alt=""
      />
    </button>
  );
};

const Industries = () => {
  const [scrollLeft, setScrollLeft] = useState(null);
  const cardScrollContainerRef = useRef(null);
  const cardWidth = 2000;
  const scrollIntervalRef = useRef(null);

  const handleCardMouseEnter = () => {
    clearInterval(scrollIntervalRef.current); // Pause auto-scroll when mouse enters a card
  };

  const handleCardMouseLeave = () => {
    startAutoScroll(); // Resume auto-scroll when mouse leaves a card
  };

  const startAutoScroll = () => {
    scrollIntervalRef.current = setInterval(() => {
      if (cardScrollContainerRef.current) {
        const newScrollLeft = scrollLeft + cardWidth;
        cardScrollContainerRef.current.scrollTo({
          left:
            newScrollLeft >= cardScrollContainerRef.current.scrollWidth
              ? 0
              : newScrollLeft,
          behavior: "smooth",
        });
        setScrollLeft(
          newScrollLeft >= cardScrollContainerRef.current.scrollWidth
            ? 0
            : newScrollLeft
        );
      }
    }, 5000); // Scrolls every 5 seconds
  };

  const handleNextClick = () => {
    clearInterval(scrollIntervalRef.current); // Clear auto-scrolling interval
    const newScrollLeft = scrollLeft + cardWidth;
    cardScrollContainerRef.current.scrollTo({
      left:
        newScrollLeft >= cardScrollContainerRef.current.scrollWidth
          ? 0
          : newScrollLeft,
      behavior: "smooth",
    });
    setScrollLeft(
      newScrollLeft >= cardScrollContainerRef.current.scrollWidth
        ? 0
        : newScrollLeft
    );
  };

  const handlePrevClick = () => {
    clearInterval(scrollIntervalRef.current); // Clear auto-scrolling interval
    const newScrollLeft = scrollLeft - cardWidth;
    cardScrollContainerRef.current.scrollTo({
      left:
        newScrollLeft < 0
          ? cardScrollContainerRef.current.scrollWidth - cardWidth
          : newScrollLeft,
      behavior: "smooth",
    });
    setScrollLeft(
      newScrollLeft < 0
        ? cardScrollContainerRef.current.scrollWidth - cardWidth
        : newScrollLeft
    );
  };

  useEffect(() => {
    startAutoScroll();

    return () => {
      clearInterval(scrollIntervalRef.current);
    };
  }, [scrollLeft]);

  const industries = [
    {
      id: "1",
      title: "Oil & Gas",
      image: "images/Industries/ind1.png",
      description:
        " We understand the critical nature of the oil and gas industry. With a focus on safety, precision, and efficiency, we offer specialized logistics solutions tailored to this sector's unique demands. From transporting equipment to managing project cargo, ALSI is your trusted partner in ensuring seamless operations within the oil and gas sector.",
    },
    {
      id: "2",
      title: "Food & Beverages",
      image: "images/Industries/ind2.png",
      description:
        "In the fast-paced world of Food and Beverage, we provide reliable logistics solutions to keep your products fresh and on time. Our temperature-controlled warehousing, efficient transportation, and expertise in handling delicate cargo make us the ideal partner for F&B businesses.",
    },
    {
      id: "3",
      title: "Chemicals",
      image: "images/Industries/ind3.png",
      description:
        "  Safety and precision are paramount in the chemicals industry. We specialize in the secure transportation and storage of hazardous materials, ensuring compliance with strict regulations. Our expertise and state-of-the-art infrastructure guarantee the integrity of your chemical cargo, from point of origin to final destination.",
    },
    {
      id: "4",
      title: "Retail",
      image: "images/Industries/ind4.png",
      description:
        " In the dynamic world of retail, we deliver tailored logistics solutions that meet your specific needs. Whether it's optimizing inventory management, ensuring just-in-time deliveries, or providing efficient warehousing and distribution, ALSI is your partner for success.",
    },
    {
      id: "5",
      title: "Automotive",
      image: "images/Industries/AutomotiveLogistics.png",
      description:
        "We drive excellence in the automotive sector with our comprehensive logistics solutions. From the manufacturing floor to dealerships, we specialize in efficiently transporting and managing vehicles and automotive components, ensuring on-time deliveries and cost-effective supply chain management.",
    },
    {
      id: "6",
      title: "Energy",
      image: "images/Industries/ind5.png",
      description:
        "We recognize the pivotal role of the energy industry. ALSI specializes in logistics solutions that prioritize safety, precision, and efficiency, tailored to the energy sector's unique demands. Whether you need equipment transport, project cargo management, or any energy-related logistics, count on ALSI for seamless operations.",
    },
    {
      id: "7",
      title: "Healthcare",
      image: "images/Industries/HealthcareLogistics.png",
      description:
        "In the critical field of pharma and healthcare, we are dedicated to ensuring the safe and timely delivery of medical supplies, pharmaceuticals, and healthcare equipment. Our specialized logistics solutions adhere to the highest standards of compliance and precision.",
    },
    {
      id: "8",
      title: "Aerospace",
      image: "images/Industries/AerospaceLogistics.png",
      description:
        " In the aerospace industry, timing is everything. We specialize in time-critical shipments, including AOG (Aircraft on Ground) support, ensuring that vital components reach their destination swiftly to minimize downtime. As an experienced partner for Original Equipment Manufacturers (OEM), we understand the intricacies.",
    },
    {
      id: "9",
      title: "Manufacturing",
      image: "images/Industries/ManufacturingLogistics.png",
      description:
        "In the world of manufacturing, we offer tailored logistics solutions to optimize your production processes. From just-in-time delivery of raw materials to efficient distribution of finished products, we enhance your supply chain's efficiency and reduce costs.Making us your trusted logistics partner for seamless operations.",
    },
  ];

  return (
    <div className="container-fluid indus-containers">
      <Row className="text-center">
        <h1 className="differentiators-header pt-5">Industries</h1>
      </Row>

      <div className="container-fluid indus-spacing">
        {/* <Row className="indus-space-adjust market-page-one"> */}
        <Swiper
          spaceBetween={0}
          
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={false}
          modules={[Autoplay]}
          className="industries"
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            
          }}
        >
          {industries.map((industry) => (
            <SwiperSlide lg key={industry.id}>
              <Card
                className="card-scrollll card-indus"
                style={{ width: "330px", height: "600px" }}
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
              >
                <Card.Body className="card-body-indus">
                  <Card.Title
                    className="card-title-indus pb-3"
                    dangerouslySetInnerHTML={{ __html: industry.title }}
                  />
                  <div style={{ height: "45%" }}>
                    <Card.Text
                      className="card-text-indus "
                      dangerouslySetInnerHTML={{ __html: industry.description }}
                    />
                  </div>
                  {/* <a className="indus-count-num-hover"> */}
                  <div className="position-relative">
                    <Card.Img
                      src={industry.image}
                      alt="..."
                      className="card-img-top-indus"
                    />
                    {/* </a> */}
                    <div
                      className="indus-count-num"
                      style={{ fontWeight: "600" }}
                    >
                      {industry.id}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}

          <div className=" text-center arrow-icons-industry-lr justify-content-center d-flex">
            <SlideNextBtn />
            <SlidePrevBtn />
          </div>
        </Swiper>
        {/* </Row> */}
      </div>
    </div>
  );
};

export default Industries;
