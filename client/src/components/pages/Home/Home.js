import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
import Navigation from "../../navigation/Navigation";
import Typewriter from "typewriter-effect";
import ContactForm from "../../contactForm/ContactForm";
import SocialIcon from "../../navigation/SocialIcon";
import ServiceCard from "../../service/ServiceCard";
import Footer from "../../Footer/Footer";
import Subscription from "../../Subscription/Subscription";
import TechStack from "../../TechStack/TechStack";
import ProcessCard from "../../processData/Process";
import { Link } from "react-router-dom";
import AddBox from "../../AddBox/AddBox";
import Questions from "../../frequentlyQuestions/Questions";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import ScrollUp from "../../scrollUpWindow/ScrollUp";
import HomePageBlog from "../../homePageBlog/HomePageBlog";
import DropDownContact from "../../dropDownContact/DropDownContact";
import { motion, useScroll, useTransform } from "framer-motion";
import brandMark from "../../../images/brandmark-design (2).png";
import mountain from "../../../images/Mountain.png";

const heroImageData = [
  {
    id: 1,
    image: brandMark,
    title: "Web & Mobile Application Development",
    subHeading: "Custom Software Development",
    description:
      "We design and develop high-grade websites that provide a visually appealing and interactive web experience.",
  },
  {
    id: 2,
    image: mountain,
    subHeading: "Custom Software Development",
    title: "We help businesses turn clicks into customers",
    description:
      " Rexett is a Sweden-based boutique, we are software development company that provides digital solutions.",
  },
];

const Home = () => {
  const [showContact, setShowContact] = useState(false);
  const { scrollY } = useScroll();

  const opacitySection = useTransform(
    scrollY,
    [0, 500, 600, 700],
    [0, 0.5, 0.5, 1]
  );

  const opacitySection2 = useTransform(scrollY, [800, 1000, 1200], [0, 0.5, 1]);
  const opacitySection3 = useTransform(
    scrollY,
    [1200, 1400, 2200],
    [0, 0.5, 1]
  );
  const opacitySection4 = useTransform(
    scrollY,
    [2000, 2200, 2800],
    [0, 0.5, 1]
  );

  useEffect(() => {
    setTimeout(() => {
      setShowContact(true);
    }, 5000);
  }, [showContact]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Navigation />
      {showContact && (
        <div>
          <DropDownContact />
        </div>
      )}
      <ScrollUp />
      <div className={classes.heroImageHead}>
        <SocialIcon />
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={1000}
          loop={true}
          centeredSlides={true}
          lazy="true"
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
        >
          {heroImageData.map((data) => (
            <SwiperSlide>
              {" "}
              <div className={classes.heroImage} key={data.id}>
                <img src={data.image} alt="slider Images" />

                <div className={classes.heroText}>
                  <p>{data.subHeading}</p>
                  <h1>{data.title}</h1>
                  <p>{data.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <motion.div style={{ opacity: opacitySection }}>
        <div className={classes.home}>
          <div className={classes.homeHeading}>
            <h1>
              <span>T</span>urning <span>ideas</span> into <br></br>digital
              solution
            </h1>
            <p>
              <span className={classes.spanPara}>W</span>e provide end-to-end
              development of web and mobile apps in integration with dynamic
              contemporary technologies to boost the online-success of
              businesses. With a perfect blend of technology, innovation, and
              expertise, we deliver cutting-edge digital solutions. We work
              shoulder to shoulder with business owners to help grow their
              business with digital solutions and marketing strategies that
              generate more traffic, better SEO rankings, more clicks and
              improved lead conversion. From basic web design to advanced web
              applications and shopping carts, we do them all. We build custom
              software applications.
            </p>
            <Link to="/contact" className={classes.Button}>
              <span>Enquire Now</span>
            </Link>
          </div>
          <div className={classes.homeImage}></div>
        </div>
      </motion.div>

      {/* what we do */}
      <motion.div
        style={{ opacity: opacitySection2 }}
        className={classes.container1}
      >
        <h1 className={classes.sectionTitle}>
          <span>G</span>row Your business With <span>us</span>
        </h1>
        <div className={classes.section1}>
          <div className={classes.section1Heading}></div>
          <div className={classes.section1Heading2}>
            <h2>What we do</h2>
            <p>
              We Deliver
              <span className={classes.spanParaDev}>
                {
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      strings: [
                        "Websites",
                        "Website Design",
                        "E-Commerce Websites",
                        "Mobile-App",
                        "Logo Design",
                      ],
                    }}
                  ></Typewriter>
                }
              </span>
              You Need
            </p>
            <div className={classes.motive2}>
              <span className={classes.spanPara1}>W</span>e are overjoyed to
              deliver you the complete set of IT services needed to meet all
              your business needs, starting from branding to Production. At
              Rexett, we have experienced & specialized professional who
              tolerate nothing short of perfection when it comes to work. Our
              services emerge from your initial needs and conclude at your final
              demands which means that no matter what your requirements are, we
              will be able to fulfill them beyond your expectation level.{" "}
            </div>
          </div>
        </div>
      </motion.div>
      {/* service section*/}
      <motion.div
        className={classes.serviceSection}
        style={{ opacity: opacitySection3 }}
      >
        <div className={classes.serviceHeading}>
          <h1>
            <span>O</span>ur<span> S</span>ervices
          </h1>
          <p>We provide exclusive services for your business</p>
        </div>
        <ServiceCard />
      </motion.div>
      {/* tech stack */}
      <div>
        <TechStack />
      </div>
      {/*about us*/}
      <motion.div
        className={classes.container1}
        style={{ opacity: opacitySection4 }}
      >
        <div className={classes.section2}>
          <div className={classes.section4Heading}>
            <h2>Who we are</h2>

            <p>
              We are
              <span className={classes.spanParaDev}>
                {
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      strings: [
                        "Web",
                        "Software ",
                        "UI & UX",
                        "E-Commerce",
                        "Mobile-App",
                      ],
                    }}
                  ></Typewriter>
                }
              </span>
              Developers
            </p>
            <div className={classes.motive}>
              <span className={classes.spanPara1}>W</span>e do believe that
              information technologies are the property of all mankind, thus
              they should be understandable and available to everyone, IT
              projects should be painless and affordable for any venture. That
              is why we build our business based on the principles of honesty,
              transparency, and excellent client service — we educate our
              clients if necessary and ensure their minimum involvement in the
              project without wasting their time to make digitalization easy and
              painless.
              <Link className={classes.linkButton} to="/about">
                Read more about us
              </Link>
            </div>
          </div>
          <div className={classes.section4Heading2}></div>
        </div>
      </motion.div>
      {/* how we work */}
      <div className={classes.processSection4}>
        <div className={classes.processHeading}>
          <h1>
            <span>P</span>rocess we Follow
          </h1>
          <p>Get your project ready in just 10 steps</p>
        </div>
        <ProcessCard />
        <div className={classes.processCircle}></div>
      </div>
      <AddBox />
      <HomePageBlog />
      <Questions />
      <ContactForm />
      <Subscription />
      <Footer />
    </main>
  );
};

export default Home;
