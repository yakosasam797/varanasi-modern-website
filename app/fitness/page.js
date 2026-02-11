import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata = {
    title: 'Fitness',
    description: 'Fitness programs at Varanashi — swimming, aquatic education, movement sports, and holistic wellness on a centuries-old organic farm.',
};

export default function FitnessPage() {
    return (
        <>
            <Nav />
            <section className="page-header">
                <div className="page-header-bg">
                    <Image src="https://varanashi.com/wp-content/uploads/2019/06/IMG_0197-860x500.jpg" alt="Yoga and fitness at Varanashi" fill style={{ objectFit: 'cover', filter: 'brightness(0.65) saturate(0.8)' }} sizes="100vw" priority />
                </div>
                <div className="page-header-overlay"></div>
                <div className="page-header-content">
                    <RevealOnScroll><p className="text-overline">Movement &amp; Wellness</p></RevealOnScroll>
                    <RevealOnScroll><h1>Fitness at Varanashi</h1></RevealOnScroll>
                    <RevealOnScroll><p>Movement sports, aquatic education, and holistic wellness — in nature&apos;s gymnasium.</p></RevealOnScroll>
                </div>
            </section>

            <section style={{ padding: 'var(--space-24) 0' }}>
                <div className="container">
                    <div className="grid-editorial">
                        <RevealOnScroll direction="left">
                            <div className="img-editorial"><Image src="https://varanashi.com/wp-content/uploads/2019/06/treeshouse-pond-1-860x500.jpg" alt="Natural swimming pond" width={860} height={500} style={{ width: '100%', height: 'auto' }} /></div>
                        </RevealOnScroll>
                        <RevealOnScroll direction="right" className="prose">
                            <p className="text-overline" style={{ marginBottom: 'var(--space-4)' }}>Aquatic Education</p>
                            <h2>Nature&apos;s<br /><em className="text-accent">Gymnasium</em></h2>
                            <p className="drop-cap">Partha Varanashi, a coach for Team India in the 2019 Aquatic World Championships, brings professional aquatic education to the farm. Our two year-round full swimming ponds with A+ water quality offer the perfect natural setting for swimming instruction.</p>
                            <p>Whether you&apos;re a beginner learning to float or an advanced swimmer refining your technique, our programs combine professional coaching with the joy of training in nature. High-board diving, water slackline, stand-up paddling, and zip lining complement the aquatic curriculum.</p>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            <section className="section-cream" style={{ padding: 'var(--space-24) 0' }}>
                <div className="container">
                    <RevealOnScroll className="text-center mb-10">
                        <p className="text-overline">Programs</p>
                        <h2 className="text-display" style={{ marginTop: 'var(--space-4)' }}>Move, Swim,<br /><em className="text-accent">Thrive</em></h2>
                    </RevealOnScroll>
                    <div className="grid grid-3 stagger">
                        {[
                            { overline: 'Aquatic', title: 'Swimming Programs', desc: 'Professional coaching in natural ponds. From beginner to advanced. Year-round programs for all ages.', tag: 'All Ages' },
                            { overline: 'Movement', title: 'Yoga & Wellness', desc: 'Daily yoga sessions, meditation, and mindful movement in the heart of nature. Part of our retreat programs.', tag: 'Retreat Add-on' },
                            { overline: 'Adventure', title: 'Action Sports', desc: 'Skateboarding, surfing, MTB, slacklining, trekking, and more. Movement sports rooted in farm life.', tag: 'Stoked India' },
                        ].map((p) => (
                            <RevealOnScroll key={p.title}>
                                <div className="program-card">
                                    <p className="text-overline" style={{ marginBottom: 'var(--space-3)' }}>{p.overline}</p>
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
                        <h3 className="text-h2" style={{ color: 'var(--color-cream)', marginBottom: 'var(--space-5)' }}>Interested in a fitness program?</h3>
                        <Link href="/contact" className="btn btn-accent btn-lg">Get in Touch</Link>
                    </RevealOnScroll>
                </div>
            </section>

            <Footer />
        </>
    );
}
