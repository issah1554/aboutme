import "./globals.css";

export const metadata = {
  title: "My App2",
  description: "Demo App",
  icons: {
    icon: "/five-icon.png", // optional
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
