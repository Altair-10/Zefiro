import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Funzione che gestisce le animazioni per Hero, Timeline, e CTA
export const ServicePagesCostants = (heroRef, timelineRef, ctaRef) => {
  // Hero animation
  if (heroRef.current) {
    const heroText = heroRef.current.querySelectorAll('.hero-text');
    if (heroText.length > 0) {
      gsap.fromTo(
        heroText,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: 'power3.out' }
      );
    }

    const ctaButton = heroRef.current.querySelector('.cta-button');
    if (ctaButton) {
      gsap.to(ctaButton, {
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: 'sine.inOut',
      });
    }
  }

  // Timeline animation
  if (timelineRef.current) {
    const timelineSteps = timelineRef.current.querySelectorAll('.timeline-step');
    timelineSteps.forEach((step, index) => {
      gsap.fromTo(
        step,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          scrollTrigger: {
            trigger: step,
            start: 'top 75%',
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
        }
      );
    });
  }

  // CTA animation
  if (ctaRef.current) {
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.9 },
      {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
        },
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
      }
    );

    const shineAnimation = () => {
      const shineElement = ctaRef.current?.querySelector('.shine-effect');
      if (shineElement) {
        gsap.fromTo(
          shineElement,
          { left: '-100%', opacity: 0.5 },
          {
            left: '200%',
            opacity: 0,
            duration: 1.5,
            ease: 'power2.inOut',
            onComplete: () => {
              gsap.set(shineElement, { left: '-100%' });
              setTimeout(shineAnimation, 3000);
            },
          }
        );
      }
    };

    setTimeout(shineAnimation, 2000);
  }
};
