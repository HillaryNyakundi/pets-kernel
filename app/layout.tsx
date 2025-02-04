import type { Metadata } from "next";
import { poppins } from "@/app/ui/fonts";
import "@/global.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Pets-Kernel",
  description: "Buy pets, vend pets feed and find lost pets",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
          {children}
        </main>
      </body>
    </html>
  );
}
