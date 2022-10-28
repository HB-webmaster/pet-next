import styles from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
    return (
        <header className="container">
            
            <nav>
                <ul className={styles.list}>
                    <li><Link legacyBehavior href={'/'}><a>Home</a></Link></li>
                    <li><Link legacyBehavior href={'/Blog'}>Blog</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;