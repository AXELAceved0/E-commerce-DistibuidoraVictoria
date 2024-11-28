import { Link } from "react-router-dom";
import styles from "./Login.module.css"

const Login = () => {
    return (
        <nav className={styles.login}>
            <Link to="/login">
                <i className="bi bi-person-circle"></i>
            </Link>
        </nav>
    );
};

export default Login;
