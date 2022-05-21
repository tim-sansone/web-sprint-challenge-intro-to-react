import React, { useState, useEffect } from 'react';
import axios from "axios"

import Character from "./components/Character.js"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // set state with our data from the server
  // we need a container to put the character cards in
  // we need a character component that will return an individual character card

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="card-container">
        { data.data
          ? data.data.map((each, index) => <Character data={each} key={index}/>)
          : <h3>Loading...</h3>
        }
      </div>
    </div>
  );
}

export default App;
