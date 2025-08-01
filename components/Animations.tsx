
'use client';

import React, { useEffect, useRef, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  duration = 600,
  threshold = 0.1,
  once = true
}: FadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const getTransform = () => {
      switch (direction) {
        case 'up':
          return 'translateY(20px)';
        case 'down':
          return 'translateY(-20px)';
        case 'left':
          return 'translateX(20px)';
        case 'right':
          return 'translateX(-20px)';
        default:
          return 'none';
      }
    };

    // Set initial styles
    element.style.opacity = '0';
    element.style.transform = getTransform();
    element.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
    element.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is in view, fade it in
            element.style.opacity = '1';
            element.style.transform = 'none';

            if (once) {
              observer.unobserve(element);
            }
          } else {
            // Element is not in view, and we want to reset if 'once' is false
            if (!once) {
              element.style.opacity = '0';
              element.style.transform = getTransform();
            }
          }
        });
      },
      {
        threshold,
        root: null,
        rootMargin: '0px'
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay, direction, duration, threshold, once]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

interface StaggerChildrenProps {
  children: ReactNode[];
  staggerDelay?: number;
  initialDelay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  threshold?: number;
}

export function StaggerChildren({
  children,
  staggerDelay = 100,
  initialDelay = 0,
  className = '',
  direction = 'up',
  duration = 600,
  threshold = 0.1,
}: StaggerChildrenProps) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <FadeIn 
          delay={initialDelay + index * staggerDelay}
          direction={direction}
          duration={duration}
          threshold={threshold}
        >
          {child}
        </FadeIn>
      ))}
    </div>
  );
}

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  period?: number;
}

export function FloatingElement({
  children,
  className = '',
  amplitude = 10,
  period = 3
}: FloatingElementProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const startTime = Date.now();

    const animate = () => {
      const elapsedTime = (Date.now() - startTime) / 1000;
      const offset = amplitude * Math.sin((2 * Math.PI * elapsedTime) / period);

      element.style.transform = `translateY(${offset}px)`;

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [amplitude, period]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

interface PulseProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  scale?: number;
}

export function Pulse({ 
  children, 
  className = '',
  duration = 2,
  scale = 1.05
}: PulseProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.style.animation = `pulse ${duration}s infinite ease-in-out`;

    // Add keyframe animation
    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(${scale});
        }
        100% {
          transform: scale(1);
        }
      }
    `;

    try {
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    } catch (error) {
      console.error('Failed to add pulse animation keyframes', error);
    }

  }, [duration, scale]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
