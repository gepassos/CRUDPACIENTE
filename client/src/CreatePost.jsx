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
      
        if (paciente.laudo.trim() !== "" && paciente.nomePaciente.trim() !== "") {
          axios
            .post("http://localhost:3001/posts/create", paciente) // Update the URL to match your server route
            .then((res) => {
              console.log(res);
              navigate("../posts");
            })
            .catch((err) => console.log(err));
        } else window.alert("Cadastro inválido")
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

                <Button style={{
                width: "100%",
                marginBottom: "1rem"
            }}
                onClick={() => navigate("../posts")}
                variant="outline-dark"> Back</Button>
                

            </Form>

        </div>

    )

}


export default CreatePost