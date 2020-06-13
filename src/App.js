import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1> Meet out team</h1>
<Person img="34" name="Helga" occupation="Front-end developer">Lorem ipsum</Person>  
<Person img="44" name="Brygida" occupation="Back-end developer">Bla bla</Person> 
<Person img="13" name="Ksenia" occupation="UX/UI designer">Here is my little la la la</Person>   </div>
  );
}

export default App;
