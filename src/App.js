import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import axios from "axios";
import SongTable from "./Components/SongTable";

function App() {
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    makeGetRequest();
  }, []);

  async function makeGetRequest() {
    try {
      let response =  await axios.get("http://www.devcodecampmusiclibrary.com/api/music");
      setSongList(response.data);
      console.log(songList);
    } catch (error) {
      console.log("Error in API call");
    }
  }

  if(songList.length <1){
    makeGetRequest();
  }

  return (
    
    <div className="App">
      <NavBar />
      <div className="col-md-6">
        <div className="border-box">
          <SongTable tempSongList={songList} />
        </div>
      </div>
    </div>
  );
}

export default App;
