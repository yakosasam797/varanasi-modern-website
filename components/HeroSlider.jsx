'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const HERO_IMAGES = [
    {
        src: '/images/site/hero-1.jpg',
        alt: 'Varanashi organic farm aerial view',
    },
    {
        src: '/images/site/hero-2.jpg',
        alt: 'Varanashi swimming pond aerial view',
    },
    {
        src: '/images/site/hero-3.jpg',
        alt: 'Varanashi farm buildings aerial view',
    },
];

export default function HeroSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, []);

    useEffect(() => {
        const interval = setInterval(goNext, 5000);
        return () => clearInterval(interval);
    }, [goNext]);

    return (
        <div className="hero-slider">
            {HERO_IMAGES.map((image, index) => (
                <div
                    key={index}
                    className={`hero-slider__slide${index === currentIndex ? ' hero-slider__slide--active' : ''}`}
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        priority={index === 0}
                        style={{
                            objectFit: 'cover',
                            filter: 'saturate(0.85) brightness(0.75) contrast(1.05)',
                        }}
                        sizes="100vw"
                    />
                </div>
            ))}
        </div>
    );
}
