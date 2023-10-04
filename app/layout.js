import { Nav } from "@/components/nav_footer/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/nav_footer/Footer";
import "dotenv/config";
import { TokenProvider } from "@/context/TokenContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tour Planner",
  description: "Tour planner web guide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TokenProvider>
          <Nav />
          {children}
          <Footer />
        </TokenProvider>
      </body>
    </html>
  );
}
