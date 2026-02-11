import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata = {
    title: 'Volunteer',
    description: 'Volunteer at Varanashi — 15 or 21-day programs to learn traditional permaculture, modern organic practices, and experience eco-friendly community living.',
};

export default function VolunteerPage() {
    return (
        <>
            <Nav />
            <section className="page-header">
                <div className="page-header-bg">
                    <Image src="https://varanashi.com/wp-content/uploads/2019/06/IMG_0419-860x500.jpg" alt="Volunteers at Varanashi Organic Farms" fill style={{ objectFit: 'cover', filter: 'brightness(0.65) saturate(0.8)' }} sizes="100vw" priority />
                </div>
                <div className="page-header-overlay"></div>
                <div className="page-header-content">
                    <RevealOnScroll><p className="text-overline">Join the Community</p></RevealOnScroll>
                    <RevealOnScroll><h1>Volunteer at Varanashi</h1></RevealOnScroll>
                    <RevealOnScroll><p>Be part of a living ecosystem — learn, contribute, and grow alongside six generations of organic wisdom.</p></RevealOnScroll>
                </div>
            </section>

            <section style={{ padding: 'var(--space-24) 0' }}>
                <div className="container">
                    <div className="grid-editorial">
                        <RevealOnScroll direction="left">
                            <div className="img-editorial"><Image src="https://varanashi.com/wp-content/uploads/2019/06/IMG_0810-860x500.jpg" alt="Volunteer farming" width={860} height={500} style={{ width: '100%', height: 'auto' }} /></div>
                        </RevealOnScroll>
                        <RevealOnScroll direction="right" className="prose">
                            <p className="text-overline" style={{ marginBottom: 'var(--space-4)' }}>The Program</p>
                            <h2>Live the<br /><em className="text-accent">Farm Life</em></h2>
                            <p className="drop-cap">We offer 15 or 21-day volunteering opportunities for those interested in experiencing farm life firsthand. Living on one of the largest and most bio-diverse organic farms in South India, you will learn traditional permaculture as well as modern organic farming practices.</p>
                            <p>Volunteers eat healthy organic meals from the farm, participate in daily farm activities — from harvesting and composting to fish pond maintenance and nursery work — and enjoy free time for swimming, yoga, nature walks, and exploration.</p>
                            <p>We welcome individuals from all backgrounds and nationalities. No prior farming experience is required — just enthusiasm, a willingness to learn, and comfort with communal living.</p>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            <section className="section-cream" style={{ padding: 'var(--space-24) 0' }}>
                <div className="container">
                    <RevealOnScroll className="text-center mb-10">
                        <p className="text-overline">What You&apos;ll Do</p>
                        <h2 className="text-display" style={{ marginTop: 'var(--space-4)' }}>A Day on<br /><em className="text-accent">the Farm</em></h2>
                    </RevealOnScroll>
                    <div className="grid grid-3 stagger">
                        {[
                            { time: 'Morning', title: 'Farm Activities', desc: 'Harvesting, composting, fish pond maintenance, nursery work, plant grafting, and organic manure production.' },
                            { time: 'Afternoon', title: 'Learn & Explore', desc: 'Workshops on organic practices, nature walks, five-senses farm tour, cacao trail excursions, and visits to nearby farms.' },
                            { time: 'Evening', title: 'Unwind & Connect', desc: 'Swimming, yoga, slacklining, campfires, story-sharing, and unwinding in the communal spaces or tree houses.' },
                        ].map((slot) => (
                            <RevealOnScroll key={slot.title}>
                                <div className="program-card">
                                    <p className="text-overline" style={{ marginBottom: 'var(--space-3)' }}>{slot.time}</p>
                                    <h3>{slot.title}</h3>
                                    <p>{slot.desc}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-dark section-sm">
                <div className="container text-center">
                    <RevealOnScroll>
                        <p className="text-overline" style={{ color: 'var(--color-gold-warm)', marginBottom: 'var(--space-4)' }}>Apply Now</p>
                        <h3 className="text-h2" style={{ color: 'var(--color-cream)', marginBottom: 'var(--space-6)' }}>Programs available year-round.<br />15-day and 21-day options.</h3>
                        <Link href="/contact" className="btn btn-accent btn-lg">Send Us an Application</Link>
                    </RevealOnScroll>
                </div>
            </section>

            <Footer />
        </>
    );
}
