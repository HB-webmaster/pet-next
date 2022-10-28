import styles from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
    return (
        <header className="container">
            <img></img>
            <nav>
                <ul className={styles.list}>
                    <li><Link href="/Home">Home</Link></li>
                    <li><Link href="/Blog">Blog</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;