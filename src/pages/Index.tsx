import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="container-custom text-center">
          <h1 className="text-hero mb-6 animate-fade-in">
            Scale Bisnismu 10x<br />
            Lebih Cerdas dengan AI
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8 animate-slide-up">
            UMKM.AI membantu UMKM Indonesia tumbuh lewat audit, automasi, marketing, 
            dan pelatihan berbasis AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/book-call" className="btn-secondary">
              Book a Call
            </Link>
            <a href="#services" className="btn-outline !border-primary-foreground !text-primary-foreground hover:!bg-primary-foreground hover:!text-primary">
              Lihat Layanan
            </a>
          </div>

          {/* Trust Badges */}
          <div className="animate-fade-in">
            <p className="text-sm text-primary-foreground/80 mb-4">
              Dipercaya oleh pelaku UMKM di:
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/60">
              <span className="px-4 py-2 bg-primary-foreground/10 rounded-pill">Jakarta</span>
              <span className="px-4 py-2 bg-primary-foreground/10 rounded-pill">Bandung</span>
              <span className="px-4 py-2 bg-primary-foreground/10 rounded-pill">Surabaya</span>
              <span className="px-4 py-2 bg-primary-foreground/10 rounded-pill">Seluruh Indonesia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-feature text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-card-title mb-4">Hasil Cepat</h3>
              <p className="text-muted-foreground">
                Fokus pada prioritas berdampak tinggi dengan implementasi dalam hitungan minggu
              </p>
            </div>

            <div className="card-feature text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-card-title mb-4">Automasi Cerdas</h3>
              <p className="text-muted-foreground">
                Hemat waktu operasional harian dengan sistem yang bekerja 24/7
              </p>
            </div>

            <div className="card-feature text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-card-title mb-4">Konten & Iklan Efektif</h3>
              <p className="text-muted-foreground">
                Didorong data & AI insights untuk ROI maksimal
              </p>
            </div>

            <div className="card-feature text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-card-title mb-4">Dukungan Berkelanjutan</h3>
              <p className="text-muted-foreground">
                Maintenance & update rutin untuk performa optimal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution Strip */}
      <section className="section-padding bg-slate text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-section mb-8">Dari Manual ke Otomatis</h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Proses manual, lead dingin, iklan boros? 
            <span className="text-accent font-semibold"> Kami ubah jadi sistem yang jalan otomatis 24/7</span>
          </p>
        </div>
      </section>

      {/* Featured Packages */}
      <section id="services" className="section-padding">
        <div className="container-custom">
          <h2 className="text-section text-center mb-4">Plug & Play Packages</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan tahap perkembangan bisnis Anda
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="card-package">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-card-title mb-4">Starter</h3>
              <p className="text-muted-foreground mb-6">
                Perfect untuk UMKM yang baru mulai ingin mengoptimalkan operasional dasar
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Business audit lengkap
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Basic automation setup
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Customer service chatbot
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Monthly optimization
                </li>
              </ul>
              <Link to="/services" className="btn-outline w-full">
                Pelajari Paket
              </Link>
            </div>

            {/* Growth Package */}
            <div className="card-package border-primary bg-gradient-card">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">📈</div>
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-pill text-sm font-semibold">
                  POPULAR
                </span>
              </div>
              <h3 className="text-card-title mb-4">Growth</h3>
              <p className="text-muted-foreground mb-6">
                Untuk UMKM yang siap scaling dengan automation + marketing terintegrasi
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Semua fitur Starter
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Marketing automation & CRM
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Content creation AI tools
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Paid ads optimization
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Weekly optimization calls
                </li>
              </ul>
              <Link to="/services" className="btn-primary w-full">
                Pelajari Paket
              </Link>
            </div>

            {/* Scale Package */}
            <div className="card-package">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-card-title mb-4">Scale</h3>
              <p className="text-muted-foreground mb-6">
                Full AI system untuk UMKM established yang ingin dominasi market
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Semua fitur Growth
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Advanced growth hacking
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Custom AI implementations
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Team training workshops
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  24/7 priority support
                </li>
              </ul>
              <Link to="/services" className="btn-outline w-full">
                Pelajari Paket
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-section text-center mb-16">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-card-title mb-4">Discovery Call</h3>
              <p className="text-muted-foreground">
                Konsultasi gratis 15 menit untuk memahami kebutuhan spesifik bisnis Anda
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-card-title mb-4">Audit & Roadmap</h3>
              <p className="text-muted-foreground">
                Deep dive analysis dan buat roadmap prioritas implementation yang realistis
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-card-title mb-4">Implement & Launch</h3>
              <p className="text-muted-foreground">
                Setup sistem automation dan marketing tools dengan timeline jelas
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-card-title mb-4">Optimize & Scale</h3>
              <p className="text-muted-foreground">
                Monitor, optimize, dan scale sistem untuk hasil maksimal berkelanjutan
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-pill inline-block">
              <span className="font-semibold">Timeline rata-rata: 2-4 minggu untuk go-live</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-section text-center mb-16">Client Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-feature">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-xl mr-4">
                  🍔
                </div>
                <div>
                  <h4 className="font-semibold">Sari Rasa</h4>
                  <p className="text-sm text-muted-foreground">F&B Jakarta</p>
                </div>
              </div>
              <p className="text-muted-foreground italic mb-4">
                "Automasi WhatsApp dan sistem reservasi menghemat 4 jam sehari. 
                Order online naik 200% dalam 2 bulan!"
              </p>
              <div className="text-primary font-semibold">
                ROI: 300% • Efficiency: +4 jam/hari
              </div>
            </div>

            <div className="card-feature">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-xl mr-4">
                  👗
                </div>
                <div>
                  <h4 className="font-semibold">Busana Maya</h4>
                  <p className="text-sm text-muted-foreground">Fashion Bandung</p>
                </div>
              </div>
              <p className="text-muted-foreground italic mb-4">
                "Content AI tools dan ads optimization bikin ROAS naik dari 2x jadi 8x. 
                Sales tim bisa fokus closing aja!"
              </p>
              <div className="text-primary font-semibold">
                ROAS: 8x • Conversion: +150%
              </div>
            </div>

            <div className="card-feature">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-xl mr-4">
                  🔧
                </div>
                <div>
                  <h4 className="font-semibold">Jasa Pro</h4>
                  <p className="text-sm text-muted-foreground">Service Surabaya</p>
                </div>
              </div>
              <p className="text-muted-foreground italic mb-4">
                "Lead scoring dan follow-up otomatis bikin closing rate naik 3x lipat. 
                Customer retention juga jauh lebih baik."
              </p>
              <div className="text-primary font-semibold">
                Closing Rate: +300% • Retention: +85%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-section text-center mb-16">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto faq-item">
            <details className="mb-4">
              <summary>Berapa lama implementasi?</summary>
              <div className="faq-content">
                <p>Timeline rata-rata 2-4 minggu untuk go-live, tergantung kompleksitas paket yang dipilih. Starter bisa selesai dalam 2 minggu, Growth 3-4 minggu, dan Scale 4-6 minggu. Kami prioritaskan quick wins di minggu pertama.</p>
              </div>
            </details>

            <details className="mb-4">
              <summary>Apakah cocok untuk bisnis kecil?</summary>
              <div className="faq-content">
                <p>Sangat cocok! Paket Starter dirancang khusus untuk UMKM yang baru mulai dengan budget terbatas. Kami fokus pada automasi yang memberikan ROI tertinggi dengan investasi minimal. Banyak klien kami mulai dengan omzet 10-50 juta per bulan.</p>
              </div>
            </details>

            <details className="mb-4">
              <summary>Apakah support tersedia?</summary>
              <div className="faq-content">
                <p>Ya, semua paket include support berkelanjutan. Starter mendapat monthly optimization, Growth weekly calls, dan Scale 24/7 priority support. Kami juga provide training untuk tim internal agar bisa maintain sistem sendiri.</p>
              </div>
            </details>

            <details className="mb-4">
              <summary>Bagaimana pricing?</summary>
              <div className="faq-content">
                <p>Pricing disesuaikan dengan kebutuhan spesifik bisnis Anda. Starter mulai dari range jutaan, Growth belasan juta, Scale sesuai scope project. Yang pasti, semua paket dirancang untuk ROI positif dalam 3-6 bulan. Mari diskusi di discovery call!</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-section mb-8">Siap Scale dengan AI?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Mulai dengan konsultasi gratis 15 menit. Dapatkan mini-audit dan roadmap 
            khusus untuk bisnis Anda.
          </p>
          <Link to="/book-call" className="btn-secondary text-xl px-12 py-6">
            Book a Call Sekarang
          </Link>
          <p className="text-sm text-primary-foreground/80 mt-6">
            ✓ No commitment • ✓ Actionable insights • ✓ Response dalam 24 jam
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;