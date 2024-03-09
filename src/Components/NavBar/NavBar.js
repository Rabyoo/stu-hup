import React from 'react'
import myPortfolio from './imgs/Me.png';

// Link CSS
import './css/style.css';

// React Icons
import { FaBookOpen } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { MdOutlineSaveAlt } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";

const NavBar = () => {
  return (
    <div className="container">
      <div className="logo">
        <FaBookOpen style={{ fontSize: "19px", marginTop: "10px" }} />
        <h4>STU-HUB</h4>
      </div>
      <div className="links">
        <div>
          <IoMdHome style={{ fontSize: "30px" }} />
          <p>Home</p>
        </div>
        <div>
          <IoSearch style={{ fontSize: "30px" }} />
          <p>Search</p>
        </div>
        <div>
          <MdOutlineSlowMotionVideo style={{ fontSize: "30px" }} />
          <p>Courses</p>
        </div>
        <div>
          <MdOutlineSaveAlt style={{ fontSize: "30px" }} />
          <p>Saved</p>
        </div>
        <div>
          <SiHomeassistantcommunitystore style={{ fontSize: "30px" }} />
          <p>internships</p>
        </div>
        <div className="profile">
          <img src={myPortfolio} alt="por" />
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;