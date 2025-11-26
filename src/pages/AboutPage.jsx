const AboutPage = () => {
  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-cocoa sm:text-5xl">
            Biz Kimiz?
          </h1>
          <p className="mt-4 text-lg text-muted">
            Eskişehir&apos;in Kalbinden Sofralarınıza Ulaşan Bir Tatlı Hikayesi
          </p>
        </div>

        <div className="mt-12 space-y-12">
          <section className="space-y-6">
            <div className="prose prose-lg mx-auto max-w-3xl text-cocoa">
              <p className="text-base leading-relaxed text-muted">
                Eskişehir Ev Tatlıları olarak, ev yapımı lezzetlerin sıcaklığını
                ve samimiyetini sofralarınıza taşıyoruz. Her bir tatlımız,
                ailemizden bize miras kalan geleneksel tariflerle, modern
                hijyen standartlarında hazırlanıyor. &quot;Anne eli değmiş
                gibi&quot; dediğiniz o özel dokunuşu, her siparişinizde
                hissetmeniz için çalışıyoruz.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Mutfağımızda, her şey taze malzemelerle, özenle ve sevgiyle
                hazırlanıyor. Eskişehir&apos;in yerel lezzet kültüründen
                ilham alarak, hem geleneksel hem de çağdaş tatlılar sunuyoruz.
                Müşterilerimizin güvenini kazanmak ve onlara en kaliteli
                deneyimi sunmak, işimizin temel taşı.
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <img
                src="https://placehold.co/800x600/EDC4B8/4A4238?text=Hikayemiz"
                alt="Eskişehir Ev Tatlıları mutfağı"
                className="w-full rounded-2xl shadow-md"
              />
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-cocoa">Felsefemiz</h2>
            <div className="prose prose-lg mx-auto max-w-3xl text-cocoa">
              <p className="text-base leading-relaxed text-muted">
                Bizim için tatlı yapmak, sadece bir iş değil; bir tutku ve
                gelenek. Her tarifimiz, nesiller boyu aktarılan bilgi birikimi
                ile bugünün hijyen ve kalite standartlarını birleştiriyor.
                Yerel tedarikçilerimizden aldığımız taze malzemelerle,
                müşterilerimizin sofralarına özel anlar katıyoruz.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Modern dokunuşlarla zenginleştirdiğimiz klasik lezzetlerimiz,
                her yaştan insanın beğenisine hitap ediyor. Çocukların
                sevdiği, yetişkinlerin özlediği, misafirlerin gururla ikram
                ettiği tatlılar hazırlıyoruz. Her siparişinizde, sizin için
                özel hazırlanmış, taze ve lezzetli bir deneyim sunuyoruz.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-cocoa">Ekibimiz</h2>
            <div className="mx-auto max-w-2xl">
              <div className="rounded-2xl bg-white/80 p-8 shadow-soft">
                <div className="flex flex-col items-center gap-6 sm:flex-row">
                  <div className="flex-shrink-0">
                    <img
                      src="https://placehold.co/200x200/EDC4B8/4A4238?text=Ekibimiz"
                      alt="Eskişehir Ev Tatlıları ekibi"
                      className="h-32 w-32 rounded-full object-cover shadow-md sm:h-40 sm:w-40"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-base leading-relaxed text-muted">
                      Eskişehir Ev Tatlıları&apos;nın arkasında, bu işe gönül
                      vermiş, deneyimli ve tutkulu bir ekip var. Her birimiz,
                      müşterilerimizin mutluluğunu ve memnuniyetini ön planda
                      tutarak çalışıyoruz. Sizlerin sofralarınızı
                      güzelleştirmek, bizim en büyük motivasyonumuz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-4xl">
            <img
              src="https://placehold.co/800x500/F5F0E6/DCA767?text=Lezzet+Deneyimi"
              alt="Tatlı hazırlama süreci"
              className="w-full rounded-2xl shadow-md"
            />
          </section>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
