import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Baitussalam UK - Together, We Create Change",
  description: "Empower every vulnerable individual through impactful healthcare, education, and community services. Support our causes and make a difference today.",
  keywords: "charity, donation, UK, healthcare, education, community services, humanitarian aid",
  openGraph: {
    title: "Baitussalam UK - Together, We Create Change",
    description: "Empower every vulnerable individual through impactful healthcare, education, and community services.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baitussalam UK - Together, We Create Change",
    description: "Empower every vulnerable individual through impactful healthcare, education, and community services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <ErrorBoundary> */}
          <Navbar/>
          {children}
          <Footer/>
        {/* </ErrorBoundary> */}
      </body>
    </html>
  );
}
