import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type SetFlippedCardFunction = (index: number | null) => void;

export const initUseCasesAnimations = (setFlippedCard: SetFlippedCardFunction) => {
  const section = document.querySelector('[data-uc="section"]');
  const heading = document.querySelector('[data-uc="heading"]');
  const subheading = document.querySelector('[data-uc="subheading"]');
  const cardWrappers = document.querySelectorAll('[data-uc="card-wrapper"]');
  const decorations = document.querySelectorAll('[data-uc="decoration-1"], [data-uc="decoration-2"]');
  const cta = document.querySelector('[data-uc="cta"]');
  
  if (!section || !heading) {
    console.warn('UseCases elements not found');
    return () => {};
  }
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      once: true
    }
  });
  
  tl.fromTo(heading, 
    { y: 40, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.8 }
  );
  
  if (subheading) {
    tl.fromTo(subheading,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.5"
    );
  }
  
  decorations.forEach((decoration, index) => {
    if (decoration) {
      tl.fromTo(decoration, 
        { scale: 0, opacity: 0 }, 
        { scale: 1, opacity: 0.5, duration: 0.7 },
        "-=0.4"
      );
      
      gsap.to(decoration, {
        y: index % 2 === 0 ? "+=20" : "-=20",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  });
  
  if (cardWrappers.length > 0) {
    tl.fromTo(cardWrappers, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.7 },
      "-=0.5"
    );
  }
  
  if (cta) {
    tl.fromTo(cta,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.3"
    );
  }
  
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    gsap.killTweensOf([heading, subheading, ...decorations, ...cardWrappers, cta]);
  };
};