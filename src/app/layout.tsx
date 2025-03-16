import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";
import { LanguageProvider } from '../contexts/LanguageContext';

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Trang chủ - FPT.SmartKiosk",
  description: "FPT.SmartKiosk - Một giải pháp y tế thông minh cho toàn dân",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${jakartaSans.variable}`} suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <ClientBody>
            <ThemeProvider>
              {children}
            </ThemeProvider>
            <Toaster richColors position="top-right" />
          </ClientBody>
        </LanguageProvider>
      </body>
    </html>
  );
}
