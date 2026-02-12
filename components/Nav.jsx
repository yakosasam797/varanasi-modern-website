'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
    { href: '/', label: 'Home', showOnHome: false },
    {
        href: '/about',
        label: 'About',
        dropdown: true,
        showOnHome: false,
        children: [
            { href: '/about', label: 'The Varanashi Story' },
            { href: '/vof', label: 'Varanashi Organic Farms' },
            { href: '/vdrf', label: 'Research Foundation (VDRF)' },
            { href: '/vom', label: 'Organic Manures (VOM)' },
            { href: '/vast', label: 'VAST Centre' },
            { href: '/vswim', label: 'Swimming Academy' },
            { href: '/stoked', label: 'Stoked India Adventures' },
        ],
    },
    { href: '/shop', label: 'Shop' },
    { href: '/retreats', label: 'Stay & Experience' },
    { href: '/fitness', label: 'Fitness' },
    { href: '/volunteer', label: 'Volunteer' },
    { href: '/outreach', label: 'Learn' },
    { href: '/news', label: 'News' },
    { href: '/contact', label: 'Contact' },
];

const MOBILE_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Varanashi' },
    { href: '/shop', label: 'Shop' },
    { href: '/retreats', label: 'Stay & Experience' },
    { href: '/fitness', label: 'Fitness' },
    { href: '/volunteer', label: 'Volunteer' },
    { href: '/outreach', label: 'Learn' },
    { href: '/news', label: 'News' },
    { href: '/contact', label: 'Contact' },
];

export default function Nav({ isHomepage = false }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef(null);
    const lastScrollRef = useRef(0);

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        // On sub-pages, immediately show the nav
        if (!isHomepage) {
            nav.classList.add('visible', 'scrolled');
            return;
        }

        function onScroll() {
            const scrollY = window.scrollY;
            const threshold = window.innerHeight * 0.9;

            if (scrollY > threshold) {
                nav.classList.add('visible');
            } else {
                nav.classList.remove('visible');
            }

            if (scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }

            // Hide on scroll down, show on scroll up
            if (scrollY > lastScrollRef.current && scrollY > threshold + 200) {
                nav.style.transform = 'translateY(-100%)';
            } else {
                nav.style.transform = '';
            }

            lastScrollRef.current = scrollY;
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [isHomepage]);

    // Cleanup body overflow on unmount to prevent scroll-lock leak
    useEffect(() => {
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    const toggleMobile = () => {
        setMobileOpen((prev) => {
            document.body.style.overflow = !prev ? 'hidden' : '';
            return !prev;
        });
    };

    const closeMobile = () => {
        setMobileOpen(false);
        document.body.style.overflow = '';
    };

    // Filter links based on page type
    const desktopLinks = isHomepage
        ? NAV_LINKS.filter((l) => l.showOnHome !== false || l.dropdown || !('showOnHome' in l))
        : NAV_LINKS;

    // For homepage, show simplified nav
    const homepageLinks = [
        { href: '/about', label: 'Story' },
        { href: '/shop', label: 'Shop' },
        { href: '/retreats', label: 'Stay' },
        { href: '/fitness', label: 'Movement' },
        { href: '/volunteer', label: 'Volunteer' },
        { href: '/news', label: 'News' },
        { href: '/contact', label: 'Contact' },
    ];

    const linksToShow = isHomepage ? homepageLinks : desktopLinks;

    return (
        <>
            <nav className="nav" id="main-nav" ref={navRef}>
                <div className="nav-inner">
                    <Link href="/" className="nav-wordmark">
                        Varanashi
                    </Link>
                    <div className="nav-links">
                        {linksToShow.map((link) =>
                            link.dropdown ? (
                                <div className="nav-dropdown" key={link.href}>
                                    <Link href={link.href} className="nav-link">
                                        {link.label} ▾
                                    </Link>
                                    <div className="nav-dropdown-menu">
                                        <div className="nav-dropdown-inner">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className="nav-dropdown-link"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link key={link.href} href={link.href} className="nav-link">
                                    {link.label}
                                </Link>
                            )
                        )}
                    </div>
                    <button
                        className="nav-toggle"
                        aria-label="Toggle menu"
                        onClick={toggleMobile}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            <div className={`nav-mobile${mobileOpen ? ' open' : ''}`}>
                {MOBILE_LINKS.map((link) => (
                    <Link key={link.href} href={link.href} onClick={closeMobile}>
                        {link.label}
                    </Link>
                ))}
            </div>
        </>
    );
}
