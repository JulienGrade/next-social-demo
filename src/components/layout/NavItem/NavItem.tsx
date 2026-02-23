"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavItem.module.css";
import React from "react";

type Props = {
    href: string;
    children: React.ReactNode;
    className?: string;
    exact?: boolean;
};

export default function NavItem({ href, children, className = "", exact = true }: Props) {
    const pathname = usePathname();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    const cls = `${styles.link} ${isActive ? styles.active : ""} ${className}`.trim();
    return (
        <Link className={cls} href={href}>
            {children}
        </Link>
    );
}
