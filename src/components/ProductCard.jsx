import { MessageCircle } from 'lucide-react'

const ProductCard = ({ name, description, price, unit, image }) => {
  const message = encodeURIComponent(
    `Merhaba, ${name} (${unit}) sipariş vermek istiyorum.`
  )

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[4/3] w-full bg-beige">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="p-5">
        <h3 className="font-serif text-lg text-cocoa">{name}</h3>
        <p className="mt-2 text-sm text-muted">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-gold">
            {price}₺{' '}
            <span className="text-xs font-normal text-muted">/ {unit}</span>
          </span>
          <a
            href={`https://wa.me/905001112233?text=${message}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-rose/10 px-3 py-1.5 text-sm font-semibold text-rose transition hover:bg-rose/20"
          >
            <MessageCircle className="h-4 w-4" />
            Sipariş
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

