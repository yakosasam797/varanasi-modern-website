import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata = {
    title: 'Stoked India Adventures',
    description: 'Stoked India Adventures — skateboarding, surfing, and outdoor adventure sports rooted in the organic farm lifestyle at Varanashi.',
};

export default function StokedPage() {
    return (
        <>
            <Nav />
            <section className="page-header" style={{ minHeight: '50vh' }}>
                <div className="page-header-bg">
                    <Image src="https://varanashi.com/wp-content/uploads/2019/06/WhatsApp-Image-2019-06-25-at-08.55.02-860x500.jpeg" alt="Skateboarding at Varanashi" fill style={{ objectFit: 'cover', filter: 'brightness(0.65) saturate(0.8)' }} sizes="100vw" priority />
                </div>
                <div className="page-header-overlay"></div>
                <div className="page-header-content">
                    <RevealOnScroll><p className="text-overline">Organization</p></RevealOnScroll>
                    <RevealOnScroll><h1>Stoked India Adventures</h1></RevealOnScroll>
                    <RevealOnScroll><p>Movement sports and outdoor adventures — where adrenaline meets organic living.</p></RevealOnScroll>
                </div>
            </section>

            <section style={{ padding: 'var(--space-24) 0' }}>
                <div className="container-text">
                    <RevealOnScroll className="prose">
                        <p className="text-overline" style={{ marginBottom: 'var(--space-4)' }}>About Stoked</p>
                        <h2>Adventure Rooted<br /><em className="text-accent">in Farm Life</em></h2>
                        <p className="drop-cap">Stoked India Adventures is the action sports arm of the Varanashi ecosystem. Founded by Partha Varanashi — athlete, coach, and youngest heir to the Varanashi legacy — Stoked brings skateboarding, surfing, mountain biking, and outdoor adventure to the farm grounds.</p>
                        <p>The farm features a dedicated skate park built alongside the dormitories, offering a unique combination of agricultural serenity and extreme sport energy. MTB trails wind through the 100-acre property, and surfing trips are organized to nearby coastal breaks.</p>
                        <p>Stoked celebrates the idea that a life connected to the land can be exhilarating — that organic farming and action sports aren&apos;t opposites, but expressions of the same love for nature and movement.</p>
                    </RevealOnScroll>
                </div>
            </section>

            <section className="section-cream" style={{ padding: 'var(--space-24) 0' }}>
                <div className="container">
                    <RevealOnScroll className="text-center mb-10">
                        <p className="text-overline">Activities</p>
                        <h2 className="text-display" style={{ marginTop: 'var(--space-4)' }}>Get<br /><em className="text-accent">Stoked</em></h2>
                    </RevealOnScroll>
                    <div className="grid grid-3 stagger">
                        {[
                            { overline: 'Board', title: 'Skateboarding', desc: 'On-farm skate park with ramps, rails, and flat ground. Sessions for beginners and experienced riders. Equipment provided.' },
                            { overline: 'Water', title: 'Surfing', desc: 'Organized trips to surf breaks along the Karnataka coast. Instruction available for all levels. Board rentals included.' },
                            { overline: 'Trail', title: 'Mountain Biking', desc: 'Trails through 100 acres of organic farmland and untouched forest. From gentle paths to challenging single-track.' },
                        ].map((a) => (
                            <RevealOnScroll key={a.title}>
                                <div className="org-card">
                                    <p className="text-overline">{a.overline}</p>
                                    <h3>{a.title}</h3>
                                    <p>{a.desc}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-dark section-sm">
                <div className="container text-center">
                    <RevealOnScroll>
                        <h3 className="text-h2" style={{ color: 'var(--color-cream)', marginBottom: 'var(--space-5)' }}>Want to get stoked?</h3>
                        <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/retreats" className="btn btn-accent">Book a Stay</Link>
                            <Link href="/contact" className="btn btn-ghost">Contact Us</Link>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            <Footer />
        </>
    );
}
