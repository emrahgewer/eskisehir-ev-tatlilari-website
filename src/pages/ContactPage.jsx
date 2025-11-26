import { useState } from 'react'
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form is for display only - no backend integration
    alert(
      'Bu form şu anda aktif değildir. Lütfen WhatsApp veya e-posta ile iletişime geçin.'
    )
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-cocoa sm:text-5xl">
            Bize Ulaşın
          </h1>
          <p className="mt-4 text-lg text-muted">
            Sorularınız, siparişleriniz ve özel talepleriniz için bize
            yazmaktan çekinmeyin.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          <section className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-serif text-2xl text-cocoa">
              İletişim Bilgilerimiz
            </h2>
            <div className="space-y-4">
              <a
                href="https://wa.me/905072635700"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl bg-white/80 p-4 shadow-sm transition hover:bg-white hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose/10 text-rose">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-cocoa">WhatsApp Hattı</p>
                  <p className="text-sm text-muted">0507 263 57 00</p>
                </div>
              </a>

              <a
                href="tel:+905072635700"
                className="flex items-center gap-4 rounded-xl bg-white/80 p-4 shadow-sm transition hover:bg-white hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-cocoa">Telefon</p>
                  <p className="text-sm text-muted">0507 263 57 00</p>
                </div>
              </a>

              <a
                href="mailto:info@eskisehirevtatlilari.com"
                className="flex items-center gap-4 rounded-xl bg-white/80 p-4 shadow-sm transition hover:bg-white hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose/10 text-rose">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-cocoa">E-posta</p>
                  <p className="text-sm text-muted">
                    info@eskisehirevtatlilari.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl bg-white/80 p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-cocoa">Adres</p>
                  <p className="text-sm text-muted">Eskişehir, Türkiye</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-serif text-2xl text-cocoa">
              Mesaj Gönderin
            </h2>
            <div className="rounded-2xl bg-white/80 p-6 shadow-soft">
              <p className="mb-4 text-sm text-muted">
                <strong className="text-cocoa">Not:</strong> Bu form şu anda
                aktif değildir ve backend entegrasyonu bulunmamaktadır. Gerçek
                sorularınız ve siparişleriniz için lütfen yukarıdaki WhatsApp
                hattımızı veya e-posta adresimizi kullanın.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-cocoa"
                  >
                    Adınız Soyadınız
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-beige bg-white px-4 py-3 text-cocoa placeholder:text-muted focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-cocoa"
                  >
                    E-posta Adresiniz
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-beige bg-white px-4 py-3 text-cocoa placeholder:text-muted focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-cocoa"
                  >
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="mt-2 w-full rounded-lg border border-beige bg-white px-4 py-3 text-cocoa placeholder:text-muted focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-rose"
                >
                  Gönder
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
