'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BENTO_PRODUCTS } from '@/lib/products';

export default function BentoProducts() {
    const [active, setActive] = useState(0);
    const current = BENTO_PRODUCTS[active];
    const detailRef = useRef(null);
    const gridRef = useRef(null);
    const tileRefs = useRef([]);

    /* Position detail panel vertically aligned with the hovered tile.
       Uses translateY relative to the grid's top, so it works at every row:
       - top row → detail at top-right
       - middle row → detail at middle-right
       - bottom row → detail at bottom-right */
    const repositionDetail = useCallback((index) => {
        const detail = detailRef.current;
        const tile = tileRefs.current[index];
        const grid = gridRef.current;
        if (!detail || !tile || !grid) return;

        // Skip repositioning on mobile — detail panel is below grid
        if (window.innerWidth < 961) {
            detail.style.transform = 'none';
            return;
        }

        const gridRect = grid.getBoundingClientRect();
        const tileRect = tile.getBoundingClientRect();
        const detailH = detail.offsetHeight;
        const gridH = grid.offsetHeight;

        // Tile vertical centre relative to the grid container
        const tileCenterY = (tileRect.top - gridRect.top) + (tileRect.height / 2);

        // Centre the detail on the tile; clamp within grid bounds
        let idealTop = tileCenterY - (detailH / 2);
        idealTop = Math.max(0, Math.min(idealTop, gridH - detailH));

        detail.style.transform = `translateY(${idealTop}px)`;
    }, []);

    const handleHover = useCallback((index) => {
        setActive(index);
        // Use rAF so the DOM has updated with new content before measuring
        requestAnimationFrame(() => repositionDetail(index));
    }, [repositionDetail]);

    // Reposition on resize
    useEffect(() => {
        const onResize = () => repositionDetail(active);
        window.addEventListener('resize', onResize, { passive: true });
        return () => window.removeEventListener('resize', onResize);
    }, [active, repositionDetail]);

    // Initial position after first render
    useEffect(() => {
        requestAnimationFrame(() => repositionDetail(0));
    }, [repositionDetail]);

    // Detect mobile for tap vs hover
    const isMobileRef = useRef(false);
    useEffect(() => {
        const mql = window.matchMedia('(max-width: 960px)');
        isMobileRef.current = mql.matches;
        const handler = (e) => { isMobileRef.current = e.matches; };
        mql.addEventListener('change', handler);
        return () => mql.removeEventListener('change', handler);
    }, []);

    return (
        <div className="bento-layout">
            {/* ── Left: Image Grid ── */}
            <div className="bento-grid" ref={gridRef}>
                {BENTO_PRODUCTS.map((product, i) => (
                    <div
                        key={product.slug}
                        ref={(el) => { tileRefs.current[i] = el; }}
                        className={`bento-tile${product.span ? ` bento-tile--${product.span}` : ''}${i === active ? ' bento-tile--active' : ''}`}
                        onMouseEnter={() => { if (!isMobileRef.current) handleHover(i); }}
                        onClick={() => { if (isMobileRef.current) handleHover(i); }}
                    >
                        <Image
                            src={product.img}
                            alt={product.name}
                            width={600}
                            height={400}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <span className="bento-tile__label">{product.name}</span>
                    </div>
                ))}
            </div>

            {/* ── Right: Product Details ── */}
            <div className="bento-detail" ref={detailRef}>
                <div className="bento-detail__inner" key={current.slug}>
                    <span className="bento-detail__category">{current.category}</span>
                    <h3 className="bento-detail__name">{current.name}</h3>
                    <p className="bento-detail__price">{current.price}</p>
                    <p className="bento-detail__weight">{current.weight}</p>
                    <p className="bento-detail__desc">{current.description}</p>
                    <ul className="bento-detail__list">
                        {current.details.map((d) => (
                            <li key={d}>{d}</li>
                        ))}
                    </ul>
                    <Link
                        href={`/shop/${current.slug}`}
                        className="bento-detail__cta"
                    >
                        View Product →
                    </Link>
                </div>
            </div>
        </div>
    );
}
