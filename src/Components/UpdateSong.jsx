import React, { useState } from "react";
import { Form, Modal} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { updateSong } from "./Axios";

const UpdateSong = (props) => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [idValue, setIdValue] = useState();
  const [filteredSong, setFilteredSong] = useState([{title:"Title", album:"Album", artist:"Artist", genre:"Genre", releaseDate:"Release Date"}]);

  const { register, handleSubmit, reset, formState, getValues } = useForm();
  const { errors } = formState;


  async function onSubmit1(event, data) {
    console.log(idValue);
    setShow1(false);
    setShow2(true);
    await setFilteredSong(props.songList.filter((song) => song.id == idValue))
    console.log(filteredSong);
    reset();
    handleShow2();
  }
  function onSubmit2(data, event) {
    setShow2(false);
    console.log(data)
    const removeProp = "id"
    const {[removeProp]: remove, ...rest} = data
    console.log(rest);
    updateSong(parseInt(idValue), rest);
    reset();
    try {
      window.location.reload();
    } catch (error) {
      console.error("Error reloading window");
    }
  }

  return (
    <div>
      <button className="btn btn-warning" id="button" onClick={handleShow1}>
        Update Song
      </button>
      <Modal show={show1} onHide={handleClose1} className="modal fade">
        <Form onSubmit={handleSubmit(onSubmit1)}>
          <Form.Group>
            <Form.Label>Enter "ID" of song to update</Form.Label>
            <Form.Control
              className={`form-control ${errors.title ? "is-invalid" : ""}`}
              {...register("id")}
              type="text"
            />
            <button
              type="btn"
              onClick={() => {
                setIdValue(getValues("id"));
                handleSubmit(onSubmit1);
              }}
            >
              Update this song
            </button>
            <button type="button" className="close" onClick={handleClose1}>
              Close
            </button>
          </Form.Group>
        </Form>
      </Modal>
        <Modal show={show2} onHide={handleClose2} className="modal fade">
          <Form onSubmit={handleSubmit(onSubmit2)}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                className={`form-control ${errors.title ? "is-invalid" : ""}`}
                name="title"
                {...register("title")}
                type="text"
                defaultValue={filteredSong[0].title}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Album</Form.Label>
              <Form.Control
                className={`form-control ${errors.album ? "is-invalid" : ""}`}
                name="album"
                {...register("album")}
                type="text"
                defaultValue={filteredSong[0].album}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Artist</Form.Label>
              <Form.Control
                className={`form-control ${errors.artist ? "is-invalid" : ""}`}
                name="artist"
                {...register("artist")}
                type="text"
                defaultValue={filteredSong[0].artist}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Genre</Form.Label>
              <Form.Control
                className={`form-control ${errors.genre ? "is-invalid" : ""}`}
                name="genre"
                {...register("genre")}
                type="text"
                defaultValue={filteredSong[0].genre}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Release Date</Form.Label>
              <Form.Control
                className={`form-control ${
                  errors.releaseDate ? "is-invalid" : ""
                }`}
                name="releaseDate"
                {...register("releaseDate")}
                type="text"
                defaultValue={filteredSong[0].releaseDate}
              />
            </Form.Group>
            <button type="submit" onClick={handleSubmit(onSubmit2)}>
              Update
            </button>
          </Form>
        </Modal>
    </div>
  );
};

export default UpdateSong;
