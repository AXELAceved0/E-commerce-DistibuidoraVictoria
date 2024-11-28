import styles from "./shoppingCart.module.css"

const ShoppingCart = () => {
    return (
        <nav className={styles.cart}>
            <a href="">
                <i className="bi bi-cart3"></i>
            </a>
        </nav>
    )
}

export default ShoppingCart