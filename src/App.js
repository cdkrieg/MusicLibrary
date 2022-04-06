import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import axios from "axios";
// import SongTable from "./Components/SongTable";
import SearchBar from "./Components/SearchBar";

function App() {
  const [songList, setSongList] = useState();
  let response;

  useEffect(() => {
    makeGetRequest();
  }, []);

  async function makeGetRequest() {
    try {
      response = await axios.get(
        "http://www.devcodecampmusiclibrary.com/api/music"
      );
      setSongList(response.data);
    } catch (error) {
      console.log("Error in API call");
    }
  }

  return (
    <div className="App">
      <NavBar />
      {songList && <SearchBar tempSongList={songList} />}
    </div>
  );
}

export default App;
