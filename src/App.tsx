import React from 'react';
import Member from './components/Team/Member';
import Team from './components/Team/Team'
import Piano from './components/Projects/Pianobot';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App w-screen overflow-x-hidden">
       <Navbar/>
       <Team/>
    </div>
  );
}

export default App;
