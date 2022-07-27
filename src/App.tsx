import React from 'react';

//main components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

//Team
import Team from './components/Team/Team';
import Contact from './components/ContactPage/ContactPage'
import Recruitment from './components/Recruitment/Recruitment';

//Landing

import Hero from './components/Home/Hero';
import Sponsor from './components/Home/Sponsor';
import Home from './components/Home/Home';
import Projects from './components/Home/Projects';
import Map from './components/Home/Map';

// teams
import RoboCup from './components/Projects/Robocup';
import RoboCupTeam from './components/Team/TeamRobocup';
import ArtBot from './components/Projects/Artbot';
import ArtBotTeam from './components/Team/TeamArtbot';
import PianoBot from './components/Projects/Pianobot';
import PianoBotTeam from './components/Team/TeamPianobot';

function App() {
  return (
    <div className="App w-screen overflow-x-hidden font-Roboto selection:bg-yellow-400 selection:text-gray-900">
       <Navbar/>
       <Hero />
       <Home />
       <Projects/>
       <Sponsor/>
       <Map />
       <Footer/>
    </div>
  );
}

export default App;
