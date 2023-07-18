import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import Modal from "@/components/Modal";
import RegisterModal from "@/components/Modal/RegisterModal";
import ToasterProvider from "@/Providers/ToasterProvider";
import LoginModal from "@/components/Modal/LoginModal";
import getCurrentUser from "@/actions/getCurrentUser";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Room tour",
  description: "Online room booking application",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  console.log("layout", currentUser);
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <Navbar currentUser={currentUser} />
        <LoginModal />
        <RegisterModal />
        {children}
      </body>
    </html>
  );
}
