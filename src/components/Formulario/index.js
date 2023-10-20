import { useState } from 'react'
import Botao from '../Botao'
import Input from '../Input'
import styles from './Formulario.module.css'

const Formulario = ({ onSubmit, handleTitulo, titulo }) => {
    return(
        <form className={ styles.formulario } onSubmit={ onSubmit }>
            <Input 
                valor={ titulo }
                onChange={ handleTitulo }
            />

            <Botao>Salvar</Botao>
        </form>
    )
}

export default Formulario