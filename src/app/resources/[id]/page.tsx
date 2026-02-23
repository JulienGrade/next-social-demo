import { getResource } from "@/services/resources.mock";
import { notFound } from "next/navigation";
import Link from "next/link";
import Card, { CardInner } from "@/components/ui/Card/Card";
import Button from "@/components/ui/Button/Button";

type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function ResourceDetailPage({ params }: PageProps) {
    const { id } = await params;
    const resource = await getResource(id);

    if (!resource) notFound();

    return (
        <main className="container page">
            <Card>
                <CardInner>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                        <span className="badge">{resource.category}</span>
                        <Link href="/" aria-label="Retour">
                            <Button type="button">← Retour</Button>
                        </Link>
                    </div>

                    <div style={{ height: 10 }} />

                    <h1 className="h1">{resource.title}</h1>
                    <p className="p">
                        Par <strong>{resource.author}</strong> •{" "}
                        {new Date(resource.createdAt).toLocaleDateString("fr-FR")}
                    </p>

                    <div style={{ height: 14 }} />

                    <Card style={{ borderRadius: 14 }}>
                        <CardInner>
                            <h2 className="h2">Résumé</h2>
                            <p className="p">{resource.excerpt}</p>
                        </CardInner>
                    </Card>

                    <div style={{ height: 14 }} />

                    <section className="grid cols2">
                        <Card>
                            <CardInner>
                                <h2 className="h2">Commentaires (démo)</h2>
                                <p className="p">
                                    Ici tu brancheras ton API Symfony : liste des commentaires, ajout, suppression (avec voter).
                                </p>
                            </CardInner>
                        </Card>

                        <Card>
                            <CardInner>
                                <h2 className="h2">Partage (démo)</h2>
                                <p className="p">
                                    Ici tu brancheras ton endpoint <code>/share</code> : public / amis / groupes / utilisateurs.
                                </p>
                            </CardInner>
                        </Card>
                    </section>
                </CardInner>
            </Card>
        </main>
    );
}
