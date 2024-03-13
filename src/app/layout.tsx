import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TimeX Esports - Match Registration Platform",
  description:" Timex Esports provides a premier match registration platform for players interested in competitive gaming. Discover upcoming tournaments, leagues, and events, and register to compete against players from around the world. Stay informed with detailed match schedules, formats, and registration instructions. Track your performance and climb the rankings as you compete in thrilling gaming competitions. Join Timex Esports now to take your gaming journey to the next level!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
