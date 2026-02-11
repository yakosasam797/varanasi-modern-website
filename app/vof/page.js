import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata = {
    title: 'Varanashi Organic Farms',
    description: 'Varanashi Organic Farms — 100+ acres of certified organic farmland with 200+ years of heritage. Sustainable, multi-story crop cultivation near Mangaluru.',
};

export default function VOFPage() {
    return (
        <>
            <Nav />
            <section className="page-header">
                <div className="page-header-bg">
                    <Image src="https://varanashi.com/wp-content/uploads/2019/06/IMG_0605-860x500.jpg" alt="Varanashi Organic Farms aerial" fill style={{ objectFit: 'cover', filter: 'brightness(0.65) saturate(0.8)' }} sizes="100vw" priority />
                </div>
                <div className="page-header-overlay"></div>
                <div className="page-header-content">
                    <RevealOnScroll><p className="text-overline">Organization</p></RevealOnScroll>
                    <RevealOnScroll><h1>Varanashi Organic Farms</h1></RevealOnScroll>
                    <RevealOnScroll><p>100+ acres of certified organic farmland — simulating the diversity of natural forests.</p></RevealOnScroll>
                </div>
            </section>

            <section style={{ padding: 'var(--space-24) 0' }}>
                <div className="container">
                    <div className="grid-editorial">
                        <RevealOnScroll direction="left">
                            <div className="img-editorial"><Image src="https://varanashi.com/wp-content/uploads/2019/06/img_4853-860x500.jpg" alt="Farm landscape" width={860} height={500} style={{ width: '100%', height: 'auto' }} /></div>
                        </RevealOnScroll>
                        <RevealOnScroll direction="right" className="prose">
                            <p className="text-overline" style={{ marginBottom: 'var(--space-4)' }}>The Farm</p>
                            <h2>A Living<br /><em className="text-accent">Ecosystem</em></h2>
                            <p className="drop-cap">Varanashi Organic Farms extend for about 100 Acres over two properties, with seven irrigation ponds, a river, and a riverlet. Crop plantations are maintained within natural vegetation — 60% of the farm remains untouched forest.</p>
                            <p>Crops like Arecanut, Coconut, Cocoa, Nutmeg, Banana, Black Pepper, and Jackfruit are grown in a multi-story system. Different types of vegetables, fruits, and flowers are grown. Rice is organically cultivated during the rainy season.</p>
                            <p>The farm produced certified organic manures, practices vermicomposting, and maintains fish ponds for integrated aquaculture. Every element works in harmony with the natural ecosystem.</p>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            <section className="section-cream" style={{ padding: 'var(--space-24) 0' }}>
                <div className="container">
                    <RevealOnScroll className="text-center mb-10">
                        <p className="text-overline">Farm Features</p>
                        <h2 className="text-display" style={{ marginTop: 'var(--space-4)' }}>What We Grow &amp;<br /><em className="text-accent">How We Grow</em></h2>
                    </RevealOnScroll>
                    <div className="grid grid-3 stagger">
                        {[
                            { overline: 'Multi-story Crops', title: 'Arecanut, Coconut, Cocoa', desc: 'Our main plantation crops grown in a layered multi-story system that mimics natural forest structure, maximizing biodiversity and yield.' },
                            { overline: 'Spices', title: 'Pepper, Nutmeg, Mace', desc: 'Shade-grown spices cultivated alongside plantation crops. Premium black pepper, nutmeg, and mace — all certified organic.' },
                            { overline: 'Water', title: 'Seven Ponds & River', desc: 'Water harvesting through seven irrigation ponds. Integrated fish farming and aquatic sports. The river Phalguni adjoins the property.' },
                            { overline: 'Food Crops', title: 'Rice, Vegetables, Fruits', desc: 'Seasonal organic rice cultivation, multiple fruit orchards, and vegetable gardens supplying the farm kitchen year-round.' },
                            { overline: 'Insurance Crops', title: 'Banana & Jackfruit', desc: 'These reliable crops serve as both food security and income insurance, integral to the multi-story planting system.' },
                            { overline: 'Forestry', title: '60% Untouched Forest', desc: 'Silviculture practices maintain the natural forest cover that supports the overall biodiversity and ecological balance of the farm.' },
                        ].map((f) => (
                            <RevealOnScroll key={f.title}>
                                <div className="org-card">
                                    <p className="text-overline">{f.overline}</p>
                                    <h3>{f.title}</h3>
                                    <p>{f.desc}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-dark section-sm">
                <div className="container text-center">
                    <RevealOnScroll>
                        <h3 className="text-h2" style={{ color: 'var(--color-cream)', marginBottom: 'var(--space-5)' }}>Want to visit the farm?</h3>
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
