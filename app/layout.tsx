import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glow Saratov — пространство для твоей красоты",
  description: "Демонстрационная концепция сайта бьюти-коворкинга Glow в Саратове. Пространство, форматы аренды и контакты.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
