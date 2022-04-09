import Button from "@restart/ui/esm/Button";
import React from "react";
import { Form } from "react-bootstrap";
import { addSong } from "./Axios";

import { useForm } from "react-hook-form";
const AddSong = (props) => {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data, event) {
    event.preventDefault();
    console.log(data);
    addSong(data);
    reset();
    try {
      window.location.reload();
    } catch (error) {
      console.error("Error reloading window");
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label hidden={!props.hideTable}>Title</Form.Label>
          <Form.Control
            className={`form-control ${errors.title ? "is-invalid" : ""}`}
            name="title"
            {...register("title")}
            type="text"
            hidden={!props.hideTable}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label hidden={!props.hideTable}>Album</Form.Label>
          <Form.Control
            className={`form-control ${errors.album ? "is-invalid" : ""}`}
            name="album"
            {...register("album")}
            type="text"
            hidden={!props.hideTable}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label hidden={!props.hideTable}>Artist</Form.Label>
          <Form.Control
            className={`form-control ${errors.artist ? "is-invalid" : ""}`}
            name="artist"
            {...register("artist")}
            type="text"
            hidden={!props.hideTable}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label hidden={!props.hideTable}>Genre</Form.Label>
          <Form.Control
            className={`form-control ${errors.genre ? "is-invalid" : ""}`}
            name="genre"
            {...register("genre")}
            type="text"
            hidden={!props.hideTable}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label hidden={!props.hideTable}>Release Date</Form.Label>
          <Form.Control
            className={`form-control ${errors.releaseDate ? "is-invalid" : ""}`}
            name="releaseDate"
            {...register("releaseDate")}
            type="text"
            hidden={!props.hideTable}
          />
        </Form.Group>
        <Button type="submit" hidden={!props.hideTable}>
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddSong;
