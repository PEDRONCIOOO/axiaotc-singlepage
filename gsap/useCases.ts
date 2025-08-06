import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initUseCasesAnimations = () => {
  const section = document.querySelector('[data-uc="section"]');
  const badge = document.querySelector('[data-uc="badge"]');
  const heading = document.querySelector('[data-uc="heading"]');
  const subtitle = document.querySelector('[data-uc="subtitle"]');
  const caseCards = document.querySelectorAll('[data-uc="case-card"]');
  
  if (!section) {
    console.warn('UseCases elements not found');
    return () => {};
  }
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      once: true
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
  if (subtitle) {
    tl.fromTo(subtitle,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.5"
    );
  }
  
  // Case cards animation with stagger
  if (caseCards.length > 0) {
    tl.fromTo(caseCards, 
      { y: 60, opacity: 0, scale: 0.9, rotateX: 15 }, 
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        rotateX: 0,
        stagger: 0.3, 
        duration: 0.8,
        ease: "back.out(1.2)"
      },
      "-=0.4"
    );
  }

  // Enhanced hover interactions for case cards
  caseCards.forEach((card, index) => {
    const icon = card.querySelector('.bg-gradient-to-br');
    const title = card.querySelector('h3');
    const backgroundGlow = card.querySelector('.absolute.inset-0.bg-gradient-to-br');
    const benefitItems = card.querySelectorAll('.group\\/benefit');
    const actionButton = card.querySelector('.group\\/btn');
    
    card.addEventListener('mouseenter', () => {
      // Main card animation
      gsap.to(card, {
        y: -8,
        scale: 1.02,
        boxShadow: "0 30px 60px -12px rgba(59, 130, 246, 0.25)",
        duration: 0.4,
        ease: "power2.out"
      });

      // Icon animation
      if (icon) {
        gsap.to(icon, {
          scale: 1.1,
          rotate: 5,
          boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4)",
          duration: 0.4,
          ease: "back.out(1.4)"
        });
      }

      // Title color change
      if (title) {
        gsap.to(title, {
          color: "#1d4ed8",
          duration: 0.3,
          ease: "power2.out"
        });
      }

      // Background glow
      if (backgroundGlow) {
        gsap.to(backgroundGlow, {
          opacity: 0.05,
          duration: 0.4,
          ease: "power2.out"
        });
      }

      // Animate benefit items with stagger
      gsap.to(benefitItems, {
        scale: 1.02,
        backgroundColor: "rgba(59, 130, 246, 0.05)",
        borderColor: "rgba(59, 130, 246, 0.2)",
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.out"
      });

      // Action button animation
      if (actionButton) {
        gsap.to(actionButton, {
          scale: 1.05,
          y: -2,
          boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)",
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
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        duration: 0.4,
        ease: "power2.out"
      });

      // Reset icon
      if (icon) {
        gsap.to(icon, {
          scale: 1,
          rotate: 0,
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          duration: 0.4,
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

      // Reset background glow
      if (backgroundGlow) {
        gsap.to(backgroundGlow, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.out"
        });
      }

      // Reset benefit items
      gsap.to(benefitItems, {
        scale: 1,
        backgroundColor: "rgba(249, 250, 251, 0.5)",
        borderColor: "transparent",
        stagger: 0.03,
        duration: 0.3,
        ease: "power2.out"
      });

      // Reset action button
      if (actionButton) {
        gsap.to(actionButton, {
          scale: 1,
          y: 0,
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });
  });

  // Floating animation for icons
  caseCards.forEach((card, index) => {
    const icon = card.querySelector('.bg-gradient-to-br');
    if (icon) {
      gsap.to(icon, {
        y: "+=5",
        duration: 3 + (index * 0.5),
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 1
      });
    }
  });

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
  const backgroundElements = section.querySelectorAll('.absolute.blur-3xl');
  backgroundElements.forEach((element, index) => {
    gsap.to(element, {
      x: "+=30",
      y: "+=20",
      duration: 8 + (index * 2),
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: index * 3
    });
  });

  // Sequential highlight effect for case cards
  const highlightCards = () => {
    caseCards.forEach((card, index) => {
      gsap.to(card, {
        boxShadow: "0 0 50px rgba(59, 130, 246, 0.4)",
        duration: 0.8,
        delay: index * 1.5,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
    });
  };

  // Start highlight sequence after initial animation
  gsap.delayedCall(4, highlightCards);

  // Benefit items micro-interactions
  caseCards.forEach(card => {
    const benefitItems = card.querySelectorAll('.group\\/benefit');
    benefitItems.forEach((item, index) => {
      const emoji = item.querySelector('span');
      
      item.addEventListener('mouseenter', () => {
        gsap.to(emoji, {
          scale: 1.3,
          rotate: 10,
          duration: 0.3,
          ease: "back.out(1.4)"
        });
      });
      
      item.addEventListener('mouseleave', () => {
        gsap.to(emoji, {
          scale: 1,
          rotate: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
  });

  // Action button arrow animation
  caseCards.forEach(card => {
    const button = card.querySelector('.group\\/btn');
    const arrow = button?.querySelector('svg');
    
    if (button && arrow) {
      button.addEventListener('mouseenter', () => {
        gsap.to(arrow, {
          x: 5,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      button.addEventListener('mouseleave', () => {
        gsap.to(arrow, {
          x: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    }
  });

  return {
    cleanup: () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Remove event listeners by cloning nodes
      caseCards.forEach(card => {
        const newCard = card.cloneNode(true);
        card.parentNode?.replaceChild(newCard, card);
      });
    }
  };
};