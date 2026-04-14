import type { Metadata } from "next";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Jake Yoshimoto | Robotics Engineering Portfolio",
    template: "%s | Jake Yoshimoto",
  },
  description:
    "Portfolio website for Jake Yoshimoto, a UC Santa Cruz Robotics Engineering student focused on embedded systems, controls, mechatronics, and applied software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
