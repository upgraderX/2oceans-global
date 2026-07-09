import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "2 Oceans Global — Manufacturing in Pakistan, Managed End to End",
  description:
    "2 Oceans Global runs manufacturing in Pakistan for global brands. One partner, one contract, one point of accountability — from sample to shipment. Sports goods, gloves, leather, textiles, and more.",
  metadataBase: new URL("https://2oceansglobal.com"),
  openGraph: {
    title: "2 Oceans Global — Manufacturing in Pakistan, Managed End to End",
    description:
      "One partner, one contract, one point of accountability — from sample to shipment.",
    url: "https://2oceansglobal.com",
    siteName: "2 Oceans Global",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800&f[]=general-sans@400,500,600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Source+Serif+4:ital,wght@0,400;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
