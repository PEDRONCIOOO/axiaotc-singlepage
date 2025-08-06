import { gsap } from 'gsap';

export const createLanguageTransitionTimeline = (elements: NodeListOf<Element>) => {
  const tl = gsap.timeline();

  // Separar elementos por tipo para animações diferentes
  const headings = Array.from(elements).filter(el => 
    el.tagName.match(/^H[1-6]$/)
  );
  
  const paragraphs = Array.from(elements).filter(el => 
    el.tagName === 'P' || el.classList.contains('description')
  );
  
  const buttons = Array.from(elements).filter(el => 
    el.tagName === 'BUTTON' || el.tagName === 'A'
  );
  
  const badges = Array.from(elements).filter(el => 
    el.classList.contains('badge') || el.hasAttribute('data-hero') && el.getAttribute('data-hero')?.includes('badge')
  );

  // Animação para headings (mais dramática)
  if (headings.length > 0) {
    tl.to(headings, {
      opacity: 0,
      y: -30,
      scale: 0.9,
      rotationX: 15,
      duration: 0.4,
      stagger: 0.1,
      ease: "power2.out"
    }, 0);
  }

  // Animação para parágrafos (suave)
  if (paragraphs.length > 0) {
    tl.to(paragraphs, {
      opacity: 0,
      x: -20,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.out"
    }, 0.1);
  }

  // Animação para botões (bounce)
  if (buttons.length > 0) {
    tl.to(buttons, {
      opacity: 0,
      scale: 0.8,
      y: 20,
      duration: 0.3,
      stagger: 0.1,
      ease: "back.in(1.2)"
    }, 0.2);
  }

  // Animação para badges (flip)
  if (badges.length > 0) {
    tl.to(badges, {
      opacity: 0,
      rotationY: 90,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.out"
    }, 0);
  }

  return {
    out: tl,
    in: () => {
      const tlIn = gsap.timeline();

      // Entrada dos headings
      if (headings.length > 0) {
        tlIn.fromTo(headings, {
          opacity: 0,
          y: 30,
          scale: 0.9,
          rotationX: -15
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.4)"
        }, 0);
      }

      // Entrada dos parágrafos
      if (paragraphs.length > 0) {
        tlIn.fromTo(paragraphs, {
          opacity: 0,
          x: 20
        }, {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out"
        }, 0.2);
      }

      // Entrada dos botões
      if (buttons.length > 0) {
        tlIn.fromTo(buttons, {
          opacity: 0,
          scale: 0.8,
          y: -20
        }, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "elastic.out(1, 0.5)"
        }, 0.3);
      }

      // Entrada dos badges
      if (badges.length > 0) {
        tlIn.fromTo(badges, {
          opacity: 0,
          rotationY: -90,
          scale: 0.8
        }, {
          opacity: 1,
          rotationY: 0,
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.4)"
        }, 0.1);
      }

      return tlIn;
    }
  };
};