import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata = {
    title: 'Outreach & Learn',
    description: 'Varanashi Outreach — over 50 completed projects since 1992. Community impact, organic village transformation, and sustainable agriculture education.',
};

export default function OutreachPage() {
    return (
        <>
            <Nav />
            <section className="page-header">
                <div className="page-header-bg">
                    <Image src="https://varanashi.com/wp-content/uploads/2019/06/IMG_0810-860x500.jpg" alt="Community outreach at Varanashi" fill style={{ objectFit: 'cover', filter: 'brightness(0.65) saturate(0.8)' }} sizes="100vw" priority />
                </div>
                <div className="page-header-overlay"></div>
                <div className="page-header-content">
                    <RevealOnScroll><p className="text-overline">Learn &amp; Outreach</p></RevealOnScroll>
                    <RevealOnScroll><h1>Beyond the Farm Gate</h1></RevealOnScroll>
                    <RevealOnScroll><p>Three decades of community impact — transforming villages, publishing research, and educating the next generation.</p></RevealOnScroll>
                </div>
            </section>

            <section style={{ padding: 'var(--space-24) 0' }}>
                <div className="container-text">
                    <RevealOnScroll className="text-center">
                        <p className="text-overline" style={{ marginBottom: 'var(--space-4)' }}>Community Impact</p>
                        <h2 className="text-display">A Village<br /><em className="text-accent">Transformed</em></h2>
                    </RevealOnScroll>
                    <div className="divider divider-center" style={{ margin: 'var(--space-8) auto' }}></div>
                    <RevealOnScroll className="prose" style={{ margin: '0 auto' }}>
                        <p className="drop-cap">One of Varanashi&apos;s proudest achievements has been the transformation of the village of Moodambail into a 100% organic village. The surrounding farming community of 350+ families has been progressively guided towards sustainable organic farming practices over three decades.</p>
                        <p>Through outreach programs, advisory services, and field demonstrations, Varanashi has helped neighboring farms transition from chemical agriculture to organic methods — improving soil health, biodiversity, and farmer incomes simultaneously.</p>
                    </RevealOnScroll>
                </div>
            </section>

            <section className="section-dark section-sm">
                <div className="container">
                    <RevealOnScroll>
                        <div className="stats-bar">
                            <div className="stat-item"><h3>50+</h3><p>Completed Projects</p></div>
                            <div className="stat-item"><h3>350+</h3><p>Farming Families</p></div>
                            <div className="stat-item"><h3>30+</h3><p>Years of Outreach</p></div>
                            <div className="stat-item"><h3>100%</h3><p>Organic Village</p></div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            <section className="section-cream" style={{ padding: 'var(--space-24) 0' }}>
                <div className="container">
                    <RevealOnScroll className="text-center mb-10">
                        <p className="text-overline">Outreach Programs</p>
                        <h2 className="text-display" style={{ marginTop: 'var(--space-4)' }}>Knowledge<br /><em className="text-accent">Shared Freely</em></h2>
                    </RevealOnScroll>
                    <div className="grid grid-3 stagger">
                        {[
                            { overline: 'Education', title: 'Student & School Visits', desc: 'Educational tours for schools and colleges — hands-on exposure to organic farming, composting, water harvesting, and biodiversity conservation.' },
                            { overline: 'Advisory', title: 'Farmer Advisory Services', desc: 'One-on-one guidance for farmers transitioning to organic methods. Soil testing, crop planning, pest management, and market linkages.' },
                            { overline: 'Research', title: 'International Publications', desc: 'Papers presented at IFOAM Congresses, national conferences, and research journals. Contributing to the global body of organic agriculture knowledge.' },
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
                        <h3 className="text-h2" style={{ marginBottom: 'var(--space-5)' }}>Want to bring your students or learn more?</h3>
                        <Link href="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
                    </RevealOnScroll>
                </div>
            </section>

            <Footer />
        </>
    );
}
