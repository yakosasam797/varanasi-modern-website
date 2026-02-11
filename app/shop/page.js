import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata = {
    title: 'Shop Organic',
    description: 'Shop certified organic products from Varanashi Farms — cacao, spices, honey, rice, and more. Grown with six generations of wisdom.',
};

const PRODUCTS = [
    { name: 'CACAO Beans', price: '₹350', category: 'Varanashi Produce', img: 'https://varanashi.com/wp-content/uploads/2019/03/image00002-scaled-300x300.jpeg' },
    { name: 'Cacao Dates 250gms', price: '₹250', category: 'Varanashi Produce', img: 'https://varanashi.com/wp-content/uploads/2019/03/image00008-300x300.jpeg' },
    { name: 'Cacao Nibs', price: '₹400', category: 'Varanashi Produce', img: 'https://varanashi.com/wp-content/uploads/2019/03/IMG_20231125_092921-1-300x300.jpg' },
    { name: 'Natural Honey', price: '₹500', category: 'Varanashi Produce', img: 'https://varanashi.com/wp-content/uploads/2019/03/blossom-compressed-300x300.jpg' },
    { name: 'Organic Turmeric Powder', price: '₹150', category: 'Varanashi Produce', img: 'https://varanashi.com/wp-content/uploads/2019/03/image00005-300x300.jpg' },
    { name: 'Black Pepper', price: '₹300', category: 'Varanashi Produce', img: 'https://varanashi.com/wp-content/uploads/2019/03/IMG_8568-compressed-300x300.jpg' },
    { name: 'Nutmeg', price: '₹400', category: 'Varanashi Produce', img: 'https://varanashi.com/wp-content/uploads/2019/03/image00005-300x300.jpg' },
    { name: 'Mace', price: '₹600', category: 'Varanashi Produce', img: 'https://varanashi.com/wp-content/uploads/2019/03/image00005-300x300.jpg' },
    { name: 'Organic Boiled Rice', price: '₹120', category: 'Varanashi Produce', img: 'https://varanashi.com/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-17-at-4.36.42-PM-300x300.jpeg' },
    { name: 'Organic Jackfruit Seeds', price: '₹200', category: 'Varanashi Produce', img: 'https://varanashi.com/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-16-at-1.59.01-PM-300x300.jpeg' },
    { name: 'Varanashi Blossom', price: '₹350', category: 'Varanashi Produce', img: 'https://varanashi.com/wp-content/uploads/2019/03/blossom-compressed-300x300.jpg' },
    { name: 'Krishi Mithra Trolley', price: 'Enquire', category: 'Agricultural Inputs', img: 'https://varanashi.com/wp-content/uploads/2019/03/trolley-300x300.jpg' },
];

export default function ShopPage() {
    return (
        <>
            <Nav />

            <section className="page-header">
                <div className="page-header-bg">
                    <Image src="https://varanashi.com/wp-content/uploads/2019/03/image00002-scaled-300x300.jpeg" alt="Organic produce from Varanashi" fill style={{ objectFit: 'cover', filter: 'brightness(0.65) saturate(0.8)' }} sizes="100vw" priority />
                </div>
                <div className="page-header-overlay"></div>
                <div className="page-header-content">
                    <RevealOnScroll><p className="text-overline">From Our Farm</p></RevealOnScroll>
                    <RevealOnScroll><h1>Shop Organic</h1></RevealOnScroll>
                    <RevealOnScroll><p>Every product carries the story of our soil — grown organically, processed with care, delivered with the trust of six generations.</p></RevealOnScroll>
                </div>
            </section>

            <section className="section-cream" style={{ padding: 'var(--space-12) 0' }}>
                <div className="container-text text-center">
                    <RevealOnScroll>
                        <p className="text-overline" style={{ marginBottom: 'var(--space-4)' }}>Curated Collection</p>
                        <h2 className="text-h2">Certified organic produce from our centuries-old farm — <em className="text-accent">spices, cacao, honey, rice, and farm inputs.</em></h2>
                    </RevealOnScroll>
                </div>
            </section>

            <section style={{ padding: 'var(--space-24) 0' }}>
                <div className="container">
                    <div className="product-grid stagger">
                        {PRODUCTS.map((product, i) => (
                            <RevealOnScroll key={i}>
                                <div className="product-card">
                                    <div className="product-card-img">
                                        <Image src={product.img} alt={product.name} width={300} height={300} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div className="product-card-body">
                                        <p className="product-card-category">{product.category}</p>
                                        <p className="product-card-name">{product.name}</p>
                                        <p className="product-card-price">{product.price}</p>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
