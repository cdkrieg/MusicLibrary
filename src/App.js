import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import {
  getAllSongs,
  getSongById,
  addSong,
  updateSong,
  deleteSong
} from "./Components/Axios";
import SearchBar from "./Components/SearchBar";

function App() {
  const [songList, setSongList] = useState();

  useEffect(() => {
    let songs = getAllSongs()
      .then((songs) => {
        setSongList(songs)
      });
    // setSongList(getAllSongs());
  }, []);


  return (
    <div className="App">
      <NavBar />
      {songList && <SearchBar tempSongList={songList} />}
    </div>
  );
}

export default App;
