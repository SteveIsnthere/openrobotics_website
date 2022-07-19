import React from 'react';
import Member from './components/Team/Member';
import Team from './components/Team/Team'
import Navbar from './components/Navbar/Navbar';
import Contact from './components/ContactPage/ContactPage';
import Recruitment from './components/Recruitment/Recruitment';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App w-screen overflow-x-hidden font-Roboto selection:bg-yellow-400 selection:text-gray-900">
       <Navbar/>
       <Contact/>
       <Team/>
       <Footer/>
    </div>
  );
}

export default App;
