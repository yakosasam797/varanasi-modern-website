import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RoomCards from './RoomCards';

export const metadata = {
    title: 'Retreats - Varanashi',
    description: 'Stay at Varanashi — tree houses, farm stays, organic retreats, cacao trails, and adventure on a centuries-old organic farm.',
};

export default function RetreatsPage() {
    return (
        <>
            <Nav />

            {/* ═══════════ HERO ═══════════ */}
            <section className="sp-hero">
                <div className="sp-hero__bg">
                    <Image src="/images/site/treehouse-room.jpg" alt="Tree house at Varanashi" fill sizes="100vw" priority />
                </div>
                <div className="sp-hero__content">
                    <h1 className="sp-hero__title">Retreats</h1>
                    <p className="sp-hero__subtitle">Comfort and proximity to nature, combined thoughtfully on a centuries-old organic farm.</p>
                </div>
            </section>

            {/* ═══════════ AT HOME IN THE TREES ═══════════ */}
            <section className="sp-section">
                <div className="sp-section__inner">
                    <div className="sp-split">
                        <div className="sp-split__image">
                            <Image src="/images/site/treehouse-room.jpg" alt="Devadaru Tree House" fill sizes="50vw" />
                        </div>
                        <div className="sp-split__text">
                            <p className="sp-overline">Tree Houses</p>
                            <h2 className="sp-heading">at Home in the Trees</h2>
                            <div className="sp-prose">
                                <p>Few places come as close to so perfectly combining comfort and proximity to nature as our two tree houses, located in different parts of the property and each providing ultimate privacy for up to four guests.</p>
                                <p>None of the trees has been pierced in the construction and their roots continue to grow naturally. For the building we used hardwood from our farm, including teak, rosewood, acacia, and jackfruit timber. The result is a stunning and unshakeable testament to the beauty that arises when humans work with, rather than against, nature…</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="sp-divider" />

            {/* ═══════════ FARM STAY ═══════════ */}
            <section className="sp-section sp-section--alt">
                <div className="sp-section__inner">
                    <div className="sp-split sp-split--reverse">
                        <div className="sp-split__image">
                            <Image src="/images/site/dorm-860.jpg" alt="Dorm accommodation" fill sizes="50vw" />
                        </div>
                        <div className="sp-split__text">
                            <p className="sp-overline">Farm Stay</p>
                            <h2 className="sp-heading">Farm Stay</h2>
                            <div className="sp-prose">
                                <p>For larger groups as well as individuals we also offer two door-to-door dorms with 20 bunk beds each, situated right next to our skate park and in the heart of Varanashi Organic Farms.</p>
                                <p>Whether you choose our tree houses or the dorms, your stay includes – next to real intimacy with nature & scrumptious home-cooked organic food – access to our facilities and activities, depending on your wishes.</p>
                                <p>Individuals, couples, families, and friends keen to experience eco-friendly living are all welcome.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════ ROOM BOOKING ═══════════ */}
            <section className="sp-section" id="book-room">
                <div className="sp-section__inner">
                    <p className="sp-overline">Book Your Stay</p>
                    <h2 className="sp-heading sp-heading--lg">Choose Your Room</h2>
                    <RoomCards />
                </div>
            </section>

            <hr className="sp-divider" />

            {/* ═══════════ ORGANIC RETREAT ═══════════ */}
            <section className="sp-section sp-section--alt">
                <div className="sp-section__inner">
                    <div className="sp-split">
                        <div className="sp-split__image">
                            <Image src="/images/site/organic-retreat.jpg" alt="Organic retreat" fill sizes="50vw" />
                        </div>
                        <div className="sp-split__text">
                            <p className="sp-overline">Organic Retreat</p>
                            <h2 className="sp-heading">Organic Retreat</h2>
                            <div className="sp-prose">
                                <p>Enjoy a peaceful and rejuvenating mind-body retreat in an untouched natural environment.</p>
                                <p>Your daily schedule will consist of organic exposure, refreshing swim sessions, walks on the extensive property, massages, yoga sessions and three delicious organic home-cooked meals. This retreat helps you rejuvenate and learn more about organic living. You will come away from the retreat with the ability to make healthier lifestyle choices at home. In your free time, you can enjoy nature walks, self-study, swimming and other water sports or just relax.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════ CACAO TRAIL ═══════════ */}
            <section className="sp-section">
                <div className="sp-section__inner">
                    <div className="sp-split sp-split--reverse">
                        <div className="sp-split__image">
                            <Image src="/images/site/grafting.jpg" alt="Cacao trail" fill sizes="50vw" />
                        </div>
                        <div className="sp-split__text">
                            <p className="sp-overline">Cacao Trail</p>
                            <h2 className="sp-heading">Cacao Trail</h2>
                            <div className="sp-prose">
                                <p>In this exciting and informative program, you learn about the chocolate making process: how the cacao plants at the farm become chocolate bars in a factory. You will gain an appreciation for all the work that goes into one of your favourite foods, and have plenty of samples along the way!</p>
                                <p>Daily activities include: hands-on potting, plant grafting, harvesting cacao pods, seed removal and fermentation, visits to local farms and a visit to a chocolate factory. In your free time you can enjoy farm facilities including water activities such as swimming, zip line, kayaking and stand-up paddling.</p>
                            </div>
                            <div className="sp-packages">
                                <div className="sp-package">
                                    <p className="sp-package__name">Single Day Cacao Trail</p>
                                </div>
                                <div className="sp-package">
                                    <p className="sp-package__name">3 Day Cacao Trail</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="sp-divider" />

            {/* ═══════════ CUSTOM STAYS ═══════════ */}
            <section className="sp-section sp-section--alt">
                <div className="sp-section__inner sp-section__inner--text">
                    <div className="sp-highlight">
                        <p>An early morning dive, followed by a farm walk that activates all five senses, and an evening spent in the fun pond? Or are you looking to see organic farming practices in action, and at the same time improve your swim skills under professional guidance?</p>
                    </div>
                    <div className="sp-prose">
                        <p>You want it all? Our varied facilities and experts in their respective fields are happy to accommodate your interests. We have experience organizing tailor-made stays of various durations for groups and individuals of all ages, backgrounds, and motivations.</p>
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
                            <h4>The Property</h4>
                            <ul>
                                <li>60 acres of thick, healthy forest</li>
                                <li>40 acres of organic crop plantation</li>
                                <li>Nursery & dairy</li>
                                <li>2 year-round full swimming ponds with A+ water quality</li>
                                <li>2 treehouses</li>
                                <li>2 dorms</li>
                                <li>Stage (for yoga, dance, theatre)</li>
                                <li>Diving platforms; monkey bars; trampoline</li>
                                <li>Skate park</li>
                            </ul>
                        </div>
                        <div className="sp-facilities__group">
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
                        <div className="sp-facilities__group">
                            <h4>Water</h4>
                            <ul>
                                <li>Swimming (lessons on request)</li>
                                <li>High-board diving</li>
                                <li>Water slackline</li>
                                <li>Stand-up-paddling</li>
                                <li>&apos;Flying fox&apos; zip lining</li>
                                <li>Rope swing</li>
                                <li>Kayaking (in season)</li>
                                <li>Surfing (on request)</li>
                            </ul>
                        </div>
                        <div className="sp-facilities__group">
                            <h4>Land</h4>
                            <ul>
                                <li>Yoga</li>
                                <li>Trekking</li>
                                <li>Skateboarding</li>
                                <li>Basketball</li>
                                <li>Slacklining</li>
                                <li>MTB bike rides</li>
                                <li>Geo Caching (treasure hunt)</li>
                                <li>Camp fires</li>
                                <li>Camping</li>
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
                        <div className="sp-gallery__item"><Image src="/images/site/accomodation.jpg" alt="Accommodation" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="/images/site/farm-activity.jpeg" alt="Farm activity" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="/images/site/farm-landscape2.jpg" alt="Farm landscape" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="/images/site/activities.jpg" alt="Activities" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="/images/site/farm-view2.jpg" alt="Farm view" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="/images/site/vof-aerial.jpg" alt="Outdoor activities" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="/images/site/outdoor.jpg" alt="Nature" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="/images/site/pond.jpg" alt="Tree house pond" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="/images/site/retreat-moment.jpg" alt="Retreat moment" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="/images/site/farm-life.jpg" alt="Farm life" fill sizes="33vw" /></div>
                    </div>
                </div>
            </section>

            {/* ═══════════ CTA ═══════════ */}
            <section className="sp-cta">
                <div className="sp-cta__inner">
                    <p className="sp-cta__tagline">Interested in our existing offers or a personalized program? We host stays all year round and are happy to design one that suits your needs and exceeds your expectations 🙂</p>
                    <div className="sp-cta__actions">
                        <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
                    </div>
                    <p className="sp-cta__contact">
                        <a href="tel:+919482213019">+91 94822 13019</a> &nbsp;·&nbsp; <a href="tel:+919449968377">+91 94499 68377</a>
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
}
