import styles from './Input.module.css'

const Input = ({ valor, onChange }) => {
    return(
        <input 
            className={ styles.input }
            id='campo-nome' 
            type='text' 
            value={ valor } 
            onChange={ onChange } 
            placeholder='Insira sua tarefa'
            required
        />
    )
}

export default Input