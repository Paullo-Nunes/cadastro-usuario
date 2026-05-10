import { Button } from "../../components/Button/styles"
import TopBackground from "../../components/TopBackground"
import { useEffect } from "react"
import api from "../../services/api"

function ListUsers() {

    useEffect(() => {
        async function getUsers() {
            const {data} = await api.get('/usuario')
            console.log(data)
        }

        getUsers()

    }, [])

    //Toda vez que a tela carrega, o useEffect é chamado
    //Toda vez que uma determinada variável muda de valor, ele é chamado

    return (
        <div>
            <TopBackground />
            <h1>Listagem de Usuários</h1>
            <Button>Voltar</Button>
        </div>
    )
}

export default ListUsers