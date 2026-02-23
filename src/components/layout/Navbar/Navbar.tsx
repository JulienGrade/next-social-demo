import Link from "next/link";
import styles from "./Navbar.module.css";
import NavItem from "@/components/layout/NavItem/NavItem";

export default function Navbar() {
    return (
        <header className={styles.nav}>
            <div className={styles.inner}>
                <Link className={styles.brand} href="/">
                    <div className={styles.logo} />
                    <div className={styles.title}>
                        <strong>Ressources Relationnelles</strong>
                        <span>Demo Next.js • CSS Modules</span>
                    </div>
                </Link>

                <nav className={styles.links}>
                    <NavItem href="/" exact>
                        Accueil
                    </NavItem>
                    <NavItem href="/login" exact>
                        Connexion
                    </NavItem>
                    <NavItem href="/register" exact className={styles.cta}>
                        Inscription
                    </NavItem>
                </nav>
            </div>
        </header>
    );
}
