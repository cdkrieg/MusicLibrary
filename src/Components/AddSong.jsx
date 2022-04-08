import React from "react";
import { Form } from "react-bootstrap";
import { addSong, getAllSongs } from "./Axios";
import "../App"
import SongTable from "./SongTable";

const AddSong = (props) => {

  let properties = [
    { title: "" ,
     album: "" ,
     artist: "" ,
     genre: "" ,
     releaseDate: "" },
  ];

  function submit(properties) {
    addSong(properties);
    <SongTable tempSongList = {getAllSongs}/>
  }

  return <div>
      <Form onSubmit={submit(properties)}>
          <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" onChange={(event) => {
                  properties.title = event.target.value
              }} />
          </Form.Group>
          <Form.Group>
              <Form.Label>Album</Form.Label>
              <Form.Control type="text" onChange={(event) => {
                  properties.album = event.target.value
              }} />
          </Form.Group>
          <Form.Group>
              <Form.Label>Artist</Form.Label>
              <Form.Control type="text" onChange={(event) => {
                  properties.artist = event.target.value
              }} />
          </Form.Group>
          <Form.Group>
              <Form.Label>Genre</Form.Label>
              <Form.Control type="text" onChange={(event) => {
                  properties.genre = event.target.value
              }} />
          </Form.Group>
          <Form.Group>
              <Form.Label>Release Date</Form.Label>
              <Form.Control type="text" onChange={(event) => {
                  properties.releaseDate = event.target.value
              }} />
          </Form.Group>
      </Form>
  </div>;
};

export default AddSong;
props;
