import { Title, Container, TopBackground, Form, ContainerInputs, Input, InputEmail, InputLabel, Button } from "./styles"
import UsersImage from '../../assets/users.png'

function App() {

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
            <Input type="text" placeholder="Nome do Usuário" />
          </div>
          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do Usuário" />
          </div>
        </ContainerInputs>

        <InputEmail>
          <InputLabel>
            Email<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="Email do Usuário" />
        </InputEmail>

        <Button>Cadastrar Usuário</Button>
      </Container>
    </>
  )
}

export default App
















