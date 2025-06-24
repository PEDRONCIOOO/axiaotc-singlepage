import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initProofOfReservesAnimations = () => {
  const section = document.querySelector('[data-por="section"]');
  const heading = document.querySelector('[data-por="heading"]');
  const description = document.querySelector('[data-por="description"]');
  const highlight = document.querySelector('[data-por="highlight"]');
  const listItems = document.querySelectorAll('[data-por="list-item"]');
  const iframeContainer = document.querySelector('[data-por="iframe-container"]');
  const iframeOverlay = document.querySelector('[data-por="iframe-overlay"]');
  
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
  
  if (highlight) {
    tl.fromTo(highlight,
      { color: "inherit", scale: 1 },
      { 
        color: "#2563EB", 
        scale: 1.1, 
        duration: 0.5,
        ease: "back.out(1.7)"
      },
      "-=0.3"
    );
    
    gsap.to(highlight, {
      y: "+=5",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }
  
  tl.fromTo(listItems, 
    { x: -30, opacity: 0 }, 
    { x: 0, opacity: 1, stagger: 0.15, duration: 0.6 }, 
    "-=0.4"
  );
  
  tl.fromTo(iframeContainer, 
    { y: 30, opacity: 0, scale: 0.95 }, 
    { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.2)" }, 
    "-=0.2"
  );
  
  if (iframeContainer) {
    iframeContainer.addEventListener('mouseenter', () => {
      gsap.to(iframeContainer, {
        y: -5,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        duration: 0.3,
        ease: "power2.out"
      });
      
      if (iframeOverlay) {
        gsap.to(iframeOverlay, {
          opacity: 0.7,
          duration: 0.3
        });
      }
    });
    
    iframeContainer.addEventListener('mouseleave', () => {
      gsap.to(iframeContainer, {
        y: 0,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        duration: 0.3,
        ease: "power2.out"
      });
      
      if (iframeOverlay) {
        gsap.to(iframeOverlay, {
          opacity: 1,
          duration: 0.3
        });
      }
    });
  }
  
  return {
    cleanup: () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      if (iframeContainer) {
        iframeContainer.removeEventListener('mouseenter', () => {});
        iframeContainer.removeEventListener('mouseleave', () => {});
      }
    }
  };
};