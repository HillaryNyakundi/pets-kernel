import type { Metadata } from "next";
import { poppins } from "@/app/ui/fonts";
import "@/global.css";

export const metadata: Metadata = {
  title: "Pets-Kernel",
  description: "Buy pets, vend pets feed and find lost pets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
