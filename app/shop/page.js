import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';
import { PRODUCTS } from '@/lib/products';

export const metadata = {
    title: 'Shop Organic',
    description: 'Shop certified organic products from Varanashi Farms — cacao, spices, honey, rice, and more. Grown with six generations of wisdom.',
};

export default function ShopPage() {
    return (
        <>
            <Nav />

            <section className="page-header">
                <div className="page-header-bg">
                    <Image src="/images/products/cacao-beans.jpeg" alt="Organic produce from Varanashi" fill style={{ objectFit: 'cover', filter: 'brightness(0.65) saturate(0.8)' }} sizes="100vw" priority />
                </div>
                <div className="page-header-overlay"></div>
                <div className="page-header-content">
                    <RevealOnScroll><p className="text-overline">From Our Farm</p></RevealOnScroll>
                    <RevealOnScroll><h1>Shop Organic</h1></RevealOnScroll>
                    <RevealOnScroll><p>Every product carries the story of our soil — grown organically, processed with care, delivered with the trust of six generations.</p></RevealOnScroll>
                </div>
            </section>

            <section className="section-cream" style={{ padding: 'var(--space-5) 0' }}>
                <div className="container-text text-center">
                    <RevealOnScroll>
                        <p className="text-overline" style={{ marginBottom: 'var(--space-2)' }}>Curated Collection</p>
                        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: 1.6, color: 'var(--color-stone)' }}>Certified organic produce from our centuries-old farm — <span className="text-accent" style={{ fontWeight: 500 }}>spices, cacao, honey, rice, and farm inputs.</span></p>
                    </RevealOnScroll>
                </div>
            </section>

            <section style={{ padding: 'var(--space-24) 0' }}>
                <div className="container">
                    <div className="product-grid stagger">
                        {PRODUCTS.map((product) => (
                            <RevealOnScroll key={product.slug}>
                                <Link href={`/shop/${product.slug}`} className="product-card product-card--link">
                                    <div className="product-card-img">
                                        <Image src={product.img} alt={product.name} width={300} height={300} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div className="product-card-body">
                                        <p className="product-card-category">{product.category}</p>
                                        <p className="product-card-name">{product.name}</p>
                                        <p className="product-card-price">{product.price}</p>
                                    </div>
                                </Link>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
