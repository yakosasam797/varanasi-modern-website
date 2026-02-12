'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const HERO_IMAGES = [
    {
        src: 'https://varanashi.com/wp-content/uploads/2019/06/DSC_8373-860x500.jpg',
        alt: 'Varanashi organic farm aerial view',
    },
    {
        src: 'https://varanashi.com/wp-content/uploads/2019/06/IMG_20151023_082241-860x500.jpeg',
        alt: 'Varanashi estate heritage view',
    },
    {
        src: 'https://varanashi.com/wp-content/uploads/2019/06/treeshouse-pond-1-860x500.jpg',
        alt: 'Varanashi swimming pond and treehouses',
    },
    {
        src: 'https://varanashi.com/wp-content/uploads/2019/06/IMG_0605-860x500.jpg',
        alt: 'Varanashi farm panoramic view',
    },
];

export default function HeroSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const advance = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, []);

    useEffect(() => {
        const interval = setInterval(advance, 5000);
        return () => clearInterval(interval);
    }, [advance]);

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

export { HERO_IMAGES };
