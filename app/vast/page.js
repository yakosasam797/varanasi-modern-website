import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata = {
    title: 'VAST Centre',
    description: 'VAST Centre — Varanashi Agro-Sustainable Technology centre bridging traditional wisdom with modern agricultural innovation.',
};

export default function VASTPage() {
    return (
        <>
            <Nav />
            <section className="page-header" style={{ minHeight: '50vh' }}>
                <div className="page-header-bg">
                    <Image src="https://varanashi.com/wp-content/uploads/2019/06/IMG_0810-860x500.jpg" alt="VAST Centre" fill style={{ objectFit: 'cover', filter: 'brightness(0.65) saturate(0.8)' }} sizes="100vw" priority />
                </div>
                <div className="page-header-overlay"></div>
                <div className="page-header-content">
                    <RevealOnScroll><p className="text-overline">Organization</p></RevealOnScroll>
                    <RevealOnScroll><h1>VAST Centre</h1></RevealOnScroll>
                    <RevealOnScroll><p>Varanashi Agro-Sustainable Technology — bridging traditional wisdom with innovation.</p></RevealOnScroll>
                </div>
            </section>

            <section style={{ padding: 'var(--space-24) 0' }}>
                <div className="container-text">
                    <RevealOnScroll className="prose">
                        <p className="text-overline" style={{ marginBottom: 'var(--space-4)' }}>About VAST</p>
                        <h2>Technology for<br /><em className="text-accent">Sustainable Farming</em></h2>
                        <p className="drop-cap">VAST Centre (Varanashi Agro-Sustainable Technology Centre) serves as the technology arm of the Varanashi ecosystem. It bridges the gap between traditional agricultural wisdom passed down through generations and modern scientific innovation.</p>
                        <p>VAST focuses on developing practical, affordable, and sustainable technologies that smallholder farmers can adopt. From improved composting tools like the Krishi Mithra Trolley to water-efficient irrigation systems, VAST creates solutions tested on the 100-acre Varanashi farm before being made available to the wider farming community.</p>
                        <p>The centre also conducts training workshops, hosts demonstration events, and collaborates with agricultural universities and development organizations.</p>
                    </RevealOnScroll>
                </div>
            </section>

            <section className="section-cream" style={{ padding: 'var(--space-24) 0' }}>
                <div className="container">
                    <RevealOnScroll className="text-center mb-10">
                        <p className="text-overline">Innovations</p>
                        <h2 className="text-display" style={{ marginTop: 'var(--space-4)' }}>Built for<br /><em className="text-accent">the Field</em></h2>
                    </RevealOnScroll>
                    <div className="grid grid-3 stagger">
                        {[
                            { overline: 'Equipment', title: 'Krishi Mithra Trolley', desc: 'An innovative compost-carrying trolley designed specifically for plantation agriculture. Reduces labor and improves efficiency.' },
                            { overline: 'Water', title: 'Harvesting Systems', desc: "Water harvesting and pond management techniques developed and proven on the farm's seven irrigation ponds." },
                            { overline: 'Training', title: 'Workshops & Demos', desc: 'Hands-on training programs for farmers, students, and researchers. Field demonstrations of sustainable technologies.' },
                        ].map((p) => (
                            <RevealOnScroll key={p.title}>
                                <div className="org-card">
                                    <p className="text-overline">{p.overline}</p>
                                    <h3>{p.title}</h3>
                                    <p>{p.desc}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: 'var(--space-12) 0' }}>
                <div className="container text-center">
                    <RevealOnScroll>
                        <h3 className="text-h2" style={{ marginBottom: 'var(--space-5)' }}>Interested in agro-technology solutions?</h3>
                        <Link href="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
                    </RevealOnScroll>
                </div>
            </section>

            <Footer />
        </>
    );
}
