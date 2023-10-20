import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([])
  
  const [pendentes, setPendentes] = useState(0)
  const [concluidas, setConcluidas] = useState(0)

  const [nome, setNome] = useState('')
  
  const handleNome = (evento) => {
    const valor = evento.target.value 
    setNome(valor)
  }

  const cadastraTarefa = async () => {
    const URL = 'http://localhost:8080/tarefas'
    
    const tarefa = {
      nome: nome,
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

    setNome('')
    // getTarefas()
  }

  const getConcluidas = () => {
    const concluidas = tarefas.filter(tarefa => tarefa.concluida).length
    setConcluidas(concluidas) 
  }

  const getPendentes = () => {
    const pendentes = tarefas.filter(tarefa => !tarefa.concluida).length
    setPendentes(pendentes) 
  }

  const getTarefas = async () => {
    const URL = 'http://localhost:8080/tarefas'

    const dados = await fetch(URL)
    const json = await dados.json()

    setTarefas(json)
  }

  useEffect(() => {
    getTarefas()
    getPendentes()
    getConcluidas()
  }, [tarefas])

  return (
    <div className="App">
      <form onSubmit={ handleSubmit }>
        <label htmlFor='campo-nome'>Nome</label>
        <input id='campo-nome' type='text' onChange={ handleNome } value={ nome } required/>

        <button>Salvar</button>
      </form>

      <p>Pendentes: <span>{ pendentes }</span></p>
      <p>Concluídas: <span>{ concluidas }</span></p>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={ tarefa.id }>{ tarefa.nome }</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
