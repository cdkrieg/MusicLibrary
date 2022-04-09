import React, { useState } from "react";
import { deleteSong } from "./Axios";
import { Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

const DeleteSong = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data,event) {
    setShow(false);
    event.preventDefault();
    console.log("delete data is " + data.songToDelete)
    deleteSong(parseInt(data.songToDelete));
    reset();
    try {
        window.location.reload();
      } catch (error) {
        console.error("Error reloading window");
      }
    
  }

  return (
    <div>
      <button className="btn btn-secondary" onClick={handleShow}>
        Delete Song
      </button>
      <Modal show={show} onHide={handleClose} className="modal fade">
        <Form
          onSubmit={handleSubmit(onSubmit)}
        >
          <Form.Group>
            <Form.Label>Enter "ID" of song to delete</Form.Label>
            <Form.Control
              className={`form-control ${errors.title ? "is-invalid" : ""}`}
              {...register("songToDelete", {required: true})}
              type="text"
              name={"songToDelete"}
            />
            <button type="btn"
            onClick={()=> {
                handleSubmit(onSubmit)
            }}
            >Delete this song</button>
            <button type="button" className="close" onClick={handleClose}>
              Close
            </button>
          </Form.Group>
        </Form>
      </Modal>
    </div>
  );
};

export default DeleteSong;
