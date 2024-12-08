import styles from './LoginPages.module.css'
import logo from '../../../assets/iconoVictoria.png'
import { useEffect } from 'react'


const LoginPages = () => {
    useEffect(() => {
        document.body.classList.add('noBackground'); // Añade la clase al cargar la página

        return () => {
            document.body.classList.remove('noBackground');
        }
    }, [])
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.containerForm}>
                <div className={styles.containerTitle}>
                    <img src={logo} alt="logo" width="135px" height="135px" />
                    <h1>Distribuidora Victoria</h1>
                </div>
                <div className={styles.containerLogin}>
                    <label htmlFor="email">
                        <i className="bi bi-person-circle">
                        </i>
                        <input type="email" placeholder=' Email' id='email' required />
                    </label>
                    <label htmlFor="passwords">
                        <i className="bi bi-lock-fill"></i>
                        <input type="passwords" id='passwords' placeholder=' Contraseña' required />
                    </label>
                    <button>Iniciar Sesión</button>

                </div>
                </div>
            </form>
        </div>
    )
}

export default LoginPages