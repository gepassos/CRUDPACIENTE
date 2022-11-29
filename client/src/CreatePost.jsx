import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

function CreatePost() {

    const navigate = useNavigate()
    const [paciente, setPaciente] = useState({
        nomePaciente: "",
        laudo: "",

    })

    const handleChange = (event) => {

        const { name, value } = event.target;

        setPaciente(prev => {
            return ({
                ...prev,
                [name]: value,
            })
        })
    }

    useEffect(() => {
        console.log(paciente);
    }, [paciente])

    return (
        <div >
            <h1>Create a Post</h1>
            <Form>
                <Form.Group>
                    <Form.Control // name e value são passados no handle change como evento
                        name="nomePaciente"
                        value={paciente.nome}
                        placeholder="Title"
                        style={{ marginBottom: "1rem" }}
                        onChange={handleChange}
                    />
                    <Form.Control
                        name="laudo"
                        value={paciente.laudo}
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