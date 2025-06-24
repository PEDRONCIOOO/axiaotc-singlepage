import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

export const initFaqAnimations = () => {
  const section = document.querySelector('[data-faq="section"]');
  const heading = document.querySelector('[data-faq="heading"]');
  const subheading = document.querySelector('[data-faq="subheading"]');
  const container = document.querySelector('[data-faq="container"]');
  const faqItems = document.querySelectorAll('[data-faq="item"]');
  const questions = document.querySelectorAll('[data-faq="question"]');
  const answers = document.querySelectorAll('[data-faq="answer"]');
  const decorations = [
    document.querySelector('[data-faq="decoration-1"]'),
    document.querySelector('[data-faq="decoration-2"]')
  ];
  const cta = document.querySelector('[data-faq="cta"]');
  
  if (!section || !heading || !container) {
    console.warn('FAQ elements not found');
    return () => {};
  }
  
  const handlers = new Map();
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      once: true
    },
    defaults: { ease: "power3.out" }
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
        y: index % 2 === 0 ? "+=15" : "-=15",
        x: index % 2 === 0 ? "-=5" : "+=5",
        duration: 3 + index,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  });
  
  if (faqItems.length > 0) {
    tl.fromTo(faqItems, 
      { y: 30, opacity: 0, scale: 0.95 }, 
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        stagger: 0.1, 
        duration: 0.7, 
        ease: "back.out(1.4)" 
      },
      "-=0.4"
    );

    faqItems.forEach((item, index) => {
      const enterHandler = () => {
        gsap.to(item, {
          y: -3,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
          duration: 0.3
        });
      };
      
      const leaveHandler = () => {
        gsap.to(item, {
          y: 0,
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
          duration: 0.3
        });
      };
      
      handlers.set(item, {
        enter: enterHandler,
        leave: leaveHandler
      });

      item.addEventListener('mouseenter', enterHandler);
      item.addEventListener('mouseleave', leaveHandler);
    });
    
    questions.forEach((question, index) => {
      const clickHandler = () => {
        const parent = question.closest('[data-faq="item"]');
        const answer = parent?.querySelector('[data-faq="answer"]');
        const icon = question.querySelector('svg');
        const isOpen = answer?.classList.contains('max-h-96');
        
        if (isOpen) {
          gsap.to(icon, {
            rotation: 0,
            duration: 0.3
          });
        } else {
          gsap.to(icon, {
            rotation: 180,
            duration: 0.3
          });
          
          if (parent) {
            const itemRect = parent.getBoundingClientRect();
            const viewHeight = window.innerHeight;
            
            if (itemRect.bottom + 100 > viewHeight) {
              gsap.to(window, {
                scrollTo: {
                  y: parent,
                  offsetY: 100
                },
                duration: 0.5,
                ease: "power2.inOut"
              });
            }
          }
        }
      };
      
      handlers.set(question, {
        click: clickHandler
      });
    });
  }

  if (cta) {
    tl.fromTo(cta,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.3"
    );
    
    const ctaLink = cta.querySelector('a');
    if (ctaLink) {
      const enterHandler = () => {
        gsap.to(ctaLink, {
          x: 3,
          duration: 0.2
        });
      };
      
      const leaveHandler = () => {
        gsap.to(ctaLink, {
          x: 0,
          duration: 0.2
        });
      };
      
      handlers.set(ctaLink, {
        enter: enterHandler,
        leave: leaveHandler
      });
      
      ctaLink.addEventListener('mouseenter', enterHandler);
      ctaLink.addEventListener('mouseleave', leaveHandler);
    }
  }
  
  return () => {
    handlers.forEach((handlerObj, element) => {
      if (handlerObj.enter) element.removeEventListener('mouseenter', handlerObj.enter);
      if (handlerObj.leave) element.removeEventListener('mouseleave', handlerObj.leave);
      if (handlerObj.click) element.removeEventListener('click', handlerObj.click);
    });
    
    gsap.killTweensOf([
      heading, 
      subheading, 
      ...faqItems,
      ...questions,
      ...answers,
      ...decorations,
      cta
    ]);
    
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
};