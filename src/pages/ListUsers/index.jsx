import { Button } from "../../components/Button/styles"
import TopBackground from "../../components/TopBackground"
import { useEffect, useState } from "react"
import api from "../../services/api"
import { Container, Title, ContainerUsers, CardUsers, TrashIcon, AvatarUser } from './styles'
import Trash from '../../assets/trash.svg'
import { useNavigate } from "react-router-dom"

function ListUsers() {

    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/usuario')
            setUsers(data)
        }

        getUsers()

    }, [])

    //Toda vez que a tela carrega, o useEffect é chamado
    //Toda vez que uma determinada variável muda de valor, ele é chamado

    return (
        <Container>
            <TopBackground />
            <Title>Listagem de Usuários</Title>
            <ContainerUsers>
                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUser />
                        <div >
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                            <p>{user.age}</p>
                        </div>
                        <TrashIcon src={Trash} alt="icone-lixo" />
                    </CardUsers>
                ))}
            </ContainerUsers>
            <Button type="button" onClick={() => navigate('/')}>Voltar</Button>
        </Container>
    )
}

export default ListUsers