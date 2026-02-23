import Link from "next/link";

export default function NotFound() {
    return (
        <main className="container page">
            <div className="card">
                <div className="cardInner">
                    <h1 className="h1">Ressource introuvable</h1>
                    <p className="p">L’ID demandé ne correspond à aucune ressource.</p>
                    <div style={{ height: 14 }} />
                    <Link className="btn btnPrimary" href="/">
                        Retour au feed
                    </Link>
                </div>
            </div>
        </main>
    );
}
