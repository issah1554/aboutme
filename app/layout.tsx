import "./globals.css";

export const metadata = {
  title: "My App",
  description: "Demo App",
  icons: {
    icon: "/5.svg", // optional
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
