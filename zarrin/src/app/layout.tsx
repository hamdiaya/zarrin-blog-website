import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import MobileNavBar from "@/components/mobileNavBar";
import ContactSection from "@/components/contactSection"
import Footer from "@/components/footer"
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.className}>
      <body >
        <MobileNavBar/>
        <NavBar/>
        {children}
        <ContactSection/>
       <Footer/> 
        </body>
    </html>
  );
}
