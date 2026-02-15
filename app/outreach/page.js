import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Outreach - Varanashi',
    description: 'Varanashi outreach — community development, organic village initiatives, technology demonstration, and VDRF services in Dakshina Kannada.',
};

export default function OutreachPage() {
    return (
        <>
            <Nav />

            {/* ═══════════ HERO ═══════════ */}
            <section className="sp-hero">
                <div className="sp-hero__bg">
                    <Image src="https://varanashi.com/wp-content/uploads/2019/06/IMG_0605-860x500.jpg" alt="Outreach at Varanashi" fill sizes="100vw" priority />
                </div>
                <div className="sp-hero__content">
                    <h1 className="sp-hero__title">Outreach</h1>
                    <p className="sp-hero__subtitle">Community development, organic village initiatives, and sustainable technology.</p>
                </div>
            </section>

            {/* ═══════════ PROJECT WORK ═══════════ */}
            <section className="sp-section">
                <div className="sp-section__inner sp-section__inner--narrow">
                    <p className="sp-overline">Community</p>
                    <h2 className="sp-heading">Project Work</h2>
                    <div className="sp-prose">
                        <p>Varanashi Development and Research Foundation (VDRF) has been carrying out regular community outreach programs with the aim of supporting sustainable agriculture and environmental conservation. These include training programs for farmers, school outreach initiatives, and community development projects in the villages surrounding the farm.</p>
                    </div>
                </div>
            </section>

            <hr className="sp-divider" />

            {/* ═══════════ OUTREACH ACTIVITIES ═══════════ */}
            <section className="sp-section sp-section--alt">
                <div className="sp-section__inner sp-section__inner--narrow">
                    <p className="sp-overline">Activities</p>
                    <h2 className="sp-heading">Outreach Activities</h2>
                    <div className="sp-prose">
                        <p>Our outreach activities include farmer training programs, school visits and environmental education, organic farming workshops, distribution of organic planting materials and bio-fertilizers, and support for local cooperatives. These programs have reached hundreds of farmers and thousands of students in the Dakshina Kannada and Udupi districts.</p>
                    </div>
                </div>
            </section>

            {/* ═══════════ MOODAMBAIL ORGANIC VILLAGE ═══════════ */}
            <section className="sp-section">
                <div className="sp-section__inner sp-section__inner--narrow">
                    <p className="sp-overline">100% Organic Village</p>
                    <h2 className="sp-heading">Moodambail Organic Village</h2>
                    <div className="sp-prose">
                        <p>The Moodambail 100% organic village project is a pioneering initiative of VDRF. Our aim is to convert the entire village of Moodambail into a certified organic village — a first in this region. The project involves training and supporting all farmers in the village to adopt organic farming practices, while also creating market linkages for their produce.</p>
                        <p>The project serves as a model for organic village conversion and has attracted attention from agricultural agencies, NGOs, and government departments as a replicable example of community-driven organic transition.</p>
                    </div>

                    <div className="sp-highlight">
                        <p>A pioneering initiative to create the region&apos;s first 100% certified organic village — a model for community-driven sustainable agriculture.</p>
                    </div>
                </div>
            </section>

            <hr className="sp-divider" />

            {/* ═══════════ TECHNOLOGY DEMONSTRATION ═══════════ */}
            <section className="sp-section sp-section--alt">
                <div className="sp-section__inner sp-section__inner--narrow">
                    <p className="sp-overline">Technology</p>
                    <h2 className="sp-heading">Technology Demonstration</h2>
                    <div className="sp-prose">
                        <p>The VAST (Varanashi Agro-Sustainable Technology) Centre serves as a technology demonstration site where farmers can learn about sustainable farming techniques, including composting methods, bio-fertilizer production, water harvesting, and integrated farming systems. Regular training sessions and workshops are conducted for visiting farmers and agricultural students.</p>
                    </div>
                </div>
            </section>

            {/* ═══════════ VDRF SERVICES ═══════════ */}
            <section className="sp-section">
                <div className="sp-section__inner">
                    <p className="sp-overline">Services</p>
                    <h2 className="sp-heading">VDRF Services</h2>
                    <div className="sp-facilities">
                        <div className="sp-facilities__group">
                            <h4>Training &amp; Education</h4>
                            <ul>
                                <li>Organic farming workshops</li>
                                <li>Composting and bio-fertilizer training</li>
                                <li>School outreach programs</li>
                                <li>Agricultural student internships</li>
                            </ul>
                        </div>
                        <div className="sp-facilities__group">
                            <h4>Community Development</h4>
                            <ul>
                                <li>Farmer support programs</li>
                                <li>Organic certification assistance</li>
                                <li>Market linkage for organic produce</li>
                                <li>Cooperative development</li>
                            </ul>
                        </div>
                        <div className="sp-facilities__group">
                            <h4>Research</h4>
                            <ul>
                                <li>Organic farming research</li>
                                <li>Soil health analysis</li>
                                <li>Integrated farming systems</li>
                                <li>Water management techniques</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════ CTA ═══════════ */}
            <section className="sp-cta">
                <div className="sp-cta__inner">
                    <p className="sp-cta__tagline">Interested in supporting our outreach work or visiting the farm?</p>
                    <div className="sp-cta__actions">
                        <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
                        <Link href="/vdrf" className="btn btn-ghost">Learn about VDRF</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
