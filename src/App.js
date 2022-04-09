import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { getAllSongs } from "./Components/Axios";
import SearchBar from "./Components/SearchBar";
import AddSong from "./Components/AddSong";

function App() {
  const [songList, setSongList] = useState([]);
  const [hideTable, setHideTable] = useState(false);

  useEffect(() => {
    let songs = getAllSongs().then((songs) => {
      setSongList(songs);
    });
  }, []);

  return (
    <div className="App">
      <NavBar
        setHideTable={setHideTable}
        hideTable={hideTable}
        songList={songList}
      />
      {songList.length > 0 && (
        <SearchBar tempSongList={songList} hideTable={hideTable} />
      )}
      <AddSong
        setSongList={setSongList}
        songList={songList}
        hideTable={hideTable}
      />
    </div>
  );
}

export default App;
