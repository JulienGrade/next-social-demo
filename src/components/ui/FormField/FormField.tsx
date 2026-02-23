import React from "react";
import styles from "./FormField.module.css";

type Props = {
    label: string;
    error?: string | null;
    help?: string;
    children: React.ReactNode;
};

export default function FormField({ label, error, help, children }: Props) {
    return (
        <div className={styles.row}>
            <div className={styles.label}>{label}</div>
            {children}
            {help ? <div className={styles.help}>{help}</div> : null}
            {error ? <div className={styles.error}>{error}</div> : null}
        </div>
    );
}
