import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

export const initFinalCtaAnimations = () => {
  const section = document.querySelector('[data-cta="section"]');
  const badge = document.querySelector('[data-cta="badge"]');
  const heading = document.querySelector('[data-cta="heading"]');
  const description = document.querySelector('[data-cta="description"]');
  const cards = document.querySelector('[data-cta="cards"]');
  const cardElements = document.querySelectorAll('[data-cta="cards"] > div');
  const action = document.querySelector('[data-cta="action"]');
  const testimonial = document.querySelector('[data-cta="testimonial"]');
  const particles = document.querySelectorAll('[data-cta="particle"]');
  const decoration = document.querySelector('[data-cta="decoration"]');

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

  let splitHeading;
  try {
    splitHeading = new SplitText(heading, { type: "chars, words" });

    tl.from(splitHeading.chars, {
      opacity: 0,
      y: 50,
      rotationX: 90,
      stagger: 0.02,
      duration: 0.8
    });
  } catch (error) {

    tl.fromTo(heading, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }
    );
  }
  
  if (badge) {
    tl.fromTo(badge,
      { y: -20, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6 },
      "-=0.8"
    );
  }
  
  if (description) {
    tl.fromTo(description,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.6"
    );
  }

  if (cardElements.length > 0) {
    tl.fromTo(cardElements, 
      { y: 50, opacity: 0, scale: 0.95 }, 
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        stagger: 0.2, 
        duration: 0.8, 
        ease: "back.out(1.7)" 
      },
      "-=0.5"
    );
  }

  if (action) {
    tl.fromTo(action,
      { y: 30, opacity: 0, scale: 0.9 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 0.8, 
        ease: "elastic.out(1, 0.5)" 
      },
      "-=0.3"
    );
    
    gsap.to(action, {
      scale: 1.05,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    const ctaButton = action.querySelector('a');
    if (ctaButton) {
      ctaButton.addEventListener('mouseenter', () => {
        gsap.to(ctaButton, {
          backgroundColor: "#3b82f6",
          scale: 1.05,
          duration: 0.3
        });
      });
      
      ctaButton.addEventListener('mouseleave', () => {
        gsap.to(ctaButton, {
          backgroundColor: "",
          scale: 1,
          duration: 0.3
        });
      });
    }
  }

  if (testimonial) {
    tl.fromTo(testimonial,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.4"
    );
  }

  if (decoration) {
    tl.fromTo(decoration,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 0.1, duration: 1 },
      "-=1.5"
    );
    
    gsap.to(decoration, {
      x: "+=30",
      y: "+=20",
      rotation: 15,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }
  
  if (particles.length > 0) {
    tl.fromTo(particles,
      { opacity: 0 },
      { opacity: 0.2, stagger: 0.05, duration: 0.5 },
      "-=1"
    );
    

    particles.forEach((particle) => {
      const xMove = (Math.random() - 0.5) * 100;
      const yMove = (Math.random() - 0.5) * 100;
      const duration = 5 + Math.random() * 10;

      gsap.to(particle, {
        x: `+=${xMove}`,
        y: `+=${yMove}`,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
  }

  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    gsap.killTweensOf([
      badge,
      heading,
      description,
      ...cardElements,
      action,
      testimonial,
      ...particles,
      decoration
    ]);
    
    const ctaButton = action?.querySelector('a');
    if (ctaButton) {
      ctaButton.removeEventListener('mouseenter', () => {});
      ctaButton.removeEventListener('mouseleave', () => {});
    }
  };
};