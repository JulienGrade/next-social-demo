import "./globals.css";
import Navbar from "@/components/layout/Navbar/Navbar";

export const metadata = {
  title: "Next Social Demo",
  description: "Demo pro Next.js avec pages et CSS Modules",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="fr">
        <body>
          <Navbar />
          {children}
        </body>
      </html>
  );
}
