import styles from "./footer.module.scss";


const Footer = () => {
    return (
        <footer className="container">
           <ul className={styles.list}>
                    <li>About</li>
                    <li>Contacts</li>
                </ul>
        </footer>
    )
}

export default Footer;