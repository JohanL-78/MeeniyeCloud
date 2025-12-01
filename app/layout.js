import { Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import { CartProvider } from "./components/CartProvider";
import CartDrawer from "./components/CartDrawer";
import TopBanner from "./components/TopBanner";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Cosmétiques Capillaires Naturels - Cheveux Crépus, Frisés & Bouclés",
  description: "Découvrez notre gamme de 12 produits capillaires naturels pour cheveux crépus, frisés et bouclés. Formules issues de la pharmacopée afro-caribéenne. Livraison France, DOM-TOM, Suisse.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${playfairDisplay.variable} antialiased`}
      >
        <CartProvider>
          <TopBanner />
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
