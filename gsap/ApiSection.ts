import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export const initApiSectionAnimations = () => {
  const section = document.querySelector('[data-api="section"]');
  const heading = document.querySelector('[data-api="heading"]');
  const subheading = document.querySelector('[data-api="subheading"]');
  const codeContainer = document.querySelector('[data-api="code-container"]');
  const code = document.querySelector('[data-api="code"]');
  const features = document.querySelector('[data-api="features"]');
  const featureItems = document.querySelectorAll('[data-api="feature-item"]');
  const cta = document.querySelector('[data-api="cta"]');
  const techLogos = document.querySelector('[data-api="tech-logos"]');
  
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
  .fromTo(subheading,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6 },
    "-=0.5"
  );
  

  tl.fromTo(codeContainer,
    { y: 40, opacity: 0, scale: 0.95 },
    { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.2)" },
    "-=0.3"
  );
  

  if (code) {
    const originalText = code.innerHTML;
    tl.set(code, { innerHTML: "" })
      .to(code, {
        duration: 1.5,
        text: {
          value: originalText,
          delimiter: ""
        },
        ease: "none"
      }, "-=0.1");
  }
  

  tl.fromTo(features,
    { y: 40, opacity: 0, scale: 0.95 },
    { y: 0, opacity: 1, scale: 1, duration: 0.8 },
    "-=1.2"
  );
  

  tl.fromTo(featureItems,
    { x: -20, opacity: 0 },
    { x: 0, opacity: 1, stagger: 0.15, duration: 0.5 },
    "-=0.6"
  );
  

  tl.fromTo(cta,
    { y: 20, opacity: 0, scale: 0.9 },
    { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
    "-=0.3"
  );
  

  tl.fromTo(techLogos,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 },
    "-=0.4"
  );
  

  if (codeContainer) {
    codeContainer.addEventListener('mouseenter', () => {
      gsap.to(codeContainer, {
        y: -5,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    codeContainer.addEventListener('mouseleave', () => {
      gsap.to(codeContainer, {
        y: 0,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
        duration: 0.3,
        ease: "power2.out"
      });
    });
  }
  

  featureItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, {
        x: 5,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        x: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });

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
      
      if (codeContainer) {
        codeContainer.removeEventListener('mouseenter', () => {});
        codeContainer.removeEventListener('mouseleave', () => {});
      }
      
      featureItems.forEach(item => {
        item.removeEventListener('mouseenter', () => {});
        item.removeEventListener('mouseleave', () => {});
      });
      
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