import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link href="/" className="nav-wordmark">
                            Varanashi
                        </Link>
                        <p>
                            We promote organic farming and healthy living through research,
                            field-testing, outreach, advisory services, organic exposure and
                            aquatic education.
                        </p>
                        <div className="footer-social">
                            <a
                                href="https://www.facebook.com/Varanashi-Organic-Farm-117836281699582/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Fb
                            </a>
                            <a
                                href="https://www.instagram.com/varanashiorganicfarms/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ig
                            </a>
                            <a
                                href="http://coachpartha.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                CP
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4>Explore</h4>
                        <div className="footer-links">
                            <Link href="/about">The Varanashi Story</Link>
                            <Link href="/shop">Shop Products</Link>
                            <Link href="/retreats">Stay &amp; Experience</Link>
                            <Link href="/fitness">Fitness Programs</Link>
                            <Link href="/volunteer">Volunteer</Link>
                        </div>
                    </div>
                    <div>
                        <h4>Organizations</h4>
                        <div className="footer-links">
                            <Link href="/vof">Organic Farms</Link>
                            <Link href="/vdrf">Research Foundation</Link>
                            <Link href="/vom">Organic Manures</Link>
                            <Link href="/vast">VAST Centre</Link>
                            <Link href="/vswim">Swimming Academy</Link>
                            <Link href="/stoked">Stoked Adventures</Link>
                        </div>
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <div className="footer-links">
                            <a href="tel:+917676112395">+91 76761 12395</a>
                            <a href="tel:+919482213019">+91 9482 213019</a>
                            <Link href="/contact">Send a Message</Link>
                            <a
                                href="https://goo.gl/maps/id4J5JzHcC62"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Find Us on Map
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 Varanashi. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Shipping &amp; Returns</a>
                        <a href="#">Terms</a>
                        <a href="#">Privacy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
