import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initWhitelabelAnimations = () => {
  const section = document.querySelector('[data-wl="section"]');
  const heading = document.querySelector('[data-wl="heading"]');
  const description = document.querySelector('[data-wl="description"]');
  const benefits = document.querySelector('[data-wl="benefits"]');
  const benefitItems = benefits?.querySelectorAll('.flex');
  const cta = document.querySelector('[data-wl="cta"]');
  const showcase = document.querySelector('[data-wl="showcase"]');
  const cards = showcase?.querySelectorAll('.bg-white');
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 80%", 
      once: true, 
    },
    defaults: { ease: "power3.out" }
  });
  
  tl.fromTo(heading, 
    { y: 40, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.8 }
  )
  .fromTo(description,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6 },
    "-=0.5"
  );
  
  if (benefitItems) {
    tl.fromTo(benefitItems,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.15, duration: 0.5 },
      "-=0.3"
    );
  }
  
  tl.fromTo(cta,
    { y: 20, opacity: 0, scale: 0.9 },
    { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
    "-=0.2"
  );
  
  if (cards) {
    tl.fromTo(cards,
      { y: 50, opacity: 0, scale: 0.9, rotation: 0 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        rotation: (i) => [2, -1, 1][i], 
        stagger: 0.2, 
        duration: 0.8,
        ease: "back.out(1.4)"
      },
      "-=0.8"
    );
  }
  
  if (cards) {
    cards.forEach((card, index) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          scale: 1.05,
          rotation: (index === 0) ? 3 : (index === 1) ? -2 : 2,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          rotation: (index === 0) ? 2 : (index === 1) ? -1 : 1,
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
  }
  
  if (cta) {
    const ctaButton = cta.querySelector('a');
    if (ctaButton) {
      ctaButton.addEventListener('mouseenter', () => {
        gsap.to(ctaButton, {
          scale: 1.05,
          y: -3,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      ctaButton.addEventListener('mouseleave', () => {
        gsap.to(ctaButton, {
          scale: 1,
          y: 0,
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
          ease: "power2.out"
        });
      });
    }
  }
  
  return {
    cleanup: () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      if (cards) {
        cards.forEach(card => {
          card.removeEventListener('mouseenter', () => {});
          card.removeEventListener('mouseleave', () => {});
        });
      }
      
      if (cta) {
        const ctaButton = cta.querySelector('a');
        if (ctaButton) {
          ctaButton.removeEventListener('mouseenter', () => {});
          ctaButton.removeEventListener('mouseleave', () => {});
        }
      }
    }
  };
};