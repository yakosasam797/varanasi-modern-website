import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { PRODUCTS, getProductBySlug } from '@/lib/products';

export async function generateStaticParams() {
    return PRODUCTS.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    if (!product) {
        return { title: 'Product Not Found' };
    }
    return {
        title: `${product.name} — Varanashi Organic Farm`,
        description: product.description,
    };
}

export default async function ProductDetailPage({ params }) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        return (
            <>
                <Nav />
                <section className="product-detail-page">
                    <div className="container">
                        <p>Product not found.</p>
                        <Link href="/shop" className="btn btn-ghost">
                            ← Back to Shop
                        </Link>
                    </div>
                </section>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Nav />

            {/* ── Breadcrumb ── */}
            <div className="product-breadcrumb-wrapper">
                <nav className="product-breadcrumb" aria-label="Breadcrumb">
                    <ol>
                        <li>
                            <Link href="/#act-4">Home</Link>
                        </li>
                        <li>
                            <Link href="/shop">Shop</Link>
                        </li>
                        <li aria-current="page">{product.name}</li>
                    </ol>
                </nav>
            </div>

            {/* ── Product Detail ── */}
            <section className="product-detail-page">
                <div className="container">
                    <div className="product-detail">
                        <div className="product-detail__image">
                            <Image
                                src={product.img}
                                alt={product.name}
                                width={600}
                                height={600}
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                priority
                            />
                        </div>

                        <div className="product-detail__info">
                            <span className="product-detail__category">{product.category}</span>
                            <h1 className="product-detail__name">{product.name}</h1>
                            <p className="product-detail__price">{product.price}</p>
                            <p className="product-detail__weight">{product.weight}</p>
                            <p className="product-detail__desc">{product.description}</p>

                            <div className="product-detail__features">
                                <h3>Details</h3>
                                <ul>
                                    {product.details.map((d) => (
                                        <li key={d}>{d}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="product-detail__actions">
                                <a
                                    href={`https://varanashi.com/product/${product.slug}/`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    Buy on Varanashi.com →
                                </a>
                                <Link href="/#act-4" className="btn btn-ghost">
                                    ← Back to Products
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
