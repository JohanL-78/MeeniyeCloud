import { notFound } from 'next/navigation';
import { getProduct, getProducts } from '@/lib/shopify';
import SmoothReveal from '@/app/components/SmoothReveal';
import ScrollProgress from '@/app/components/ScrollProgress';
import Navbar from '@/app/components/Navbar';
import AddToCartButton from '@/app/components/AddToCartButton';
import Link from 'next/link';
import { Truck, RotateCcw, Lock, ArrowLeft } from 'lucide-react';

// Mapper les catégories Shopify (en anglais) vers les noms français
const getCategoryDisplayName = (category) => {
  const categoryMapping = {
    'Mobile & Smart Phones': 'Smartphones',
    'Laptops': 'Ordinateurs portables',
    'Smart Watches': 'Montres Connectées',
    'Over-Ear Headphones': 'Écouteurs & Audio',
    'Accessories': 'Accessoires'
  };

  return categoryMapping[category] || category;
};

// Générer les metadata dynamiques pour le SEO
export async function generateMetadata({ params }) {
  const { handle } = await params;
  const product = await getProduct(handle);

  if (!product) {
    return {
      title: 'Produit non trouvé',
    };
  }

  return {
    title: `${product.name} | TechStore`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images[0]?.url],
    },
  };
}

// Générer les pages statiques au build time pour de meilleures performances
export async function generateStaticParams() {
  try {
    const products = await getProducts(50);
    return products.map((product) => ({
      handle: product.handle,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function ProductPage({ params }) {
  const { handle } = await params;
  const product = await getProduct(handle);

  if (!product) {
    notFound();
  }

  // Sélectionner le premier variant disponible par défaut
  const defaultVariant = product.variants.find(v => v.availableForSale) || product.variants[0];

  return (
    <>
      <ScrollProgress color="#A0785A" height={3} />
      <Navbar />

      <main className="bg-[#FFFFFF] text-[#2C3E2F] font-[family-name:var(--font-playfair)] min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-20">
          {/* Retour à l'accueil */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#2C3E2F]/75 hover:text-[#7A9B6E] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Retour à l&apos;accueil</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Images Section */}
            <div className="space-y-4">
              <SmoothReveal direction="left">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#F8F9FA]">
                  {product.images[0] ? (
                    <img
                      src={product.images[0].url}
                      alt={product.images[0].alt}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-[#2C3E2F]/70">
                      Aucune image disponible
                    </div>
                  )}
                </div>
              </SmoothReveal>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.slice(1, 5).map((image, i) => (
                    <SmoothReveal key={i} direction="up" delay={i * 0.1}>
                      <div className="relative aspect-square rounded-lg overflow-hidden bg-[#F8F9FA] cursor-pointer hover:opacity-80 transition-opacity">
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </SmoothReveal>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info Section */}
            <div className="space-y-8">
              <div>
                <SmoothReveal direction="right">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm text-[#7A9B6E] font-medium tracking-wide uppercase">
                      {getCategoryDisplayName(product.category)}
                    </span>
                    {product.tags.some(tag => tag.toLowerCase() === 'new') && (
                      <span className="px-3 py-1 text-xs font-bold tracking-wide uppercase rounded bg-[#C4A088] text-[#2C3E2F]">
                        Nouveau
                      </span>
                    )}
                  </div>
                </SmoothReveal>

                <SmoothReveal direction="right" delay={0.1}>
                  <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tighter mb-6">
                    {product.name}
                  </h1>
                </SmoothReveal>

                <SmoothReveal direction="right" delay={0.2}>
                  <div className="flex items-baseline gap-4 mb-8">
                    <span className="text-4xl font-bold text-[#7A9B6E]">
                      {product.currency} ${product.price.toFixed(2)}
                    </span>
                  </div>
                </SmoothReveal>
              </div>

              <SmoothReveal direction="right" delay={0.3}>
                <div className="border-t border-[#2C3E2F]/10 pt-8">
                  <h2 className="text-xl font-bold mb-4">Description</h2>
                  <div
                    className="text-[#2C3E2F]/80 leading-relaxed space-y-4"
                    dangerouslySetInnerHTML={{ __html: product.descriptionHtml || product.description }}
                  />
                </div>
              </SmoothReveal>

              {/* Variants */}
              {product.variants.length > 1 && (
                <SmoothReveal direction="right" delay={0.4}>
                  <div className="border-t border-[#2C3E2F]/10 pt-8">
                    <h3 className="text-lg font-bold mb-4">Variantes disponibles</h3>
                    <div className="flex flex-wrap gap-3">
                      {product.variants.map((variant, i) => (
                        <button
                          key={i}
                          disabled={!variant.availableForSale}
                          className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                            variant.availableForSale
                              ? 'border-[#2C3E2F]/20 hover:border-[#7A9B6E] hover:bg-[#7A9B6E]/10'
                              : 'border-[#2C3E2F]/10 text-[#2C3E2F]/70 cursor-not-allowed opacity-50'
                          } ${i === 0 && variant.availableForSale ? 'border-[#7A9B6E] bg-[#7A9B6E]/10' : ''}`}
                        >
                          <span className="block text-sm font-medium">{variant.title}</span>
                          {variant.title !== 'Default Title' && (
                            <span className="block text-xs text-[#2C3E2F]/75 mt-1">
                              ${variant.price.toFixed(2)}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </SmoothReveal>
              )}

              {/* Add to Cart */}
              <SmoothReveal direction="right" delay={0.5}>
                <div className="border-t border-[#2C3E2F]/10 pt-8 space-y-4">
                  <AddToCartButton
                    variantId={defaultVariant.id}
                    productName={product.name}
                    variant="default"
                  />

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-4 rounded-lg bg-[#F8F9FA] border border-[#2C3E2F]/5 hover:border-[#7A9B6E]/30 transition-colors">
                      <Truck className="w-8 h-8 mx-auto mb-2 text-[#A0785A]" />
                      <div className="text-xs text-[#2C3E2F]/70">Livraison gratuite</div>
                    </div>
                    <div className="p-4 rounded-lg bg-[#F8F9FA] border border-[#2C3E2F]/5 hover:border-[#7A9B6E]/30 transition-colors">
                      <RotateCcw className="w-8 h-8 mx-auto mb-2 text-[#7A9B6E]" />
                      <div className="text-xs text-[#2C3E2F]/70">Retour 30 jours</div>
                    </div>
                    <div className="p-4 rounded-lg bg-[#F8F9FA] border border-[#2C3E2F]/5 hover:border-[#7A9B6E]/30 transition-colors">
                      <Lock className="w-8 h-8 mx-auto mb-2 text-[#C4A088]" />
                      <div className="text-xs text-[#2C3E2F]/70">Paiement sécurisé</div>
                    </div>
                  </div>
                </div>
              </SmoothReveal>

              {/* Product Details */}
              <SmoothReveal direction="right" delay={0.6}>
                <div className="border-t border-[#2C3E2F]/10 pt-8">
                  <h3 className="text-lg font-bold mb-4">Détails du produit</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b border-[#2C3E2F]/5">
                      <span className="text-[#2C3E2F]/70">Catégorie</span>
                      <span className="font-medium">{getCategoryDisplayName(product.category)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#2C3E2F]/5">
                      <span className="text-[#2C3E2F]/70">Disponibilité</span>
                      <span className="font-medium text-green-500">En stock</span>
                    </div>
                    {product.tags.length > 0 && (
                      <div className="flex justify-between py-2 border-b border-[#2C3E2F]/5">
                        <span className="text-[#2C3E2F]/70">Tags</span>
                        <div className="flex flex-wrap gap-2 justify-end">
                          {product.tags.map((tag, i) => (
                            <span key={i} className="px-2 py-1 text-xs rounded bg-white/5">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </SmoothReveal>
            </div>
          </div>

          {/* Back to Shop Button */}
          <SmoothReveal direction="up" delay={0.7}>
            <div className="mt-16 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-[#2C3E2F]/10 hover:border-[#7A9B6E]/50 text-[#2C3E2F] text-sm font-medium tracking-wide uppercase transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Retour à la boutique
              </Link>
            </div>
          </SmoothReveal>
        </div>
      </main>
    </>
  );
}
