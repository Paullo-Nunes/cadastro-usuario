import { Title, Container, Form, ContainerInputs, Input, InputEmail, InputLabel } from "./styles"
import UsersImage from '../../assets/users.png'
import { useRef } from "react"
import api from "../../services/api"
import Button from "../../components/Button"
import TopBackground from "../../components/TopBackground"

function App() {
  //variáveis para guardar os resultados dos inputs
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  //chamada a API
  async function registerNewUser() {
    await api.post('/usuario', {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value

    })

  }

  return (
    <>
      <Container>

        <TopBackground />
        {/* <TopBackground>
          <img src={UsersImage} alt="imagem dos usuários" />
        </TopBackground> */}
        <Form>
          <Title>Cadastro de Usuário</Title>
        
        <ContainerInputs>

          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do Usuário" ref={inputName} />
          </div>
          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do Usuário" ref={inputAge} />
          </div>
        </ContainerInputs>

        <InputEmail>
          <InputLabel>
            Email<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="Email do Usuário" ref={inputEmail} />
        </InputEmail>

        <Button type="button" onClick={registerNewUser} theme="primary">Cadastrar Usuários</Button>
        </Form>
        <Button type="button">Ver Lista de Usuários</Button>
      </Container>
    </>
  )
}

export default App
















