import React from "react";
import styles from "./Card.module.css";

type Props = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
};

export default function Card({ className = "", children, ...rest }: Props) {
    return (
        <div className={`${styles.card} ${className}`.trim()} {...rest}>
            {children}
        </div>
    );
}

export function CardInner({
                              className = "",
                              children,
                              ...rest
                          }: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) {
    return (
        <div className={`${styles.inner} ${className}`.trim()} {...rest}>
            {children}
        </div>
    );
}
