'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export default function ScrollEngine() {
    const lenisRef = useRef(null);
    const rafCbRef = useRef(null);

    useEffect(() => {
        // Register plugin inside useEffect so it doesn't persist at module scope
        gsap.registerPlugin(ScrollTrigger);

        // Kill any stale triggers from previous mounts
        ScrollTrigger.getAll().forEach((t) => t.kill());
        gsap.killTweensOf('*');

        // ── Lenis Smooth Scroll ──
        const lenis = new Lenis({
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            smoothWheel: true,
        });
        lenisRef.current = lenis;

        lenis.on('scroll', ScrollTrigger.update);

        const rafCb = (time) => lenis.raf(time * 1000);
        rafCbRef.current = rafCb;
        gsap.ticker.add(rafCb);
        gsap.ticker.lagSmoothing(0);

        // Small delay to let DOM settle after hydration
        const initTimer = setTimeout(() => {
            // Wrap each init in try/catch for defensive safety
            const inits = [
                initHero,
                initTimeline,
                initPinnedLand,
                initBentoAnimations,
                initJourneyPanels,
                initSplitScroll,
                initTextReveal,
                initClosing,
            ];
            inits.forEach((fn) => {
                try {
                    fn();
                } catch (err) {
                    console.warn(`[ScrollEngine] ${fn.name} failed:`, err);
                }
            });
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            clearTimeout(initTimer);

            // Destroy Lenis
            try {
                lenis.destroy();
            } catch (err) {
                console.warn('[ScrollEngine] Lenis destroy failed:', err);
            }

            // Kill all GSAP ScrollTriggers and tweens
            ScrollTrigger.getAll().forEach((t) => t.kill());
            gsap.killTweensOf('*');
            if (rafCbRef.current) {
                gsap.ticker.remove(rafCbRef.current);
            }

            // Defensive cleanup: remove Lenis classes from <html>
            const html = document.documentElement;
            html.classList.remove('lenis', 'lenis-smooth', 'lenis-stopped');
            html.style.removeProperty('height');
        };
    }, []);

    return null;
}

/* ─── ACT 1 · HERO ─── */
function initHero() {
    const hero = document.querySelector('.act-hero');
    if (!hero) return;

    const bg = hero.querySelector('.act-hero__bg');
    const content = hero.querySelector('.act-hero__content');

    // Animate pre-rendered character spans (no more innerHTML mutation)
    const chars = hero.querySelectorAll('.act-hero__title .char');
    if (chars.length) {
        gsap.to(chars, {
            opacity: 1,
            duration: 0.06,
            stagger: 0.04,
            delay: 0.5,
            ease: 'none',
        });
    }

    if (bg) {
        gsap.to(bg, {
            y: '30%',
            ease: 'none',
            scrollTrigger: {
                trigger: hero,
                start: 'top top',
                end: 'bottom top',
                scrub: 0.5,
            },
        });
    }

    if (content) {
        gsap.to(content, {
            opacity: 0,
            y: -60,
            ease: 'power2.in',
            scrollTrigger: {
                trigger: hero,
                start: '60% top',
                end: 'bottom top',
                scrub: 0.3,
            },
        });
    }

    gsap.from('.act-hero__sub', {
        opacity: 0,
        y: 30,
        duration: 1.2,
        delay: 1.8,
        ease: 'power3.out',
    });

    gsap.from('.act-hero__tagline', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 2.4,
        ease: 'power3.out',
    });

    gsap.from('.act-hero__scroll', {
        opacity: 0,
        duration: 1,
        delay: 3,
        ease: 'power2.out',
    });
}

/* ─── ACT 2 · HORIZONTAL TIMELINE ─── */
function initTimeline() {
    const section = document.querySelector('.act-timeline');
    const track = document.querySelector('.act-timeline__track');
    if (!section || !track) return;

    const eras = track.querySelectorAll('.act-timeline__era');
    const totalWidth = eras.length * window.innerWidth;

    // Main horizontal scroll tween
    const scrollTween = gsap.to(track, {
        x: () => -(totalWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${totalWidth}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
                const fill = document.querySelector(
                    '.act-timeline__progress-fill'
                );
                if (fill) fill.style.width = `${self.progress * 100}%`;
            },
        },
    });

    // Per-era text reveal using containerAnimation for proper horizontal triggering
    eras.forEach((era) => {
        const year = era.querySelector('.act-timeline__year');
        const title = era.querySelector('.act-timeline__era-title');
        const text = era.querySelector('.act-timeline__era-text');
        const overline = era.querySelector('.text-overline');

        const targets = [overline, year, title, text].filter(Boolean);
        // Ensure elements are visible by default
        gsap.set(targets, { opacity: 1, y: 0 });

        gsap.from(targets, {
            opacity: 0,
            y: 40,
            stagger: 0.12,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: era,
                start: 'left 80%',
                end: 'left 20%',
                toggleActions: 'play none none reverse',
                containerAnimation: scrollTween,
            },
        });
    });
}

/* ─── ACT 3 · PINNED IMAGE + TEXT ─── */
function initPinnedLand() {
    const section = document.querySelector('.act-land');
    const image = document.querySelector('.act-land__image');
    if (!section || !image || window.innerWidth < 769) return;

    ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        pin: image,
        pinSpacing: false,
    });

    const blocks = document.querySelectorAll('.act-land__block');
    blocks.forEach((block, i) => {
        gsap.from(block, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: block,
                start: 'top 70%',
                toggleActions: 'play none none reverse',
            },
        });

        gsap.to('.act-land__image img', {
            scale: 1 + (i + 1) * 0.03,
            ease: 'none',
            scrollTrigger: {
                trigger: block,
                start: 'top center',
                end: 'bottom center',
                scrub: 0.5,
            },
        });
    });
}

/* ─── ACT 4 · BENTO ANIMATIONS (scroll-triggered stagger) ─── */
function initBentoAnimations() {
    const section = document.querySelector('.act-products');
    if (!section) return;

    gsap.from('.act-products__header', {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: section,
            start: 'top 70%',
        },
    });

    const cells = section.querySelectorAll('.bento-cell');
    cells.forEach((cell, i) => {
        gsap.from(cell, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.08,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: cell,
                start: 'top 90%',
                toggleActions: 'play none none reverse',
            },
        });
    });
}

/* ─── ACT 5 · JOURNEY PANELS ─── */
function initJourneyPanels() {
    const panels = document.querySelectorAll('.act-journey__panel');
    if (!panels.length) return;

    panels.forEach((panel) => {
        const content = panel.querySelector('.act-journey__panel-content');

        ScrollTrigger.create({
            trigger: panel,
            start: 'top top',
            end: '+=100%',
            pin: true,
            pinSpacing: true,
        });

        if (content) {
            gsap.from(content.children, {
                opacity: 0,
                y: 50,
                stagger: 0.2,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: panel,
                    start: 'top 40%',
                    toggleActions: 'play none none reverse',
                },
            });
        }
    });
}

/* ─── ACT 6 · SPLIT SCROLL ─── */
function initSplitScroll() {
    const section = document.querySelector('.act-stay');
    if (!section || window.innerWidth < 769) return;

    const leftCol = section.querySelector('.act-stay__col-left');
    const rightCol = section.querySelector('.act-stay__col-right');

    if (leftCol) {
        gsap.from(leftCol.children, {
            y: 100,
            opacity: 0,
            stagger: 0.3,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 60%',
                toggleActions: 'play none none reverse',
            },
        });
    }

    if (rightCol) {
        gsap.from(rightCol.children, {
            y: -80,
            opacity: 0,
            stagger: 0.3,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 60%',
                toggleActions: 'play none none reverse',
            },
        });
    }
}

/* ─── ACT 7 · TEXT REVEAL ─── */
function initTextReveal() {
    // Animate pre-rendered word spans (no more innerHTML mutation)
    const container = document.querySelector('.act-philosophy__text');
    if (!container) return;

    const words = container.querySelectorAll('.word');
    if (!words.length) return;

    ScrollTrigger.create({
        trigger: '.act-philosophy',
        start: 'top top',
        end: '+=200%',
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
            const progress = self.progress;
            words.forEach((word, i) => {
                const wordProgress = i / words.length;
                const opacity = Math.min(
                    1,
                    Math.max(0.12, (progress - wordProgress) * words.length * 0.3)
                );
                word.style.opacity = opacity;
                if (opacity > 0.6) {
                    word.classList.add('active');
                } else {
                    word.classList.remove('active');
                }
            });
        },
    });
}

/* ─── ACT 8 · CLOSING ─── */
function initClosing() {
    const close = document.querySelector('.act-close');
    if (!close) return;

    gsap.from(close.children, {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: close,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
        },
    });
}
