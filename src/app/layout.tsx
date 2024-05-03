import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const IbmPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight : ["400", "500", "600", "700"],
  variable : "--font-ibm_plex"
 });

export const metadata: Metadata = {
  title: "Imagenius",
  description: "AI-powered Image Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-IbmPlex antialiased", IbmPlex.variable)}>{children}</body>
    </html>
  );
}
