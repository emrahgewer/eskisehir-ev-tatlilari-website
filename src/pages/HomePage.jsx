import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const featuredTreats = [
  {
    name: 'Havuçlu Tarçınlı Kek',
    description: 'Bol cevizli, tarçınlı ve krem peynir dolgulu klasik lezzet.',
    price: 350,
    unit: 'Tepsi',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=400&fit=crop&auto=format',
  },
  {
    name: 'Islak Kek',
    description: 'Yoğun çikolatalı, hafif bitter ve yumuşacık kıvamlı.',
    price: 250,
    unit: 'Tepsi',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=400&fit=crop&auto=format',
  },
  {
    name: 'Orman Meyveli Kek',
    description: 'Taze orman meyveleri ile hazırlanan özel lezzet.',
    price: 500,
    unit: 'Tepsi',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop&auto=format',
  },
  {
    name: 'Kısır',
    description: 'Nar ekşili, taze yeşillikli ve bol limonlu kısır.',
    price: 200,
    unit: 'Yarım Kilo',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&h=400&fit=crop&auto=format',
  },
]

const HomePage = () => {
  return (
    <div className="bg-cream">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white/80 p-8 text-center shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
            Eskişehir&apos;in Sevilen Ev Tatlıları
          </p>
          <h1 className="mt-4 font-serif text-4xl text-cocoa sm:text-5xl">
            Anne eli değmiş gibi taze, hijyenik ve samimi lezzetler
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted">
            Geleneksel tariflerimizi modern dokunuşlarla harmanlayarak,
            misafirlerinize gururla ikram edebileceğiniz tatlılar hazırlıyoruz.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/905072635700"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-rose"
            >
              Sipariş Ver
            </a>
            <Link
              to="/menu"
              className="rounded-full border border-rose px-6 py-3 text-sm font-semibold text-cocoa transition hover:bg-rose/10"
            >
              Menüyü İncele
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
            Favoriler
          </p>
          <h2 className="mt-2 font-serif text-3xl text-cocoa">
            Popüler Lezzetlerimiz
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted">
            Instagram vitrinimizde öne çıkan tatlılarımızdan birkaçını keşfedin.
            Her biri hijyenik mutfağımızda özenle hazırlanıyor.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredTreats.map((treat) => (
            <ProductCard key={treat.name} {...treat} />
          ))}
        </div>
      </section>

      <section className="bg-beige/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
            Sosyal
          </p>
          <h2 className="mt-2 font-serif text-3xl text-cocoa">
            Bizi Instagram&apos;da Takip Edin!
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted">
            En taze paylaşımlarımız ve kampanyalarımız için bizi kaçırmayın!
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {[
              'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=300&h=300&fit=crop&auto=format',
              'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=300&fit=crop&auto=format',
              'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=300&fit=crop&auto=format',
              'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop&auto=format',
              'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop&auto=format',
              'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=300&fit=crop&auto=format',
            ].map((imgUrl, idx) => (
              <a
                key={idx}
                href="https://www.instagram.com/eski_kek26?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-lg bg-rose/10"
              >
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src={imgUrl}
                    alt="Instagram paylaşımı"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
              </a>
            ))}
          </div>

          <a
            href="https://www.instagram.com/eski_kek26?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-cocoa px-6 py-3 text-sm font-semibold text-cream shadow-sm transition hover:bg-gold"
          >
            Instagram Profilimizi Ziyaret Edin
          </a>
        </div>
      </section>
    </div>
  )
}

export default HomePage

