import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata = {
    title: 'Swimming Academy',
    description: "Varanashi Swimming Academy — year-round aquatic education in natural ponds with A+ water quality. Professional coaching by Team India coach Partha Varanashi.",
};

export default function VSwimPage() {
    return (
        <>
            <Nav />
            <section className="page-header" style={{ minHeight: '50vh' }}>
                <div className="page-header-bg">
                    <Image src="/images/site/pond.jpg" alt="Natural swimming pond at Varanashi" fill style={{ objectFit: 'cover', filter: 'brightness(0.65) saturate(0.8)' }} sizes="100vw" priority />
                </div>
                <div className="page-header-overlay"></div>
                <div className="page-header-content">
                    <RevealOnScroll><p className="text-overline">Organization</p></RevealOnScroll>
                    <RevealOnScroll><h1>Varanashi Swimming Academy</h1></RevealOnScroll>
                    <RevealOnScroll><p>Year-round aquatic education in natural ponds — coached by Team India&apos;s Partha Varanashi.</p></RevealOnScroll>
                </div>
            </section>

            <section style={{ padding: 'var(--space-24) 0' }}>
                <div className="container">
                    <div className="grid-editorial">
                        <RevealOnScroll direction="left">
                            <div className="img-editorial"><Image src="/images/site/pond.jpg" alt="Swimming at Varanashi" width={860} height={500} style={{ width: '100%', height: 'auto' }} /></div>
                        </RevealOnScroll>
                        <RevealOnScroll direction="right" className="prose">
                            <p className="text-overline" style={{ marginBottom: 'var(--space-4)' }}>The Academy</p>
                            <h2>Swimming in<br /><span className="text-accent">Nature&apos;s Pool</span></h2>
                            <p className="drop-cap">Varanashi Swimming Academy offers year-round aquatic education in two full-size natural swimming ponds with A+ water quality. Headed by Partha Varanashi — a coach for Team India in the 2019 Aquatic World Championships — the academy brings world-class instruction to an extraordinary natural setting.</p>
                            <p>Programs range from learn-to-swim for beginners to advanced competitive training. High-board diving, water slackline, stand-up paddling, and recreational water activities complement the structured swim programs.</p>
                            <p>The natural ponds, fed by the farm&apos;s water harvesting system, offer an unmatched swimming experience — pure water, surrounded by the sounds and serenity of the organic farm.</p>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            <section className="section-cream" style={{ padding: 'var(--space-24) 0' }}>
                <div className="container">
                    <RevealOnScroll className="text-center mb-10">
                        <p className="text-overline">Programs</p>
                        <h2 className="text-display" style={{ marginTop: 'var(--space-4)' }}>From First Splash<br /><span className="text-accent">to Open Water</span></h2>
                    </RevealOnScroll>
                    <div className="grid grid-3 stagger">
                        {[
                            { overline: 'Beginner', title: 'Learn to Swim', desc: 'For children and adults. Build water confidence, learn basic strokes, and develop safety skills in a natural pond environment.' },
                            { overline: 'Intermediate', title: 'Stroke Refinement', desc: 'Improve technique across all four competitive strokes. Drills, video analysis, and endurance building.' },
                            { overline: 'Advanced', title: 'Competitive Training', desc: 'Race preparation, open-water swimming, diving, and performance optimization with a Team India coach.' },
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

            <section className="section-dark section-sm">
                <div className="container text-center">
                    <RevealOnScroll>
                        <h3 className="text-h2" style={{ color: 'var(--color-cream)', marginBottom: 'var(--space-5)' }}>Ready to dive in?</h3>
                        <Link href="/contact" className="btn btn-accent btn-lg">Contact the Academy</Link>
                    </RevealOnScroll>
                </div>
            </section>

            <Footer />
        </>
    );
}
