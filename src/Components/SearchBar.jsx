import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import SongTable from "./SongTable";
import "./SearchBar.css";
import Button from "@restart/ui/esm/Button";

const SearchBar = (props) => {
  const [songList, setSongList] = useState(props.tempSongList);
  const arrayFilter = (array, string) => {
    const searchTerm = string.toLowerCase();
    return array.filter((value) => {
      return (
        value.title.toLowerCase().match(new RegExp(searchTerm, "g")) ||
        value.album.toLowerCase().match(new RegExp(searchTerm, "g")) ||
        value.artist.toLowerCase().match(new RegExp(searchTerm, "g")) ||
        value.genre.toLowerCase().match(new RegExp(searchTerm, "g")) ||
        value.releaseDate.toLowerCase().match(new RegExp(searchTerm, "g"))
      );
    });
  };

  const enterKey = (event) => {
    event.preventDefault();
    setSongList(arrayFilter(songList, event.target.value));
    event.target.value = "";
  };

  function handleButton() {
    setSongList(props.tempSongList);
  }

  return (
    <div>
      <Form className="d-flex">
        <Container className="container">
          <Form.Group className="mb-3" controlId="formSearchText">
            <Form.Label hidden={props.hideTable}>
              Press ENTER to filter music based on search
            </Form.Label>
            <Form.Control
              className="formControl"
              type="text"
              placeholder="Enter search..."
              onKeyPress={(event) => {
                event.key === "Enter" && enterKey(event);
              }}
              hidden={props.hideTable}
            />
            <Button
              variant="secondary"
              onClick={() => {
                handleButton();
              }}
              hidden={props.hideTable}
            >
              Clear Filter
            </Button>
          </Form.Group>
        </Container>
      </Form>
      <SongTable tableSongList={songList} hideTable={props.hideTable} />
    </div>
  );
};

export default SearchBar;
