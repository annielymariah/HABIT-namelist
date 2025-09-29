import Header from "../Header";
import Footer from "../Footer";
import type { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children}: RootLayoutProps) {
  return (
    <div className="flex flex-col w-full min-h-screen max-w-screen">
      <Header />
      <main className="flex-1 flex-col w-full flex items-center my-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}