import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>MEET OUT TEAM</h1>
    <Person img="34" name="Helena" occupation="Front-end developer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </Person>  
    <Person img="16" name="Brigitte" occupation="Back-end developer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </Person> 
    <Person img="2" name="Cassandra" occupation="UX/UI designer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </Person>   </div>
  );
}

export default App;
