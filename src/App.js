import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import {getAllSongs, addSong} from "./Components/Axios";
import SearchBar from "./Components/SearchBar";
import AddSong from "./Components/AddSong";

function App() {
  const [songList, setSongList] = useState([]);

  // const [showHideSearchBar, setShowhideSearchBar] = useState(true);
  // const [showHideAddSong, setShowhideAddSong] = useState(false);
  // const [showHideAddSong, setShowhideAddSong] = useState(false);

  useEffect(() => {
    let songs = getAllSongs()
      .then((songs) => {
        setSongList(songs)
      });
    // setSongList(getAllSongs());
  }, []);

  // function test(){
  // addSong({"title": "Hysteria" ,
  //    "album": "Hysteria" ,
  //    "artist": "Def Leppard" ,
  //    "genre": "Rock" ,
  //    "releaseDate": "9/8/1987"})
  // }
  return (
    <div className="App">
    <NavBar />
      {/* <NavBar showHideAddSong = {setShowhideAddSong(!showHideAddSong)}/> */}
      {/* {showHideSearchBar && songList && <SearchBar tempSongList={songList} />} */}
      {songList.length>0 && <SearchBar tempSongList={songList} />}
      {/* {showHideAddSong && <AddSong />} */}
      <AddSong setSongList = {setSongList} songList = {songList} />
      

    </div>
  );
}

export default App;
