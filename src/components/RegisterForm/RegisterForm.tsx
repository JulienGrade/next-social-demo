"use client";

import { useState } from "react";
import styles from "@/components/AuthCard/AuthCard.module.css";

export default function RegisterForm() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setMessage(null);
        setLoading(true);

        const form = new FormData(e.currentTarget);
        const pseudo = String(form.get("pseudo") ?? "");
        const email = String(form.get("email") ?? "");
        const password = String(form.get("password") ?? "");

        await new Promise((r) => setTimeout(r, 550));
        setLoading(false);

        if (pseudo.length < 3) return setMessage("Le pseudo doit faire au moins 3 caractères.");
        if (!email.includes("@")) return setMessage("Email invalide.");
        if (password.length < 8) return setMessage("Mot de passe trop court (min 8).");

        setMessage("Compte créé (démo) — ici tu peux rediriger vers /login.");
    }

    return (
        <div className={`card ${styles.wrap}`}>
            <div className="cardInner">
                <div className={styles.header}>
                    <h1 className="h1">Inscription</h1>
                    <p>Crée ton compte pour partager des ressources avec tes amis et groupes.</p>
                </div>

                <div style={{ height: 10 }} />

                {message && (
                    <div className={message.startsWith("Compte créé") ? "success" : "error"}>{message}</div>
                )}

                <form className="form" onSubmit={onSubmit}>
                    <div className="formRow">
                        <div className="label">Pseudo</div>
                        <input className="input" name="pseudo" placeholder="ex: maalsi-24-lille" required />
                    </div>

                    <div className="formRow">
                        <div className="label">Email</div>
                        <input className="input" name="email" type="email" placeholder="ex: jean@mail.com" required />
                    </div>

                    <div className="formRow">
                        <div className="label">Mot de passe</div>
                        <input className="input" name="password" type="password" placeholder="min 8 caractères" required />
                    </div>

                    <div className={styles.actions}>
                        <button className="btn btnPrimary" type="submit" disabled={loading}>
                            {loading ? "Création..." : "Créer mon compte"}
                        </button>
                        <span className="helper">Démo front — tu brancheras Symfony.</span>
                    </div>
                </form>
            </div>
        </div>
    );
}
