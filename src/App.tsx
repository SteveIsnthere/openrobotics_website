import React from 'react';
import Member from './components/Team/Member';
import Team from './components/Team/Team'

function App() {
  return (
    <div className="App flex flex-row">
       <Member name="Sashank Shukla" position='Web Developer' facebook='facebook' linkedin='Linkedin' github='github' img="img"/>
    </div>
  );
}

export default App;
