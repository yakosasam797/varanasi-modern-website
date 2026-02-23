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
                    <Image src="/images/site/outreach-hero.jpg" alt="Outreach at Varanashi" fill sizes="100vw" priority />
                </div>
                <div className="sp-hero__content">
                    <h1 className="sp-hero__title">Outreach</h1>
                    <p className="sp-hero__subtitle">Community development, organic village initiatives, and sustainable technology.</p>
                </div>
            </section>

            {/* ═══════════ PROJECT WORK ═══════════ */}
            <section className="sp-section">
                <div className="sp-section__inner">
                    <div className="sp-split">
                        <div className="sp-split__image">
                            <Image src="/images/site/outreach-project.jpg" alt="VDRF project work" fill sizes="50vw" />
                        </div>
                        <div className="sp-split__text">
                            <p className="sp-overline">Community</p>
                            <h2 className="sp-heading">Project Work</h2>
                            <div className="sp-prose">
                                <p>Since the 1992, on top of its regular activities, VDRF has successfully completed over 50 projects in the areas of organic vanilla and cashew cultivation, organic farming, soil testing and composting.</p>
                                <p>These projects have been sponsored among others by M/s TATA Coffee Ltd., Pollibetta, Agricultural Technologies and Services, Bangalore, M/s Namdhari Seeds (Pvt.) Ltd., Bangalore, etc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="sp-divider" />

            {/* ═══════════ OUTREACH ACTIVITIES ═══════════ */}
            <section className="sp-section sp-section--alt">
                <div className="sp-section__inner">
                    <div className="sp-split sp-split--reverse">
                        <div className="sp-split__image">
                            <Image src="/images/site/outreach-activities.jpg" alt="Outreach activities at Varanashi" fill sizes="50vw" />
                        </div>
                        <div className="sp-split__text">
                            <p className="sp-overline">Activities</p>
                            <h2 className="sp-heading">Outreach Activities</h2>
                            <div className="sp-prose">
                                <p>Regular workshops and training programs are conducted to educate farmers and others on organic farming and related subjects. The scientific and technical staff of VDRF are participating in several conferences, seminars, gatherings, exhibitions and farmers&apos; meetings to disseminate the scientific information gathered.</p>
                                <p>Groups of farmers, as well as individuals, regularly visit the Foundation and the farm. Now and then, scientists from research stations also pay a visit. The activities of the Foundation are being explained in detail during such visits, and visitors taken around the farm. The number of visitors per year is in the range of 2000-3000.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════ MOODAMBAIL ORGANIC VILLAGE ═══════════ */}
            <section className="sp-section">
                <div className="sp-section__inner">
                    <div className="sp-split">
                        <div className="sp-split__image">
                            <Image src="/images/site/outreach-village.jpg" alt="Moodambail organic village" fill sizes="50vw" />
                        </div>
                        <div className="sp-split__text">
                            <p className="sp-overline">100% Organic Village</p>
                            <h2 className="sp-heading">Moodambail Organic Village</h2>
                            <div className="sp-prose">
                                <p>The successful management of Varanashi Farms through organic farming has prompted the Varanashis to take up an organic village project at Moodambail. In this village, influenced by the Varanashis, more than 50% of the farmers shifted to organic. Later, the entire Moodambail turned 100% organic. There are over 350 families.</p>
                                <p>Under the project, Varanashi has provided all technical inputs needed to manage successful organic farming. Financial aid is extended for the supply of organic inputs. Cocoa, arecanut, coconut, cashew nut, black pepper, rice, milk, honey etc. were organically produced in this village.</p>
                                <p>The Government of Karnataka financially supported this project, as a part of 27 model organic villages in 27 districts of the state.</p>
                            </div>
                            <div className="sp-highlight">
                                <p>A pioneering initiative to create the region&apos;s first 100% certified organic village — a model for community-driven sustainable agriculture.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="sp-divider" />

            {/* ═══════════ TECHNOLOGY DEMONSTRATION ═══════════ */}
            <section className="sp-section sp-section--alt">
                <div className="sp-section__inner">
                    <div className="sp-split sp-split--reverse">
                        <div className="sp-split__image">
                            <Image src="/images/site/outreach-barrage.jpg" alt="Varanashi Sand and Plastic Barrage" fill sizes="50vw" />
                        </div>
                        <div className="sp-split__text">
                            <p className="sp-overline">Technology</p>
                            <h2 className="sp-heading">Technology Demonstration</h2>
                            <div className="sp-prose">
                                <p>Various soil and water conservation structures have been adopted. An ideal silviculture system using Teak, Mahogany, Acacia along with native plants has been established at Varanashi Farms.</p>
                                <p>Many successful rainwater harvesting systems have been established. The most important of them is the Varanashi Sand &amp; Plastic Barrage, a 115 ft temporary barrage constructed across Seere river using sand and plastic sheets — a low cost technology to block the water during summer months. The first attempt was made in 2002, and further simplified in subsequent years. Inspired by the success, 12 more units have come up in recent years.</p>
                            </div>
                        </div>
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
                            <h4>Advisory Services</h4>
                            <ul>
                                <li>Organic farming advisory</li>
                                <li>Plantation crop establishment and cultivation</li>
                                <li>Analysis of agriculture inputs, manures, bio-fertilizers</li>
                                <li>International advisory (Cambodia organic cashew project)</li>
                            </ul>
                        </div>
                        <div className="sp-facilities__group">
                            <h4>On-Job Training</h4>
                            <ul>
                                <li>Biotechnology on-job training (Biotech Consortium India Ltd.)</li>
                                <li>University P.G. student training</li>
                                <li>International entrepreneur training</li>
                                <li>National and international volunteer training</li>
                            </ul>
                        </div>
                        <div className="sp-facilities__group">
                            <h4>Water Harvesting</h4>
                            <ul>
                                <li>Catch pits, check dams &amp; gully plugs</li>
                                <li>Percolation ponds and bore-well recharging</li>
                                <li>Varanashi Sand Bag and Plastic Barrage</li>
                                <li>Roof rain-water harvesting</li>
                            </ul>
                        </div>
                        <div className="sp-facilities__group">
                            <h4>Eco-Friendly Landscaping</h4>
                            <ul>
                                <li>Sustainable landscaping design</li>
                                <li>Edible plant landscaping</li>
                                <li>Solid and liquid waste recycling</li>
                                <li>VRF method of composting</li>
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
