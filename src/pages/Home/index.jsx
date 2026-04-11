import { Title, Container, TopBackground, Form, ContainerInputs, Input, InputEmail, InputLabel, Button } from "./styles"
import UsersImage from '../../assets/users.png'
import { useRef } from "react"

function App() {
  //variáveis para guardar os resultados dos inputs
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  function registerNewUser() {
    console.log(inputName.current.value)
  }

  return (
    <>
      <Container>
        <TopBackground>
          <img src={UsersImage} alt="imagem dos usuários" />
        </TopBackground>
        <Form>
          <Title>Cadastro de Usuário</Title>
        </Form>
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

        <Button type="button" onClick={registerNewUser}>Cadastrar Usuário</Button>
      </Container>
    </>
  )
}

export default App
















