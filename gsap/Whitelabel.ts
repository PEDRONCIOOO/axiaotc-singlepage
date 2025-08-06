import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initWhitelabelAnimations = () => {
  const section = document.querySelector('[data-wl="section"]');
  const badge = document.querySelector('[data-wl="badge"]');
  const heading = document.querySelector('[data-wl="heading"]');
  const subtitle = document.querySelector('[data-wl="subtitle"]');
  const serviceCards = document.querySelectorAll('[data-wl="service-card"]');
  const ctaSection = document.querySelector('[data-wl="cta-section"]');
  
  if (!section) return;
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 80%", 
      once: true, 
    },
    defaults: { ease: "power3.out" }
  });
  
  // Badge animation
  tl.fromTo(badge, 
    { y: 30, opacity: 0, scale: 0.8 }, 
    { y: 0, opacity: 1, scale: 1, duration: 0.6 }
  );

  // Heading animation
  tl.fromTo(heading, 
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
  
  // Service cards animation with stagger
  tl.fromTo(serviceCards,
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

  // CTA section animation
  tl.fromTo(ctaSection,
    { y: 50, opacity: 0, scale: 0.95 },
    { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.1)" },
    "-=0.3"
  );

  // Enhanced hover interactions for service cards
  serviceCards.forEach((card, index) => {
    const icon = card.querySelector('.bg-gradient-to-br');
    const title = card.querySelector('h3');
    const hoverOverlay = card.querySelector('.absolute.inset-0.bg-gradient-to-br');
    
    card.addEventListener('mouseenter', () => {
      // Main card animation
      gsap.to(card, {
        y: -12,
        scale: 1.03,
        boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
        duration: 0.3,
        ease: "power2.out"
      });

      // Icon animation
      if (icon) {
        gsap.to(icon, {
          scale: 1.15,
          rotate: 5,
          boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4)",
          duration: 0.3,
          ease: "back.out(1.4)"
        });
      }

      // Title color change
      if (title) {
        gsap.to(title, {
          color: "#2563eb",
          duration: 0.3,
          ease: "power2.out"
        });
      }

      // Hover overlay
      if (hoverOverlay) {
        gsap.to(hoverOverlay, {
          opacity: 0.08,
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

      // Reset title
      if (title) {
        gsap.to(title, {
          color: "#1e293b",
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

  // Floating animation for service icons
  serviceCards.forEach((card, index) => {
    const icon = card.querySelector('.bg-gradient-to-br');
    if (icon) {
      gsap.to(icon, {
        y: "+=8",
        duration: 2.5 + (index * 0.3),
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.4
      });
    }
  });

  // CTA section interactions
  if (ctaSection) {
    const ctaButtons = ctaSection.querySelectorAll('a');
    const trustIndicators = ctaSection.querySelectorAll('.w-2.h-2');
    
    ctaButtons.forEach((button, index) => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          y: -5,
          boxShadow: index === 0 
            ? "0 25px 50px -12px rgba(59, 130, 246, 0.4)" 
            : "0 25px 50px -12px rgba(255, 255, 255, 0.2)",
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          y: 0,
          boxShadow: index === 0 
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
            : "0 0 0 rgba(255, 255, 255, 0)",
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    // Trust indicators pulsing animation
    trustIndicators.forEach((indicator, index) => {
      gsap.to(indicator, {
        scale: 1.4,
        opacity: 0.6,
        duration: 1.5 + (index * 0.2),
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.5
      });
    });
  }

  // Badge pulse animation
  if (badge) {
    const pulseIcon = badge.querySelector('.w-2.h-2.bg-blue-500');
    if (pulseIcon) {
      gsap.to(pulseIcon, {
        scale: 1.3,
        opacity: 0.7,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }
  }

  // Background elements subtle movement
  const backgroundElements = section.querySelectorAll('.absolute.blur-2xl, .absolute.blur-3xl');
  backgroundElements.forEach((element, index) => {
    gsap.to(element, {
      x: "+=20",
      y: "+=15",
      duration: 8 + (index * 2),
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: index * 3
    });
  });

  // Staggered highlight effect for service cards
  const highlightCards = () => {
    serviceCards.forEach((card, index) => {
      gsap.to(card, {
        boxShadow: "0 0 40px rgba(59, 130, 246, 0.3)",
        duration: 0.6,
        delay: index * 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
    });
  };

  // Start highlight sequence after initial animation
  gsap.delayedCall(3, highlightCards);

  // CTA background decoration animation
  if (ctaSection) {
    const decorations = ctaSection.querySelectorAll('.absolute.rounded-full');
    decorations.forEach((decoration, index) => {
      gsap.to(decoration, {
        rotation: 360,
        duration: 20 + (index * 5),
        repeat: -1,
        ease: "none"
      });
    });
  }

  return {
    cleanup: () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Remove event listeners by cloning nodes
      serviceCards.forEach(card => {
        const newCard = card.cloneNode(true);
        card.parentNode?.replaceChild(newCard, card);
      });
      
      if (ctaSection) {
        const ctaButtons = ctaSection.querySelectorAll('a');
        ctaButtons.forEach(button => {
          const newButton = button.cloneNode(true);
          button.parentNode?.replaceChild(newButton, button);
        });
      }
    }
  };
};