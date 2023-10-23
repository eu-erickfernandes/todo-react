import { useEffect, useState } from "react"
import styles from './ListaTarefas.module.css'
import ItemTarefa from "./ItemTarefa"

const ListaTarefas = ({ tarefas, handleApagar }) => {
    
    return(
        <ul className={ styles.listaTarefas }>
            {tarefas.map(tarefa => (
                <ItemTarefa
                    key={ tarefa.id } 
                    id={ tarefa.id }
                    titulo={ tarefa.titulo }
                    onClick={ handleApagar }
                />
            ))}
        </ul>
    )
}

export default ListaTarefas