import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import ScrollEngine from '@/components/ScrollEngine';
import BentoProducts from '@/components/BentoProducts';
import FooterMinimal from '@/components/FooterMinimal';

export default function HomePage() {
  return (
    <>
      <Nav isHomepage />
      <ScrollEngine />

      {/* ═══════════ ACT 1 · HERO ═══════════ */}
      <section className="act-hero" id="act-1">
        <div className="act-hero__bg gpu">
          <Image
            src="https://varanashi.com/wp-content/uploads/2019/06/DSC_8373-860x500.jpg"
            alt="Varanashi organic farm aerial view"
            fill
            priority
            style={{ objectFit: 'cover', filter: 'saturate(0.85) brightness(0.75) contrast(1.05)' }}
            sizes="100vw"
          />
        </div>
        <div className="act-hero__overlay"></div>
        <div className="act-hero__content">
          <h1 className="act-hero__title">{"Varanashi".split("").map((char, i) => (<span key={i} className="char">{char}</span>))}</h1>
          <p className="act-hero__sub">
            Six generations have tended this soil.<br />
            The land remembers every hand.
          </p>
          <p className="act-hero__tagline">
            Organic Farm · Since 1816 · South India
          </p>
        </div>
        <div className="act-hero__scroll">
          <span>Scroll to discover</span>
          <div className="act-hero__scroll-line"></div>
        </div>
      </section>

      {/* ═══════════ ACT 2 · HORIZONTAL TIMELINE ═══════════ */}
      <section className="act-timeline" id="act-2">
        <div className="act-timeline__track">
          <TimelineEra
            overline="The Beginning"
            year="1816"
            title="A King's Gift"
            text="King Lingaraju of Kodagu gifts a vast stretch of land and a grand house at Moodambailu to a wiseman named Jyothishi. A family legacy is planted — one that will outlive empires."
            img="https://varanashi.com/wp-content/uploads/2019/06/IMG_20151023_082241-860x500.jpeg"
            alt="Historic Varanashi estate"
          />
          <TimelineEra
            overline="The Visionary"
            year="1950"
            title="Subraya Bhat's Dream"
            text="Sahakari Rathna Varanashi Subraya Bhat transforms the ancestral land. His conviction that farmers deserve dignity becomes a movement across South India."
            img="https://varanashi.com/wp-content/uploads/2019/06/img_4853-860x500.jpg"
            alt="Varanashi farms heritage"
          />
          <TimelineEra
            overline="The Institution"
            year="1972"
            title="CAMPCO Is Born"
            text="Shri Bhat founds CAMPCO Ltd. — today one of India's cooperative giants. A farmer's son builds an institution that will serve millions of growers for generations to come."
            img="https://varanashi.com/wp-content/uploads/2019/06/IMG_0810-860x500.jpg"
            alt="CAMPCO cooperative heritage"
          />
          <TimelineEra
            overline="The Turning Point"
            year="1991"
            title="Return to the Roots"
            text="After a decade of chemical farming brought disease and diminishing returns, the family makes a radical choice. Complete organic conversion. The soil begins to heal. So does everything it touches."
            img="https://varanashi.com/wp-content/uploads/2019/06/DSC_8373-860x500.jpg"
            alt="Organic transition"
          />
          <TimelineEra
            overline="The Next Generation"
            year="2019"
            title="World Champions"
            text="Partha Varanashi, youngest heir, coaches Team India at the Aquatic World Championships. He brings movement sports and aquatic education to the centuries-old farm — bridging heritage with youth."
            img="https://varanashi.com/wp-content/uploads/2019/06/treeshouse-pond-1-860x500.jpg"
            alt="Varanashi swimming pond"
          />
          <TimelineEra
            overline="The Living Legacy"
            year="2026"
            title="Two Centuries. One Soil."
            text="Today, Varanashi is a 100-acre ecosystem — organic farm, research foundation, retreat, swimming academy, adventure ground, and home. Six generations later, the land still speaks."
            img="https://varanashi.com/wp-content/uploads/2019/06/IMG_0605-860x500.jpg"
            alt="Varanashi today aerial"
          />
        </div>
        <div className="act-timeline__progress">
          <div className="act-timeline__progress-fill"></div>
        </div>
      </section>

      {/* ═══════════ ACT 3 · THE LAND (PINNED IMAGE + SCROLLING TEXT) ═══════════ */}
      <section className="act-land" id="act-3">
        <div className="act-land__wrapper">
          <div className="act-land__image gpu">
            <Image
              src="https://varanashi.com/wp-content/uploads/2019/06/DSC_8373-860x500.jpg"
              alt="Varanashi organic farm"
              fill
              style={{ objectFit: 'cover' }}
              sizes="55vw"
            />
          </div>
          <div className="act-land__text-col">
            <div className="act-land__block">
              <p className="text-overline" style={{ marginBottom: 'var(--space-5)' }}>
                Our Mission
              </p>
              <div className="text-accent-lg">
                Premium Certified<br />
                Organic Farm Inputs
              </div>
              <p>
                We aim at simulating the diversity and eco-friendliness of
                natural forests in farming and farm practices. During the last
                few decades, Varanashi Organizations have contributed greatly
                towards the promotion of organic and sustainable agriculture.
              </p>
            </div>
            <div className="act-land__block">
              <p className="text-overline" style={{ marginBottom: 'var(--space-5)' }}>
                Experience
              </p>
              <h3>Organic Retreats</h3>
              <p>
                Here at Varanashi we take a truly holistic view of personal
                well-being. Nutrition, exercise, lifestyle, and conscious
                choices all go into leading a happier and healthier life. Our
                organic retreats reflect this holistic approach on a
                centuries-old farm.
              </p>
            </div>
            <div className="act-land__block">
              <p className="text-overline" style={{ marginBottom: 'var(--space-5)' }}>
                From Our Soil
              </p>
              <h3>What We Produce</h3>
              <p>
                Every product carries the story of our soil — grown organically,
                processed with care, delivered with the trust of six generations.
                From cacao and spices to honey and rice, our produce reflects
                two centuries of stewardship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ ACT 4 · PRODUCTS (BENTO) ═══════════ */}
      <section className="act-products" id="act-4">
        <div className="act-products__header">
          <p className="text-overline" style={{ marginBottom: 'var(--space-5)' }}>
            From This Soil
          </p>
          <h2>
            What Grows Here<br />
            <em className="text-accent">Has Stories to Tell</em>
          </h2>
        </div>
        <BentoProducts />
        <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
          <Link href="/shop" className="btn btn-ghost">
            Explore All Products
          </Link>
        </div>
      </section>

      {/* ═══════════ ACT 5 · ORGANIC JOURNEY ═══════════ */}
      <section className="act-journey" id="act-5">
        <JourneyPanel
          year="1981"
          quote={<>&ldquo;The soil was speaking.<br />We weren&apos;t listening.&rdquo;</>}
          desc="The farm was converted to high-level chemical management. What came was more disease, more pests, and no increase in profitability."
          img="https://varanashi.com/wp-content/uploads/2019/06/IMG_0810-860x500.jpg"
          alt="Chemical farming era"
        />
        <JourneyPanel
          year="1991"
          quote={<>&ldquo;We chose a different path.<br />Six generations of instinct confirmed.&rdquo;</>}
          desc="Complete migration to organic methods. Slowly, steadily, the land responded. Yields increased. The ecosystem began to heal."
          img="https://varanashi.com/wp-content/uploads/2019/06/img_4853-860x500.jpg"
          alt="The turning point"
        />
        <JourneyPanel
          year="Now"
          quote={<>&ldquo;Nature itself<br />becomes the remedy.&rdquo;</>}
          desc="Bio-control agents replace pesticides. Agro-waste becomes compost. Water is harvested, not extracted. Research technologies are field-tested before wide-scale adoption."
          img="https://varanashi.com/wp-content/uploads/2019/06/DSC_8373-860x500.jpg"
          alt="Today — nature is the remedy"
        />
      </section>

      {/* ═══════════ ACT 6 · STAY ═══════════ */}
      <section className="act-stay" id="act-6">
        <div className="act-stay__header">
          <p className="text-overline" style={{ marginBottom: 'var(--space-5)' }}>
            Come Stay
          </p>
          <h2>
            Sleep Where the<br />
            <em className="text-accent">Stories Began</em>
          </h2>
        </div>
        <div className="act-stay__columns">
          <div className="act-stay__col-left">
            <StayCard
              overline="The Trees"
              name="Tree Houses"
              desc="No tree was pierced. Hardwood from the farm — teak, rosewood, acacia, jackfruit. A testament to building with nature."
              img="https://varanashi.com/wp-content/uploads/2019/06/DSC5250-860x500.jpg"
              alt="Devadaru Tree House"
            />
            <StayCard
              overline="The Earth"
              name="Mud Cottages"
              desc="Handcrafted from the same clay that grows the crops. Cool in summer, warm in monsoon."
              img="https://varanashi.com/wp-content/uploads/2022/12/Cottage_1-300x300.jpg"
              alt="Mud Cottage"
            />
          </div>
          <div className="act-stay__col-right">
            <StayCard
              overline="The Retreat"
              name="Organic Retreat"
              desc="Swim, walk, practice yoga, eat organic. Rejuvenate in an untouched environment."
              img="https://varanashi.com/wp-content/uploads/2019/06/treeshouse-pond-1-860x500.jpg"
              alt="Swimming pond retreat"
            />
            <StayCard
              overline="The Trail"
              name="Cacao Trail"
              desc="Pod to bar, farm to factory. Plant, graft, harvest, ferment. Taste chocolate at every stage."
              img="https://varanashi.com/wp-content/uploads/2019/03/image00002-scaled-300x300.jpeg"
              alt="Cacao Trail"
            />
          </div>
        </div>
      </section>

      {/* ═══════════ ACT 7 · PHILOSOPHY ═══════════ */}
      <section className="act-philosophy" id="act-7">
        <div className="act-philosophy__text">
          {"We aim not to conquer the land but to listen to it. To simulate the diversity of natural forests in our farming. To recycle what the earth gives us back into the earth. Six generations have understood this — that the soil is not a resource to be extracted, but a partner to be respected. Every compost heap, every pond, every tree that was never cut is a sentence in a conversation between this family and this land that has lasted two hundred years and will last two hundred more."
            .split(/\s+/)
            .map((word, i) => (<span key={i} className="word">{word} </span>))}
        </div>
      </section>

      {/* ═══════════ ACT 8 · CLOSING ═══════════ */}
      <section className="act-close" id="act-8">
        <p className="text-overline" style={{ marginBottom: 'var(--space-6)' }}>
          The Invitation
        </p>
        <h2 className="act-close__tagline">
          The soil remembers.<br />
          Come see for yourself.
        </h2>
        <div className="act-close__ctas">
          <Link href="/retreats" className="btn btn-primary">
            Book a Stay
          </Link>
          <Link href="/shop" className="btn btn-ghost">
            Explore Products
          </Link>
        </div>
        <div className="act-close__contact">
          <a href="tel:+917676112395">+91 76761 12395</a>
          <a href="tel:+919482213019">+91 9482 213019</a>
          <a
            href="https://www.instagram.com/varanashiorganicfarms/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/Varanashi-Organic-Farm-117836281699582/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <Link href="/contact">Contact</Link>
        </div>
      </section>

      <FooterMinimal />
    </>
  );
}

/* ─── Sub-components ─── */

function TimelineEra({ overline, year, title, text, img, alt }) {
  return (
    <div className="act-timeline__era">
      <div className="act-timeline__era-inner">
        <div>
          <p className="text-overline">{overline}</p>
          <div className="act-timeline__year">{year}</div>
          <h3 className="act-timeline__era-title">{title}</h3>
          <p className="act-timeline__era-text">{text}</p>
        </div>
        <div className="act-timeline__era-img">
          <Image
            src={img}
            alt={alt}
            width={860}
            height={500}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            sizes="50vw"
          />
        </div>
      </div>
    </div>
  );
}

function JourneyPanel({ year, quote, desc, img, alt }) {
  return (
    <div className="act-journey__panel">
      <div className="act-journey__panel-bg">
        <Image
          src={img}
          alt={alt}
          fill
          style={{
            objectFit: 'cover',
            filter: 'brightness(0.35) saturate(0.7)',
          }}
          sizes="100vw"
        />
      </div>
      <div className="act-journey__panel-content">
        <div className="act-journey__panel-year">{year}</div>
        <p className="act-journey__panel-quote">{quote}</p>
        <p className="act-journey__panel-desc">{desc}</p>
      </div>
    </div>
  );
}

function StayCard({ overline, name, desc, img, alt }) {
  return (
    <Link href="/retreats" className="stay-card">
      <div className="stay-card__img">
        <Image
          src={img}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="stay-card__content">
        <p className="text-overline">{overline}</p>
        <h3 className="stay-card__name">{name}</h3>
        <p className="stay-card__desc">{desc}</p>
      </div>
    </Link>
  );
}
