'use client';

import { useEffect, useRef } from 'react';

export default function RevealOnScroll({ children, direction = 'up', className = '' }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('visible');
                    observer.unobserve(el);
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const dirClass =
        direction === 'left'
            ? 'reveal-left'
            : direction === 'right'
                ? 'reveal-right'
                : 'reveal';

    return (
        <div ref={ref} className={`${dirClass} ${className}`}>
            {children}
        </div>
    );
}
