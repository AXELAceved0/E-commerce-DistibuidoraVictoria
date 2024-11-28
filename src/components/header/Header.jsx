import Navigations from "./navigation/Navigations";
import styles from "./Header.module.css";
import Logo from "./logo/Logo";
import UserMenu from "./userMenu/UserMenu"

const Header = () => {
    return (
        <header className={styles.containerHeader}>
            <Logo />
            <Navigations />
            <UserMenu />
        </header>
    );
};
export default Header;
