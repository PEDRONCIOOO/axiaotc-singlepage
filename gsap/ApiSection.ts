import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initApiSectionAnimations = () => {
  const section = document.querySelector('[data-api="section"]');
  const badge = document.querySelector('[data-api="badge"]');
  const heading = document.querySelector('[data-api="heading"]');
  const subtitle = document.querySelector('[data-api="subtitle"]');
  const steps = document.querySelectorAll('[data-api="step"]');
  
  if (!section) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 80%", 
      once: true, 
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
  tl.fromTo(subtitle,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6 },
    "-=0.5"
  );

  // Steps animation with stagger
  tl.fromTo(steps,
    { y: 60, opacity: 0, scale: 0.8 },
    { 
      y: 0, 
      opacity: 1, 
      scale: 1, 
      duration: 0.8, 
      stagger: 0.2,
      ease: "back.out(1.2)" 
    },
    "-=0.3"
  );

  // Hover interactions for steps
  steps.forEach((step, index) => {
    const icon = step.querySelector('.w-16, .w-20');
    const stepNumber = step.querySelector('.absolute');
    const title = step.querySelector('h3');
    
    step.addEventListener('mouseenter', () => {
      gsap.to(icon, {
        scale: 1.1,
        y: -5,
        boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.4)",
        duration: 0.3,
        ease: "power2.out"
      });
      
      if (stepNumber) {
        gsap.to(stepNumber, {
          scale: 1.1,
          rotation: 5,
          duration: 0.3,
          ease: "power2.out"
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
    
    step.addEventListener('mouseleave', () => {
      gsap.to(icon, {
        scale: 1,
        y: 0,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
        duration: 0.3,
        ease: "power2.out"
      });
      
      if (stepNumber) {
        gsap.to(stepNumber, {
          scale: 1,
          rotation: 0,
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

  // Floating animation for icons
  steps.forEach((step, index) => {
    const icon = step.querySelector('.w-16, .w-20');
    if (icon) {
      gsap.to(icon, {
        y: "+=10",
        duration: 2 + (index * 0.3),
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.5
      });
    }
  });

  // Connector lines animation (for desktop)
  const connectors = section.querySelectorAll('.absolute.top-8');
  if (connectors.length > 0) {
    tl.fromTo(connectors,
      { scaleX: 0, opacity: 0 },
      { 
        scaleX: 1, 
        opacity: 1, 
        duration: 0.8,
        stagger: 0.3,
        transformOrigin: "left center",
        ease: "power2.out"
      },
      "-=0.5"
    );
  }

  // Pulse animation for step numbers
  const stepNumbers = section.querySelectorAll('.absolute.-top-2.-right-2');
  stepNumbers.forEach((number, index) => {
    gsap.to(number, {
      scale: 1.1,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: index * 0.5
    });
  });

  return {
    cleanup: () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Remove event listeners
      steps.forEach(step => {
        const newStep = step.cloneNode(true);
        step.parentNode?.replaceChild(newStep, step);
      });
    }
  };
};