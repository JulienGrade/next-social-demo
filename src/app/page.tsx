import { listResources } from "@/services/resources.mock";
import ResourceCard from "@/components/ResourceCard/ResourceCard";

export default async function HomePage() {
  const resources = await listResources();

  return (
      <main className="container page">
        <div className="card">
          <div className="cardInner">
            <span className="badge">Réseau social • Ressources • Commentaires</span>
            <h1 className="h1" style={{ marginTop: 10 }}>
              Feed de ressources
            </h1>
            <p className="p">
              Démo Next.js “pro” : pages propres dans <code>app/</code>, composants dans{" "}
              <code>features/</code>, styles en CSS Modules.
            </p>
          </div>
        </div>

        <div style={{ height: 14 }} />

        <section className="grid cols3">
          {resources.map((r) => (
              <ResourceCard key={r.id} resource={r} />
          ))}
        </section>
      </main>
  );
}
