import "./App.css";
// import Home from './Layout/Home';
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Layout/Navbar";
import Sidebar from "./Layout/Sidebar";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImageGeneration from "./Components/Imagegeneration/ImageGeneration";
import EditImage from "./Components/EditImage/EditImage";
import VideoGeneration from "./Components/VideoGeneration/VideoGeneration";
import AudioGeneration from "./Components/AudioGenerartion/AudioGeneration";
import AiChatBot from "./Components/AIChatBot/AiChatBot";
import Pricing from "./Components/Pricing/Pricing";
import Placeholder from "./Components/Placeholder/Placeholder";
import SignUp from "./Components/signup/SignUp";
import SignIn from "./Components/signIn/SignIn";
import PrivateComponent from "./privateComponent";
import ForgetPassword from "./Components/forgetPassword/ForgetPassword";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
 const [credit,setCredit] = useState();
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const handleLinkClick = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="App row">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route  path="/forget-password" element={<ForgetPassword/>}/>
          <Route element={<PrivateComponent/>} >
          <Route
            path="/home"
            element={
              <Home
                handleLinkClick={handleLinkClick}
                showSidebar={showSidebar}
                toggleSidebar={toggleSidebar}
                setCredit={setCredit}
                credit={credit}
              />
            }
          />
          <Route
            path="/imagegeneration"
            element={
              <ImageGeneration
                handleLinkClick={handleLinkClick}
                showSidebar={showSidebar}
                toggleSidebar={toggleSidebar}
                setCredit={setCredit}
                credit={credit}
              />
            }
          />
          <Route
            path="/editimage"
            element={
              <EditImage
                handleLinkClick={handleLinkClick}
                showSidebar={showSidebar}
                toggleSidebar={toggleSidebar}
                setCredit={setCredit}
                credit={credit}
              />
            }
          />
          <Route
            path="/videogeneration"
            element={
              <VideoGeneration
                handleLinkClick={handleLinkClick}
                showSidebar={showSidebar}
                toggleSidebar={toggleSidebar}
                setCredit={setCredit}
                credit={credit}
              />
            }
          />
          <Route
            path="/audiogeneration"
            element={
              <AudioGeneration
                handleLinkClick={handleLinkClick}
                showSidebar={showSidebar}
                toggleSidebar={toggleSidebar}
                setCredit={setCredit}
                credit={credit}
              />
            }
          />
          <Route
            path="/aichatbot"
            element={
              <AiChatBot
                handleLinkClick={handleLinkClick}
                showSidebar={showSidebar}
                toggleSidebar={toggleSidebar}
                setCredit={setCredit}
                credit={credit}
              />
            }
          />
          <Route
            path="/pricing"
            element={
              <Pricing
                handleLinkClick={handleLinkClick}
                showSidebar={showSidebar}
                toggleSidebar={toggleSidebar}
                setCredit={setCredit}
                credit={credit}
              />
            }
          />
          <Route
            path="/Placeholder"
            element={
              <Placeholder
                handleLinkClick={handleLinkClick}
                showSidebar={showSidebar}
                toggleSidebar={toggleSidebar}
                setCredit={setCredit}
                credit={credit}
              />
            }
          />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
