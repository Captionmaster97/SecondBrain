import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Second Brain Campus — Your Personal College Intelligence System", description: "Connect subjects, notes, deadlines and college resources in one student workspace." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
