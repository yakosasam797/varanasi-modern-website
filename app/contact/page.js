import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata = {
    title: 'Contact Us',
    description: 'Get in touch with Varanashi Organic Farms — visit, call, or send us a message.',
};

export default function ContactPage() {
    return (
        <>
            <Nav />

            <section className="page-header" style={{ minHeight: '40vh' }}>
                <div className="page-header-bg">
                    <Image src="/images/site/farm-landscape.jpg" alt="Varanashi Farms" fill style={{ objectFit: 'cover', filter: 'brightness(0.65) saturate(0.8)' }} sizes="100vw" priority />
                </div>
                <div className="page-header-overlay"></div>
                <div className="page-header-content">
                    <RevealOnScroll><p className="text-overline">Get in Touch</p></RevealOnScroll>
                    <RevealOnScroll><h1>Contact Us</h1></RevealOnScroll>
                </div>
            </section>

            <section style={{ padding: 'var(--space-24) 0' }}>
                <div className="container">
                    <div className="grid-editorial">
                        <RevealOnScroll direction="left">
                            <p className="text-overline" style={{ marginBottom: 'var(--space-5)' }}>Send a Message</p>
                            <h2 className="text-h1" style={{ marginBottom: 'var(--space-6)' }}>We&apos;d Love to<br /><span className="text-accent">Hear from You</span></h2>
                            <form className="contact-form" onSubmit={undefined}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" id="name" placeholder="Your full name" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" placeholder="you@example.com" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <select id="subject" defaultValue="General Inquiry">
                                        <option>General Inquiry</option>
                                        <option>Farm Stay / Retreat Booking</option>
                                        <option>Product Order</option>
                                        <option>Volunteering</option>
                                        <option>Collaboration / Partnership</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" placeholder="Tell us how we can help..."></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Send Message</button>
                            </form>
                        </RevealOnScroll>
                        <RevealOnScroll direction="right">
                            <div style={{ background: 'var(--color-cream)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-8)' }}>
                                <p className="text-overline" style={{ marginBottom: 'var(--space-5)' }}>Visit &amp; Call</p>
                                <h3 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)' }}>Varanashi Farms, Adyanadka</h3>
                                <div style={{ marginBottom: 'var(--space-6)' }}>
                                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-stone)', marginBottom: 'var(--space-2)' }}>Phone</p>
                                    <a href="tel:+917676112395" style={{ display: 'block', fontSize: 'var(--text-lg)', color: 'var(--color-soil)', marginBottom: 'var(--space-2)' }}>+91 76761 12395</a>
                                    <a href="tel:+919482213019" style={{ display: 'block', fontSize: 'var(--text-lg)', color: 'var(--color-soil)' }}>+91 9482 213019</a>
                                </div>
                                <div style={{ marginBottom: 'var(--space-6)' }}>
                                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-stone)', marginBottom: 'var(--space-2)' }}>For Retreats</p>
                                    <a href="tel:+919482213019" style={{ display: 'block', fontSize: 'var(--text-lg)', color: 'var(--color-soil)' }}>+91 94822 13019</a>
                                    <a href="tel:+919449968377" style={{ display: 'block', fontSize: 'var(--text-lg)', color: 'var(--color-soil)' }}>+91 94499 68377</a>
                                </div>
                                <div style={{ marginBottom: 'var(--space-6)' }}>
                                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-stone)', marginBottom: 'var(--space-2)' }}>Social</p>
                                    <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                                        <a href="https://www.facebook.com/Varanashi-Organic-Farm-117836281699582/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-moss)' }}>Facebook</a>
                                        <a href="https://www.instagram.com/varanashiorganicfarms/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-moss)' }}>Instagram</a>
                                    </div>
                                </div>
                                <a href="https://goo.gl/maps/id4J5JzHcC62" target="_blank" rel="noopener noreferrer" className="link-arrow" style={{ marginTop: 'var(--space-4)' }}>Find us on Google Maps</a>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
