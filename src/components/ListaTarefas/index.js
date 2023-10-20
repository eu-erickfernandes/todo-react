import { useEffect, useState } from "react"
import styles from './ListaTarefas.module.css'
import ItemTarefa from "./ItemTarefa"

const ListaTarefas = ({ tarefas }) => {
    // const [tarefas, setTarefas] = useState([])
    
    // const getTarefas = async () => {
    //     const URL = 'http://localhost:8080/tarefas'

    //     const dados = await fetch(URL)
    //     const json = await dados.json()

    //     setTarefas(json)
    //     console.log(json)
    // }

    // useEffect(() => {
    //     getTarefas()
    // }, [])
    
    return(
        <ul className={ styles.listaTarefas }>
            {tarefas.map(tarefa => (
                <ItemTarefa
                    key={ tarefa.id } 
                    id={ tarefa.id }
                    titulo={ tarefa.titulo }
                />
            ))}
        </ul>
    )
}

export default ListaTarefas