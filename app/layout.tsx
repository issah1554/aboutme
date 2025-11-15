import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import TopNav from "@/components/Navbar";

export const metadata = {
  title: "My App",
  description: "Demo App",
  icons: {
    icon: "/5.svg", // optional
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scrollbar-thin scrollbar-thumb-primary-500  ">
      <body className="antialiased ">
        <TopNav />
        {children}
      </body>
    </html>
  );
}
