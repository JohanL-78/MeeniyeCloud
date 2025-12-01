'use client';

import { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import SmoothReveal from '@/app/components/SmoothReveal';
import ImageParallaxZoom from '@/app/components/ImageParallaxZoom';
import Link from 'next/link';
import { ArrowLeft, Briefcase, Package, Phone, Mail, Building, CheckCircle2, Scissors } from 'lucide-react';

export default function EspaceProPage() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    entreprise: '',
    email: '',
    telephone: '',
    typeProfessionnel: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Ici vous pourrez ajouter l'intégration avec votre backend ou service email
    console.log('Formulaire soumis:', formData);
    setSubmitted(true);

    // Réinitialiser après 5 secondes
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nom: '',
        prenom: '',
        entreprise: '',
        email: '',
        telephone: '',
        typeProfessionnel: '',
        message: ''
      });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navbar />

      <main className="bg-[#FFFFFF] text-[#2C3E2F] font-[family-name:var(--font-playfair)] min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Fil d'ariane & Retour */}
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
                <Briefcase className="w-4 h-4 text-[#7A9B6E]" />
                <span className="text-sm font-medium text-[#2C3E2F]/75 tracking-wide uppercase">
                  Professionnels
                </span>
              </div>

              <h1 className="text-[clamp(3rem,8vw,6rem)] font-black tracking-tighter mb-6">
                Espace <br />
                <span className="text-[#7A9B6E]">Professionnel</span>
              </h1>

              <p className="text-xl text-[#2C3E2F]/75 max-w-3xl mx-auto leading-relaxed">
                Vous êtes coiffeur professionnel spécialisé dans la coiffure afro ?
                Contactez-nous pour des conditions spéciales, des gros formats ou tout autre besoin.
              </p>
            </div>
          </SmoothReveal>

          {/* Hero Image */}
          <SmoothReveal direction="up" delay={0.2}>
            <div className="relative h-[50vh] rounded-3xl overflow-hidden mb-20">
              <ImageParallaxZoom
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669"
                alt="Salon de coiffure professionnel"
                height="100%"
                zoomIntensity={1.15}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />

              {/* Overlay text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Scissors className="w-16 h-16 text-[#7A9B6E] mx-auto mb-4" />
                  <h2 className="text-4xl font-bold">Partenaire des Professionnels</h2>
                </div>
              </div>
            </div>
          </SmoothReveal>

          {/* Avantages Professionnels */}
          <section className="mb-20">
            <SmoothReveal direction="up">
              <div className="text-center mb-12">
                <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-bold tracking-tighter mb-4">
                  Avantages <span className="text-[#7A9B6E]">Professionnels</span>
                </h2>
                <p className="text-lg text-[#2C3E2F]/75 max-w-2xl mx-auto">
                  Des solutions adaptées à vos besoins professionnels
                </p>
              </div>
            </SmoothReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {[
                {
                  icon: Package,
                  title: 'Formats Professionnels',
                  desc: 'Gros conditionnements adaptés à une utilisation intensive en salon',
                  color: '#A0785A'
                },
                {
                  icon: Building,
                  title: 'Tarifs Dégressifs',
                  desc: 'Conditions tarifaires préférentielles selon les volumes commandés',
                  color: '#C4A088'
                },
                {
                  icon: Phone,
                  title: 'Accompagnement Dédié',
                  desc: 'Un contact privilégié pour répondre à toutes vos questions',
                  color: '#7A9B6E'
                }
              ].map((avantage, i) => (
                <SmoothReveal key={i} direction="up" delay={i * 0.1}>
                  <div className="p-8 rounded-2xl bg-[#F8F9FA] border border-[#2C3E2F]/5 hover:border-[#7A9B6E]/30 transition-all duration-500 group text-center">
                    <avantage.icon className="w-12 h-12 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{ color: avantage.color }} />
                    <h3 className="text-xl font-bold mb-4 group-hover:text-[#7A9B6E] transition-colors">
                      {avantage.title}
                    </h3>
                    <p className="text-[#2C3E2F]/75 leading-relaxed">
                      {avantage.desc}
                    </p>
                  </div>
                </SmoothReveal>
              ))}
            </div>
          </section>

          {/* Formulaire de contact */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Informations */}
              <SmoothReveal direction="left">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tighter mb-4">
                      Contactez-nous
                    </h2>
                    <p className="text-lg text-[#2C3E2F]/75 leading-relaxed mb-8">
                      Remplissez le formulaire ci-contre et notre équipe vous recontactera
                      dans les plus brefs délais pour discuter de vos besoins spécifiques.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#F8F9FA] border border-[#2C3E2F]/5">
                      <Mail className="w-6 h-6 text-[#7A9B6E] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Email professionnel</h4>
                        <p className="text-[#2C3E2F]/75 text-sm">pro@votredomaine.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#F8F9FA] border border-[#2C3E2F]/5">
                      <Phone className="w-6 h-6 text-[#7A9B6E] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Téléphone</h4>
                        <p className="text-[#2C3E2F]/75 text-sm">Du lundi au vendredi, 9h-18h</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#7A9B6E]/10 border border-[#7A9B6E]/20">
                    <h4 className="font-bold text-[#7A9B6E] mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Délai de réponse
                    </h4>
                    <p className="text-[#2C3E2F]/75 text-sm">
                      Nous nous engageons à vous répondre sous 48h ouvrées maximum.
                    </p>
                  </div>
                </div>
              </SmoothReveal>

              {/* Formulaire */}
              <SmoothReveal direction="right">
                <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-[#2C3E2F]/10">
                  {submitted ? (
                    <div className="text-center py-12">
                      <CheckCircle2 className="w-16 h-16 text-[#7A9B6E] mx-auto mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Message envoyé !</h3>
                      <p className="text-[#2C3E2F]/75">
                        Merci pour votre message. Nous vous recontacterons très bientôt.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Nom <span className="text-[#7A9B6E]">*</span>
                          </label>
                          <input
                            type="text"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#2C3E2F]/10 rounded-lg focus:outline-none focus:border-[#7A9B6E] transition-colors"
                            placeholder="Votre nom"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Prénom <span className="text-[#7A9B6E]">*</span>
                          </label>
                          <input
                            type="text"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#2C3E2F]/10 rounded-lg focus:outline-none focus:border-[#7A9B6E] transition-colors"
                            placeholder="Votre prénom"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Nom du salon / Entreprise <span className="text-[#7A9B6E]">*</span>
                        </label>
                        <input
                          type="text"
                          name="entreprise"
                          value={formData.entreprise}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#2C3E2F]/10 rounded-lg focus:outline-none focus:border-[#7A9B6E] transition-colors"
                          placeholder="Nom de votre salon"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email professionnel <span className="text-[#7A9B6E]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#2C3E2F]/10 rounded-lg focus:outline-none focus:border-[#7A9B6E] transition-colors"
                          placeholder="votre@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Téléphone <span className="text-[#7A9B6E]">*</span>
                        </label>
                        <input
                          type="tel"
                          name="telephone"
                          value={formData.telephone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#2C3E2F]/10 rounded-lg focus:outline-none focus:border-[#7A9B6E] transition-colors"
                          placeholder="+33 6 XX XX XX XX"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Type de professionnel <span className="text-[#7A9B6E]">*</span>
                        </label>
                        <select
                          name="typeProfessionnel"
                          value={formData.typeProfessionnel}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#2C3E2F]/10 rounded-lg focus:outline-none focus:border-[#7A9B6E] transition-colors"
                        >
                          <option value="">Sélectionnez une option</option>
                          <option value="salon-afro">Salon de coiffure afro</option>
                          <option value="barbier">Barbier</option>
                          <option value="spa">Spa / Institut</option>
                          <option value="distributeur">Distributeur / Revendeur</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Message <span className="text-[#7A9B6E]">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#2C3E2F]/10 rounded-lg focus:outline-none focus:border-[#7A9B6E] transition-colors resize-none"
                          placeholder="Décrivez votre projet, vos besoins en gros formats, conditions spécifiques..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full px-8 py-4 bg-[#7A9B6E] hover:bg-[#2C3E2F] text-[#FFFFFF] font-bold tracking-wide uppercase transition-all duration-300 rounded-lg"
                      >
                        Envoyer ma demande
                      </button>

                      <p className="text-xs text-[#2C3E2F]/70 text-center">
                        En soumettant ce formulaire, vous acceptez que nous traitions vos données
                        pour répondre à votre demande.
                      </p>
                    </form>
                  )}
                </div>
              </SmoothReveal>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
