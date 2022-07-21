import React from 'react';
import Member from './components/Team/Member';
import Navbar from './components/Navbar/Navbar';
import Robocup from './components/Projects/Robocup';
import Team from './components/Team/TeamRobocup';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App w-screen overflow-x-hidden font-Roboto selection:bg-yellow-400 selection:text-gray-900">
       <Navbar/>
       <Robocup />
       <Team />
       <Footer/>
    </div>
  );
}

export default App;
