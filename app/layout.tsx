import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import TopNav from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About IssaH",
  description: "Demo App",
  icons: {
    icon: "/5-circle-fill.svg", //
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scrollbar-thin scrollbar-thumb-primary-700">
      <body className="antialiased min-h-screen flex flex-col">
        <TopNav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
