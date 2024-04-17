import React from "react";
import logo from "../Media/logo.svg";
import "./Sidebar.css";
import a from "../Media/download (7).svg";
import { FaHome } from "react-icons/fa";
import { useEffect,useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineAudioFile } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoQuestion } from "react-icons/go";
import { IoIosLogOut } from "react-icons/io";
import { NavLink,useLocation,useNavigate,useNavigation } from "react-router-dom";

const Sidebar = ({ showSidebar, handleLinkClick }) => {
    const location = useLocation();
  const navigate = useNavigate();
    const [active,setActive]= useState(window.location.pathname);
    useEffect(() => {
        // Update active link on route change
      
        const path = location.pathname;
    
        if (path === "/") {
          setActive("/");
        } else if (path === "/imagegeneration") {
          setActive("/imagegeneration");
        } else if (path === "/editimage") {
          setActive("/editimage");
        } else if (path === "/videogeneration") {
            setActive("/videogeneration");
        } else if (path === "/audiogeneration") {
            setActive("/audiogeneration");
        } else if (path === "/aichatbot") {
            setActive("/aichatbot");
        } else if (path === "/pricing") {
            setActive("/pricing");
        } else if (path === "/placeholder") {
            setActive("/placeholder");
        }
      }, [location.pathname]);
  return (
    <div
      className={`sidebar   side-bar col-lg-2 order-lg-1 order-1 d-lg-block${
        showSidebar ? "d-block " : " d-none"
      }`}
    >
      <div className="ps-3">
        <div className="  mt-3">
         <div className="d-flex justify-content-between px-1">
         <div className="d-flex pt-3 ms-2">
            <img className="side-bar-logo" src={logo} />
            <div className="d-flex align-items-center ps-2">
              <h4>TechWave</h4>
            </div>
          </div>
          <div className="d-flex py-3">
        {/* <button className="connect-btn d-lg-none d-block px-3">
                Connect Wallet
              </button> */}
        </div>

         </div>
         
        </div>
        <NavLink onClick={() => {
            setActive("/home") }} to="/home">
        <button onClick={handleLinkClick} className={`sidebar-content-div mt-4 ${active === "/home" && "btn-active"}`}>
          <div className="d-flex ">
            <IoHomeOutline className={`mt-1 sidebar-icon ${active === "/home" && "icon-active"}`} />
            <p className={`ps-2 nav-btn ${active === "/home" && "is-active"}`}>Home</p>
          </div>
        </button>
      </NavLink>

      <NavLink onClick={() => { setActive("/imagegeneration") }} to="/imagegeneration">
        <button onClick={handleLinkClick} className={`sidebar-content-div  ${active === "/imagegeneration" && "btn-active"}`}>
          <div className="d-flex">
            <CiImageOn className={`mt-1 sidebar-icon ${active === "/imagegeneration" && "icon-active"}`} />
            <p className={`ps-2 nav-btn ${active === "/imagegeneration" && "is-active"}`}>Image Generation</p>
          </div>
        </button>
      </NavLink>

      <NavLink onClick={() => { setActive("/editimage") }} to="/editimage">
        <button onClick={handleLinkClick} className={`sidebar-content-div ${active === "/editimage" && "btn-active"}`}>
          <div className="d-flex ">
            <CiImageOn className={`mt-1 sidebar-icon ${active === "/editimage" && "icon-active"}`} />
            <p className={`ps-2 nav-btn ${active === "/editimage" && "is-active"}`}>Edit/Upscale Image</p>
          </div>
        </button>
      </NavLink>

      <NavLink onClick={() => { setActive("/videogeneration") }} to="/videogeneration">
        <button onClick={handleLinkClick} className={`sidebar-content-div ${active === "/videogeneration" && "btn-active"}`}>
          <div className="d-flex">
            <IoVideocamOutline className={`mt-1 sidebar-icon ${active === "/videogeneration" && "icon-active"}`} />
            <p className={`ps-2 nav-btn ${active === "/videogeneration" && "is-active"}`}>Video Generation</p>
          </div>
        </button>
      </NavLink>

      <NavLink onClick={() => { setActive("/audiogeneration") }} to="/audiogeneration">
        <button onClick={handleLinkClick} className={`sidebar-content-div ${active === "/audiogeneration" && "btn-active"}`}>
          <div className="d-flex">
            <MdOutlineAudioFile className={`mt-1 sidebar-icon ${active === "/audiogeneration" && "icon-active"}`} />
            <p className={`ps-2 nav-btn ${active === "/audiogeneration" && "is-active"}`}>Audio Generation</p>
          </div>
        </button>
      </NavLink>

      <NavLink onClick={() => { setActive("/aichatbot") }} to="/aichatbot">
        <button onClick={handleLinkClick} className={`sidebar-content-div ${active === "/aichatbot" && "btn-active"}`}>
          <div className="d-flex">
            <IoChatboxEllipsesOutline className={`mt-1 sidebar-icon ${active === "/aichatbot" && "icon-active"}`} />
            <p className={`ps-2 nav-btn ${active === "/aichatbot" && "is-active"}`}>AI Chat Bot</p>
          </div>
        </button>
      </NavLink>

      <NavLink onClick={() => { setActive("/pricing") }} to="/pricing">
        <button onClick={handleLinkClick} className={`sidebar-content-div ${active === "/pricing" && "btn-active"}`}>
          <div className="d-flex">
            <BsCurrencyDollar className={`mt-1 sidebar-icon ${active === "/pricing" && "icon-active"}`} />
            <p className={`ps-2 nav-btn ${active === "/pricing" && "is-active"}`}>Pricing</p>
          </div>
        </button>
      </NavLink>

      <NavLink onClick={() => { setActive("/placeholder") }} to="/placeholder">
        <button onClick={handleLinkClick} className={`sidebar-content-div ${active === "/placeholder" && "btn-active"}`}>
          <div className="d-flex">
            <BsCurrencyDollar className={`mt-1 sidebar-icon ${active === "/placeholder" && "icon-active"}`} />
            <p className={`ps-2 nav-btn ${active === "/placeholder" && "is-active"}`}>Placeholder</p>
          </div>
        </button>

      </NavLink>
      <NavLink>
       <button onClick={handleLinkClick} className="sidebar-content-div">
          <div className="d-flex">
            {/* <img className="icon-img-sidebar" src={a} alt="a"/> */}

            <GoQuestion className=" mt-1 sidebar-icon" />
            <p className="ps-2 ">FAQ & Help</p>
          </div>
        </button>

       </NavLink>

        
        <button onClick={()=>{
          navigate("/")
          localStorage.clear()
        }} className="sidebar-content-div">
          <div className="d-flex">
            {/* <img className="icon-img-sidebar" src={a} alt="a"/> */}
            <IoIosLogOut className=" mt-1 sidebar-icon" />

            <p className="ps-2 ">LogOut</p>
          </div>
        </button>
        
      </div>
    </div>
  );
};

export default Sidebar;
