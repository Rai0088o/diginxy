import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
const metadata: Metadata = {
  title: "Diginsy",
  description: "a digital ",
  icons: {
    icon: "/icons/digency_logo.png",
  },
};
export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {/* <Header /> */}
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
