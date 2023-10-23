import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Formulario from './components/Formulario';
import ListaTarefas from './components/ListaTarefas';

function App() {
  // FUNÇÕES E ESTADOS PARA A LISTAGEM DE TAREFAS

  const [tarefas, setTarefas] = useState([])

  const getTarefas = async () => {
    const URL = 'http://localhost:8080/tarefas?_sort=id&_order=desc'

    const dados = await fetch(URL)
    const json = await dados.json()

    setTarefas(json)
  }

  useEffect(() => {
    getTarefas()
  }, [])
  
  const handleTitulo = (evento) => {
    const valor = evento.target.value 
    setTitulo(valor)
  }

  // FUNÇÕES E ESTADOS PARA O CADASTRO DE UMA TAREFA

  const [titulo, setTitulo] = useState('')

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

  // FUNÇÕES PARA APAGAR UMA TAREFA

  const apagarTarefa = async (id) => {
    const URL = `http://localhost:8080/tarefas/${id}`

    try{
      const response = await fetch(URL, {
        method: 'DELETE'
      })

      const resultado = await response.json()

      console.log(resultado)
    }catch(erro){
      console.log(erro)
    }
  }

  const handleApagar = (id) => {
    apagarTarefa(id)

    getTarefas()
  }

  return (
    <div className={ styles.App }>
      <h1 className={ styles.titulo }>To-do List 📝</h1>

      <Formulario
        onSubmit={ handleSubmit }
        handleTitulo={ handleTitulo }
        titulo={ titulo }
      />

      { tarefas.length > 0 &&
        <ListaTarefas
        tarefas={ tarefas }
        handleApagar={ handleApagar }
        />
      }

      { tarefas.length === 0 && 
        <span className={ styles.mensagemVazia }>Nenhuma tarefa. Adicione suas tarefas.</span>
      }
    </div>
  );
}

export default App;
