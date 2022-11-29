import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function CreatePost() {

    const navigate = useNavigate()
    const [paciente, setPaciente] = useSate({
        nome: "",
        laudo: "",

    })

    const handleChange = (event) => {

        console.log(event.target)


    }
    return (
        <div >
            <h1>Create a Post</h1>
            <Form>
                <Form.Group>
                    <Form.Control
                        name="paciente"
                        value={nome.paciente}
                        placeholder="Title"
                        style={{ marginBottom: "1rem" }}
                        onChange={handleChange}
                    />
                    <Form.Control
                        name="laudo"
                        value={laudo.paciente}
                        placeholder="Digite o Laudo"
                        style={{ marginBottom: "1rem" }}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Form>
            <Button
                style={{ width: "50%" }}
                variant="outline-dark"
                onClick={() => navigate("/")}>
                BACK
            </Button>
        </div>

    )

}


export default CreatePost