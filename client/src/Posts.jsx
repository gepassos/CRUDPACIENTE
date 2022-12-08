import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios"
import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import Modal from 'react-bootstrap/Modal'

function Posts() {
    const navigate = useNavigate()

    const [posts, setPosts] = useState([]);
    const [show, setShow] = useState(false);
    const [updatedPaciente, setUpdatedPaciente] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    useEffect(() => {

        axios
            .get("http://localhost:3001/posts")
            .then((res) => {
                console.log(res);
                setPosts(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    const deletePost = (id) => {
        console.log(id)

        axios.delete(`http://localhost:3001/delete/${id}`).then(res => console.log(res))
            .catch(err => console.log(err))
        window.location.reload();

    }

    const updatePost = (id, nomePaciente, laudo) => {
        setUpdatedPaciente((prev) => {
            return {
                ...prev,
                id: id,
                nomePaciente: nomePaciente,
                laudo: laudo,
            };
        });
        handleShow();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedPaciente((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const saveUpdatedPaciente = () => {
        console.log(updatedPaciente);

        axios
            .put(`http://localhost:3001/update/${updatedPaciente.id}`, updatedPaciente)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));

        handleClose();
        window.location.reload()

    };
    return (
        <div style={{ width: "90%", textAlign: "center", margin: "auto auto" }}>

            <h1>Posts page</h1>
            <Button style={{
                width: "100%",
                marginBottom: "1rem"
            }}
                onClick={() => navigate(-1)}
                variant="outline-dark"> Back</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update a post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        placeholder="nomePaciente"
                        name="nomePaciente"
                        value={updatedPaciente.nomePaciente ? updatedPaciente.nomePaciente : ""}
                        style={{ marginBottom: "1rem" }}
                        onChange={handleChange}
                    />
                    <Form.Control
                        placeholder="laudo"
                        name="laudo"
                        onChange={handleChange}
                        value={updatedPaciente.laudo ? updatedPaciente.laudo : ""}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveUpdatedPaciente}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            {
                posts ? (
                    <>
                        {posts.map((paciente) => {

                            return (
                                <div key={paciente._id} style={{
                                    border: "solid lightgray 1px",
                                    borderRadius: "8px",
                                    marginBottom: "1rem",
                                    padding: "1rem"
                                }}>
                                    <h4>{paciente.nomePaciente}</h4>
                                    <p> {paciente.laudo}</p>

                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between"
                                    }}>
                                        <Button variant="outline-info" onClick={() => updatePost(paciente._id, paciente.nomePaciente, paciente.laudo)} style={{
                                            width: "100%",
                                            marginRight: "1rem"


                                        }}> UPDATE
                                        </Button>

                                        <Button onClick={() => deletePost(paciente._id)}
                                            variant="outline-danger"
                                            style={{
                                                width: "100%"
                                            }}> DELETE
                                        </Button>
                                    </div>
                                </div>

                            )
                        })}
                    </>
                ) : ""
            }

        </div >
    )
}

export default Posts
