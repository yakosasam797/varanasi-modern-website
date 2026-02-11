import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata = {
    title: 'Organic Manures (VOM)',
    description: 'Varanashi Organic Manures — premium certified organic farm inputs produced from decades of sustainable agriculture research.',
};

export default function VOMPage() {
    return (
        <>
            <Nav />
            <section className="page-header" style={{ minHeight: '50vh' }}>
                <div className="page-header-bg">
                    <Image src="https://varanashi.com/wp-content/uploads/2019/06/IMG_0810-860x500.jpg" alt="Organic manure production" fill style={{ objectFit: 'cover', filter: 'brightness(0.65) saturate(0.8)' }} sizes="100vw" priority />
                </div>
                <div className="page-header-overlay"></div>
                <div className="page-header-content">
                    <RevealOnScroll><p className="text-overline">Organization</p></RevealOnScroll>
                    <RevealOnScroll><h1>Varanashi Organic Manures</h1></RevealOnScroll>
                    <RevealOnScroll><p>Premium certified organic farm inputs — from research to field-tested results.</p></RevealOnScroll>
                </div>
            </section>

            <section style={{ padding: 'var(--space-24) 0' }}>
                <div className="container-text">
                    <RevealOnScroll className="prose">
                        <p className="text-overline" style={{ marginBottom: 'var(--space-4)' }}>About VOM</p>
                        <h2>Nourishing the Soil,<br /><em className="text-accent">Naturally</em></h2>
                        <p className="drop-cap">Varanashi Organic Manures (VOM) produces premium certified organic farm inputs developed through decades of research at VDRF. Our manures are the result of recycling agro-wastes, using bio-control agents, and applying advanced composting techniques perfected over years of field-testing on our own farm.</p>
                        <p>Each product undergoes rigorous quality testing and is certified organic. From enriched compost to vermicompost to specialty bio-inputs, VOM provides farmers with effective, eco-friendly alternatives to chemical fertilizers — backed by real-world results from our 100+ acre organic farm.</p>
                    </RevealOnScroll>
                </div>
            </section>

            <section className="section-cream" style={{ padding: 'var(--space-24) 0' }}>
                <div className="container">
                    <RevealOnScroll className="text-center mb-10">
                        <p className="text-overline">Products</p>
                        <h2 className="text-display" style={{ marginTop: 'var(--space-4)' }}>Our Farm<br /><em className="text-accent">Inputs</em></h2>
                    </RevealOnScroll>
                    <div className="grid grid-3 stagger">
                        {[
                            { overline: 'Compost', title: 'Enriched Organic Compost', desc: 'Premium compost produced from agro-waste recycling. Rich in nutrients and beneficial microorganisms for soil health.' },
                            { overline: 'Vermicompost', title: 'Vermicompost', desc: 'High-quality vermicompost from earthworm-processed organic matter. Improves soil structure, water retention, and microbial activity.' },
                            { overline: 'Bio-inputs', title: 'Bio-Control Agents', desc: 'Natural pest and disease management solutions developed through VDRF research. Safe for crops, soil, and the ecosystem.' },
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
                        <h3 className="text-h2" style={{ marginBottom: 'var(--space-5)' }}>Interested in our farm inputs?</h3>
                        <Link href="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
                    </RevealOnScroll>
                </div>
            </section>

            <Footer />
        </>
    );
}
