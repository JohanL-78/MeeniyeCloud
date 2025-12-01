'use client';

import { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import SmoothReveal from '@/app/components/SmoothReveal';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Ici vous pourrez ajouter l'intégration avec votre backend ou service email
    console.log('Formulaire contact soumis:', formData);
    setSubmitted(true);

    // Réinitialiser après 5 secondes
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nom: '',
        email: '',
        sujet: '',
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
                <MessageCircle className="w-4 h-4 text-[#7A9B6E]" />
                <span className="text-sm font-medium text-[#2C3E2F]/75 tracking-wide uppercase">
                  Contact
                </span>
              </div>

              <h1 className="text-[clamp(3rem,8vw,6rem)] font-black tracking-tighter mb-6">
                Contactez-<br />
                <span className="text-[#7A9B6E]">nous</span>
              </h1>

              <p className="text-xl text-[#2C3E2F]/75 max-w-3xl mx-auto leading-relaxed">
                Une question sur nos produits, votre commande ou nos services ?
                Notre équipe est à votre écoute pour vous accompagner.
              </p>
            </div>
          </SmoothReveal>

          {/* Informations de contact */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  info: 'contact@votredomaine.com',
                  desc: 'Réponse sous 24-48h',
                  color: '#A0785A'
                },
                {
                  icon: Phone,
                  title: 'Téléphone',
                  info: '+33 X XX XX XX XX',
                  desc: 'Lun-Ven : 9h-18h',
                  color: '#C4A088'
                },
                {
                  icon: MapPin,
                  title: 'Adresse',
                  info: 'France métropolitaine',
                  desc: 'DOM-TOM & Suisse',
                  color: '#7A9B6E'
                },
                {
                  icon: Clock,
                  title: 'Horaires',
                  info: '9h00 - 18h00',
                  desc: 'Du lundi au vendredi',
                  color: '#A0785A'
                }
              ].map((contact, i) => (
                <SmoothReveal key={i} direction="up" delay={i * 0.1}>
                  <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-[#2C3E2F]/5 hover:border-[#7A9B6E]/30 transition-all duration-500 group text-center h-full">
                    <contact.icon className="w-10 h-10 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" style={{ color: contact.color }} />
                    <h3 className="font-bold mb-2 text-lg">{contact.title}</h3>
                    <p className="text-[#7A9B6E] font-medium mb-1">{contact.info}</p>
                    <p className="text-sm text-[#2C3E2F]/70">{contact.desc}</p>
                  </div>
                </SmoothReveal>
              ))}
            </div>
          </section>

          {/* Formulaire et FAQ */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Formulaire */}
              <SmoothReveal direction="left">
                <div>
                  <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-tighter mb-4">
                    Envoyez-nous un message
                  </h2>
                  <p className="text-lg text-[#2C3E2F]/75 leading-relaxed mb-8">
                    Remplissez le formulaire ci-dessous et nous vous répondrons dans les meilleurs délais.
                  </p>

                  <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-[#2C3E2F]/10">
                    {submitted ? (
                      <div className="text-center py-12">
                        <CheckCircle2 className="w-16 h-16 text-[#7A9B6E] mx-auto mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Message envoyé !</h3>
                        <p className="text-[#2C3E2F]/75">
                          Merci pour votre message. Nous vous répondrons très bientôt.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Nom complet <span className="text-[#7A9B6E]">*</span>
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
                            Email <span className="text-[#7A9B6E]">*</span>
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
                            Sujet <span className="text-[#7A9B6E]">*</span>
                          </label>
                          <select
                            name="sujet"
                            value={formData.sujet}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#2C3E2F]/10 rounded-lg focus:outline-none focus:border-[#7A9B6E] transition-colors"
                          >
                            <option value="">Sélectionnez un sujet</option>
                            <option value="produit">Question sur un produit</option>
                            <option value="commande">Suivi de commande</option>
                            <option value="livraison">Livraison</option>
                            <option value="retour">Retour / Échange</option>
                            <option value="autre">Autre question</option>
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
                            rows={6}
                            className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#2C3E2F]/10 rounded-lg focus:outline-none focus:border-[#7A9B6E] transition-colors resize-none"
                            placeholder="Écrivez votre message ici..."
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full px-8 py-4 bg-[#7A9B6E] hover:bg-[#2C3E2F] text-[#FFFFFF] font-bold tracking-wide uppercase transition-all duration-300 rounded-lg flex items-center justify-center gap-2"
                        >
                          <Send className="w-5 h-5" />
                          Envoyer le message
                        </button>

                        <p className="text-xs text-[#2C3E2F]/70 text-center">
                          En soumettant ce formulaire, vous acceptez que nous traitions vos données
                          pour répondre à votre demande.
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </SmoothReveal>

              {/* FAQ / Informations complémentaires */}
              <SmoothReveal direction="right">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-tighter mb-4">
                      Questions fréquentes
                    </h2>
                    <p className="text-lg text-[#2C3E2F]/75 leading-relaxed mb-8">
                      Retrouvez les réponses aux questions les plus courantes.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        question: 'Quels sont les délais de livraison ?',
                        answer: 'Livraison en France métropolitaine sous 3-5 jours ouvrés. Pour les DOM-TOM et la Suisse, comptez 7-10 jours ouvrés.'
                      },
                      {
                        question: 'Comment suivre ma commande ?',
                        answer: 'Vous recevrez un email de confirmation avec un lien de suivi dès l\'expédition de votre commande.'
                      },
                      {
                        question: 'Puis-je retourner un produit ?',
                        answer: 'Oui, vous disposez de 30 jours pour retourner un produit non ouvert. Les frais de retour sont à votre charge.'
                      },
                      {
                        question: 'Les produits sont-ils adaptés à tous types de cheveux ?',
                        answer: 'Nos produits sont spécifiquement formulés pour les cheveux crépus, frisés et bouclés, mais conviennent à tous.'
                      }
                    ].map((faq, i) => (
                      <div
                        key={i}
                        className="p-6 rounded-2xl bg-[#F8F9FA] border border-[#2C3E2F]/5 hover:border-[#7A9B6E]/20 transition-all duration-300"
                      >
                        <h4 className="font-bold mb-2 text-[#2C3E2F]">{faq.question}</h4>
                        <p className="text-[#2C3E2F]/75 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>

                  {/* Espace Pro CTA */}
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-[#7A9B6E]/10 to-[#2C3E2F]/10 border border-[#7A9B6E]/20">
                    <h3 className="text-xl font-bold mb-3">Vous êtes professionnel ?</h3>
                    <p className="text-[#2C3E2F]/75 mb-6">
                      Découvrez nos conditions spéciales et formats professionnels.
                    </p>
                    <Link href="/espace-pro">
                      <button className="px-6 py-3 bg-[#7A9B6E] hover:bg-[#2C3E2F] text-[#FFFFFF] font-bold tracking-wide uppercase transition-all duration-300 rounded-lg text-sm">
                        Accéder à l&apos;espace pro
                      </button>
                    </Link>
                  </div>
                </div>
              </SmoothReveal>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
