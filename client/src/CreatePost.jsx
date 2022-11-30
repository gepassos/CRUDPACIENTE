import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"


function CreatePost() {

    const navigate = useNavigate()
    const [paciente, setPaciente] = useState({
        nomePaciente: "",
        laudo: "",

    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPaciente((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    /* useEffect(() => {
        console.log(paciente);
    }, [paciente]) */


    const handleClick = (event) => {
        event.preventDefault();

        axios.post("http://localhost:3001/create", paciente)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));


    };

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
                <Button
                    style={{ marginBottom: "1rem", width: "100%" }}
                    variant="outline-success"
                    onClick={handleClick}

                >Adicionar paciente</Button>
            </Form>
            <Button
                style={{ width: "50%" }}
                variant="outline-dark"
                onClick={() => navigate(-1)}>
                BACK
            </Button>
        </div>

    )

}


export default CreatePost