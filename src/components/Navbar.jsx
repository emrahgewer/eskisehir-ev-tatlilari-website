import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Ana Sayfa', to: '/' },
  { name: 'Menü', to: '/menu' },
  { name: 'Hakkımızda', to: '/hakkimizda' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-cream/95 shadow-soft backdrop-blur supports-backdrop:bg-cream/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="font-serif text-lg text-cocoa sm:text-2xl"
          onClick={closeMenu}
        >
          Eskişehir Ev Tatlıları
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="text-sm font-medium text-muted transition hover:text-cocoa"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/905072635700"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-rose"
          >
            Sipariş Ver
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Menüyü Aç"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-cocoa" />
          ) : (
            <Menu className="h-6 w-6 text-cocoa" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-beige bg-cream p-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-base font-medium text-cocoa"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/905072635700"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gold px-4 py-2 text-center text-base font-semibold text-white shadow-sm transition hover:bg-rose"
              onClick={closeMenu}
            >
              Sipariş Ver
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

