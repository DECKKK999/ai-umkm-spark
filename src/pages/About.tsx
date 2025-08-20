import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-primary-foreground">
        <div className="container-custom text-center">
          <h1 className="text-hero mb-6 animate-fade-in">
            Tentang UMKM.AI
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed animate-slide-up">
            UMKM.AI hadir untuk memberdayakan UMKM Indonesia dengan teknologi AI yang praktis, 
            terukur, dan mudah diadopsi. Fokus kami: hasil cepat, efisiensi tinggi, 
            dan pertumbuhan yang berkelanjutan.
          </p>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-section text-center mb-16">Pendekatan Kami</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-feature text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-card-title mb-4">Praktis & Terukur</h3>
              <p className="text-muted-foreground">
                KPI yang jelas dengan fokus pada lead generation, conversion rate, 
                dan lifetime value yang dapat diukur dan dioptimasi.
              </p>
            </div>

            <div className="card-feature text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-card-title mb-4">Cepat & Ringkas</h3>
              <p className="text-muted-foreground">
                Iterasi mingguan dengan implementasi cepat. 
                Go-live dalam waktu singkat tanpa mengorbankan kualitas.
              </p>
            </div>

            <div className="card-feature text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-card-title mb-4">Kolaboratif</h3>
              <p className="text-muted-foreground">
                Kami melatih tim internal Anda dan melakukan transfer knowledge 
                untuk sustainability jangka panjang.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-section text-center mb-4">Tim Kami</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Kami menggabungkan strategi bisnis, kreativitas, dan engineering 
            untuk menghadirkan solusi AI yang tepat sasaran.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-feature text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                🧠
              </div>
              <h3 className="text-card-title mb-2">Alex Rahman</h3>
              <p className="text-sm text-primary font-medium mb-2">AI Strategist</p>
              <p className="text-sm text-muted-foreground">
                Spesialis strategi implementasi AI untuk UMKM
              </p>
            </div>

            <div className="card-feature text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                📈
              </div>
              <h3 className="text-card-title mb-2">Sari Dewi</h3>
              <p className="text-sm text-primary font-medium mb-2">Marketing Lead</p>
              <p className="text-sm text-muted-foreground">
                Expert growth marketing dan customer acquisition
              </p>
            </div>

            <div className="card-feature text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                ⚙️
              </div>
              <h3 className="text-card-title mb-2">David Prakoso</h3>
              <p className="text-sm text-primary font-medium mb-2">Automation Engineer</p>
              <p className="text-sm text-muted-foreground">
                Spesialis sistem otomasi dan integrasi AI
              </p>
            </div>

            <div className="card-feature text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                🎨
              </div>
              <h3 className="text-card-title mb-2">Maya Creative</h3>
              <p className="text-sm text-primary font-medium mb-2">Creative Producer</p>
              <p className="text-sm text-muted-foreground">
                Content creator dan visual strategist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-slate text-primary-foreground">
        <div className="container-custom">
          <h2 className="text-section text-center mb-16">Impact Stats</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-heading font-bold text-accent mb-4">150+</div>
              <p className="text-xl">Jam hemat per bulan</p>
              <p className="text-slate-light">Rata-rata efisiensi operasional klien</p>
            </div>
            
            <div>
              <div className="text-5xl md:text-6xl font-heading font-bold text-accent mb-4">300%</div>
              <p className="text-xl">Peningkatan conversion</p>
              <p className="text-slate-light">Rata-rata improvement setelah optimasi</p>
            </div>
            
            <div>
              <div className="text-5xl md:text-6xl font-heading font-bold text-accent mb-4">5x</div>
              <p className="text-xl">ROAS iklan naik</p>
              <p className="text-slate-light">Return on Ad Spend improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-section mb-8">Kenalan Lewat Call 15 Menit</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Mari diskusikan bagaimana AI dapat membantu mengoptimalkan bisnis Anda
          </p>
          <a href="/book-call" className="btn-primary">
            Book a Call
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default About;