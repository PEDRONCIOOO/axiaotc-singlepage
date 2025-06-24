import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initFooterAnimations = () => {
  const footer = document.querySelector('[data-footer="section"]');
  const linksSection = document.querySelector('[data-footer="links"]');
  const newsletterSection = document.querySelector('[data-footer="newsletter"]');
  const socialSection = document.querySelector('[data-footer="social"]');
  const subscribeButton = document.querySelector('[data-footer="button"]');
  const logo = document.querySelector('[data-footer="logo"]');
  const copyright = document.querySelector('[data-footer="copyright"]');
  const decoration = document.querySelector('[data-footer="decoration"]');
  
  if (!footer) {
    console.warn('Footer elements not found');
    return () => {};
  }
    const handlers = new Map();
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: footer,
      start: "top 90%",
      once: true
    },
    defaults: { ease: "power2.out" }
  });
  
  const sections = [linksSection, newsletterSection, socialSection].filter(Boolean);
  
  tl.fromTo(sections, 
    { y: 30, opacity: 0 }, 
    { 
      y: 0, 
      opacity: 1, 
      stagger: 0.2, 
      duration: 0.7 
    }
  );
  
  if (logo) {
    tl.fromTo(logo,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5 },
      "-=0.3"
    );
  }
  
  if (copyright) {
    tl.fromTo(copyright,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      "-=0.2"
    );
  }
  
  if (decoration) {
    tl.fromTo(decoration,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 0.2, duration: 1 },
      "-=1"
    );
    
    gsap.to(decoration, {
      x: "-=20",
      y: "-=20",
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }
  
  const emailInput = newsletterSection?.querySelector('input[type="email"]');
  if (emailInput) {
    const focusHandler = () => {
      gsap.to(emailInput, {
        boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.3)",
        duration: 0.3
      });
    };
    
    const blurHandler = () => {
      gsap.to(emailInput, {
        boxShadow: "none",
        duration: 0.3
      });
    };
    
    handlers.set(emailInput, {
      focus: focusHandler,
      blur: blurHandler
    });
    
    emailInput.addEventListener('focus', focusHandler);
    emailInput.addEventListener('blur', blurHandler);
  }
    if (subscribeButton) {
    const enterHandler = () => {
      gsap.to(subscribeButton, {
        y: -2,
        duration: 0.2
      });
    };
    
    const leaveHandler = () => {
      gsap.to(subscribeButton, {
        y: 0,
        duration: 0.2
      });
    };
    
    handlers.set(subscribeButton, {
      enter: enterHandler,
      leave: leaveHandler
    });
    
    subscribeButton.addEventListener('mouseenter', enterHandler);
    subscribeButton.addEventListener('mouseleave', leaveHandler);
  }
  
  const socialIcons = socialSection?.querySelectorAll('a');
  if (socialIcons) {
    socialIcons.forEach((icon) => {
      const enterHandler = () => {
        gsap.to(icon, {
          scale: 1.15,
          duration: 0.2
        });
      };
      
      const leaveHandler = () => {
        gsap.to(icon, {
          scale: 1,
          duration: 0.2
        });
      };
      
      handlers.set(icon, {
        enter: enterHandler,
        leave: leaveHandler
      });
      
      icon.addEventListener('mouseenter', enterHandler);
      icon.addEventListener('mouseleave', leaveHandler);
    });
  }
  
  return () => {
    handlers.forEach((handlerObj, element) => {
      if (handlerObj.focus) element.removeEventListener('focus', handlerObj.focus);
      if (handlerObj.blur) element.removeEventListener('blur', handlerObj.blur);
      if (handlerObj.enter) element.removeEventListener('mouseenter', handlerObj.enter);
      if (handlerObj.leave) element.removeEventListener('mouseleave', handlerObj.leave);
    });
    
    gsap.killTweensOf([
      linksSection,
      newsletterSection,
      socialSection,
      logo,
      copyright,
      decoration,
      subscribeButton,
      ...(socialIcons ? Array.from(socialIcons) : [])
    ]);
    
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
};