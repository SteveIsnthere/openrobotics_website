import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

//main components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import ScrollToTop from "./ScrollToTop";

//Team
import Team from "./components/Team/Team";
import Contact from "./components/ContactPage/ContactPage";
import Recruitment from "./components/Recruitment/Recruitment";

//Landing

import Home from "./components/Home/Home";
import Projects from "./components/Home/Projects";
import Sponsor from "./components/Home/Sponsor";

// teams
import RoboCup from "./components/Projects/Robocup";
import ArtBot from "./components/Projects/Artbot";
import PianoBot from "./components/Projects/Pianobot";
import ScrollToTop from "./ScrollToTop";

// internal
import Login from "./components/Member/Register";

function App() {
  return (
    <Router>
      <div className="App w-screen overflow-x-hidden font-Roboto selection:bg-yellow-400 selection:text-gray-900 flex flex-col min-h-screen	justify-between">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Robocup" element={<RoboCup />} />
          <Route path="/Artbot" element={<ArtBot />} />
          <Route path="/Pianobot" element={<PianoBot />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Recruitment" element={<Recruitment />} />
          <Route path="/Sponsor" element={<Sponsor />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Admin" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
