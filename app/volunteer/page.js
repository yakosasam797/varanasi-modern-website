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
                    <Image src="/images/site/volunteer-hero.jpg" alt="Volunteering at Varanashi" fill sizes="100vw" priority />
                </div>
                <div className="sp-hero__content">
                    <h1 className="sp-hero__title">Volunteering</h1>
                    <p className="sp-hero__subtitle">Contribute, learn, and grow on a centuries-old organic farm.</p>
                </div>
            </section>

            {/* ═══════════ ABOUT VOLUNTEERING ═══════════ */}
            <section className="sp-section">
                <div className="sp-section__inner">
                    <div className="sp-split">
                        <div className="sp-split__image">
                            <Image src="/images/site/volunteers.jpg" alt="Volunteers at Varanashi" fill sizes="50vw" />
                        </div>
                        <div className="sp-split__text">
                            <p className="sp-overline">At Varanashi</p>
                            <h2 className="sp-heading">Volunteering</h2>
                            <div className="sp-prose">
                                <p>Do you want to understand how to grow the food you eat? Are you itching to get out of the city and reconnect with nature? Does the geek inside you get excited about effective microorganisms and fermentation? Do you want to experience a thriving self-sustaining eco-friendly organic farm in action and help it flourish even more?</p>
                                <p>At Varanashi Farms, we try to imbibe ideas of regeneration, sustainability, self-reliance and environmental stability into the things we do. Volunteers who are selected to work on our organic farm will learn an excellent combination of traditional permaculture and modern farming practices, understand the importance of eco-friendly and organic farming methods, and rainwater harvesting and live as a part of a rural village community.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="sp-divider" />

            {/* ═══════════ PITCH YOUR PASSION ═══════════ */}
            <section className="sp-section sp-section--alt">
                <div className="sp-section__inner">
                    <div className="sp-split sp-split--reverse">
                        <div className="sp-split__image">
                            <Image src="/images/site/farm-work.jpg" alt="Farm work at Varanashi" fill sizes="50vw" />
                        </div>
                        <div className="sp-split__text">
                            <p className="sp-overline">Get Involved</p>
                            <h2 className="sp-heading">Pitch your Passion</h2>
                            <div className="sp-prose">
                                <p>Our volunteers usually come to us with a particular set of skills, interests, or a passion they bring to the table. In the past, apart from people with agriculture backgrounds, we have worked with architects, digital marketers, animal experts, musicians, yoga teachers, athletes, designers and many more. Whatever your field of interest, we are open to creative ideas that add value to our cause and look forward to working with you.</p>
                                <p>Volunteers get to explore different aspects of the farming calendar through the year — harvesting, planting, manuring, weeding — you name it. We have the occasional fun project such as maintenance of our irrigation tanks or treehouses, and we take note of your interests and skills when assigning tasks!</p>
                            </div>
                        </div>
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
                            <tr><td>8:00 AM</td><td>Breakfast</td></tr>
                            <tr><td>9:00 AM</td><td>Morning session (farm work, teaching, etc.)</td></tr>
                            <tr><td>10:30 AM</td><td>Break for tea &amp; snack</td></tr>
                            <tr><td>1:00 PM</td><td>Lunch break</td></tr>
                            <tr><td>2:00 PM</td><td>Afternoon session</td></tr>
                            <tr><td>4:00 PM</td><td>Free time — explore the farm, swim, hang out</td></tr>
                            <tr><td>7:00 PM</td><td>Dinner</td></tr>
                            <tr><td>Evening</td><td>Free time, socializing, camp fire</td></tr>
                        </tbody>
                    </table>
                    <div className="sp-highlight">
                        <p>The work is usually six hours a day, five days a week. Time before 9 AM and after 4 PM is yours to explore the farm, have fun, or catch up on personal work.</p>
                    </div>
                </div>
            </section>

            <hr className="sp-divider" />

            {/* ═══════════ WHAT'S INCLUDED ═══════════ */}
            <section className="sp-section sp-section--alt">
                <div className="sp-section__inner">
                    <div className="sp-split">
                        <div className="sp-split__image">
                            <Image src="/images/site/dorm.jpg" alt="Volunteer accommodation at Varanashi" fill sizes="50vw" />
                        </div>
                        <div className="sp-split__text">
                            <p className="sp-overline">What&apos;s Included</p>
                            <h2 className="sp-heading">Stay Details</h2>
                            <div className="sp-prose">
                                <p>We have four volunteer homes that you will share with the other volunteers. True to our idea of community living, you will stay in shared accommodation with common living spaces. Three fresh and home-cooked meals are served every day. All food is strictly vegetarian and seasonal, based on what is grown at the farm.</p>
                                <p>As long as you are respectful of the culture, guidelines, wildlife, and premises, we have an easy relationship with the volunteers. You have the added opportunity of exploring your physical literacy, improving your swimming, and learning important lifesaving skills, courtesy Coach Partha.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════ PRACTICAL INFORMATION ═══════════ */}
            <section className="sp-section">
                <div className="sp-section__inner sp-section__inner--narrow">
                    <p className="sp-overline">Practical Information</p>
                    <h2 className="sp-heading">Costs &amp; Policies</h2>
                    <div className="sp-prose">
                        <p>We host volunteers year-round. Most short- or medium-term volunteers come to us through Instagram, word-of-mouth or <a href="https://www.workaway.info/518875272681-en.html" target="_blank" rel="noopener noreferrer">Workaway</a>. Currently we offer fifteen-day or 21-day volunteer programs.</p>
                        <p>The fifteen-day program is payable at Rs. 9,000 per head. The only charge for the one-month program is a placeholder fee of Rs. 5,000 per head to secure your place. All volunteers are subject to a probationary period of one week.</p>
                        <p>If you wish to experience our farm for less than fifteen days, we can accommodate you in our treehouses as guests (subject to availability).</p>
                    </div>
                    <div className="sp-highlight">
                        <p>Our mission is to plant the seed of organic farming, sustainability and community living to those keen to learn — and have fun in the process.</p>
                    </div>
                </div>
            </section>

            <hr className="sp-divider" />

            {/* ═══════════ GALLERY ═══════════ */}
            <section className="sp-section sp-section--alt">
                <div className="sp-section__inner">
                    <p className="sp-overline">Volunteer Life</p>
                    <div className="sp-gallery">
                        <div className="sp-gallery__item"><Image src="/images/site/vol-1.jpeg" alt="Volunteer life" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="/images/site/vol-2.jpg" alt="Farm work" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="/images/site/vol-3.jpeg" alt="Community" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="/images/site/vol-4.jpeg" alt="Activities" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="/images/site/vol-5.jpeg" alt="Farming" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="/images/site/vol-6.jpeg" alt="Group activities" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="/images/site/vol-7.jpeg" alt="Nature" fill sizes="33vw" /></div>
                        <div className="sp-gallery__item"><Image src="/images/site/vol-8.jpeg" alt="Volunteering at Varanashi" fill sizes="33vw" /></div>
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
                        Email your CV &amp; cover letter · <a href="tel:+919482213019">+91 94822 13019</a>
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
}
