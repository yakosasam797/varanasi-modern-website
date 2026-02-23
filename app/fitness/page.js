import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Fitness - Varanashi',
    description: 'Fitness programs at Varanashi — yoga retreats, Varanashi X-Fitness camps, aquatic education, and movement sports on an organic farm.',
};

export default function FitnessPage() {
    return (
        <>
            <Nav />

            {/* ═══════════ HERO ═══════════ */}
            <section className="sp-hero">
                <div className="sp-hero__bg">
                    <Image src="/images/site/treehouse.jpg" alt="Fitness at Varanashi" fill sizes="100vw" priority />
                </div>
                <div className="sp-hero__content">
                    <h1 className="sp-hero__title">Fitness</h1>
                    <p className="sp-hero__subtitle">Movement sports, yoga retreats, and aquatic education on a centuries-old organic farm.</p>
                </div>
            </section>

            {/* ═══════════ YOGA RETREAT ═══════════ */}
            <section className="sp-section">
                <div className="sp-section__inner">
                    <div className="sp-split">
                        <div className="sp-split__image">
                            <Image src="/images/site/yoga-retreat.jpeg" alt="Yoga retreat" fill sizes="50vw" />
                        </div>
                        <div className="sp-split__text">
                            <p className="sp-overline">Yoga Retreat</p>
                            <h2 className="sp-heading">Yoga Retreat</h2>
                            <div className="sp-prose">
                                <p>Enjoy a peaceful and rejuvenating mind-body retreat in an untouched natural environment.</p>
                                <p>Your daily schedule will consist of an organic farm exposure, refreshing swim sessions, walks on the extensive property, massages, yoga sessions and three delicious organic home-cooked meals. This retreat helps you rejuvenate and learn more about organic living. You will come away from the retreat with the ability to make healthier life style choices at home.</p>
                                <p>In your free time, you can enjoy nature walks, self-study, swimming and other water sports or just relax.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="sp-divider" />

            {/* ═══════════ VARANASHI X-FITNESS ═══════════ */}
            <section className="sp-section sp-section--alt">
                <div className="sp-section__inner">
                    <div className="sp-split sp-split--reverse">
                        <div className="sp-split__image">
                            <Image src="/images/site/nature-remedy.jpg" alt="X-Fitness camp" fill sizes="50vw" />
                        </div>
                        <div className="sp-split__text">
                            <p className="sp-overline">Movement Sports</p>
                            <h2 className="sp-heading">Varanashi X-Fitness Camp</h2>
                            <div className="sp-prose">
                                <p>Come and get fit in the natural environment of Varanashi Organic Farms. Improve your physical and mental well-being, enjoy three organic meals a day and have a blast in and around the water with the whole family! Our sports and fitness camp combines professional sports coaching with authentic farm experiences. Travel by bike or on foot across the property, engage with the natural environment through your body, mind, and five senses.</p>
                                <p>We host schools, universities, professional teams, corporate groups, families and friends for programs of all sizes and durations. The programs offered can range from a one-day visit to the farm to an extended stay of a week or more.</p>
                            </div>
                            <div className="sp-highlight">
                                <p>Farm exploration &bull; Aquatic training &bull; Skateboarding &bull; Mountain biking &bull; Yoga &bull; Basketball &bull; Slacklining &bull; Trekking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════ AQUATIC EDUCATION ═══════════ */}
            <section className="sp-section">
                <div className="sp-section__inner">
                    <div className="sp-split">
                        <div className="sp-split__image">
                            <Image src="/images/site/swimming-training.jpg" alt="Swimming training" fill sizes="50vw" />
                        </div>
                        <div className="sp-split__text">
                            <p className="sp-overline">Varanashi Swimming Academy</p>
                            <h2 className="sp-heading">Aquatic Education</h2>
                            <div className="sp-prose">
                                <p>Varanashi Swimming Academy, headed by national team coach Partha Varanashi, hosts elite training and beginner swim courses at the farm. Learn from a professional with international experience, in an all-natural swimming environment.</p>
                                <p>Swimming, high-board diving, stand-up paddling, kayaking, water polo and more — all in our chemical-free, A+ quality farm-filtered water ponds.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="sp-divider" />

            {/* ═══════════ CONTACT COACH PARTHA ═══════════ */}
            <section className="sp-section sp-section--alt">
                <div className="sp-section__inner sp-section__inner--text">
                    <div className="sp-highlight">
                        <p>Coach Partha Varanashi — a coach for Team India in the 2019 Aquatic World Championships — champions movement sports and aquatic education at the farm and beyond.</p>
                    </div>
                </div>
            </section>

            {/* ═══════════ FACILITIES / ACTIVITIES ═══════════ */}
            <section className="sp-section">
                <div className="sp-section__inner">
                    <p className="sp-overline">What&apos;s Here</p>
                    <h2 className="sp-heading sp-heading--lg">Facilities / Activities</h2>
                    <div className="sp-facilities">
                        <div className="sp-facilities__group">
                            <h4>Water Activities</h4>
                            <ul>
                                <li>Swimming (lessons available)</li>
                                <li>High-board diving</li>
                                <li>Stand-up paddling</li>
                                <li>Kayaking (in season)</li>
                                <li>Water slackline</li>
                                <li>Water polo</li>
                                <li>Rope swing &amp; zip line</li>
                            </ul>
                        </div>
                        <div className="sp-facilities__group">
                            <h4>Land Activities</h4>
                            <ul>
                                <li>Yoga</li>
                                <li>Skateboarding</li>
                                <li>Basketball</li>
                                <li>Slacklining</li>
                                <li>Mountain biking</li>
                                <li>Trekking</li>
                                <li>Camp fires &amp; camping</li>
                            </ul>
                        </div>
                        <div className="sp-facilities__group">
                            <h4>Wellness</h4>
                            <ul>
                                <li>Yoga sessions</li>
                                <li>Massages</li>
                                <li>Nature walks</li>
                                <li>Farm exploration</li>
                                <li>Organic meals (3x daily)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════ GALLERY ═══════════ */}
            <section className="sp-section sp-section--alt">
                <div className="sp-section__inner">
                    <p className="sp-overline">Gallery</p>
                    <div className="sp-gallery">
                        <div className="sp-gallery__item"><Image src="/images/site/fitness-activities.jpg" alt="Activities" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="/images/site/fitness-training.jpg" alt="Training" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="/images/site/yoga-session.jpeg" alt="Yoga" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="/images/site/farm-view2.jpg" alt="Farm view" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="/images/site/swimming-2.jpeg" alt="Swimming" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="/images/site/landscape.jpg" alt="Landscape" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="/images/site/farm-landscape.jpg" alt="Water sports" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="/images/site/manure.jpg" alt="Farm life" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="/images/site/farm-landscape2.jpg" alt="Nature" fill sizes="33vw" /></div>
                    </div>
                </div>
            </section>

            {/* ═══════════ CTA ═══════════ */}
            <section className="sp-cta">
                <div className="sp-cta__inner">
                    <p className="sp-cta__tagline">Ready to get moving? Contact Coach Partha for personalized programs.</p>
                    <div className="sp-cta__actions">
                        <Link href="/contact" className="btn btn-primary">Contact Us</Link>
                    </div>
                    <p className="sp-cta__contact">
                        <a href="tel:+919482213019">+91 9482213019</a>
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
}
