import styles from './LoginPages.module.css'
import fondo from '../../../assets/alfareros.png'


const LoginPages = () => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={fondo} alt="fondo" />
            <div>
            <h1>Iniciar Sesión</h1>
            </div>
            <form>
                
            </form>
        </div>
    )
}

export default LoginPages