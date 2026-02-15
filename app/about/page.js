import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'About Us - Varanashi',
    description: 'The Varanashi Story — over 200 years of organic farming, family heritage, and a commitment to sustainable agriculture in South India.',
};

export default function AboutPage() {
    return (
        <>
            <Nav />

            {/* ═══════════ HERO ═══════════ */}
            <section className="sp-hero">
                <div className="sp-hero__bg">
                    <Image src="https://varanashi.com/wp-content/uploads/2019/06/IMG_0810-860x500.jpg" alt="Varanashi Organic Farms" fill sizes="100vw" priority />
                </div>
                <div className="sp-hero__content">
                    <h1 className="sp-hero__title">The Varanashi Story</h1>
                    <p className="sp-hero__subtitle">Premium Certified Organic Farm Inputs · Sustainable Farming · Eco & Adventure Experience</p>
                </div>
            </section>

            {/* ═══════════ THE FARM ═══════════ */}
            <section className="sp-section">
                <div className="sp-section__inner sp-section__inner--text">
                    <p className="sp-overline">The Farm</p>
                    <h2 className="sp-heading">Varanashi Organic Farms</h2>
                    <div className="sp-prose">
                        <p>Varanashi Organic Farms currently extend for about 100 Acres over two properties, with seven irrigation ponds, as well as a river and a riverlet adjoining one of the properties. Crop plantations are maintained within the natural vegetation of the area, and 60% of the farms is still untouched forest. Crops like Arecanut, Coconut, Cocoa, Nutmeg, Banana, Black Pepper, Jackfruit etc. are grown in a multi-story system. In addition, different types of vegetables, fruits, flowers are also grown. Rice is organically cultivated during the rainy season for sale and our own consumption.</p>
                    </div>
                </div>
            </section>

            <hr className="sp-divider" />

            {/* ═══════════ FAMILY HISTORY ═══════════ */}
            <section className="sp-section sp-section--alt">
                <div className="sp-section__inner sp-section__inner--text">
                    <p className="sp-overline">Family History</p>
                    <h2 className="sp-heading">Six Generations of Stewardship</h2>
                    <div className="sp-prose">
                        <p>The illustrious story of Varanashi Organic Farms, handed down by over six generations of the Varanashi family, begins more than 200 years ago, when in 1816 King Lingaraju, Ruler of Kodagu, gifts a large piece of land and a big house in the Moodambailu area to one of his favourites, a wiseman by the name of Jyothishi.</p>
                        <p>Thirumaleshwari Amma, one of the female members of this family, marries Varanashi Krishnayya and settles at Moodambailu. Their son Varanashi Subraya Bhat and grandson Varanashi Krishna Moorthy manage the property in subsequent years and name it Varanashi Farms. Partha Varanashi is youngest heir in this family to take the family tradition forward. A coach for Team India in the 2019 Aquatic World Championships, he champions movement sports and aquatic education at the farm.</p>
                    </div>
                </div>
            </section>

            {/* ═══════════ THE INSPIRATION ═══════════ */}
            <section className="sp-section">
                <div className="sp-section__inner sp-section__inner--text">
                    <p className="sp-overline">The Inspiration</p>
                    <h2 className="sp-heading">Sahakari Rathna Shri Varanashi Subraya Bhat</h2>
                    <div className="sp-prose">
                        <p>Sahakari Rathna Shri Varanashi Subraya Bhat is the inspiration behind the establishment and the development of Varanashi Development and Research Foundation (VDRF) and its sister concerns. Shri Bhat is a well-known personality in the field of Co-operative movement in South India. He is the founder of <a href="http://www.campco.org/" target="_blank" rel="noopener noreferrer">CAMPCO Ltd.</a> – today, one among the co-operative giants in India. He was the President of the CAMPCO since its inception in 1972 to 1990.</p>
                        <p>Inspired by his achievements, his son Dr. Varanashi Krishna Moorthy has promoted the <Link href="/vdrf">VDRF</Link>, <Link href="/vom">VOM</Link> and <Link href="/vast">VAST Centre</Link>. <Link href="/vof">Varanashi Farms</Link> is the Family Agricultural property. Dr. Ashwini Krishna Moorthy and their son Partha Varanashi are actively involved and equally responsible for the development of the Varanashi Concerns. Partha Varanashi brings movement and aquatic education to the farm (and beyond) through the <Link href="/vswim">Varanashi Swimming Academy</Link> and <Link href="/stoked">Stoked India Adventures</Link>.</p>
                    </div>
                </div>
            </section>

            <hr className="sp-divider" />

            {/* ═══════════ THE NAME ═══════════ */}
            <section className="sp-section sp-section--alt">
                <div className="sp-section__inner sp-section__inner--text">
                    <p className="sp-overline">The Name</p>
                    <h2 className="sp-heading">Varanashi, Not Varanasi</h2>
                    <div className="sp-prose">
                        <p>It is interesting to note that the family name &ldquo;Varanashi&rdquo;, incessantly confused with &ldquo;Varanasi&rdquo;, does indeed originate from the name of the Indian spiritual capital Benares. However, generations have passed and the Varanashis are now indigenous to Bantwal Taluk of D.K District, Karnataka. Over the years, subsequent generations of Varanashis have proven themselves innovators and visionaries, transforming their ancestral property to keep up with the changing times.</p>
                    </div>
                </div>
            </section>

            {/* ═══════════ HOW DID WE GO ORGANIC ═══════════ */}
            <section className="sp-section">
                <div className="sp-section__inner sp-section__inner--text">
                    <p className="sp-overline">Our Journey</p>
                    <h2 className="sp-heading">How did we go Organic?</h2>
                    <div className="sp-prose">
                        <p>In 1981, the farm was a low-level, chemically managed farm. With the intention of increasing the yield of the land, it was converted into a high-level chemical farm. An unforeseen consequence of this transition was an increase in the occurrence of disease and pest infestation, with no substantial increase in profitability. In 1991, a complete migration was made to organic methods of farming. Slowly and steadily, the subsequent years saw progress, with increased yield and profitability.</p>
                    </div>
                </div>
            </section>

            {/* ═══════════ ORGANIZATIONS ═══════════ */}
            <section className="sp-section sp-section--alt">
                <div className="sp-section__inner">
                    <p className="sp-overline">Our Organizations</p>
                    <h2 className="sp-heading sp-heading--lg">The Varanashi Family</h2>
                    <div className="sp-facilities">
                        <div className="sp-facilities__group">
                            <h4>Varanashi Organic Farms</h4>
                            <ul>
                                <li><Link href="/vof">100 acres of certified organic farmland</Link></li>
                            </ul>
                        </div>
                        <div className="sp-facilities__group">
                            <h4>Research Foundation (VDRF)</h4>
                            <ul>
                                <li><Link href="/vdrf">Research and development in organic farming</Link></li>
                            </ul>
                        </div>
                        <div className="sp-facilities__group">
                            <h4>Organic Manures (VOM)</h4>
                            <ul>
                                <li><Link href="/vom">Premium certified organic farm inputs</Link></li>
                            </ul>
                        </div>
                        <div className="sp-facilities__group">
                            <h4>VAST Centre</h4>
                            <ul>
                                <li><Link href="/vast">Agro-sustainable technology</Link></li>
                            </ul>
                        </div>
                        <div className="sp-facilities__group">
                            <h4>Swimming Academy</h4>
                            <ul>
                                <li><Link href="/vswim">Aquatic education and coaching</Link></li>
                            </ul>
                        </div>
                        <div className="sp-facilities__group">
                            <h4>Stoked India Adventures</h4>
                            <ul>
                                <li><Link href="/stoked">Movement sports and adventure</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════ CTA ═══════════ */}
            <section className="sp-cta">
                <div className="sp-cta__inner">
                    <p className="sp-cta__tagline">Want to learn more about our story?</p>
                    <div className="sp-cta__actions">
                        <Link href="/contact" className="btn btn-primary">Contact Us</Link>
                        <Link href="/retreats" className="btn btn-ghost">Visit the Farm</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
