import { FooterLayout } from "@/components/layout/Footer";
import { NavbarLayout } from "@/components/layout/Navbar";
import "@/styles/globals.css";

export const metadata = {
  title: "Xade Finance",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavbarLayout />
        {children}
        <FooterLayout />
      </body>
    </html>
  );
}
