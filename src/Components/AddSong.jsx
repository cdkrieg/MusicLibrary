import Button from "@restart/ui/esm/Button";
import React, { useState, useEffect } from 'react';
import { Form } from "react-bootstrap";
import { addSong, getAllSongs } from "./Axios";
import SongTable from "./SongTable";
import SearchBar from "./SearchBar";

import { useForm } from "react-hook-form";
const AddSong = (props) => {
//   let properties = [
//     { title: "", album: "", artist: "", genre: "", releaseDate: "" },
//   ];


  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  // user state for form
  const [user, setUser] = useState(null);

  useEffect(() => {
    // reset form with user data
    reset(user);
  }, [user]);

  function onSubmit(data, event) {
    // display form data on submit
    event.preventDefault();
    console.log(data);
    addSong(data);
    reset();
    try {
      window.location.reload();
} catch (error) {
    console.error('Error reloading window');
}

  }

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            className={`form-control ${errors.title ? "is-invalid" : ""}`}
            name="title"
            {...register("title")}
            type="text"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Album</Form.Label>
          <Form.Control className={`form-control ${errors.album ? "is-invalid" : ""}`}
            name="album"
            {...register("album")}
            type="text"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Artist</Form.Label>
          <Form.Control
          className={`form-control ${errors.artist ? "is-invalid" : ""}`}
            name="artist"
            {...register("artist")}
            type="text"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Genre</Form.Label>
          <Form.Control
          className={`form-control ${errors.genre ? "is-invalid" : ""}`}
            name="genre"
            {...register("genre")}
            type="text"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Release Date</Form.Label>
          <Form.Control
          className={`form-control ${errors.releaseDate ? "is-invalid" : ""}`}
            name="releaseDate"
            {...register("releaseDate")}
            type="text"
          />
        </Form.Group>
        <Button type="submit">Add</Button>
      </Form>
      
    </div>
  );
};

export default AddSong;
