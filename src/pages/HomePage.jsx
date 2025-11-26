import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const featuredTreats = [
  {
    name: 'Anne Usulü Havuçlu Kek',
    description: 'Bol cevizli, tarçınlı ve krem peynir dolgulu.',
    price: 85,
    unit: 'Dilim',
    image: 'https://placehold.co/600x400/EDC4B8/4A4238?text=Havuçlu+Kek',
  },
  {
    name: 'Islak Brownie',
    description: 'Yoğun çikolatalı, hafif bitter ve yumuşacık kıvamlı.',
    price: 95,
    unit: 'Dilim',
    image: 'https://placehold.co/600x400/DCA767/4A4238?text=Islak+Brownie',
  },
  {
    name: 'Çilekli Magnolia',
    description: 'Taze çilekli, vanilya kremalı, hafif ve zarif tat.',
    price: 75,
    unit: 'Porsiyon',
    image: 'https://placehold.co/600x400/EDC4B8/4A4238?text=%C3%87ilekli+Magnolia',
  },
  {
    name: 'Karışık Gün Tabağı',
    description: 'Çay saatleriniz için mini kek ve kurabiye seçkisi.',
    price: 150,
    unit: 'Tabak',
    image: 'https://placehold.co/600x400/DCA767/4A4238?text=Kar%C4%B1%C5%9F%C4%B1k+Tabak',
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
            {Array.from({ length: 6 }).map((_, idx) => (
              <a
                key={idx}
                href="https://www.instagram.com/eski_kek26?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-lg bg-rose/10"
              >
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="https://placehold.co/300x300/F5F0E6/DCA767?text=IG+Post"
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

