'use client';

import { useState, useEffect } from 'react';
import { useCart } from './CartProvider';
import Link from 'next/link';

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCategoriesMenu, setShowCategoriesMenu] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { cartCount, openDrawer } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Si on remonte (et qu'on a scrollé un minimum)
      if (currentScrollY < lastScrollY && currentScrollY > 100) {
        setIsScrollingUp(true);
      }
      // Si on descend ou qu'on est en haut de page
      else {
        setIsScrollingUp(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
        isScrollingUp
          ? 'bg-white/95 backdrop-blur-xl border-b border-[#A0785A]/10 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="flex items-center justify-between">
            {/* Menu Hamburger - Gauche */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-[#2C3E2F] hover:text-[#7A9B6E] transition-colors p-2"
              aria-label="Menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {showMobileMenu ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Logo - Centre */}
            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
              <img
                src="https://cdn.shopify.com/s/files/1/0963/8435/2638/files/Meenlogo_72d16e8a-27b4-4af1-a688-a681181b2a00.png?v=1764545222"
                alt="Meeniyé"
                className="h-24 md:h-26 w-auto"
              />
            </Link>

            {/* Icônes - Droite */}
            <div className="flex items-center gap-4">
              <button className="text-[#2C3E2F] hover:text-[#7A9B6E] transition-colors p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button
                onClick={openDrawer}
                className="relative text-[#2C3E2F] hover:text-[#7A9B6E] transition-colors p-2"
                title="Ouvrir le panier"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-[#A0785A] text-[#FFFFFF] text-xs font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu déroulant */}
      {showMobileMenu && (
        <div className="fixed top-30 left-0 right-0 z-40 bg-white/98 backdrop-blur-xl border-b border-[#A0785A]/10 shadow-xl">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
            <div className="flex flex-col gap-6">
              <Link
                href="/products"
                onClick={() => setShowMobileMenu(false)}
                className="text-lg font-semibold text-[#2C3E2F]/75 hover:text-[#7A9B6E] transition-colors tracking-wide"
              >
                Nos produits
              </Link>

              <div className="relative">
                <button
                  onClick={() => setShowCategoriesMenu(!showCategoriesMenu)}
                  className="text-lg font-semibold text-[#2C3E2F]/75 hover:text-[#7A9B6E] transition-colors tracking-wide flex items-center gap-2"
                >
                  Nos gammes complètes
                  <svg
                    className={`w-5 h-5 transition-transform ${showCategoriesMenu ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showCategoriesMenu && (
                  <div className="mt-4 ml-6 flex flex-col gap-4">
                    <Link
                      href="/collections/hydratation-intense"
                      onClick={() => setShowMobileMenu(false)}
                      className="text-base text-[#2C3E2F]/70 hover:text-[#7A9B6E] transition-colors"
                    >
                      Hydratation Intense
                    </Link>
                    <Link
                      href="/collections/gamme-revigorante"
                      onClick={() => setShowMobileMenu(false)}
                      className="text-base text-[#2C3E2F]/70 hover:text-[#7A9B6E] transition-colors"
                    >
                      Gamme Revigorante
                    </Link>
                    <Link
                      href="/collections/serums-traitants"
                      onClick={() => setShowMobileMenu(false)}
                      className="text-base text-[#2C3E2F]/70 hover:text-[#7A9B6E] transition-colors"
                    >
                      Sérums Traitants
                    </Link>
                    <Link
                      href="/collections/produits-unite"
                      onClick={() => setShowMobileMenu(false)}
                      className="text-base text-[#2C3E2F]/70 hover:text-[#7A9B6E] transition-colors"
                    >
                      Produits à l&apos;unité
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/notre-histoire"
                onClick={() => setShowMobileMenu(false)}
                className="text-lg font-semibold text-[#2C3E2F]/75 hover:text-[#7A9B6E] transition-colors tracking-wide"
              >
                Notre histoire
              </Link>

              <Link
                href="/espace-pro"
                onClick={() => setShowMobileMenu(false)}
                className="text-lg font-semibold text-[#2C3E2F]/75 hover:text-[#7A9B6E] transition-colors tracking-wide"
              >
                Espace pro
              </Link>

              <Link
                href="/contact"
                onClick={() => setShowMobileMenu(false)}
                className="text-lg font-semibold text-[#2C3E2F]/75 hover:text-[#7A9B6E] transition-colors tracking-wide"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
