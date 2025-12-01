'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroCarousel({
  images = [],
  height = '80vh',
  zoomIntensity = 1.15,
  autoplayDelay = 5000
}) {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-défilement
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [images.length, autoplayDelay]);

  // Animation de transition
  useEffect(() => {
    const slides = imageRefs.current;

    slides.forEach((slide, index) => {
      if (index === currentIndex) {
        // Slide actif : fade in et slide depuis la droite
        gsap.fromTo(
          slide,
          {
            opacity: 0,
            x: '100%'
          },
          {
            opacity: 1,
            x: '0%',
            duration: 1.2,
            ease: 'power3.out'
          }
        );
      } else {
        // Autres slides : fade out et slide vers la gauche
        gsap.to(slide, {
          opacity: 0,
          x: '-100%',
          duration: 1.2,
          ease: 'power3.out'
        });
      }
    });
  }, [currentIndex]);

  // Effet parallax zoom sur le scroll
  useEffect(() => {
    const container = containerRef.current;
    const images = imageRefs.current;

    images.forEach((img) => {
      if (img) {
        gsap.fromTo(
          img.querySelector('.zoom-image'),
          {
            scale: 1
          },
          {
            scale: zoomIntensity,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === container) trigger.kill();
      });
    };
  }, [zoomIntensity]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ height }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          ref={(el) => (imageRefs.current[index] = el)}
          className="absolute inset-0 w-full h-full"
          style={{
            opacity: index === 0 ? 1 : 0,
            transform: index === 0 ? 'translateX(0)' : 'translateX(100%)'
          }}
        >
          <div className="zoom-image w-full h-full">
            <img
              src={image.src}
              alt={image.alt || `Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E2F]/30 via-transparent to-[#2C3E2F]/30 pointer-events-none" />

      {/* Indicateurs */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-[#FFFFFF] w-8'
                : 'bg-[#FFFFFF]/50 hover:bg-[#FFFFFF]/75'
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
