import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata = {
    title: 'About Us',
    description:
        'The Varanashi Story — Over 200 years of organic farming heritage. Six generations of ecological stewardship in Moodambailu, Karnataka.',
};

export default function AboutPage() {
    return (
        <>
            <Nav />

            {/* PAGE HEADER */}
            <section className="page-header">
                <div className="page-header-bg">
                    <Image src="https://varanashi.com/wp-content/uploads/2019/06/IMG_20151023_082241-860x500.jpeg" alt="Heritage view of Varanashi Farms" fill style={{ objectFit: 'cover', filter: 'brightness(0.65) saturate(0.8)' }} sizes="100vw" priority />
                </div>
                <div className="page-header-overlay"></div>
                <div className="page-header-content">
                    <RevealOnScroll><p className="text-overline">About Varanashi</p></RevealOnScroll>
                    <RevealOnScroll><h1>The Varanashi Story</h1></RevealOnScroll>
                    <RevealOnScroll><p>A legacy spanning two centuries — from a royal gift of land to a pioneering organic ecosystem.</p></RevealOnScroll>
                </div>
            </section>

            {/* THE FARM */}
            <section style={{ padding: 'var(--space-24) 0' }}>
                <div className="container">
                    <div className="grid-editorial">
                        <RevealOnScroll direction="left">
                            <div className="img-editorial">
                                <Image src="https://varanashi.com/wp-content/uploads/2019/06/IMG_0605-860x500.jpg" alt="Aerial view of Varanashi organic farm" width={860} height={500} style={{ width: '100%', height: 'auto' }} />
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll direction="right" className="prose">
                            <p className="text-overline" style={{ marginBottom: 'var(--space-4)' }}>The Farm</p>
                            <h2>100 Acres of<br /><em className="text-accent">Living Biodiversity</em></h2>
                            <p className="drop-cap">Varanashi Organic Farms currently extend for about 100 Acres over two properties, with seven irrigation ponds, as well as a river and a riverlet adjoining one of the properties. Crop plantations are maintained within the natural vegetation of the area, and 60% of the farms is still untouched forest.</p>
                            <p>Crops like Arecanut, Coconut, Cocoa, Nutmeg, Banana, Black Pepper, Jackfruit etc. are grown in a multi-story system. In addition, different types of vegetables, fruits, flowers are also grown. Rice is organically cultivated during the rainy season for sale and our own consumption.</p>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* FAMILY HISTORY */}
            <section className="section-cream" style={{ padding: 'var(--space-24) 0' }}>
                <div className="container-text">
                    <RevealOnScroll className="text-center">
                        <p className="text-overline" style={{ marginBottom: 'var(--space-4)' }}>Family History</p>
                        <h2 className="text-display">Six Generations of<br /><em className="text-accent">Stewardship</em></h2>
                    </RevealOnScroll>
                    <div className="divider divider-center" style={{ margin: 'var(--space-8) auto' }}></div>
                    <RevealOnScroll className="prose" style={{ margin: '0 auto' }}>
                        <p className="drop-cap">The illustrious story of Varanashi Organic Farms, handed down by over six generations of the Varanashi family, begins more than 200 years ago, when in 1816 King Lingaraju, Ruler of Kodagu, gifts a large piece of land and a big house in the Moodambailu area to one of his favourites, a wiseman by the name of Jyothishi.</p>
                        <p>Thirumaleshwari Amma, one of the female members of this family, marries Varanashi Krishnayya and settles at Moodambailu. Their son Varanashi Subraya Bhat and grandson Varanashi Krishna Moorthy manage the property in subsequent years and name it Varanashi Farms. Partha Varanashi is youngest heir in this family to take the family tradition forward. A coach for Team India in the 2019 Aquatic World Championships, he champions movement sports and aquatic education at the farm.</p>
                    </RevealOnScroll>
                </div>
            </section>

            {/* THE INSPIRATION */}
            <section style={{ padding: 'var(--space-24) 0' }}>
                <div className="container">
                    <div className="grid-editorial">
                        <RevealOnScroll direction="left" className="prose">
                            <p className="text-overline" style={{ marginBottom: 'var(--space-4)' }}>The Inspiration</p>
                            <h2>Sahakari Rathna<br /><em className="text-accent">Shri Varanashi Subraya Bhat</em></h2>
                            <p>Sahakari Rathna Shri Varanashi Subraya Bhat is the inspiration behind the establishment and the development of Varanashi Development and Research Foundation (VDRF) and its sister concerns. Shri Bhat is a well-known personality in the field of Co-operative movement in South India.</p>
                            <p>He is the founder of CAMPCO Ltd. — today, one among the co-operative giants in India. He was the President of the CAMPCO since its inception in 1972 to 1990.</p>
                            <p>Inspired by his achievements, his son Dr. Varanashi Krishna Moorthy has promoted the VDRF, VOM and VAST Centre. Dr. Ashwini Krishna Moorthy and their son Partha Varanashi are actively involved and equally responsible for the development of the Varanashi Concerns.</p>
                        </RevealOnScroll>
                        <RevealOnScroll direction="right">
                            <div className="img-editorial">
                                <Image src="https://varanashi.com/wp-content/uploads/2019/06/img_4853-860x500.jpg" alt="The Varanashi family" width={860} height={500} style={{ width: '100%', height: 'auto' }} />
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* THE NAME */}
            <section className="section-linen" style={{ padding: 'var(--space-12) 0' }}>
                <div className="container-text">
                    <RevealOnScroll className="text-center">
                        <p className="text-overline" style={{ marginBottom: 'var(--space-4)' }}>The Name</p>
                        <h3 className="text-h2" style={{ marginBottom: 'var(--space-5)' }}>Varanashi,<br /><em className="text-accent">Not Varanasi</em></h3>
                        <p style={{ color: 'var(--color-stone)', lineHeight: 'var(--leading-relaxed)' }}>It is interesting to note that the family name &quot;Varanashi&quot;, incessantly confused with &quot;Varanasi&quot;, does indeed originate from the name of the Indian spiritual capital Benares. However, generations have passed and the Varanashis are now indigenous to Bantwal Taluk of D.K District, Karnataka. Over the years, subsequent generations of Varanashis have proven themselves innovators and visionaries, transforming their ancestral property to keep up with the changing times.</p>
                    </RevealOnScroll>
                </div>
            </section>

            {/* HOW DID WE GO ORGANIC */}
            <section style={{ padding: 'var(--space-24) 0' }}>
                <div className="container-text">
                    <RevealOnScroll className="text-center">
                        <p className="text-overline" style={{ marginBottom: 'var(--space-4)' }}>The Turning Point</p>
                        <h2 className="text-display">How Did We Go<br /><em className="text-accent">Organic?</em></h2>
                    </RevealOnScroll>
                    <div className="divider divider-center" style={{ margin: 'var(--space-8) auto' }}></div>
                    <RevealOnScroll className="prose" style={{ margin: '0 auto' }}>
                        <p className="drop-cap">In 1981, the farm was a low-level, chemically managed farm. With the intention of increasing the yield of the land, it was converted into a high-level chemical farm. An unforeseen consequence of this transition was an increase in the occurrence of disease and pest infestation, with no substantial increase in profitability.</p>
                        <p>In 1991, a complete migration was made to organic methods of farming. Slowly and steadily, the subsequent years saw progress, with increased yield and profitability.</p>
                    </RevealOnScroll>
                </div>
            </section>

            {/* ORGANIZATIONS */}
            <section className="section-cream" style={{ padding: 'var(--space-24) 0' }}>
                <div className="container">
                    <RevealOnScroll className="text-center mb-10">
                        <p className="text-overline">Our Organizations</p>
                        <h2 className="text-display" style={{ marginTop: 'var(--space-4)' }}>The Varanashi<br /><em className="text-accent">Ecosystem</em></h2>
                    </RevealOnScroll>
                    <div className="grid grid-3 stagger">
                        {[
                            { href: '/vof', overline: 'Agriculture', name: 'Varanashi Organic Farms', desc: '100+ acres of certified organic farmland growing arecanut, coconut, cocoa, nutmeg, banana, black pepper, and more.' },
                            { href: '/vdrf', overline: 'Research', name: 'VDRF', desc: 'Development & Research Foundation recognized by the Dept. of Science & Industrial Research. APJ Abdul Kalam Award recipient.' },
                            { href: '/vom', overline: 'Products', name: 'Organic Manures', desc: 'Premium certified organic farm inputs produced from decades of research in sustainable agricultural methods.' },
                            { href: '/vast', overline: 'Technology', name: 'VAST Centre', desc: 'Agro-Sustainable Technology centre bridging traditional wisdom with modern agricultural innovation.' },
                            { href: '/vswim', overline: 'Aquatics', name: 'Swimming Academy', desc: 'Year-round aquatic education in natural ponds with A+ water quality. Professional coaching for all ages.' },
                            { href: '/stoked', overline: 'Adventure', name: 'Stoked India', desc: 'Adventures and movement sports — skateboarding, surfing, and outdoor experiences rooted in farm life.' },
                        ].map((org) => (
                            <RevealOnScroll key={org.href}>
                                <Link href={org.href} className="org-card">
                                    <p className="text-overline">{org.overline}</p>
                                    <h3>{org.name}</h3>
                                    <p>{org.desc}</p>
                                    <span className="link-arrow">Explore</span>
                                </Link>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
