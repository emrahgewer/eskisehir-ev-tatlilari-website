import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const MenuPage = () => {
  const categories = useMemo(
    () => ['Tümü', ...new Set(products.map((item) => item.category))],
    []
  )
  const [activeCategory, setActiveCategory] = useState('Tümü')

  const filteredProducts =
    activeCategory === 'Tümü'
      ? products
      : products.filter((item) => item.category === activeCategory)

  return (
    <div className="bg-cream px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
            Menü
          </p>
          <h1 className="mt-2 font-serif text-4xl text-cocoa">
            Lezzet Dolu Menümüz
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-muted">
            Eskişehir Ev Tatlıları&apos;nın tüm ev yapımı lezzetlerini keşfedin.
            Her biri özenle, taze malzemelerle ve hijyenik mutfağımızda
            hazırlanır.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-gold text-white shadow-sm'
                    : 'bg-rose/10 text-rose hover:bg-rose/20'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuPage

