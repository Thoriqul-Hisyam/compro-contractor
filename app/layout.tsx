import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Navara - Jelajahi Keindahan Nusantara",
  description:
    "Rasakan pengalaman perjalanan wisata premium dengan bus mewah ke destinasi eksotis di seluruh Indonesia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="font-[Poppins] text-gray-800 scroll-smooth">
        {children}
      </body>
    </html>
  );
}
