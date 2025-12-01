import { getProducts } from '@/lib/shopify';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import SmoothReveal from '@/app/components/SmoothReveal';
import ImageParallaxZoom from '@/app/components/ImageParallaxZoom';
import AddToCartButton from '@/app/components/AddToCartButton';
import { ArrowLeft, Droplets, Sparkles, Leaf, Heart, Package } from 'lucide-react';

// Mapper les catégories Shopify aux icônes Lucide
const getCategoryIcon = (category) => {
  const categoryLower = (category || '').toLowerCase();

  if (categoryLower.includes('hydratation') || categoryLower.includes('hydrate')) return Droplets;
  if (categoryLower.includes('revigorant') || categoryLower.includes('fortifiant')) return Sparkles;
  if (categoryLower.includes('sérum') || categoryLower.includes('serum') || categoryLower.includes('traitement')) return Heart;
  if (categoryLower.includes('naturel') || categoryLower.includes('bio')) return Leaf;

  return Package; // Icône par défaut pour autres
};

export const metadata = {
  title: 'Tous nos Produits Capillaires Naturels',
  description: 'Découvrez notre gamme complète de 12 produits capillaires naturels pour cheveux crépus, frisés et bouclés',
};

export default async function AllProductsPage() {
  let products = [];

  try {
    // Récupérer tous les produits (max 100)
    products = await getProducts(100);
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  // Ajouter des tags dynamiques basés sur les tags Shopify
  const enhancedProducts = products.map((product) => {
    let tag = null;
    if (product.tags) {
      if (product.tags.includes('new') || product.tags.includes('New') || product.tags.includes('nouveautés')) tag = 'New';
      else if (product.tags.includes('bestseller') || product.tags.includes('Bestseller')) tag = 'Bestseller';
      else if (product.tags.includes('limited') || product.tags.includes('Limited')) tag = 'Limited';
      else if (product.tags.includes('promo') || product.tags.includes('Promo')) tag = 'Promo';
    }
    return { ...product, tag };
  });

  return (
    <>
      <Navbar />

      <main className="bg-[#FFFFFF] text-[#2C3E2F] font-[family-name:var(--font-playfair)] min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Fil d'ariane & Retour */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#2C3E2F]/75 hover:text-[#7A9B6E] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Retour à l&apos;accueil</span>
          </Link>

          {/* En-tête */}
          <SmoothReveal direction="up" delay={0.1}>
            <div className="mb-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-[#2C3E2F]/10 rounded-full mb-6">
                <span className="text-sm font-medium text-[#2C3E2F]/75 tracking-wide uppercase">
                  Catalogue complet
                </span>
              </div>

              <h1 className="text-[clamp(3rem,8vw,6rem)] font-black tracking-tighter mb-4">
                Tous nos <span className="text-[#7A9B6E]">Produits</span>
              </h1>

              <p className="text-xl text-[#2C3E2F]/75 mb-6">
                Soins capillaires naturels pour cheveux crépus, frisés et bouclés
              </p>

              <p className="text-lg text-[#2C3E2F]/70">
                {products.length} produit{products.length > 1 ? 's' : ''} disponible{products.length > 1 ? 's' : ''}
              </p>
            </div>
          </SmoothReveal>

          {/* Filtres rapides */}
          <SmoothReveal direction="up" delay={0.2}>
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              <Link href="/collections/hydratation-intense">
                <button className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-[#2C3E2F]/10 hover:border-[#7A9B6E]/50 text-[#2C3E2F] text-sm font-medium tracking-wide rounded-full transition-all duration-300">
                  Hydratation Intense
                </button>
              </Link>
              <Link href="/collections/gamme-revigorante">
                <button className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-[#2C3E2F]/10 hover:border-[#7A9B6E]/50 text-[#2C3E2F] text-sm font-medium tracking-wide rounded-full transition-all duration-300">
                  Gamme Revigorante
                </button>
              </Link>
              <Link href="/collections/serums-traitants">
                <button className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-[#2C3E2F]/10 hover:border-[#7A9B6E]/50 text-[#2C3E2F] text-sm font-medium tracking-wide rounded-full transition-all duration-300">
                  Sérums Traitants
                </button>
              </Link>
              <Link href="/collections/produits-unite">
                <button className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-[#2C3E2F]/10 hover:border-[#7A9B6E]/50 text-[#2C3E2F] text-sm font-medium tracking-wide rounded-full transition-all duration-300">
                  Produits à l&apos;unité
                </button>
              </Link>
            </div>
          </SmoothReveal>

          {/* Grille de produits */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {enhancedProducts.map((product, i) => (
                <SmoothReveal key={product.id} direction="up" delay={i * 0.03}>
                  <Link href={`/products/${product.handle}`} className="block group">
                    <div className="relative h-80 rounded-2xl overflow-hidden mb-4">
                      <ImageParallaxZoom
                        src={product.image}
                        alt={product.name}
                        height="100%"
                        zoomIntensity={1.1}
                      />

                      <div className="absolute inset-0 bg-[#FFFFFF]/0 group-hover:bg-[#FFFFFF]/20 transition-all duration-500" />

                      {product.tag && (
                        <div className="absolute top-4 right-4">
                          <span className={`px-3 py-1.5 text-xs font-bold tracking-wide uppercase rounded ${
                            product.tag === 'New' ? 'bg-[#C4A088] text-[#2C3E2F]' :
                            product.tag === 'Bestseller' ? 'bg-[#A0785A] text-[#FFFFFF]' :
                            product.tag === 'Promo' ? 'bg-[#A0785A] text-[#FFFFFF]' :
                            'bg-[#7A9B6E] text-[#FFFFFF]'
                          }`}>
                            {product.tag}
                          </span>
                        </div>
                      )}

                      {/* Bouton Add to Cart en overlay */}
                      <AddToCartButton
                        variantId={product.variantId}
                        productName={product.name}
                        variant="overlay"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#7A9B6E] font-medium tracking-wide uppercase">
                          {product.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold group-hover:text-[#7A9B6E] transition-colors duration-300 line-clamp-2">
                        {product.name}
                      </h3>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">{product.price}€</span>
                        {(() => {
                          const Icon = getCategoryIcon(product.category);
                          return <Icon className="w-6 h-6 text-[#7A9B6E]" />;
                        })()}
                      </div>
                    </div>
                  </Link>
                </SmoothReveal>
              ))}
            </div>
          ) : (
            <SmoothReveal direction="up">
              <div className="text-center py-20">
                <div className="text-6xl mb-4">📦</div>
                <h2 className="text-2xl font-bold mb-2">Aucun produit disponible</h2>
                <p className="text-[#2C3E2F]/75 mb-8">
                  Aucun produit n&apos;a été trouvé pour le moment.
                </p>
                <Link
                  href="/"
                  className="inline-block px-8 py-4 bg-[#7A9B6E] hover:bg-[#2C3E2F] text-[#FFFFFF] font-medium tracking-wide uppercase transition-all duration-300"
                >
                  Retour à l&apos;accueil
                </Link>
              </div>
            </SmoothReveal>
          )}

        </div>
      </main>
    </>
  );
}
