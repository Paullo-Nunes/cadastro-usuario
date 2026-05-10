import { Button } from "../../components/Button/styles"
import TopBackground from "../../components/TopBackground"
import { useEffect, useState } from "react"
import api from "../../services/api"

function ListUsers() {
    
    const [users, setUsers] = useState([])

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
        <div>
            <TopBackground />
            <h1>Listagem de Usuários</h1>
            {users.map((user) => (
                <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.age}</p>
                </div>
            ))}
            <Button>Voltar</Button>
        </div>
    )
}

export default ListUsers