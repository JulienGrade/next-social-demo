"use client";

import { useState } from "react";
import styles from "@/components/AuthCard/AuthCard.module.css";

export default function LoginForm() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setMessage(null);
        setLoading(true);

        const form = new FormData(e.currentTarget);
        const email = String(form.get("email") ?? "");
        const password = String(form.get("password") ?? "");

        // Démo : tu remplaceras par ton appel API Symfony
        await new Promise((r) => setTimeout(r, 450));
        setLoading(false);

        if (!email.includes("@") || password.length < 6) {
            setMessage("Email ou mot de passe invalide (démo).");
            return;
        }
        setMessage("Connexion OK (démo) — ici tu redirigeras vers /dashboard.");
    }

    return (
        <div className={`card ${styles.wrap}`}>
            <div className="cardInner">
                <div className={styles.header}>
                    <h1 className="h1">Connexion</h1>
                    <p>Accède à ton feed, tes groupes et tes ressources partagées.</p>
                </div>

                <div style={{ height: 10 }} />

                {message && (
                    <div className={message.startsWith("Connexion OK") ? "success" : "error"}>{message}</div>
                )}

                <form className="form" onSubmit={onSubmit}>
                    <div className="formRow">
                        <div className="label">Email</div>
                        <input className="input" name="email" type="email" placeholder="ex: jean@mail.com" required />
                    </div>

                    <div className="formRow">
                        <div className="label">Mot de passe</div>
                        <input className="input" name="password" type="password" placeholder="••••••••" required />
                    </div>

                    <div className={styles.actions}>
                        <button className="btn btnPrimary" type="submit" disabled={loading}>
                            {loading ? "Connexion..." : "Se connecter"}
                        </button>
                        <span className="helper">Démo front — branche ton API ensuite.</span>
                    </div>
                </form>
            </div>
        </div>
    );
}
