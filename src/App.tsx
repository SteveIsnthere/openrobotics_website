import React from 'react';

//main components
import Navbar from './components/Navbar/Navbar';
import Team from './components/Team/Team';
import Contact from './components/ContactPage/ContactPage'
import Recruitment from './components/Recruitment/Recruitment';
import Footer from './components/Footer/Footer';

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
       <PianoBot />
        <RoboCupTeam />
       <Footer/>
    </div>
  );
}

export default App;
