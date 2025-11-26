# Eskişehir Ev Tatlıları - Brand Website

Modern, responsive ve estetik bir marka web sitesi. Eskişehir'deki ev yapımı tatlı işletmesi için geliştirilmiş, sıcak, samimi ve hijyenik bir marka kimliğini yansıtan React tabanlı web uygulaması.

## 🚀 Teknoloji Stack

- **React 19** - Modern UI kütüphanesi
- **Vite** - Hızlı build tool ve dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Modern icon kütüphanesi

## 📦 Kurulum

### Gereksinimler

- Node.js (v18 veya üzeri önerilir)
- npm veya yarn

### Adımlar

1. Projeyi klonlayın veya indirin
2. Bağımlılıkları yükleyin:

```bash
npm install
```

3. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

4. Tarayıcınızda `http://localhost:5173` adresini açın

## 🛠️ Kullanılabilir Komutlar

- `npm run dev` - Geliştirme sunucusunu başlatır (hot reload ile)
- `npm run build` - Production build oluşturur
- `npm run preview` - Production build'i önizler
- `npm run lint` - ESLint ile kod kalitesini kontrol eder

## 📁 Proje Yapısı

```
EskiKekweb/
├── public/              # Statik dosyalar
│   └── index.html       # HTML template (SEO meta tags içerir)
├── src/
│   ├── components/      # Yeniden kullanılabilir bileşenler
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   └── ScrollToTopButton.jsx
│   ├── data/           # Statik veri dosyaları
│   │   └── products.js # Ürün verileri
│   ├── pages/          # Sayfa bileşenleri
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── HomePage.jsx
│   │   └── MenuPage.jsx
│   ├── App.jsx         # Ana uygulama bileşeni (routing)
│   ├── main.jsx        # Uygulama giriş noktası
│   └── index.css       # Global stiller ve Tailwind direktifleri
├── tailwind.config.js   # Tailwind CSS yapılandırması
└── package.json        # Proje bağımlılıkları
```

## 🎨 Tasarım Sistemi

### Renk Paleti

- **Cream (#FFFBF2)** - Ana arka plan rengi
- **Beige (#F5F0E6)** - İkincil arka plan
- **Gold/Terracotta (#DCA767)** - Vurgu ve butonlar
- **Rose (#EDC4B8)** - Aksan rengi
- **Cocoa (#4A4238)** - Ana metin rengi
- **Muted Gray (#7D766C)** - İkincil metin

### Tipografi

- **Başlıklar:** Serif font (Playfair Display, Lora benzeri)
- **Gövde Metni:** Sans-serif font (Inter, Open Sans benzeri)

### UI Elementleri

- Yuvarlatılmış köşeler (`rounded-xl`, `rounded-2xl`)
- Yumuşak gölgeler (`shadow-sm`, `shadow-md`)
- Bol beyaz alan (temiz, hijyenik görünüm)

## 📝 Yeni Ürün Ekleme

Ürünleri eklemek veya güncellemek için `src/data/products.js` dosyasını düzenleyin:

```javascript
{
  id: 'unique-id',
  category: 'Kekler & Pastalar',
  name: 'Ürün Adı',
  description: 'Kısa açıklama',
  price: 85,
  unit: 'Dilim',
  image: 'https://placehold.co/400x300/...'
}
```

**Kategoriler:**
- Kekler & Pastalar
- Kurabiyeler
- Sütlü Tatlılar
- Gün Tabakları
- Özel Paketler
- İçecekler

## 🔗 Önemli Linkler

- **WhatsApp:** `https://wa.me/905001112233`
- **Instagram:** `https://www.instagram.com/eski_kek26`
- **E-posta:** `info@eskisehirevtatlilari.com`

**Not:** WhatsApp numarasını ve diğer iletişim bilgilerini proje genelinde güncellemeyi unutmayın.

## 🚢 Deployment

### Vercel (Önerilen)

1. [Vercel](https://vercel.com) hesabı oluşturun
2. GitHub repository'nizi bağlayın
3. Build komutu: `npm run build`
4. Output dizini: `dist`
5. Deploy edin!

### Netlify

1. [Netlify](https://netlify.com) hesabı oluşturun
2. Repository'nizi bağlayın
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy edin!

### Diğer Platformlar

Herhangi bir statik hosting servisi kullanabilirsiniz. Sadece `npm run build` komutunu çalıştırıp `dist` klasörünü yükleyin.

## 🔮 Gelecek Geliştirmeler (Future Enhancements)

### Kısa Vadeli

- ✅ **Scroll to Top Button** - Tamamlandı
- ✅ **SEO Meta Tags** - Tamamlandı
- ⏳ **Gerçek Ürün Fotoğrafları** - Placeholder'ları gerçek, yüksek kaliteli fotoğraflarla değiştirme
- ⏳ **İletişim Formu Backend** - Formspree, Netlify Forms veya özel API entegrasyonu

### Orta Vadeli

- ⏳ **Dinamik Sipariş Sistemi** - Alışveriş sepeti ve ödeme entegrasyonu
- ⏳ **Yorumlar / Derecelendirmeler** - Müşteri yorumları ve ürün derecelendirmeleri
- ⏳ **Blog / Tarifler Bölümü** - Ev yapımı tarifler ve marka hikayesi blog yazıları
- ⏳ **Instagram Feed Entegrasyonu** - Gerçek Instagram gönderilerini dinamik olarak çekme

### Uzun Vadeli

- ⏳ **Admin Paneli** - Ürünleri ve siparişleri yönetmek için basit bir admin arayüzü
- ⏳ **Performans Optimizasyonu** - Lighthouse puanlarını artırmak için derinlemesine optimizasyonlar
  - Resim optimizasyonu (WebP, lazy loading)
  - Kod bölme (code splitting)
  - Service Worker / PWA desteği
- ⏳ **Çoklu Dil Desteği** - İngilizce ve Türkçe dil seçenekleri
- ⏳ **Canlı Sohbet** - WhatsApp Business API entegrasyonu

## 🐛 Bilinen Sorunlar

- İletişim formu şu anda sadece görüntüleme amaçlıdır (backend entegrasyonu yok)
- Ürün görselleri placeholder'dır, gerçek fotoğraflarla değiştirilmelidir
- Instagram feed statik placeholder görseller kullanıyor

## 📄 Lisans

Bu proje özel bir projedir. Tüm hakları saklıdır.

## 👥 Katkıda Bulunanlar

- Geliştirme: [Geliştirici Adı]
- Tasarım: Eskişehir Ev Tatlıları Marka Kimliği

## 📞 Destek

Sorularınız veya önerileriniz için:

- **E-posta:** info@eskisehirevtatlilari.com
- **WhatsApp:** 0507 263 57 00

---

**Not:** Bu README dosyası proje geliştikçe güncellenmelidir. Yeni özellikler eklendiğinde veya değişiklikler yapıldığında bu dosyayı güncellemeyi unutmayın.
