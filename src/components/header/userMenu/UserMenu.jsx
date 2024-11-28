import Login from "./login/Login"
import ShoppingCart from "./shoppingCart/ShoppingCart"
import styles from "./UserMenu.module.css"

const UserMenu = () => {
    return(
        <div className={styles.userMenu}>
        <Login />
        <ShoppingCart />
        </div>
    )
}

export default UserMenu