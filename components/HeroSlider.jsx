'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const HERO_IMAGES = [
    {
        src: 'https://varanashi.com/wp-content/uploads/2019/03/LRM_EXPORT_20171203_011748-1-compressed-scaled.jpg',
        alt: 'Varanashi organic farm aerial view',
    },
    {
        src: 'https://varanashi.com/wp-content/uploads/2019/06/LRM_EXPORT_20171203_012007-scaled.jpg',
        alt: 'Varanashi swimming pond aerial view',
    },
    {
        src: 'https://varanashi.com/wp-content/uploads/2019/03/DJI_0026-compressed-scaled.jpg',
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
