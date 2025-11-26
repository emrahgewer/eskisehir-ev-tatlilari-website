import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'

const currentYear = new Date().getFullYear()

const socialLinks = [
  {
    label: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/eski_kek26?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  },
  { label: 'Facebook', icon: Facebook, href: '#' },
  { label: 'Twitter', icon: Twitter, href: '#' },
]

const quickLinks = [
  { to: '/', label: 'Ana Sayfa' },
  { to: '/menu', label: 'Menü' },
  { to: '/hakkimizda', label: 'Hakkımızda' },
  { to: '/iletisim', label: 'İletişim' },
]

const Footer = () => {
  return (
    <footer className="bg-cocoa text-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-2xl text-white">
              Eskişehir Ev Tatlıları
            </h3>
            <p className="mt-4 text-sm text-cream/80">
              Eskişehir&apos;in kalbinden sofralarınıza uzanan, ev yapımı ve
              taptaze lezzetler.
            </p>
            <p className="mt-6 text-xs text-cream/60">
              © {currentYear} Eskişehir Ev Tatlıları. Tüm hakları saklıdır.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold">
              Hızlı Linkler
            </h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream/80 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold">
              Bize Ulaşın
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-cream/80">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold" />
                <a
                  href="https://wa.me/905072635700"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  0507 263 5700
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold" />
                <a
                  href="mailto:info@eskisehirevtatlilari.com"
                  className="transition hover:text-white"
                >
                  info@eskisehirevtatlilari.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gold" />
                <span>Eskişehir, Türkiye</span>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

