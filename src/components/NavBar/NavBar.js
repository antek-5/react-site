import Container from "../Container/Container";
import styles from "./NavBar.module.scss";

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Container>
                <div className={styles.iconDiv}>
                    <a href="/">
                        <span className="fa fa-tasks" />
                    </a>
                </div>
                <div className={styles.listDiv}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/Favorite">Favorite</a></li>
                        <li><a href="/About">About</a></li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
}

export default NavBar;