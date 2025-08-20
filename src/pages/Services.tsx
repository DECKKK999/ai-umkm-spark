import Layout from "@/components/Layout";

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-primary-foreground">
        <div className="container-custom text-center">
          <h1 className="text-hero mb-6 animate-fade-in">
            Layanan Kami
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed animate-slide-up">
            Kami audit, otomasi, dan optimasi pemasaran agar tim Anda fokus 
            pada hal yang paling berdampak untuk pertumbuhan bisnis.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Service 1 */}
            <div className="card-feature">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-card-title mb-4">Business & Growth Audit</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Analisis alur kerja bisnis: identifikasi proses manual yang bisa diotomatisasi dengan AI
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Audit hambatan pertumbuhan (bottleneck): customer service, marketing, sales, operasional
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Laporan rekomendasi: prioritas area yang paling cepat memberi hasil setelah dioptimasi
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="card-feature">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-card-title mb-4">AI Automation Implementation</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Customer Service: Chatbot & CRM otomatis (respon 24/7, reservasi, follow-up)
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Sales Automation: Lead scoring, email/WhatsApp follow-up, reminder otomatis
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Operational Efficiency: Invoice otomatis, laporan penjualan, HR/absensi berbasis AI
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="card-feature">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-card-title mb-4">Marketing & Branding</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Content Marketing: Video/TikTok/Instagram dengan strategi storytelling berbasis AI insights
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Paid Ads: Optimasi iklan dengan AI targeting untuk ROI maksimal
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  SEO & Copywriting: Konten berbasis AI untuk website & marketplace
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Design & Creative: Visual & branding cepat dengan bantuan generative AI
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="card-feature">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-card-title mb-4">Sales Growth Hacking</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Funnel building: landing page → lead magnet → closing system
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  AI-driven upsell & cross-sell strategies untuk meningkatkan revenue per customer
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Customer data analysis untuk meningkatkan LTV (lifetime value)
                </li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="card-feature">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-card-title mb-4">Plug & Play Service Packages</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <strong>Starter:</strong> Audit + Basic Automation untuk bisnis yang baru mulai
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <strong>Growth:</strong> Automation + Marketing + CRM untuk scaling
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <strong>Scale:</strong> Full AI system + growth hacking + training tim
                </li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="card-feature">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-card-title mb-4">Training & Support</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Workshop pemanfaatan AI untuk tim internal
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  SOP dan guideline penggunaan AI tools
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Layanan support berkelanjutan (maintenance & update)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Metrics */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-section text-center mb-16">Expected Outcomes</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="card-feature">
              <div className="text-3xl mb-2">📈</div>
              <h3 className="font-semibold text-primary">Lead ↑</h3>
              <p className="text-sm text-muted-foreground">Peningkatan kualitas & kuantitas lead</p>
            </div>
            
            <div className="card-feature">
              <div className="text-3xl mb-2">😊</div>
              <h3 className="font-semibold text-primary">CSAT ↑</h3>
              <p className="text-sm text-muted-foreground">Customer satisfaction score naik</p>
            </div>
            
            <div className="card-feature">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-semibold text-primary">Ad Cost ↓</h3>
              <p className="text-sm text-muted-foreground">Biaya iklan lebih efisien</p>
            </div>
            
            <div className="card-feature">
              <div className="text-3xl mb-2">⏰</div>
              <h3 className="font-semibold text-primary">Time ↓</h3>
              <p className="text-sm text-muted-foreground">Waktu operasional hemat</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-section mb-8">Siap Mulai Transformasi AI?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Diskusikan kebutuhan spesifik bisnis Anda dan dapatkan proposal yang tepat sasaran
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/book-call" className="btn-secondary">
              Book a Call
            </a>
            <a href="mailto:hello@umkm.ai" className="btn-outline !border-primary-foreground !text-primary-foreground hover:!bg-primary-foreground hover:!text-primary">
              Minta Proposal
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;