import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata = {
    title: 'Research Foundation (VDRF)',
    description: 'VDRF — Varanashi Development & Research Foundation. Recognized by Dept. of Science & Industrial Research. APJ Abdul Kalam Award recipient.',
};

export default function VDRFPage() {
    return (
        <>
            <Nav />
            <section className="page-header" style={{ minHeight: '50vh' }}>
                <div className="page-header-bg">
                    <Image src="/images/site/manure.jpg" alt="Research at Varanashi" fill style={{ objectFit: 'cover', filter: 'brightness(0.65) saturate(0.8)' }} sizes="100vw" priority />
                </div>
                <div className="page-header-overlay"></div>
                <div className="page-header-content">
                    <RevealOnScroll><p className="text-overline">Organization</p></RevealOnScroll>
                    <RevealOnScroll><h1>Varanashi Development &amp;<br />Research Foundation</h1></RevealOnScroll>
                    <RevealOnScroll><p>Recognized by the Department of Science &amp; Industrial Research, Government of India.</p></RevealOnScroll>
                </div>
            </section>

            <section style={{ padding: 'var(--space-24) 0' }}>
                <div className="container-text">
                    <RevealOnScroll className="prose">
                        <p className="text-overline" style={{ marginBottom: 'var(--space-4)' }}>About VDRF</p>
                        <h2>Pioneering Research in<br /><span className="text-accent">Sustainable Agriculture</span></h2>
                        <p className="drop-cap">Varanashi Development and Research Foundation (VDRF) has been at the forefront of organic agriculture research since its inception. VDRF is recognized by the Department of Science and Industrial Research (DSIR), Government of India, as a Scientific and Industrial Research Organization (SIRO) — a testament to the rigor and impact of its work.</p>
                        <p>Dr. Varanashi Krishna Moorthy, the primary founder, has presented papers at IFOAM (International Federation of Organic Agriculture Movements) Congresses and contributed to national and international journals. VDRF&apos;s research covers composting, bio-control, vermicomposting, water harvesting, and multi-crop integration.</p>
                        <p>The research technologies developed at VDRF are field-tested at Varanashi Farms before being advocated for wide-scale adoption, ensuring practical viability at every stage.</p>
                    </RevealOnScroll>
                </div>
            </section>

            <section className="section-linen" style={{ padding: 'var(--space-12) 0' }}>
                <div className="container text-center">
                    <RevealOnScroll>
                        <p className="text-overline" style={{ marginBottom: 'var(--space-4)' }}>Recognition</p>
                        <h3 className="text-h2"><span className="text-accent">APJ Abdul Kalam Award</span> · DSIR SIRO · IFOAM International · Krishi Panditha</h3>
                        <p style={{ color: 'var(--color-stone)', marginTop: 'var(--space-4)' }}>Recognized nationally and internationally for contributions to sustainable agriculture, organic research, and community development.</p>
                    </RevealOnScroll>
                </div>
            </section>

            <section style={{ padding: 'var(--space-12) 0' }}>
                <div className="container text-center">
                    <RevealOnScroll>
                        <h3 className="text-h2" style={{ marginBottom: 'var(--space-5)' }}>Interested in research collaboration?</h3>
                        <Link href="/contact" className="btn btn-primary btn-lg">Contact VDRF</Link>
                    </RevealOnScroll>
                </div>
            </section>

            <Footer />
        </>
    );
}
