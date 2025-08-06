import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initFeaturesAnimations = () => {
  const featuresSection = document.querySelector('[data-features="section"]');
  const badge = document.querySelector('[data-features="badge"]');
  const featuresHeading = document.querySelector('[data-features="heading"]');
  const subtitle = document.querySelector('[data-features="subtitle"]');
  const featureCards = document.querySelectorAll('[data-features="card"]');
  
  if (!featuresSection) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: featuresSection,
      start: "top 80%", 
      once: true, 
    },
    defaults: { ease: "power3.out" }
  });

  // Badge animation with warning theme
  tl.fromTo(badge, 
    { y: 30, opacity: 0, scale: 0.8 }, 
    { y: 0, opacity: 1, scale: 1, duration: 0.6 }
  );

  // Heading animation with emphasis
  tl.fromTo(featuresHeading, 
    { y: 40, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.8 },
    "-=0.4"
  );

  // Subtitle animation
  tl.fromTo(subtitle,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6 },
    "-=0.5"
  );

  // Problem cards animation with dramatic entrance
  tl.fromTo(featureCards, 
    { y: 60, opacity: 0, scale: 0.9, rotateX: 15 }, 
    { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      rotateX: 0,
      stagger: 0.15, 
      duration: 0.8,
      ease: "back.out(1.2)" 
    }, 
    "-=0.4"
  );

  // Enhanced hover interactions for problem cards
  featureCards.forEach((card, index) => {
    const icon = card.querySelector('.bg-gradient-to-br');
    const decoration = card.querySelector('.absolute.top-0.right-0');
    const hoverOverlay = card.querySelector('.absolute.inset-0.bg-gradient-to-br');
    
    card.addEventListener('mouseenter', () => {
      // Main card animation
      gsap.to(card, {
        y: -8,
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(239, 68, 68, 0.3)",
        duration: 0.3,
        ease: "power2.out"
      });

      // Icon animation
      if (icon) {
        gsap.to(icon, {
          scale: 1.1,
          rotate: 5,
          boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.4)",
          duration: 0.3,
          ease: "power2.out"
        });
      }

      // Background decoration animation
      if (decoration) {
        gsap.to(decoration, {
          scale: 1.5,
          opacity: 0.2,
          duration: 0.3,
          ease: "power2.out"
        });
      }

      // Hover overlay
      if (hoverOverlay) {
        gsap.to(hoverOverlay, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });
    
    card.addEventListener('mouseleave', () => {
      // Reset main card
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        duration: 0.3,
        ease: "power2.out"
      });

      // Reset icon
      if (icon) {
        gsap.to(icon, {
          scale: 1,
          rotate: 0,
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
          ease: "power2.out"
        });
      }

      // Reset decoration
      if (decoration) {
        gsap.to(decoration, {
          scale: 1,
          opacity: 0.1,
          duration: 0.3,
          ease: "power2.out"
        });
      }

      // Reset overlay
      if (hoverOverlay) {
        gsap.to(hoverOverlay, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });
  });

  // Floating animation for icons with warning feel
  featureCards.forEach((card, index) => {
    const icon = card.querySelector('.bg-gradient-to-br');
    if (icon) {
      gsap.to(icon, {
        y: "+=5",
        duration: 2 + (index * 0.2),
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.3
      });
    }
  });

  // Pulsing animation for the warning badge
  if (badge) {
    const pulseIcon = badge.querySelector('.w-2.h-2.bg-red-500');
    if (pulseIcon) {
      gsap.to(pulseIcon, {
        scale: 1.3,
        opacity: 0.7,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }
  }

  // Background elements animation
  const backgroundElements = featuresSection.querySelectorAll('.absolute.blur-xl, .absolute.blur-2xl, .absolute.blur-3xl');
  backgroundElements.forEach((element, index) => {
    gsap.to(element, {
      x: "+=20",
      y: "+=10",
      duration: 4 + (index * 0.5),
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: index * 1
    });
  });

  // Sequential highlight effect for cards
  const highlightCards = () => {
    featureCards.forEach((card, index) => {
      gsap.to(card, {
        boxShadow: "0 0 30px rgba(239, 68, 68, 0.3)",
        duration: 0.5,
        delay: index * 0.8,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
    });
  };

  // Start highlight sequence after initial animation
  gsap.delayedCall(2, highlightCards);

  return {
    cleanup: () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Remove event listeners by cloning nodes
      featureCards.forEach(card => {
        const newCard = card.cloneNode(true);
        card.parentNode?.replaceChild(newCard, card);
      });
    }
  };
};