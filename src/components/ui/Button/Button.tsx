import React from "react";
import styles from "./Button.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "primary";
    loading?: boolean;
};

export default function Button({
                                   variant = "default",
                                   loading = false,
                                   disabled,
                                   className = "",
                                   children,
                                   ...rest
                               }: Props) {
    const variantClass = variant === "primary" ? styles.primary : "";
    const cls = `${styles.btn} ${variantClass} ${className}`.trim();

    return (
        <button className={cls} disabled={disabled || loading} {...rest}>
            {loading && <span className={styles.spinner} aria-hidden />}
            {children}
        </button>
    );
}
