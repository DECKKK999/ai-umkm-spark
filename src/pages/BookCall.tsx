import Layout from "@/components/Layout";

const BookCall = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-primary-foreground">
        <div className="container-custom text-center">
          <h1 className="text-hero mb-6 animate-fade-in">
            Jadwalkan Konsultasi Gratis 15 Menit
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed animate-slide-up">
            Bahas kebutuhan bisnismu, cek peluang automasi cepat, dan dapatkan mini-roadmap
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="container-custom max-w-2xl mx-auto">
          <div className="card-feature">
            <form className="space-y-6">
              <div>
                <label htmlFor="nama" className="block text-sm font-medium text-foreground mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="email@domain.com"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-foreground mb-2">
                  Nomor WhatsApp *
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="+62 812-3456-7890"
                />
              </div>

              <div>
                <label htmlFor="industri" className="block text-sm font-medium text-foreground mb-2">
                  Industri Bisnis *
                </label>
                <select
                  id="industri"
                  name="industri"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                >
                  <option value="">Pilih industri bisnis Anda</option>
                  <option value="fnb">F&B / Kuliner</option>
                  <option value="fashion">Fashion / Apparel</option>
                  <option value="jasa">Jasa Profesional</option>
                  <option value="retail">Retail / E-commerce</option>
                  <option value="beauty">Beauty / Skincare</option>
                  <option value="edukasi">Edukasi / Kursus</option>
                  <option value="properti">Properti</option>
                  <option value="kesehatan">Kesehatan</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label htmlFor="tantangan" className="block text-sm font-medium text-foreground mb-2">
                  Tantangan Utama Bisnis
                </label>
                <textarea
                  id="tantangan"
                  name="tantangan"
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                  placeholder="Ceritakan tantangan utama yang ingin Anda selesaikan dengan AI (opsional tapi sangat membantu untuk persiapan call)"
                ></textarea>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className="text-accent text-xl">💡</div>
                  <div>
                    <h4 className="font-semibold text-accent-foreground mb-2">Yang akan kita bahas:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Quick audit situasi bisnis current Anda</li>
                      <li>• Identifikasi 2-3 area automasi dengan impact terbesar</li>
                      <li>• Mini roadmap implementation yang realistis</li>
                      <li>• Next steps jika cocok untuk kolaborasi</li>
                    </ul>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                Kirim & Schedule Call
              </button>

              <p className="text-sm text-muted-foreground text-center">
                Setelah dikirim, kami akan menghubungi Anda via email/WhatsApp 
                untuk konfirmasi jadwal dalam 1x24 jam.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold mb-4">Prefer Email?</h3>
            <p className="text-muted-foreground mb-6">
              Jika lebih nyaman via email, langsung saja kirim ke:
            </p>
            <a 
              href="mailto:hello@umkm.ai" 
              className="btn-outline"
            >
              📧 hello@umkm.ai
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              Include nama, bisnis, dan tantangan utama yang ingin dibahas
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookCall;