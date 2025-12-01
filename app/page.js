import HeroCarousel from './components/HeroCarousel';
import SmoothReveal from './components/SmoothReveal';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import AddToCartButton from './components/AddToCartButton';
import { getProducts } from '@/lib/shopify';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Meeniyé - Cosmétiques Capillaires Naturels - Cheveux Crépus, Frisés & Bouclés',
  description: 'Découvrez Meeniyé : soins capillaires professionnels issus de la pharmacopée afro-caribéenne pour cheveux crépus, frisés et bouclés. Livraison France, DOM-TOM, Suisse.',
  openGraph: {
    title: 'Meeniyé - Cosmétiques Capillaires Naturels',
    description: 'Expertise alliant tradition et recherche. Formules issues de la pharmacopée afro-caribéenne.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default async function HomePage() {
  // Récupérer les produits depuis Shopify
  let products = [];

  try {
    products = await getProducts(50);
  } catch (error) {
    console.error('Error fetching Shopify data:', error);
    products = [];
  }

  // Filtrer les best-sellers
  const bestSellers = products.filter(p =>
    p.tags && (p.tags.includes('bestseller') || p.tags.includes('Bestseller'))
  ).slice(0, 5);

  return (
    <>
      <ScrollProgress color="#A0785A" height={3} />
      <Navbar />

      <main className="bg-[#FFFFFF] text-[#2C3E2F] font-[family-name:var(--font-playfair)]">

        {/* Hero Section avec carrousel */}
        <section className="relative min-h-[80vh] overflow-hidden mt-32">
          {/* Carrousel de 3 images */}
          <HeroCarousel
            images={[
              { src: 'https://cdn.shopify.com/s/files/1/0963/8435/2638/files/IMG_20251023_101325.jpg?v=1764545319', alt: 'Meeniyé - Soins capillaires naturels' },
              { src: 'https://cdn.shopify.com/s/files/1/0963/8435/2638/files/IMG_20251031_152302.jpg?v=1764545306', alt: 'Cheveux crépus naturels' },
              
            ]}
            height="80vh"
            zoomIntensity={1.15}
            autoplayDelay={5000}
          />

          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#A0785A]/15 rounded-full blur-3xl animate-pulse pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#C4A088]/15 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#7A9B6E]/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />
        </section>

        {/* Texte principal */}
        <section className="py-20 px-6 md:px-12 bg-[#FFFFFF]">
          <div className="max-w-5xl mx-auto">
            <SmoothReveal direction="up">
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black tracking-tight leading-tight mb-12 text-center">
                Révélez la beauté de vos <span className="text-[#7A9B6E]">cheveux crépus</span>
              </h1>
            </SmoothReveal>

            <SmoothReveal direction="up" delay={0.1}>
              <div className="space-y-6 text-lg md:text-xl leading-relaxed text-[#2C3E2F]/90">
                <p>
                  Révélez la beauté de vos cheveux crépus grâce à une expertise alliant tradition et recherche.
                  Nos formules puisent dans les trésors de la pharmacopée afro-caraïbéenne pour offrir des soins
                  professionnels d'exception, performants et respectueux de la fibre capillaire. Chaque produit a
                  été conçu pour hydrater, nourrir, protéger et magnifier vos cheveux tout en apportant douceur et
                  vitalité à votre cuir chevelu.
                </p>

                <p>
                  Que vous soyez particulier en quête de soins naturels de qualité ou professionnel passionné,
                  découvrez nos gammes complètes adaptées à tous les besoins, disponible en ligne et auprès de nos
                  salons partenaires.
                </p>

                <p className="text-center text-2xl font-bold text-[#7A9B6E] pt-6">
                  Offrez à vos cheveux l'alliance parfaite entre nature, science et savoir-faire expert.
                </p>
              </div>
            </SmoothReveal>
          </div>
        </section>

        {/* Section Performance Professionnelle */}
        <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#F8F9FA] to-[#FFFFFF]">
          <div className="max-w-7xl mx-auto">
            <SmoothReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight mb-6">
                  Une performance professionnelle, <br />
                  <span className="text-[#7A9B6E]">pure et naturelle</span>
                </h2>
                <p className="text-xl text-[#2C3E2F]/80">
                  pour des cheveux visiblement plus sains
                </p>
              </div>
            </SmoothReveal>

            {/* Image de la gamme complète */}
            <SmoothReveal direction="up" delay={0.2}>
              <div className="relative h-[60vh] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1627384113972-f4c0392fe5aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Gamme complète de produits Meeniyé"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E2F]/40 to-transparent" />
              </div>
            </SmoothReveal>
          </div>
        </section>

        {/* Section Best-sellers - Horizontal */}
        <section className="py-20 px-6 md:px-12 bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto">
            <SmoothReveal direction="up">
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight mb-16 text-center">
                Nos <span className="text-[#A0785A]">Best-sellers</span>
              </h2>
            </SmoothReveal>

            <div className="overflow-x-auto pb-8">
              <div className="flex gap-6 min-w-max">
                {bestSellers.length > 0 ? (
                  bestSellers.map((product, i) => (
                    <SmoothReveal key={product.id} direction="up" delay={i * 0.1}>
                      <Link href={`/products/${product.handle}`}>
                        <div className="w-80 group cursor-pointer">
                          <div className="relative h-96 rounded-2xl overflow-hidden mb-4">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 right-4">
                              <span className="px-3 py-1.5 text-xs font-bold tracking-wide uppercase rounded bg-[#A0785A] text-[#FFFFFF]">
                                Best-seller
                              </span>
                            </div>

                            <AddToCartButton
                              variantId={product.variantId}
                              productName={product.name}
                              variant="overlay"
                            />
                          </div>

                          <h3 className="text-xl font-bold mb-2 group-hover:text-[#7A9B6E] transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-2xl font-bold text-[#7A9B6E]">{product.price}€</p>
                        </div>
                      </Link>
                    </SmoothReveal>
                  ))
                ) : (
                  // Placeholder si pas de best-sellers
                  <>
                    <div className="w-80">
                      <div className="h-96 rounded-2xl bg-[#F8F9FA] mb-4" />
                      <div className="h-6 bg-[#F8F9FA] rounded mb-2 w-3/4" />
                      <div className="h-8 bg-[#F8F9FA] rounded w-1/4" />
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/products">
                <button className="px-10 py-5 bg-[#7A9B6E] hover:bg-[#2C3E2F] text-[#FFFFFF] font-bold tracking-wide uppercase transition-all duration-300 rounded-full">
                  Voir tous les produits
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Section Lignes de produits - Horizontal */}
        <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#F8F9FA] to-[#FFFFFF]">
          <div className="max-w-7xl mx-auto">
            <SmoothReveal direction="up">
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight mb-16 text-center">
                Nos <span className="text-[#7A9B6E]">lignes de produits</span>
              </h2>
            </SmoothReveal>

            <div className="overflow-x-auto pb-8">
              <div className="flex gap-8 min-w-max">
                {[
                  {
                    name: 'Shampoings',
                    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2574',
                    link: '/collections/shampoings'
                  },
                  {
                    name: 'Masques / Après-shampoings',
                    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=2574',
                    link: '/collections/masques'
                  },
                  {
                    name: 'Crèmes hydratantes sans rinçage',
                    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=2574',
                    link: '/collections/cremes'
                  },
                  {
                    name: 'Gels de gombo',
                    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?q=80&w=2574',
                    link: '/collections/gels'
                  },
                  {
                    name: 'Sérums traitants',
                    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574',
                    link: '/collections/serums-traitants'
                  }
                ].map((category, i) => (
                  <SmoothReveal key={i} direction="up" delay={i * 0.1}>
                    <Link href={category.link}>
                      <div className="w-72 group cursor-pointer">
                        <div className="relative h-80 rounded-2xl overflow-hidden mb-4">
                          <Image
                            src={category.image}
                            alt={category.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="288px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E2F]/60 to-transparent" />
                          <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-2xl font-bold text-[#FFFFFF]">{category.name}</h3>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SmoothReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section Ingrédients phares */}
        <section className="py-20 px-6 md:px-12 bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto">
            <SmoothReveal direction="up">
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight mb-16 text-center">
                Nos <span className="text-[#7A9B6E]">ingrédients phares</span>
              </h2>
            </SmoothReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  name: 'Gombo',
                  subtitle: 'Hydratation profonde',
                  description: 'Riche en mucilages, le gombo apporte une hydratation intense, démêle naturellement et définit les boucles tout en laissant les cheveux doux, brillants et souples.',
                  image: 'https://images.unsplash.com/photo-1632014530325-3911c738b779?q=80&w=2046&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  color: '#7A9B6E'
                },
                {
                  name: 'Beurre de cacao',
                  subtitle: 'Nutrition & protection',
                  description: 'Ultra-nourrissant, le beurre de cacao scelle l\'hydratation, renforce la fibre capillaire et protège les cheveux crépus des agressions extérieures pour une chevelure plus forte et éclatante.',
                  image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=2574',
                  color: '#A0785A'
                },
                {
                  name: 'Protéine de riz',
                  subtitle: 'Force & volume',
                  description: 'Légère et fortifiante, la protéine de riz aide à réparer la fibre, redonne du corps et booste le volume, pour des cheveux plus résistants, souples et pleins de vitalité.',
                  image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2574',
                  color: '#C4A088'
                }
              ].map((ingredient, i) => (
                <SmoothReveal key={i} direction="up" delay={i * 0.15}>
                  <div className="group">
                    <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                      <Image
                        src={ingredient.image}
                        alt={ingredient.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E2F]/70 to-transparent" />
                    </div>

                    <h3 className="text-3xl font-bold mb-2" style={{ color: ingredient.color }}>
                      {ingredient.name}
                    </h3>
                    <h4 className="text-xl font-semibold mb-4 text-[#2C3E2F]">
                      {ingredient.subtitle}
                    </h4>
                    <p className="text-[#2C3E2F]/80 leading-relaxed">
                      {ingredient.description}
                    </p>
                  </div>
                </SmoothReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA vers Notre Histoire */}
        <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-[#7A9B6E]/10 to-[#A0785A]/10">
          <div className="max-w-4xl mx-auto text-center">
            <SmoothReveal direction="up">
              <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-tight mb-6">
                Découvrez notre histoire
              </h2>
              <p className="text-xl text-[#2C3E2F]/80 mb-10 leading-relaxed">
                Meeniyé, une marque née de la passion pour la beauté naturelle et ancrée dans les traditions afro-caribéennes
              </p>
              <Link href="/notre-histoire">
                <button className="px-10 py-5 bg-[#7A9B6E] hover:bg-[#2C3E2F] text-[#FFFFFF] font-bold tracking-wide uppercase transition-all duration-300 rounded-full">
                  Notre histoire
                </button>
              </Link>
            </SmoothReveal>
          </div>
        </section>

      </main>
    </>
  );
}
