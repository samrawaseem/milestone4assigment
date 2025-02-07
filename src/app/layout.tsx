import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = { title: "Blog Site" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
