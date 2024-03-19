import Footer from "@/components/Utilities/Footer";
import Navbar from "@/components/Utilities/Navbar";

export default function ContactLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
          <Navbar/>
          {children}
          <Footer/>
        </body>
      </html>
    );
  }