// app/layout.tsx
import "./globals.css";
import NavBar from "@/components/nav/navbar";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "Game4You",
  description: "Game4You lib",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
            <div className="flex flex-col min-h-screen">

        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
        </div>
      </body>
    </html>
  );
}
