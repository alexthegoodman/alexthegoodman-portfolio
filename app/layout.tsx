import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import InnerLayout from "@/components/InnerLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Woodman | Freelance 3D Developer",
  description:
    "Freelance Machine Learning and interactive 3D developer based in Grand Rapids, creating cinematic, real-time visuals and powerful ML solutions.",
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
