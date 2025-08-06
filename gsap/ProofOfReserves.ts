import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initProofOfReservesAnimations = () => {
  const section = document.querySelector('[data-por="section"]');
  const badge = document.querySelector('[data-por="badge"]');
  const heading = document.querySelector('[data-por="heading"]');
  const subtitle = document.querySelector('[data-por="subtitle"]');
  const description = document.querySelector('[data-por="description"]');
  const chartContainer = document.querySelector('[data-por="chart-container"]');
  const benefitItems = document.querySelectorAll('.flex.items-start.gap-3');
  
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

  // Description animation
  tl.fromTo(description,
    { x: -50, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.8 },
    "-=0.3"
  );

  // Benefits list animation with stagger
  tl.fromTo(benefitItems, 
    { x: -30, opacity: 0, scale: 0.9 }, 
    { 
      x: 0, 
      opacity: 1, 
      scale: 1,
      stagger: 0.15, 
      duration: 0.6,
      ease: "back.out(1.1)" 
    }, 
    "-=0.4"
  );
  
  // Chart container animation
  tl.fromTo(chartContainer, 
    { x: 50, opacity: 0, scale: 0.95 }, 
    { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.2)" }, 
    "-=0.6"
  );

  // Enhanced hover interactions for chart container
  if (chartContainer) {
    const chartCard = chartContainer.querySelector('.bg-white');
    const realTimeIndicator = chartContainer.querySelector('.w-2.h-2.bg-green-400');
    
    chartContainer.addEventListener('mouseenter', () => {
      gsap.to(chartCard, {
        y: -8,
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
        duration: 0.3,
        ease: "power2.out"
      });
      
      // Animate real-time indicator
      if (realTimeIndicator) {
        gsap.to(realTimeIndicator, {
          scale: 1.5,
          boxShadow: "0 0 20px rgba(34, 197, 94, 0.6)",
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });
    
    chartContainer.addEventListener('mouseleave', () => {
      gsap.to(chartCard, {
        y: 0,
        scale: 1,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        duration: 0.3,
        ease: "power2.out"
      });
      
      if (realTimeIndicator) {
        gsap.to(realTimeIndicator, {
          scale: 1,
          boxShadow: "none",
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });
  }

  // Floating animation for benefit icons
  benefitItems.forEach((item, index) => {
    const icon = item.querySelector('.w-6.h-6');
    if (icon) {
      gsap.to(icon, {
        y: "+=3",
        duration: 2 + (index * 0.3),
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.4
      });
    }
  });

  // Pulsing animation for the badge indicator
  if (badge) {
    const pulseIcon = badge.querySelector('.w-2.h-2.bg-blue-500');
    if (pulseIcon) {
      gsap.to(pulseIcon, {
        scale: 1.3,
        opacity: 0.7,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }
  }

  // Chart real-time simulation
  const realTimeIndicator = section.querySelector('.w-2.h-2.bg-green-400');
  if (realTimeIndicator) {
    // Continuous pulsing for real-time feel
    gsap.to(realTimeIndicator, {
      scale: 1.4,
      opacity: 0.6,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });
  }

  // Background elements subtle movement
  const backgroundElements = section.querySelectorAll('.absolute.blur-2xl, .absolute.blur-3xl');
  backgroundElements.forEach((element, index) => {
    gsap.to(element, {
      x: "+=15",
      y: "+=10",
      duration: 6 + (index * 1),
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: index * 2
    });
  });

  // Benefit items hover interactions
  benefitItems.forEach((item, index) => {
    const icon = item.querySelector('.w-6.h-6');
    const title = item.querySelector('h3');
    
    item.addEventListener('mouseenter', () => {
      gsap.to(icon, {
        scale: 1.1,
        rotate: 5,
        duration: 0.3,
        ease: "power2.out"
      });
      
      if (title) {
        gsap.to(title, {
          color: "#2563eb",
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });
    
    item.addEventListener('mouseleave', () => {
      gsap.to(icon, {
        scale: 1,
        rotate: 0,
        duration: 0.3,
        ease: "power2.out"
      });
      
      if (title) {
        gsap.to(title, {
          color: "#111827",
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });
  });

  // Chart container glow effect
  if (chartContainer) {
    gsap.to(chartContainer, {
      filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.1))",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });
  }

  return {
    cleanup: () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Remove event listeners by cloning nodes
      if (chartContainer) {
        const newChartContainer = chartContainer.cloneNode(true);
        chartContainer.parentNode?.replaceChild(newChartContainer, chartContainer);
      }
      
      benefitItems.forEach(item => {
        const newItem = item.cloneNode(true);
        item.parentNode?.replaceChild(newItem, item);
      });
    }
  };
};