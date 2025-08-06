import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initFinalCtaAnimations = () => {
  const section = document.querySelector('[data-cta="section"]');
  const badge = document.querySelector('[data-cta="badge"]');
  const heading = document.querySelector('[data-cta="heading"]');
  const subtitle = document.querySelector('[data-cta="subtitle"]');
  const companyInfo = document.querySelector('[data-cta="company-info"]');
  const formContainer = document.querySelector('[data-cta="form-container"]');
  const benefitCards = document.querySelectorAll('.flex.items-start.gap-4.p-4');
  const trustIndicators = document.querySelectorAll('.w-2.h-2');

  if (!section || !heading) {
    console.warn('FinalCTA elements not found');
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

  // Company info animation (left side)
  if (companyInfo) {
    tl.fromTo(companyInfo,
      { x: -50, opacity: 0, scale: 0.95 },
      { x: 0, opacity: 1, scale: 1, duration: 0.8 },
      "-=0.4"
    );
  }

  // Form container animation (right side)
  if (formContainer) {
    tl.fromTo(formContainer,
      { x: 50, opacity: 0, scale: 0.95 },
      { x: 0, opacity: 1, scale: 1, duration: 0.8 },
      "-=0.6"
    );
  }

  // Benefit cards stagger animation
  if (benefitCards.length > 0) {
    tl.fromTo(benefitCards, 
      { y: 30, opacity: 0, scale: 0.9 }, 
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        stagger: 0.15, 
        duration: 0.6,
        ease: "back.out(1.2)"
      },
      "-=0.5"
    );
  }

  // Enhanced hover interactions for benefit cards
  benefitCards.forEach((card, index) => {
    const icon = card.querySelector('.bg-gradient-to-br');
    const title = card.querySelector('h4');
    
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -5,
        scale: 1.02,
        boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.2)",
        duration: 0.3,
        ease: "power2.out"
      });

      if (icon) {
        gsap.to(icon, {
          scale: 1.1,
          rotate: 5,
          boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.4)",
          duration: 0.3,
          ease: "back.out(1.4)"
        });
      }

      if (title) {
        gsap.to(title, {
          color: "#2563eb",
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
        duration: 0.3,
        ease: "power2.out"
      });

      if (icon) {
        gsap.to(icon, {
          scale: 1,
          rotate: 0,
          boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
          duration: 0.3,
          ease: "power2.out"
        });
      }

      if (title) {
        gsap.to(title, {
          color: "#1e293b",
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });
  });

  // Form interactions
  if (formContainer) {
    const formInputs = formContainer.querySelectorAll('input, textarea, select');
    const submitButton = formContainer.querySelector('button[type="submit"]');
    
    // Input focus animations
    formInputs.forEach(input => {
      input.addEventListener('focus', () => {
        gsap.to(input, {
          scale: 1.02,
          boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      input.addEventListener('blur', () => {
        gsap.to(input, {
          scale: 1,
          boxShadow: "0 0 0 0px rgba(59, 130, 246, 0)",
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    // Submit button animation
    if (submitButton) {
      submitButton.addEventListener('mouseenter', () => {
        gsap.to(submitButton, {
          scale: 1.05,
          y: -2,
          boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)",
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      submitButton.addEventListener('mouseleave', () => {
        gsap.to(submitButton, {
          scale: 1,
          y: 0,
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
          ease: "power2.out"
        });
      });
    }

    // Form container glow effect
    gsap.to(formContainer, {
      filter: "drop-shadow(0 0 30px rgba(59, 130, 246, 0.1))",
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });
  }

  // Trust indicators pulsing animation
  trustIndicators.forEach((indicator, index) => {
    gsap.to(indicator, {
      scale: 1.3,
      opacity: 0.7,
      duration: 1.5 + (index * 0.2),
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: index * 0.3
    });
  });

  // Badge pulse animation
  if (badge) {
    const pulseIcon = badge.querySelector('.w-2.h-2.bg-blue-500');
    if (pulseIcon) {
      gsap.to(pulseIcon, {
        scale: 1.4,
        opacity: 0.6,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }
  }

  // Company logo animation
  const companyLogo = section.querySelector('img[alt="Axia Digital Solutions"]');
  if (companyLogo) {
    gsap.to(companyLogo, {
      rotate: 360,
      duration: 20,
      repeat: -1,
      ease: "none"
    });
  }

  // Background elements movement
  const backgroundElements = section.querySelectorAll('.absolute.blur-3xl');
  backgroundElements.forEach((element, index) => {
    gsap.to(element, {
      x: "+=40",
      y: "+=30",
      duration: 10 + (index * 2),
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: index * 3
    });
  });

  // Contact info hover animation
  const contactLinks = section.querySelectorAll('a[href^="mailto"]');
  contactLinks.forEach(link => {
    const icon = link.querySelector('svg');
    
    link.addEventListener('mouseenter', () => {
      gsap.to(link, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
      
      if (icon) {
        gsap.to(icon, {
          scale: 1.2,
          rotate: 10,
          duration: 0.3,
          ease: "back.out(1.4)"
        });
      }
    });
    
    link.addEventListener('mouseleave', () => {
      gsap.to(link, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      
      if (icon) {
        gsap.to(icon, {
          scale: 1,
          rotate: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });
  });

  // Floating animation for benefit icons
  benefitCards.forEach((card, index) => {
    const icon = card.querySelector('.bg-gradient-to-br');
    if (icon) {
      gsap.to(icon, {
        y: "+=5",
        duration: 2.5 + (index * 0.3),
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.5
      });
    }
  });

  return {
    cleanup: () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Remove event listeners by cloning nodes
      benefitCards.forEach(card => {
        const newCard = card.cloneNode(true);
        card.parentNode?.replaceChild(newCard, card);
      });
      
      contactLinks.forEach(link => {
        const newLink = link.cloneNode(true);
        link.parentNode?.replaceChild(newLink, link);
      });
      
      if (formContainer) {
        const formInputs = formContainer.querySelectorAll('input, textarea, select, button');
        formInputs.forEach(input => {
          const newInput = input.cloneNode(true);
          input.parentNode?.replaceChild(newInput, input);
        });
      }
    }
  };
};