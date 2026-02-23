import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata = {
    title: 'News',
    description: 'Latest news and stories from Varanashi Organic Farms — events, achievements, and community updates.',
};

const NEWS_ARTICLES = [
    {
        title: 'The Cacao Residency in 6 Unforgettable Dishes by Chef Gokul',
        excerpt: 'At the recently-held Cacao Residency in Varanashi Farms, Vijayalakshmi Sridhar found herself most intrigued by the meals she had, courtesy Chef Gokul. The residency explored the versatility of farm-grown cacao through six unforgettable dishes that celebrated the bean-to-bar journey.',
        img: '/images/products/cacao-beans.jpeg',
        alt: 'Cacao Residency dishes by Chef Gokul',
        category: 'Farm Events',
    },
    {
        title: 'Nandan Naik Wings Gold at State Diving Championship',
        excerpt: 'Nandan Naik, a 17-year-old representing Varanashi Swimming Academy, made history by securing the first diving gold medal for the academy at the State Diving Championship. Trained by Coach Partha Varanashi in the farm\'s natural swimming ponds, Nandan\'s achievement marks a new milestone for aquatic education at Varanashi.',
        img: '/images/site/pond.jpg',
        alt: 'Nandan Naik diving championship',
        category: 'Achievements',
    },
];

export default function NewsPage() {
    return (
        <>
            <Nav />
            <section className="page-header" style={{ minHeight: '45vh' }}>
                <div className="page-header-bg">
                    <Image src="/images/site/vof-aerial.jpg" alt="Varanashi Farms" fill style={{ objectFit: 'cover', filter: 'brightness(0.6) saturate(0.8)' }} sizes="100vw" priority />
                </div>
                <div className="page-header-overlay"></div>
                <div className="page-header-content">
                    <RevealOnScroll><p className="text-overline">Latest Updates</p></RevealOnScroll>
                    <RevealOnScroll><h1>News</h1></RevealOnScroll>
                    <RevealOnScroll><p>Stories, events, and achievements from the Varanashi community.</p></RevealOnScroll>
                </div>
            </section>

            <section style={{ padding: 'var(--space-24) 0' }}>
                <div className="container">
                    <div className="news-grid">
                        {NEWS_ARTICLES.map((article, i) => (
                            <RevealOnScroll key={i}>
                                <article className="news-card">
                                    <div className="news-card__img">
                                        <Image src={article.img} alt={article.alt} width={600} height={400} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div className="news-card__body">
                                        <p className="text-overline" style={{ marginBottom: 'var(--space-3)' }}>{article.category}</p>
                                        <h2 className="news-card__title">{article.title}</h2>
                                        <p className="news-card__excerpt">{article.excerpt}</p>
                                    </div>
                                </article>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-cream" style={{ padding: 'var(--space-12) 0' }}>
                <div className="container text-center">
                    <RevealOnScroll>
                        <p className="text-overline" style={{ marginBottom: 'var(--space-4)' }}>Stay Connected</p>
                        <h3 className="text-h2" style={{ marginBottom: 'var(--space-6)' }}>Follow us for more updates</h3>
                        <div style={{ display: 'flex', gap: 'var(--space-5)', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="https://www.instagram.com/varanashiorganicfarms/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Instagram</a>
                            <a href="https://www.facebook.com/Varanashi-Organic-Farm-117836281699582/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Facebook</a>
                            <Link href="/contact" className="btn btn-ghost">Contact Us</Link>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            <Footer />
        </>
    );
}
