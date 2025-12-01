import Navbar from '@/app/components/Navbar';
import SmoothReveal from '@/app/components/SmoothReveal';
import ImageParallaxZoom from '@/app/components/ImageParallaxZoom';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Heart, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Notre Histoire - Meeniyé | Cosmétiques Capillaires Naturels',
  description: 'Découvrez l\'histoire d\'Anolia, fondatrice de Meeniyé, et l\'origine du nom de notre marque inspiré des traditions afro-caribéennes et du peuple marron Boni.',
  openGraph: {
    title: 'Notre Histoire - Meeniyé',
    description: 'Une marque née de la passion pour la beauté naturelle et ancrée dans les traditions afro-caribéennes',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function NotreHistoirePage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FFFFFF] text-[#2C3E2F] font-[family-name:var(--font-playfair)] min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Fil d\'ariane & Retour */}
          <SmoothReveal direction="up">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#2C3E2F]/75 hover:text-[#7A9B6E] transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Retour à l&apos;accueil</span>
            </Link>
          </SmoothReveal>

          {/* En-tête */}
          <SmoothReveal direction="up" delay={0.1}>
            <div className="mb-20 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-[#2C3E2F]/10 rounded-full mb-6">
                <Heart className="w-4 h-4 text-[#A0785A]" />
                <span className="text-sm font-medium text-[#2C3E2F]/75 tracking-wide uppercase">
                  Notre Histoire
                </span>
              </div>

              <h1 className="text-[clamp(3rem,8vw,6rem)] font-black tracking-tighter mb-6">
                Une Passion pour les <br />
                <span className="text-[#7A9B6E]">Cheveux Naturels</span>
              </h1>
            </div>
          </SmoothReveal>

          {/* Hero Image */}
          <SmoothReveal direction="up" delay={0.2}>
            <div className="relative h-[60vh] rounded-3xl overflow-hidden mb-20">
              <ImageParallaxZoom
                src="https://images.unsplash.com/photo-1763048208932-cbe149724374?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Histoire Meeniyé"
                height="100%"
                zoomIntensity={1.15}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E2F]/50 to-transparent" />
            </div>
          </SmoothReveal>

          {/* Section Fondatrice - Anolia */}
          <section className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <SmoothReveal direction="left">
                <div className="relative h-[700px] rounded-3xl overflow-hidden sticky top-24">
                  <Image
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2574"
                    alt="Anolia, fondatrice de Meeniyé"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF]/60 via-transparent to-transparent" />

                  {/* Badge décoratif */}
                  <div className="absolute top-8 right-8 bg-[#A0785A]/90 backdrop-blur-sm px-6 py-3 rounded-full">
                    <span className="text-sm font-bold text-[#FFFFFF] uppercase tracking-wide">Fondatrice</span>
                  </div>
                </div>
              </SmoothReveal>

              <SmoothReveal direction="right">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#A0785A]/10 border border-[#A0785A]/20 rounded-full mb-4">
                    <Sparkles className="w-4 h-4 text-[#A0785A]" />
                    <span className="text-sm font-medium text-[#A0785A] tracking-wide uppercase">
                      La Fondatrice
                    </span>
                  </div>

                  <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tighter leading-tight mb-8">
                    Anolia, <br />
                    <span className="text-[#7A9B6E]">fondatrice de Meeniyé</span>
                  </h2>

                  <div className="space-y-6 text-lg text-[#2C3E2F]/85 leading-relaxed">
                    <p>
                      Originaire de Guyane, terre riche en traditions, en diversité culturelle et en savoirs ancestraux,
                      la fondatrice puise dans ses racines une inspiration profonde. Cette inspiration est nourrie notamment
                      par la richesse de la pharmacopée afro-caraïbéenne, qui met en lumière des plantes, huiles et ingrédients
                      naturels utilisés depuis des générations pour sublimer et protéger la beauté naturelle. Ce lien avec ces
                      traditions ancestrales est au cœur de sa vision et guide la création de produits authentiques et respectueux
                      de l&apos;environnement.
                    </p>

                    <p>
                      Diplômée d&apos;un master en économie, spécialisé en développement durable, elle débute sa carrière dans le
                      secteur associatif en tant que copilote de projets de développement. Elle rejoint ensuite le secteur public,
                      où elle exerce la fonction de chargée des dispositifs d&apos;aides européennes, avant de se réorienter vers une
                      nouvelle filière plus en accord avec ses aspirations personnelles.
                    </p>

                    <p>
                      Cherchant une dimension plus humaine et créative dans son épanouissement professionnel, elle se tourne vers
                      la coiffure, domaine qu&apos;elle pratique d&apos;abord par passion. Pour donner forme à cette vocation, elle passe son
                      brevet de technicien supérieur métiers de la coiffure, qu&apos;elle complète par une formation en formulation et en
                      création de marque de produits cosmétiques naturels.
                    </p>

                    <p>
                      Elle débute sa nouvelle carrière dans un salon spécialisé à Genève (Suisse), où elle cumule simultanément les
                      responsabilités de chargée des affaires commerciales et d&apos;experte capillaire dédiée aux cheveux texturés, un
                      poste valorisant son savoir-faire technique et relationnel. Parallèlement elle met toute son énergie et sa
                      passion à élaborer sa propre gamme de produits cosmétiques, alliant rigueur et passion. Après s&apos;être forgée
                      une solide expérience dans des salons spécialisés à Genève, elle s&apos;investit aujourd&apos;hui avec passion dans le
                      développement d&apos;une marque porteuse de sens.
                    </p>

                    <p>
                      Femme engagée et déterminée, elle consacre depuis plus de trois ans et demi une énergie constante à la
                      formulation de ses produits. Elle est animée par la volonté de proposer le meilleur à celles et ceux qui
                      recherchent des solutions authentiques inspirées des trésors de la pharmacopée afro-caraïbéenne. Son immersion
                      quotidienne dans l&apos;univers des cheveux texturés lui a permis de développer une expertise précieuse, essentielle
                      pour comprendre les besoins spécifiques des cheveux crépus, frisés et bouclés.
                    </p>

                    <p>
                      Cette connaissance fine et cette double maîtrise guident la création de chaque produit de sa gamme, afin
                      d&apos;offrir des soins professionnels parfaitement adaptés et efficaces, élaborés en parfaite connaissance des
                      besoins spécifiques des cheveux crépus souvent méconnus.
                    </p>

                    <p className="text-xl font-semibold text-[#7A9B6E] italic border-l-4 border-[#7A9B6E] pl-6">
                      Pour elle, le soin des cheveux crépus va bien au-delà de l&apos;esthétique : &quot;c&apos;est un chemin de développement
                      personnel, d&apos;acceptation de soi et d&apos;émancipation du regard des autres&quot;.
                    </p>

                    <p>
                      Elle propose à chaque femme et à chaque homme un accompagnement sur mesure, encourageant chacune et chacun
                      à embrasser son authenticité et à célébrer son histoire.
                    </p>

                    <p>
                      Dans ce projet, elle met en avant la diversité et l&apos;unicité de chaque parcours capillaire, plaçant le respect
                      et l&apos;écoute au cœur de sa démarche. Sa marque invite à une (re)découverte de soi, une connexion à ses racines,
                      à son histoire, à sa force affirmant que chaque texture, chaque boucle raconte une histoire à valoriser.
                    </p>
                  </div>
                </div>
              </SmoothReveal>
            </div>
          </section>

          {/* Section Nom Meeniyé */}
          <section className="mb-32">
            <SmoothReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tighter mb-6">
                  <span className="text-[#7A9B6E]">Meeniyé</span>, un nom. <br />Une histoire.
                </h2>
                <p className="text-xl text-[#2C3E2F]/75 italic">
                  Les mots de la fondatrice…
                </p>
              </div>
            </SmoothReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <SmoothReveal direction="left">
                <div className="relative h-[600px] rounded-3xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=2574"
                    alt="Traditions afro-caribéennes"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF]/60 via-transparent to-transparent" />
                </div>
              </SmoothReveal>

              <SmoothReveal direction="right">
                <div className="space-y-6 text-lg text-[#2C3E2F]/85 leading-relaxed">
                  <p className="text-2xl font-bold text-[#7A9B6E]">
                    &quot;Le nom de ma marque, Meeniyé, est un hommage rendu à ma grand-mère Ameeniyé, femme guyanaise
                    issue du peuple marron Boni.
                  </p>

                  <p>
                    Ce prénom, chargé d&apos;histoire et de sens, est une porte ouverte sur mes racines profondes, une reconnexion
                    intime avec une culture forgée par la résistance, la liberté et la créativité.
                  </p>

                  <p>
                    Les marrons Boni ont bravé l&apos;oppression du système esclavagiste pour fonder des sociétés libres le long du
                    fleuve Maroni, dans cet écrin luxuriant où la forêt amazonienne donne vie à la mémoire des Ancêtres. Ce
                    peuple de guerriers est connu pour sa grande résilience et son histoire de liberté.
                  </p>

                  <p>
                    Après leur auto libération, les Boni ont élaboré une culture, une langue et des savoirs nouveaux. Ils
                    symbolisent la force, la résistance et la paix retrouvée.
                  </p>

                  <p>
                    Ma grand-mère, dont le prénom a inspiré le nom de la marque, incarne ces valeurs essentielles à travers
                    son parcours de vie, marqué par la ténacité, l&apos;amour et la sagesse.
                  </p>

                  <p>
                    Au-delà de cette symbolique forte, la marque s&apos;appuie sur une philosophie ancestrale du soin, inspirée de
                    la pharmacopée afro-caraïbéenne. Meeniyé est ainsi une véritable célébration de la beauté noire, enracinée
                    dans la nature et la culture, puisant sa force dans un héritage historique et familial. C&apos;est une marque
                    qui invite à la reconnexion avec soi-même, avec ses racines, avec la richesse d&apos;un peuple et de plusieurs
                    continents.
                  </p>

                  <p className="text-xl font-semibold text-[#A0785A] pt-4">
                    Elle traduit aussi ce lien profond entre générations. On retrouve dans Meeniyé la complicité et la douceur
                    d&apos;une grand-mère et de sa petite-fille, liées par l&apos;amour, la transmission et la mémoire.&quot;
                  </p>
                </div>
              </SmoothReveal>
            </div>
          </section>

          {/* CTA Section */}
          <SmoothReveal direction="up">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#7A9B6E]/20 to-[#A0785A]/20 p-16">
              <div className="relative text-center">
                <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tighter mb-6">
                  Découvrez notre gamme complète
                </h2>
                <p className="text-xl text-[#2C3E2F]/75 mb-10 max-w-2xl mx-auto">
                  Des produits nés de la passion, de la tradition et d&apos;une expertise professionnelle au service de vos cheveux
                </p>
                <Link href="/products">
                  <button className="px-10 py-5 bg-[#7A9B6E] hover:bg-[#2C3E2F] text-[#FFFFFF] text-sm font-bold tracking-wide uppercase transition-all duration-300 rounded-full">
                    Voir nos produits
                  </button>
                </Link>
              </div>
            </div>
          </SmoothReveal>

        </div>
      </main>
    </>
  );
}
