import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import axios from 'axios';

function App() {

  const [songList,setSongList] = useState([]);

  useEffect(() => {
    makeGetRequest();
  },[]);

  async function makeGetRequest() {
    try{
      setSongList(await axios.get('http://www.devcodecampmusiclibrary.com/api/music'));
      console.log(songList)
      return songList;
    }
    catch(error) {
      console.log("Error in API call")
    }
  }


  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
