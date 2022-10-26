import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header>
            <img></img>
            <nav>
                <ul className={styles.list}>
                    <li><a href="">Home</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;