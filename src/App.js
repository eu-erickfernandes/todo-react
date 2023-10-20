import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Formulario from './components/Formulario';
import ListaTarefas from './components/ListaTarefas';

function App() {
  const [tarefas, setTarefas] = useState([])
  
  // const [pendentes, setPendentes] = useState(0)
  // const [concluidas, setConcluidas] = useState(0)

  const [titulo, setTitulo] = useState('')

  const getTarefas = async () => {
    const URL = 'http://localhost:8080/tarefas?_sort=id&_order=desc'

    const dados = await fetch(URL)
    const json = await dados.json()

    setTarefas(json)
  }

  useEffect(() => {
    getTarefas()

    // getPendentes()
    // getConcluidas()
  }, [])
  
  const handleTitulo = (evento) => {
    const valor = evento.target.value 
    setTitulo(valor)
  }

  const cadastraTarefa = async () => {
    const URL = 'http://localhost:8080/tarefas'
    
    const tarefa = {
      titulo: titulo,
      concluido: false
    }

    try{
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(tarefa)
      })

      const resultado = await response.json()

      console.log(resultado)
    }catch(erro){
      console.log(erro)
    }
  }

  const handleSubmit = (evento) => {
    evento.preventDefault()
    cadastraTarefa()

    setTitulo('')
    getTarefas()
  }

  // const getConcluidas = () => {
  //   const concluidas = tarefas.filter(tarefa => tarefa.concluida).length
  //   setConcluidas(concluidas) 
  // }

  // const getPendentes = () => {
  //   const pendentes = tarefas.filter(tarefa => !tarefa.concluida).length
  //   setPendentes(pendentes) 
  // }

  return (
    <div className={ styles.App }>
      <h1 className={ styles.titulo }>Todo List</h1>

      <Formulario
        onSubmit={ handleSubmit }
        handleTitulo={ handleTitulo }
        titulo={ titulo }
      />

      <ListaTarefas
        tarefas={ tarefas }
       />
    </div>
  );
}

export default App;
