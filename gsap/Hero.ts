import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initHeroAnimations = () => {
  const heroSection = document.querySelector('[data-hero="section"]');
  const heroHeading = document.querySelector('[data-hero="heading"]');
  const heroParagraph = document.querySelector('[data-hero="description"]');
  const heroHighlight = document.querySelector('[data-hero="highlight"]');
  const heroPrimaryBtn = document.querySelector('[data-hero="primary-btn"]');
  const heroSecondaryBtn = document.querySelector('[data-hero="secondary-btn"]');
  const heroStats = document.querySelector('[data-hero="stats"]');
  const shapes = [
    document.querySelector('[data-hero="shape-1"]'),
    document.querySelector('[data-hero="shape-2"]'),
    document.querySelector('[data-hero="shape-3"]')
  ];
  
  const tl = gsap.timeline({ 
    defaults: { ease: "power3.out" },
    delay: 0.2
  });
  
  tl.fromTo(heroHeading, 
    { y: 50, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1.2 }
  )
  .fromTo(heroParagraph, 
    { y: 30, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.8 }, 
    "-=0.7"
  )
  .fromTo([heroPrimaryBtn, heroSecondaryBtn], 
    { y: 20, opacity: 0 }, 
    { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 }, 
    "-=0.5"
  )
  .fromTo(heroStats, 
    { y: 20, opacity: 0, scale: 0.9 }, 
    { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "elastic.out(1, 0.5)" }, 
    "-=0.3"
  );
  
  tl.fromTo(shapes, 
    { scale: 0, opacity: 0 }, 
    { scale: 1, opacity: (i) => [0.3, 0.2, 0.1][i], stagger: 0.1, duration: 0.8, ease: "back.out(1.7)" }, 
    "-=1"
  );
  
  if (heroHighlight) {
    tl.fromTo(heroHighlight,
      { color: "inherit", scale: 1 },
      { 
        color: "#2563EB", 
        scale: 1.1, 
        duration: 0.5,
        ease: "back.out(1.7)"
      },
      "-=0.3"
    );
    
    gsap.to(heroHighlight, {
      y: "+=8",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }
  
  shapes.forEach((shape, index) => {
    if (shape) {
      gsap.to(shape, {
        y: index % 2 === 0 ? "+=30" : "-=30",
        x: index % 2 === 0 ? "+=10" : "-=10",
        duration: 3 + index,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.5
      });
    }
  });
  
  if (heroPrimaryBtn) {
    heroPrimaryBtn.addEventListener('mouseenter', () => {
      gsap.to(heroPrimaryBtn, {
        scale: 1.05,
        y: -3,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    heroPrimaryBtn.addEventListener('mouseleave', () => {
      gsap.to(heroPrimaryBtn, {
        scale: 1,
        y: 0,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        duration: 0.3,
        ease: "power2.out"
      });
    });
  }
  
  if (heroSecondaryBtn) {
    heroSecondaryBtn.addEventListener('mouseenter', () => {
      gsap.to(heroSecondaryBtn, {
        scale: 1.05,
        y: -3,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    heroSecondaryBtn.addEventListener('mouseleave', () => {
      gsap.to(heroSecondaryBtn, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  }
  
  return {
    cleanup: () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      if (heroPrimaryBtn) {
        heroPrimaryBtn.removeEventListener('mouseenter', () => {});
        heroPrimaryBtn.removeEventListener('mouseleave', () => {});
      }
      
      if (heroSecondaryBtn) {
        heroSecondaryBtn.removeEventListener('mouseenter', () => {});
        heroSecondaryBtn.removeEventListener('mouseleave', () => {});
      }
    }
  };
};