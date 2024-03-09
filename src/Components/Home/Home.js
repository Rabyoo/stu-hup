import React, { useEffect } from "react";

// Images
import mainImg from "./imgs/R.jpeg";
import myProfile from "./imgs/download_image_1701644643657.png";
import Life from "./imgs/life.jpg";

// Link CSS
import "./css/style.css";
// React Icons
import { MdOutlineSaveAlt } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaOpencart } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { FaPenRuler } from "react-icons/fa6";
import { FcIdea } from "react-icons/fc";
import { BsStars } from "react-icons/bs";
//Aos
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="container">
      <section className="topCourses">
        <div className="title">
          <h2>Top Rated Courses</h2>
        </div>
        <div className="boxes">
          <div data-aos="fade-up" className="box">
            <MdOutlineSaveAlt
              style={{
                fontSize: "40px",
                position: "absolute",
                right: "20px",
                color: "#fff",
                backgroundColor: "#000",
                padding: "6px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
            <img
              className="main"
              style={{ width: "250px", height: "150px", borderRadius: "12px" }}
              src={mainImg}
              alt="main"
            />
            <div className="profile">
              <img src={myProfile} alt="pro" />
              <p>RABYOO</p>
            </div>
            <h2>Front-end Course</h2>
            <div className="data">
              <div className="time">
                <MdAccessTimeFilled
                  style={{ fontSize: "20px", marginRight: "5px" }}
                />
                <span>1h 53m</span>
              </div>
              <div className="star">
                <FaStar style={{ fontSize: "20px", marginRight: "5px" }} />
                <span>4.9/5</span>
              </div>
              <div className="btn">
                <button type="submit">Enroll</button>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="box">
            <MdOutlineSaveAlt
              style={{
                fontSize: "40px",
                position: "absolute",
                right: "20px",
                color: "#fff",
                backgroundColor: "#000",
                padding: "6px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
            <img
              className="main"
              style={{ width: "250px", height: "150px", borderRadius: "12px" }}
              src={mainImg}
              alt="main"
            />
            <div className="profile">
              <img src={myProfile} alt="pro" />
              <p>RABYOO</p>
            </div>
            <h2>Front-end Course</h2>
            <div className="data">
              <div className="time">
                <MdAccessTimeFilled
                  style={{ fontSize: "20px", marginRight: "5px" }}
                />
                <span>1h 53m</span>
              </div>
              <div className="star">
                <FaStar style={{ fontSize: "20px", marginRight: "5px" }} />
                <span>4.9/5</span>
              </div>
              <div className="btn">
                <button type="submit">Enroll</button>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="box">
            <MdOutlineSaveAlt
              style={{
                fontSize: "40px",
                position: "absolute",
                right: "20px",
                color: "#fff",
                backgroundColor: "#000",
                padding: "6px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
            <img
              className="main"
              style={{ width: "250px", height: "150px", borderRadius: "12px" }}
              src={mainImg}
              alt="main"
            />
            <div className="profile">
              <img src={myProfile} alt="pro" />
              <p>RABYOO</p>
            </div>
            <h2>Front-end Course</h2>
            <div className="data">
              <div className="time">
                <MdAccessTimeFilled
                  style={{ fontSize: "20px", marginRight: "5px" }}
                />
                <span>1h 53m</span>
              </div>
              <div className="star">
                <FaStar style={{ fontSize: "20px", marginRight: "5px" }} />
                <span>4.9/5</span>
              </div>
              <div className="btn">
                <button type="submit">Enroll</button>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="box">
            <MdOutlineSaveAlt
              style={{
                fontSize: "40px",
                position: "absolute",
                right: "20px",
                color: "#fff",
                backgroundColor: "#000",
                padding: "6px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
            <img
              className="main"
              style={{ width: "250px", height: "150px", borderRadius: "12px" }}
              src={mainImg}
              alt="main"
            />
            <div className="profile">
              <img src={myProfile} alt="pro" />
              <p>RABYOO</p>
            </div>
            <h2>Front-end Course</h2>
            <div className="data">
              <div className="time">
                <MdAccessTimeFilled
                  style={{ fontSize: "20px", marginRight: "5px" }}
                />
                <span>1h 53m</span>
              </div>
              <div className="star">
                <FaStar style={{ fontSize: "20px", marginRight: "5px" }} />
                <span>4.9/5</span>
              </div>
              <div className="btn">
                <button type="submit">Enroll</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-aos="fade-up" className="categories">
        <div className="title">
          <h2>Categories</h2>
        </div>
        <div className="boxes">
          <div className="rec">
            <FaChartLine style={{ fontSize: "25px" }} />
            <p>Design</p>
          </div>
          <div className="rec">
            <PiUsersThreeFill style={{ fontSize: "25px" }} />
            <p>Business</p>
          </div>
          <div className="rec">
            <FaOpencart style={{ fontSize: "25px" }} />
            <p>Art</p>
          </div>
          <div className="rec">
            <FaDatabase style={{ fontSize: "25px" }} />
            <p>Data Science</p>
          </div>
          <div className="rec">
            <FaPenRuler style={{ fontSize: "25px" }} />
            <p>Web Development</p>
          </div>
          <div className="rec">
            <FcIdea style={{ fontSize: "25px" }} />
            <p>Marketing</p>
          </div>
          <div className="rec">
            <BsStars style={{ fontSize: "25px" }} />
            <p>Astronomy</p>
          </div>
        </div>
      </section>
      <section data-aos="fade-up" className="myCourses">
        <div className="title">
          <h2>My Courses</h2>
        </div>
        <div className="two-rectangles">
          <div className="rectangle">
            <div className="icon">
              <MdOutlineSaveAlt
                style={{ fontSize: "25px", color: "var(--primary)" }}
              />
            </div>
            <div className="img">
              <img style={{ width: "250px" }} src={Life} alt="img" />
            </div>
            <div className="text">
              <h2>LandScape Photography</h2>
              <p>Sarah Johnson</p>
              <span className="line"></span>
              <h4>87% complete</h4>
            </div>
          </div>
          <div className="rectangle">
            <div className="icon">
              <MdOutlineSaveAlt
                style={{ fontSize: "25px", color: "var(--primary)" }}
              />
            </div>
            <div className="img">
              <img style={{ width: "250px" }} src={Life} alt="img" />
            </div>
            <div className="text">
              <h2>Web Development 2.0</h2>
              <p>Michael Thomson</p>
              <span className="line"></span>
              <h4>42% complete</h4>
            </div>
          </div>
        </div>
      </section>
      <div className="end-btn">
        <button type="submit">View All Courses</button>
      </div>
    </div>
  );
};

export default Home;
