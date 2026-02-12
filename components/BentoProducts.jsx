'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

const PRODUCTS = [
    {
        key: 'arecanut',
        label: 'Arecanut',
        img: 'https://varanashi.com/wp-content/uploads/2019/06/IMG_0810-860x500.jpg',
        wide: true,
        facts: [
            'The backbone of the multi-crop system — towering palms that create the shade canopy',
            'Grown organically since 1991, free of chemical inputs for over three decades',
            'Harvested twice yearly, dried naturally under the South Indian sun',
        ],
    },
    {
        key: 'coconut',
        label: 'Coconut',
        img: 'https://varanashi.com/wp-content/uploads/2019/06/img_4853-860x500.jpg',
        facts: [
            'Second canopy layer — thrives alongside arecanut in the multi-story system',
            'Yields copra, oil, and fresh water year-round',
            'Fed by seven irrigation ponds and monsoon-harvested ground water',
        ],
    },
    {
        key: 'cocoa',
        label: 'Cocoa',
        img: 'https://varanashi.com/wp-content/uploads/2019/03/image00002-scaled-300x300.jpeg',
        facts: [
            'Shade-grown beneath ancient areca palms — from pod to powder on the same soil',
            'Fermented by hand, sun-dried on the farmhouse roof',
            "Processed into nibs, beans, and Varanashi's signature Cacao Trail experience",
        ],
    },
    {
        key: 'nutmeg',
        label: 'Nutmeg',
        img: 'https://varanashi.com/wp-content/uploads/2019/03/image00005-300x300.jpg',
        tall: true,
        displayName: 'Nutmeg & Mace',
        facts: [
            'The scarlet lace of mace wraps each seed like a gift',
            'Trees here are older than memory — their fragrance reaches you first',
            'Both nutmeg and its outer covering (mace) are harvested and sun-dried',
        ],
    },
    {
        key: 'banana',
        label: 'Banana',
        img: 'https://varanashi.com/wp-content/uploads/2019/06/IMG_20151023_082241-860x500.jpeg',
        facts: [
            'The ground floor of the multi-story system, thriving in filtered light',
            'Multiple heritage varieties grown — Nendran, Robusta, and red banana',
            'Natural composting returns every leaf and stem back to the soil',
        ],
    },
    {
        key: 'pepper',
        label: 'Black Pepper',
        img: 'https://varanashi.com/wp-content/uploads/2019/03/IMG_8568-compressed-300x300.jpg',
        wide: true,
        facts: [
            'Grown in shade, aged by monsoons — each vine wraps around a living tree',
            'No concrete poles, no shortcuts — the old way, the only way',
            'Handpicked, sun-dried, sorted by grade on the farmhouse veranda',
        ],
    },
    {
        key: 'jackfruit',
        label: 'Jackfruit',
        img: 'https://varanashi.com/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-16-at-1.59.01-PM-300x300.jpeg',
        facts: [
            'Ancient trees scattered across the farm — some are over a century old',
            'Seeds and fruit processed on-farm into chips, preserves, and flour',
            'A nitrogen-fixer that enriches the soil for neighboring crops',
        ],
    },
    {
        key: 'honey',
        label: 'Wild Honey',
        img: 'https://varanashi.com/wp-content/uploads/2019/03/blossom-compressed-300x300.jpg',
        facts: [
            'Harvested from hives that chose the farm — uninvited, unmanaged, wild',
            'Unheated, unfiltered, untouched by anything but bees and flowers',
            'Biodiversity of the farm means multi-floral, seasonally unique flavors',
        ],
    },
];

export default function BentoProducts() {
    const [active, setActive] = useState(null);
    const [detailOffset, setDetailOffset] = useState(0);
    const gridRef = useRef(null);
    const detailRef = useRef(null);

    const showDetail = (key, e) => {
        setActive(key);
        // Calculate the vertical offset of the hovered cell relative to the grid
        if (gridRef.current) {
            const cell = e.currentTarget;
            const gridRect = gridRef.current.getBoundingClientRect();
            const cellRect = cell.getBoundingClientRect();
            // Position detail panel at the same vertical level as the cell
            const offset = cellRect.top - gridRect.top;
            setDetailOffset(offset);
        }
    };
    const resetDetail = () => setActive(null);

    const activeProduct = PRODUCTS.find((p) => p.key === active);

    return (
        <div className="bento-products" onMouseLeave={resetDetail}>
            <div className="bento-products__grid" ref={gridRef}>
                {PRODUCTS.map((product) => {
                    let cellClass = 'bento-cell';
                    if (product.wide) cellClass += ' bento-cell--wide';
                    if (product.tall) cellClass += ' bento-cell--tall';
                    if (active === product.key) cellClass += ' is-active';

                    return (
                        <div
                            key={product.key}
                            className={cellClass}
                            data-product={product.key}
                            onMouseEnter={(e) => showDetail(product.key, e)}
                        >
                            <Image
                                src={product.img}
                                alt={product.label}
                                width={500}
                                height={350}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <span className="bento-cell__label">{product.label}</span>
                        </div>
                    );
                })}
            </div>

            <div
                className="bento-products__detail"
                id="bento-detail"
                ref={detailRef}
                style={{ transform: `translateY(${detailOffset}px)` }}
            >
                {!activeProduct && (
                    <div className="bento-detail__default" id="bento-default">
                        <p
                            className="text-overline"
                            style={{ marginBottom: 'var(--space-4)' }}
                        >
                            Multi-Story Cultivation
                        </p>
                        <h3>Eight crops grow in layered harmony</h3>
                        <p>
                            Hover over any crop to discover its story. Each occupies its own
                            stratum of light and shade — a living system where nothing competes
                            and everything contributes.
                        </p>
                    </div>
                )}

                {activeProduct && (
                    <div
                        className="bento-detail__item is-visible"
                        data-detail={activeProduct.key}
                    >
                        <h3 className="bento-detail__name">
                            {activeProduct.displayName || activeProduct.label}
                        </h3>
                        <ul className="bento-detail__facts">
                            {activeProduct.facts.map((fact, i) => (
                                <li key={i}>{fact}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
