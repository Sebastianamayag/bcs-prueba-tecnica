import type { Metadata } from "next";

import './globals.css'
import { GlobalUIProvider } from "@/shared/context/GlobalUIContext";

export const metadata: Metadata = {
  title: "Fundación Banco Caja Social",
  description: "Encuentra tu solución financiera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
    >
      <body>
        <GlobalUIProvider>
          {children}
        </GlobalUIProvider>
      </body>
    </html>
  );
}
