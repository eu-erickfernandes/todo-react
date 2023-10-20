import styles from './ItemTarefa.module.css'

const ItemTarefa = ({ id, titulo }) => {
    return(
        <li className={ styles.itemTarefa }>{ titulo }</li>
    )
}

export default ItemTarefa