import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const initHeaderAnimations = () => {
  const header = document.querySelector('[data-animation="header"]');
  const logo = document.querySelector('[data-animation="logo"]');
  const navItems = document.querySelectorAll('[data-animation="nav-item"]');
  const ctaButton = document.querySelector('[data-animation="cta-button"]');

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.fromTo(header, 
    { y: -100, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.8 }
  )
  .fromTo(logo, 
    { scale: 0.7, opacity: 0 }, 
    { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }, 
    "-=0.5"
  )
  .fromTo(navItems, 
    { y: 30, opacity: 0 }, 
    { y: 0, opacity: 1, stagger: 0.1, duration: 0.4 }, 
    "-=0.3"
  )
  .fromTo(ctaButton, 
    { scale: 0, opacity: 0 }, 
    { scale: 1, opacity: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" }, 
    "-=0.2"
  );

  let lastScrollTop = 0;

  ScrollTrigger.create({
    start: "top top",
    end: "max",
    onUpdate: (self) => {
      const scrollY = window.scrollY;
      const scrollDirection = scrollY > lastScrollTop ? 'down' : 'up';
      
      if (scrollDirection === 'down' && scrollY > window.innerHeight * 0.6) {
        gsap.to(header, {
          y: -100,
          ease: "power2.inOut"
        });
      } 
      else if (scrollDirection === 'up') {
        gsap.to(header, {
          y: 0,
          ease: "power2.out"
        });
      }
      
      lastScrollTop = scrollY;
    }
  });

  if (logo) {
    logo.addEventListener('mouseenter', () => {
      gsap.to(logo.querySelector('span'), { 
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    logo.addEventListener('mouseleave', () => {
      gsap.to(logo.querySelector('span'), { 
        scale: 1,
        duration: 0.3,
        ease: "power2.out" 
      });
    });
  }

  if (ctaButton) {
    ctaButton.addEventListener('mouseenter', () => {
      gsap.to(ctaButton, { 
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    ctaButton.addEventListener('mouseleave', () => {
      gsap.to(ctaButton, { 
        scale: 1,
        duration: 0.3,
        ease: "power2.out" 
      });
    });
  }

  return {
    cleanup: () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      if (logo) {
        logo.removeEventListener('mouseenter', () => {});
        logo.removeEventListener('mouseleave', () => {});
      }
      
      if (ctaButton) {
        ctaButton.removeEventListener('mouseenter', () => {});
        ctaButton.removeEventListener('mouseleave', () => {});
      }
    }
  };
};