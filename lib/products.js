/**
 * Shared product data used by BentoProducts (homepage) and Shop page.
 * Images sourced directly from the live Varanashi website.
 *
 * Products with `bento: true` are featured in the homepage bento grid (9 max).
 * All products appear on the /shop page.
 */

export const PRODUCTS = [
    {
        name: 'CACAO Beans',
        slug: 'cacao-beans',
        price: '₹1,500.00',
        weight: '1 KG',
        category: 'Varanashi Produce',
        description:
            'Shade-grown beneath ancient areca palms — from pod to powder on the same soil. Hand-harvested, fermented, and sun-dried on the farmhouse roof.',
        details: [
            'Single-origin, shade-grown cacao',
            'Fermented and sun-dried on-farm',
            'Certified organic since 1991',
            'Rich in antioxidants and flavonoids',
        ],
        img: 'https://varanashi.com/wp-content/uploads/2019/03/image00002-scaled-300x300.jpeg',
        span: 'wide',
        bento: true,
    },
    {
        name: 'Cacao Dates 250gms',
        slug: 'cacao-dates-250gms',
        price: '₹300.00',
        weight: '250 Grams',
        category: 'Varanashi Produce',
        description:
            'A wholesome blend of organic cacao and premium dates — nature\'s perfect energy snack. Hand-crafted on the farm with ingredients grown right here.',
        details: [
            'Made with farm-grown organic cacao',
            'Natural sweetness from premium dates',
            'No added sugar or preservatives',
            'Perfect pre-workout energy boost',
        ],
        img: 'https://varanashi.com/wp-content/uploads/2023/07/IMG_20230706_153507-300x300.jpg',
        bento: true,
    },
    {
        name: 'Cacao Nibs',
        slug: 'cacao-nibs',
        price: '₹700.00',
        weight: '200 Grams',
        category: 'Varanashi Produce',
        description:
            'Roasted and cracked cacao beans — pure chocolate in its most honest form. Crunchy, slightly bitter, endlessly versatile. From one of the oldest cacao blocks in South India, cultivated since 1965.',
        details: [
            'Trinitario & Forestro varieties',
            'Lightly roasted for depth of flavour',
            'No sugar, no additives',
            'Source of natural energy and iron',
        ],
        img: 'https://varanashi.com/wp-content/uploads/2019/03/IMG_20231125_092921-1-300x300.jpg',
        bento: true,
    },
    {
        name: 'Natural Honey',
        slug: 'natural-honey',
        price: '₹300.00 – ₹800.00',
        weight: '250g / 500g / 1 KG',
        category: 'Varanashi Produce',
        description:
            'Harvested from hives that chose the farm — uninvited, unmanaged, wild. Multi-floral, seasonally unique flavours from a biodiverse organic estate.',
        details: [
            'Unheated, unfiltered, raw honey',
            'Multi-floral from farm biodiversity',
            'Wild bee colonies, ethically harvested',
            'Rich in enzymes and natural pollen',
        ],
        img: 'https://varanashi.com/wp-content/uploads/2019/03/blossom-compressed-300x300.jpg',
        bento: true,
    },
    {
        name: 'Nutmeg',
        slug: 'nutmeg',
        price: '₹150.00',
        weight: '25 Grams',
        category: 'Varanashi Produce',
        description:
            'The scarlet lace of mace wraps each seed like a gift. Trees here are older than memory — their fragrance reaches you first.',
        details: [
            'Whole nutmeg from heritage trees',
            'Sun-dried naturally on the estate',
            'Intensely aromatic and flavourful',
            'Organically grown on the estate',
        ],
        img: 'https://varanashi.com/wp-content/uploads/2019/03/image00005-300x300.jpg',
        span: 'tall',
        bento: true,
    },
    {
        name: 'Varanashi Black Pepper',
        slug: 'varanashi-black-pepper',
        price: '₹200.00 – ₹1,000.00',
        weight: '100g / 1 KG',
        category: 'Varanashi Produce',
        description:
            'Grown in shade, aged by monsoons — each vine wraps around a living tree. The old way, the only way.',
        details: [
            'Handpicked and sun-dried',
            'No concrete poles — vine-on-tree method',
            'Sorted by grade on the veranda',
            'Bold aroma, sharp pungency',
        ],
        img: 'https://varanashi.com/wp-content/uploads/2019/03/IMG_8568-compressed-300x300.jpg',
        bento: true,
    },
    {
        name: 'Mace',
        slug: 'mace',
        price: '₹150.00',
        weight: '25 Grams',
        category: 'Varanashi Produce',
        description:
            'The outer covering of nutmeg fruit, mace is a prized spice with a subtle, warm flavour. Organically grown and hand-harvested from Varanashi Farms.',
        details: [
            'Outer lace of the nutmeg fruit',
            'Subtle, warm aroma',
            'Organically grown on the estate',
            'Hand-picked and sun-dried',
        ],
        img: 'https://varanashi.com/wp-content/uploads/2019/03/image00005-300x300.jpg',
        bento: true,
    },
    {
        name: 'Organic Boiled Rice',
        slug: 'organic-boiled-rice',
        price: '₹200.00 – ₹850.00',
        weight: '1 KG / 5 KG',
        category: 'Varanashi Produce',
        description:
            'Traditional boiled rice grown in the fertile lowlands of the estate. Parboiled using heritage methods — retaining nutrition and flavour.',
        details: [
            'Parboiled using traditional methods',
            'Grown in organic paddy fields',
            'High in fibre and nutrients',
            'Staple grain of the Western Ghats',
        ],
        img: 'https://varanashi.com/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-17-at-4.36.42-PM-300x300.jpeg',
        span: 'wide',
        bento: true,
    },
    {
        name: 'Organic Jackfruit Seeds',
        slug: 'organic-jackfruit-seeds',
        price: '₹300.00',
        weight: '250 Grams',
        category: 'Varanashi Produce',
        description:
            'Ancient jackfruit trees scattered across the farm — some are over a century old. Seeds processed on-farm into chips, preserves, and flour.',
        details: [
            'From century-old jackfruit trees',
            'Nitrogen-fixer that enriches soil',
            'Processed on-farm, sun-dried',
            'High protein, low glycemic index',
        ],
        img: 'https://varanashi.com/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-16-at-1.59.01-PM-300x300.jpeg',
        bento: true,
    },
    {
        name: 'Organic Turmeric Powder',
        slug: 'organic-turmeric-powder',
        price: '₹100.00',
        weight: '50 Grams',
        category: 'Varanashi Produce',
        description:
            'Bright, aromatic turmeric grown in the shade of the Western Ghats canopy. Dried and ground on the farm — nothing added, nothing taken away.',
        details: [
            'Shade-grown, high curcumin content',
            'Stone-ground on the estate',
            'No artificial colours or additives',
            'Certified organic since 1991',
        ],
        img: 'https://varanashi.com/wp-content/uploads/2019/03/turmeric-300x300.jpg',
        bento: false,
    },
    {
        name: 'Varanashi White Pepper',
        slug: 'varanashi-white-pepper',
        price: '₹85.00',
        weight: '25 Grams',
        category: 'Varanashi Produce',
        description:
            'Mature pepper berries soaked and sun-dried to reveal the inner seed — milder than black pepper with a refined, earthy heat.',
        details: [
            'Vine-on-tree grown, shade-dried',
            'Milder, more complex than black pepper',
            'Ideal for light sauces and soups',
            'Organically grown on the estate',
        ],
        img: 'https://varanashi.com/wp-content/uploads/2019/03/IMG_8568-compressed-300x300.jpg',
        bento: false,
    },
    {
        name: 'Varanashi Blossom',
        slug: 'varanashi-blossom',
        price: '₹130.00',
        weight: '1 KG',
        category: 'Organic Agricultural Inputs',
        description:
            'A signature organic agricultural input from the farm — crafted from the blossoms and bio-waste of the estate\'s diverse canopy. Enriches soil and promotes microbial life.',
        details: [
            'Unique farm-signature product',
            'Enriches soil microbial diversity',
            'Made from estate bio-waste',
            'Certified organic input',
        ],
        img: 'https://varanashi.com/wp-content/uploads/2019/03/blossom-compressed-300x300.jpg',
        bento: false,
    },
    {
        name: 'Varanashi Composter',
        slug: 'varanashi-composter',
        price: '₹215.00',
        weight: '500 Grams',
        category: 'Organic Agricultural Inputs',
        description:
            'A bio-inoculant that accelerates composting of farm waste. Developed and field-tested at Varanashi to convert agro-waste into rich organic manure.',
        details: [
            'Accelerates composting process',
            'Field-tested at Varanashi farms',
            'Converts agro-waste to manure',
            'Promotes beneficial microbes',
        ],
        img: 'https://varanashi.com/wp-content/uploads/2022/12/composter-300x300.jpg',
        bento: false,
    },
    {
        name: 'Varanashi Sasyahar',
        slug: 'varanashi-sasyahar',
        price: '₹180.00',
        weight: '2 KG',
        category: 'Organic Agricultural Inputs',
        description:
            'A natural plant growth promoter developed through years of research on the farm. Stimulates root development and enhances nutrient absorption.',
        details: [
            'Natural plant growth promoter',
            'Enhances nutrient absorption',
            'Developed through on-farm research',
            'Safe for organic certification',
        ],
        img: 'https://varanashi.com/wp-content/uploads/2022/12/sasyahar-300x300.jpg',
        bento: false,
    },
    {
        name: 'Varanashi Tricho Plus',
        slug: 'varanashi-tricho-plus',
        price: '₹250.00',
        weight: '500 Grams',
        category: 'Organic Agricultural Inputs',
        description:
            'A Trichoderma-based bio-fungicide for organic crop protection. Controls soil-borne diseases while promoting plant health naturally.',
        details: [
            'Trichoderma-based bio-fungicide',
            'Controls soil-borne diseases',
            'Promotes beneficial soil flora',
            'Compatible with organic farming',
        ],
        img: 'https://varanashi.com/wp-content/uploads/2022/12/tricho-300x300.jpg',
        bento: false,
    },
];

/**
 * Products flagged for the homepage bento grid.
 */
export const BENTO_PRODUCTS = PRODUCTS.filter((p) => p.bento);

/**
 * Find a product by its URL slug.
 * @param {string} slug
 * @returns {object|undefined}
 */
export function getProductBySlug(slug) {
    return PRODUCTS.find((p) => p.slug === slug);
}
