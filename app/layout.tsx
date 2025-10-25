import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import InnerLayout from "@/components/InnerLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Goodman",
  description:
    "I help clients with full-stack development and digital marketing services!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <InnerLayout>{children}</InnerLayout>
        {/* <link
          href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.1.0/mapbox-gl.css"
          rel="stylesheet"
        />*/}
        <link rel="stylesheet" href="https://use.typekit.net/akv8ami.css" />
      </body>
    </html>
  );
}
