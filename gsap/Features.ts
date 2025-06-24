import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initFeaturesAnimations = () => {
  const featuresSection = document.querySelector('[data-features="section"]');
  const featuresHeading = document.querySelector('[data-features="heading"]');
  const featureCards = document.querySelectorAll('[data-features="card"]');
  const featuresFooter = document.querySelector('[data-features="footer"]');
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: featuresSection,
      start: "top 80%", 
      once: true, 
    },
    defaults: { ease: "power3.out" }
  });
  

  tl.fromTo(featuresHeading, 
    { y: 40, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.8 }
  );

  tl.fromTo(featureCards, 
    { y: 60, opacity: 0, scale: 0.9 }, 
    { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      stagger: 0.15, 
      duration: 0.8,
      ease: "back.out(1.2)" 
    }, 
    "-=0.4"
  );

  tl.fromTo(featuresFooter,
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6 },
    "-=0.2"
  );
  
  featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });
  
  return {
    cleanup: () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      featureCards.forEach(card => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    }
  };
};