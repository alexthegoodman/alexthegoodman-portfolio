import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header blackLinks={true} />
      {children} <Footer />
    </>
  );
}
