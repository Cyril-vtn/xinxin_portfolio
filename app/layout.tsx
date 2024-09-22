import "./globals.css";
import { Metadata } from "next";
import PreviewWrapper from "./components/PreviewWrapper";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Xinxin Qin",
  description: "Portfolio d'animation de Xinxin Qin",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </head>
      <body>
        <header className="flex flex-col items-center py-8 text-text-light">
          <h2 className="font-['NeueMontreal'] text-2xl tracking-widest mb-4">
            Xinxin Qin
          </h2>
          <Navigation />
        </header>
        <PreviewWrapper>{children}</PreviewWrapper>
      </body>
    </html>
  );
}
