import Link from 'next/link';

export default function FooterMinimal() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <p className="footer-left">
                    &copy; 2026 Varanashi Organic Farms. All rights reserved.
                </p>
                <div className="footer-right">
                    <Link href="/about">Story</Link>
                    <Link href="/shop">Shop</Link>
                    <Link href="/retreats">Stay</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
        </footer>
    );
}
