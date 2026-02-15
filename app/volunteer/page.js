import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Volunteer - Varanashi',
    description: 'Volunteer at Varanashi Organic Farms — contribute to organic farming, aquatic education, and community outreach while living on a beautiful farm.',
};

export default function VolunteerPage() {
    return (
        <>
            <Nav />

            {/* ═══════════ HERO ═══════════ */}
            <section className="sp-hero">
                <div className="sp-hero__bg">
                    <Image src="https://varanashi.com/wp-content/uploads/2019/06/WhatsApp-Image-2019-06-25-at-08.55.05-860x500.jpeg" alt="Volunteering at Varanashi" fill sizes="100vw" priority />
                </div>
                <div className="sp-hero__content">
                    <h1 className="sp-hero__title">Volunteering</h1>
                    <p className="sp-hero__subtitle">Contribute, learn, and grow on a centuries-old organic farm.</p>
                </div>
            </section>

            {/* ═══════════ ABOUT VOLUNTEERING ═══════════ */}
            <section className="sp-section">
                <div className="sp-section__inner sp-section__inner--narrow">
                    <p className="sp-overline">At Varanashi</p>
                    <h2 className="sp-heading">Volunteering</h2>
                    <div className="sp-prose">
                        <p>Our volunteers contribute to the operations and activities of the farm and our various organizations. They help with organic farming, aquatic education, the research foundation, the technology centre, and community outreach. In return you get involved and play a key role. The wide spectrum of operations and daily life at Varanashi will provide a rich and multicultural experience – both on a professional and on a human level.</p>
                        <p>At various points in time, between 2 and 10 volunteers of varied nationalities help out at Varanashi. Our volunteers typically stay between 2 weeks and 6 months, with most opting for a period of about 4-8 weeks.</p>
                    </div>
                </div>
            </section>

            <hr className="sp-divider" />

            {/* ═══════════ PITCH YOUR PASSION ═══════════ */}
            <section className="sp-section sp-section--alt">
                <div className="sp-section__inner sp-section__inner--narrow">
                    <p className="sp-overline">Get Involved</p>
                    <h2 className="sp-heading">Pitch your Passion</h2>
                    <div className="sp-prose">
                        <p>Our volunteers usually come to us with a particular set of skills, interests, or a passion they bring to the table. In the past, apart from people with agriculture backgrounds, we have worked with architects, digital marketers, animal experts, musicians, yoga teachers, athletes, designers and many more. Whatever your field of interest, we are open to creative ideas that add value to our cause and look forward to working with you.</p>
                    </div>
                </div>
            </section>

            {/* ═══════════ A TYPICAL DAY ═══════════ */}
            <section className="sp-section">
                <div className="sp-section__inner sp-section__inner--narrow">
                    <p className="sp-overline">Daily Life</p>
                    <h2 className="sp-heading">A Typical Day</h2>
                    <table className="sp-schedule">
                        <tbody>
                            <tr><td>7:00 AM</td><td>Rise &amp; shine</td></tr>
                            <tr><td>7:30 AM</td><td>Breakfast</td></tr>
                            <tr><td>8:00 AM</td><td>Morning session (farm work, teaching, etc.)</td></tr>
                            <tr><td>12:30 PM</td><td>Lunch</td></tr>
                            <tr><td>1:30 PM</td><td>Rest / free time</td></tr>
                            <tr><td>3:00 PM</td><td>Afternoon session</td></tr>
                            <tr><td>5:30 PM</td><td>Sports &amp; swimming</td></tr>
                            <tr><td>7:30 PM</td><td>Dinner</td></tr>
                            <tr><td>Evening</td><td>Free time, socializing, camp fire</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <hr className="sp-divider" />

            {/* ═══════════ WHAT'S INCLUDED ═══════════ */}
            <section className="sp-section sp-section--alt">
                <div className="sp-section__inner sp-section__inner--narrow">
                    <p className="sp-overline">What&apos;s Included</p>
                    <h2 className="sp-heading">Stay Details</h2>
                    <div className="sp-prose">
                        <p>As a volunteer at Varanashi, you receive three organic, home-cooked meals daily, comfortable accommodation in our dorm facilities, and access to all farm activities and facilities during your free time — including swimming, yoga, skateboarding, biking, trekking, and more.</p>
                        <p>The working day typically runs about 5–6 hours, with two sessions (morning and afternoon), and weekends are free for you to explore the beautiful Dakshina Kannada and Coorg region.</p>
                    </div>
                </div>
            </section>

            {/* ═══════════ PRACTICAL INFORMATION ═══════════ */}
            <section className="sp-section">
                <div className="sp-section__inner sp-section__inner--narrow">
                    <p className="sp-overline">Practical Information</p>
                    <h2 className="sp-heading">Costs &amp; Policies</h2>
                    <div className="sp-prose">
                        <p>There is a voluntary contribution expected from our volunteers. This is to partly cover the costs of food and accommodation. The weekly contribution is between INR 2000 and INR 5000, depending on the type of accommodation and duration of stay. Accommodation ranges from dorm beds to private rooms, subject to availability.</p>
                        <p><strong>Minimum stay:</strong> 2 weeks.</p>
                        <p><strong>How to apply:</strong> Send us an email with a brief introduction, your dates of availability, your interests or skills, and what you hope to contribute. We will get back to you within a few days.</p>
                    </div>
                </div>
            </section>

            <hr className="sp-divider" />

            {/* ═══════════ GALLERY ═══════════ */}
            <section className="sp-section sp-section--alt">
                <div className="sp-section__inner">
                    <p className="sp-overline">Volunteer Life</p>
                    <div className="sp-gallery">
                        <div className="sp-gallery__item"><Image src="https://varanashi.com/wp-content/uploads/2019/06/WhatsApp-Image-2019-06-25-at-08.55.02-860x500.jpeg" alt="Volunteer life" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="https://varanashi.com/wp-content/uploads/2019/06/img_8269-860x500.jpg" alt="Farm work" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="https://varanashi.com/wp-content/uploads/2019/06/WhatsApp-Image-2019-06-25-at-08.55.08-860x500.jpeg" alt="Community" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="https://varanashi.com/wp-content/uploads/2019/06/WhatsApp-Image-2019-06-25-at-08.55.04-860x500.jpeg" alt="Activities" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="https://varanashi.com/wp-content/uploads/2019/06/WhatsApp-Image-2019-06-25-at-08.55.06-860x500.jpeg" alt="Farming" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="https://varanashi.com/wp-content/uploads/2019/06/WhatsApp-Image-2019-06-25-at-08.55.09-860x500.jpeg" alt="Group activities" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="https://varanashi.com/wp-content/uploads/2019/06/WhatsApp-Image-2019-06-25-at-08.55.03-784x500.jpeg" alt="Nature" fill sizes="33vw" /></div>
                    </div>
                </div>
            </section>

            {/* ═══════════ CTA ═══════════ */}
            <section className="sp-cta">
                <div className="sp-cta__inner">
                    <p className="sp-cta__tagline">Interested in volunteering? We&apos;d love to hear from you.</p>
                    <div className="sp-cta__actions">
                        <Link href="/contact" className="btn btn-primary">Apply Now</Link>
                    </div>
                    <p className="sp-cta__contact">
                        Email us with a brief introduction &amp; your dates · <a href="tel:+919482213019">+91 94822 13019</a>
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
}
