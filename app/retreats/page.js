import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata = {
    title: 'Stay & Experience',
    description: 'Stay at Varanashi — tree houses, mud cottages, farm stays, organic retreats, and cacao trails on a centuries-old organic farm.',
};

export default function RetreatsPage() {
    return (
        <>
            <Nav />

            <section className="page-header">
                <div className="page-header-bg">
                    <Image src="https://varanashi.com/wp-content/uploads/2019/06/DSC5250-860x500.jpg" alt="Devadaru Tree House among the canopy" fill style={{ objectFit: 'cover', filter: 'brightness(0.65) saturate(0.8)' }} sizes="100vw" priority />
                </div>
                <div className="page-header-overlay"></div>
                <div className="page-header-content">
                    <RevealOnScroll><p className="text-overline">Stay &amp; Experience</p></RevealOnScroll>
                    <RevealOnScroll><h1>At Home in the Trees</h1></RevealOnScroll>
                    <RevealOnScroll><p>Comfort and proximity to nature, combined thoughtfully on a centuries-old organic farm.</p></RevealOnScroll>
                </div>
            </section>

            {/* TREE HOUSES */}
            <section style={{ padding: 'var(--space-24) 0' }}>
                <div className="container">
                    <div className="grid-editorial">
                        <RevealOnScroll direction="left">
                            <div className="img-editorial">
                                <Image src="https://varanashi.com/wp-content/uploads/2019/06/DSC5250-860x500.jpg" alt="Devadaru Tree House" width={860} height={500} style={{ width: '100%', height: 'auto' }} />
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll direction="right" className="prose">
                            <p className="text-overline" style={{ marginBottom: 'var(--space-4)' }}>Tree Houses</p>
                            <h2>Where Humans Work<br /><em className="text-accent">With Nature</em></h2>
                            <p className="drop-cap">Few places come as close to so perfectly combining comfort and proximity to nature as our two tree houses, located in different parts of the property and each providing ultimate privacy for up to four guests.</p>
                            <p>None of the trees has been pierced in the construction and their roots continue to grow naturally. For the building we used hardwood from our farm, including teak, rosewood, acacia, and jackfruit timber. The result is a stunning and unshakeable testament to the beauty that arises when humans work with, rather than against, nature…</p>
                            <div style={{ marginTop: 'var(--space-6)' }}>
                                <span style={{ color: 'var(--color-moss)', fontSize: 'var(--text-lg)' }}>₹10,000 / night</span>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* FARM STAY */}
            <section className="section-cream" style={{ padding: 'var(--space-24) 0' }}>
                <div className="container">
                    <div className="grid-editorial">
                        <RevealOnScroll direction="left" className="prose">
                            <p className="text-overline" style={{ marginBottom: 'var(--space-4)' }}>Farm Stay</p>
                            <h2>Living Simply,<br /><em className="text-accent">Living Well</em></h2>
                            <p>For larger groups as well as individuals we also offer two door-to-door dorms with 20 bunk beds each, situated right next to our skate park and in the heart of Varanashi Organic Farms.</p>
                            <p>Whether you choose our tree houses or the dorms, your stay includes — next to real intimacy with nature &amp; scrumptious home-cooked organic food — access to our facilities and activities, depending on your wishes.</p>
                            <p>Individuals, couples, families, and friends keen to experience eco-friendly living are all welcome.</p>
                        </RevealOnScroll>
                        <RevealOnScroll direction="right">
                            <div className="img-editorial">
                                <Image src="https://varanashi.com/wp-content/uploads/2022/12/Cottage_1-300x300.jpg" alt="Farm stay accommodation" width={300} height={300} style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <p className="text-caption" style={{ marginTop: 'var(--space-3)', fontStyle: 'italic' }}>Mud Cottage — rustic elegance for couples or solo travelers. From ₹3,500.</p>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* ORGANIC RETREAT */}
            <section style={{ padding: 'var(--space-24) 0' }}>
                <div className="container-text">
                    <RevealOnScroll className="text-center">
                        <p className="text-overline" style={{ marginBottom: 'var(--space-4)' }}>Organic Retreat</p>
                        <h2 className="text-display">Rejuvenate Your<br /><em className="text-accent">Mind &amp; Body</em></h2>
                    </RevealOnScroll>
                    <div className="divider divider-center" style={{ margin: 'var(--space-8) auto' }}></div>
                    <RevealOnScroll className="prose" style={{ margin: '0 auto' }}>
                        <p className="drop-cap">Enjoy a peaceful and rejuvenating mind-body retreat in an untouched natural environment. Your daily schedule will consist of organic exposure, refreshing swim sessions, walks on the extensive property, massages, yoga sessions and three delicious organic home-cooked meals.</p>
                        <p>This retreat helps you rejuvenate and learn more about organic living. You will come away from the retreat with the ability to make healthier lifestyle choices at home. In your free time, you can enjoy nature walks, self-study, swimming and other water sports or just relax.</p>
                    </RevealOnScroll>
                </div>
            </section>

            {/* CACAO TRAIL */}
            <section className="section-linen" style={{ padding: 'var(--space-24) 0' }}>
                <div className="container">
                    <div className="grid-editorial">
                        <RevealOnScroll direction="left">
                            <div className="img-editorial">
                                <Image src="https://varanashi.com/wp-content/uploads/2019/03/image00002-scaled-300x300.jpeg" alt="Cacao Trail at Varanashi" width={300} height={300} style={{ width: '100%', height: 'auto' }} />
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll direction="right" className="prose">
                            <p className="text-overline" style={{ marginBottom: 'var(--space-4)' }}>Cacao Trail</p>
                            <h2>From Bean<br /><em className="text-accent">to Bar</em></h2>
                            <p>In this exciting and informative program, you learn about the chocolate making process: how the cacao plants at the farm become chocolate bars in a factory. You will gain an appreciation for all the work that goes into one of your favourite foods, and have plenty of samples along the way!</p>
                            <p>Daily activities include: hands-on potting, plant grafting, harvesting cacao pods, seed removal and fermentation, visits to local farms and a visit to a chocolate factory.</p>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* FACILITIES */}
            <section style={{ padding: 'var(--space-24) 0' }}>
                <div className="container">
                    <RevealOnScroll className="text-center mb-10">
                        <p className="text-overline">Facilities &amp; Activities</p>
                        <h2 className="text-display" style={{ marginTop: 'var(--space-4)' }}>Everything You<br /><em className="text-accent">Need Is Here</em></h2>
                    </RevealOnScroll>
                    <div className="facilities-grid stagger">
                        <RevealOnScroll>
                            <div className="facility-group">
                                <h4>Farm</h4>
                                <ul>
                                    <li>Organic farming</li>
                                    <li>Cacao trail</li>
                                    <li>Water harvesting techniques</li>
                                    <li>5-senses farm walk</li>
                                    <li>Manure production</li>
                                    <li>Plant grafting</li>
                                </ul>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            <div className="facility-group">
                                <h4>Water</h4>
                                <ul>
                                    <li>Swimming (lessons on request)</li>
                                    <li>High-board diving</li>
                                    <li>Water slackline</li>
                                    <li>Stand-up paddling</li>
                                    <li>&apos;Flying fox&apos; zip lining</li>
                                    <li>Rope swing</li>
                                    <li>Kayaking (in season)</li>
                                    <li>Surfing (on request)</li>
                                </ul>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            <div className="facility-group">
                                <h4>Land</h4>
                                <ul>
                                    <li>Yoga</li>
                                    <li>Trekking</li>
                                    <li>Skateboarding</li>
                                    <li>Basketball</li>
                                    <li>Slacklining</li>
                                    <li>MTB bike rides</li>
                                    <li>Geo Caching (treasure hunt)</li>
                                    <li>Camp fires &amp; camping</li>
                                </ul>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-dark section-sm">
                <div className="container text-center">
                    <RevealOnScroll>
                        <p className="text-overline" style={{ color: 'var(--color-gold-warm)', marginBottom: 'var(--space-4)' }}>Ready to Experience?</p>
                        <h3 className="text-h2" style={{ color: 'var(--color-cream)', marginBottom: 'var(--space-6)' }}>We host stays all year round and are happy to design<br />one that suits your needs.</h3>
                        <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/contact" className="btn btn-accent btn-lg">Get in Touch</Link>
                            <a href="tel:+919482213019" className="btn btn-ghost btn-lg">Call +91 9482 213019</a>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            <Footer />
        </>
    );
}
