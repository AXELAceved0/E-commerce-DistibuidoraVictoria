import { Link } from 'react-router-dom'
import styles from './Navigations.module.css'

const Navigations = () => {
    return(
        <aside>
        <ul className={styles.containerMenu}>
            <Link to='/'>Inicio</Link>
            <Link>Productos</Link>
            <Link>Contactos</Link>
            <Link>Estanteria</Link>
        </ul>
        </aside>
    )
}

export default Navigations