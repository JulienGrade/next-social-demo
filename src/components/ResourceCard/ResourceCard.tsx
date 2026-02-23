import Link from "next/link";
import { Resource } from "@/types/resource";
import styles from "./ResourceCard.module.css";

export default function ResourceCard({ resource }: { resource: Resource }) {
    return (
        <Link href={`/resources/${resource.id}`} className={styles.card}>
            <div className={styles.top}>
                <h3 className={styles.title}>{resource.title}</h3>
                <span className="badge">{resource.category}</span>
            </div>

            <p className={styles.excerpt}>{resource.excerpt}</p>

            <div className={styles.footer}>
                <span>Par {resource.author}</span>
                <span>{new Date(resource.createdAt).toLocaleDateString("fr-FR")}</span>
            </div>
        </Link>
    );
}
