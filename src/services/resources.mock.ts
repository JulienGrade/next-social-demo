import { Resource } from "@/types/resource";

const RESOURCES: Resource[] = [
    {
        id: "1",
        title: "Checklist sécurité API (OWASP Top 10)",
        category: "Sécurité",
        excerpt:
            "Une checklist claire pour sécuriser une API (auth, validation, rate-limit, logging) avec des exemples concrets.",
        author: "Admin",
        createdAt: "2026-02-23",
    },
    {
        id: "2",
        title: "Guide React Query pour un feed performant",
        category: "Frontend",
        excerpt:
            "Structurer vos fetchs, cache, pagination et invalidations proprement sur une app type réseau social.",
        author: "Admin",
        createdAt: "2026-02-20",
    },
    {
        id: "3",
        title: "Design Patterns Symfony API Platform",
        category: "Backend",
        excerpt:
            "Voters, Processors, Strategy/Factory, Domain Events : comment structurer une API maintenable et testable.",
        author: "Admin",
        createdAt: "2026-02-18",
    },
];

export async function listResources(): Promise<Resource[]> {
    await new Promise((r) => setTimeout(r, 150));
    return RESOURCES;
}

export async function getResource(id: string): Promise<Resource | null> {
    await new Promise((r) => setTimeout(r, 120));
    return RESOURCES.find((r) => r.id === id) ?? null;
}
