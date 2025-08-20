import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="text-2xl font-heading font-bold text-primary">
              UMKM.AI
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`font-medium transition-colors hover:text-primary link-underline ${
                  isActive("/") ? "text-primary" : "text-foreground"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors hover:text-primary link-underline ${
                  isActive("/about") ? "text-primary" : "text-foreground"
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`font-medium transition-colors hover:text-primary link-underline ${
                  isActive("/services") ? "text-primary" : "text-foreground"
                }`}
              >
                Our Services
              </Link>
              <Link
                to="/book-call"
                className="btn-primary"
              >
                Book a Call
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Link
                to="/book-call"
                className="btn-primary !px-6 !py-2 !text-sm"
              >
                Book Call
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className={`font-medium py-2 transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary" : "text-foreground"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-medium py-2 transition-colors hover:text-primary ${
                  isActive("/about") ? "text-primary" : "text-foreground"
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`font-medium py-2 transition-colors hover:text-primary ${
                  isActive("/services") ? "text-primary" : "text-foreground"
                }`}
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate text-primary-foreground">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">UMKM.AI</h3>
              <p className="text-slate-light mb-4">
                Memberdayakan UMKM Indonesia dengan teknologi AI yang praktis dan terukur.
              </p>
              <p className="text-sm text-slate-light">
                © 2025 UMKM.AI • hello@umkm.ai
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Pages</h4>
              <div className="space-y-2">
                <Link to="/" className="block text-slate-light hover:text-primary-foreground transition-colors">
                  Home
                </Link>
                <Link to="/about" className="block text-slate-light hover:text-primary-foreground transition-colors">
                  About
                </Link>
                <Link to="/services" className="block text-slate-light hover:text-primary-foreground transition-colors">
                  Our Services
                </Link>
                <Link to="/book-call" className="block text-slate-light hover:text-primary-foreground transition-colors">
                  Book a Call
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2">
                <p className="text-slate-light">📧 hello@umkm.ai</p>
                <p className="text-slate-light">📍 Jakarta, Indonesia</p>
                <div className="flex space-x-4 mt-4">
                  <span className="text-2xl">📱</span>
                  <span className="text-2xl">💼</span>
                  <span className="text-2xl">🌐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;