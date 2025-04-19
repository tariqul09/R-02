import { ReactNode, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronUp, Download, FileText } from "lucide-react";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { personalInfo } from "@/lib/constants";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Education", id: "education" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <div className="font-sans bg-light text-dark min-h-screen">
      {/* Fixed Header Container */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Social Media Icons Top Bar */}
        <div className="bg-blue-900 text-white py-2">
          <div className="container mx-auto px-4 flex justify-end">
            <div className="flex space-x-4">
              <a 
                href={personalInfo.linkedin} 
                className="hover:text-yellow-300 transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a 
                href="#" 
                className="hover:text-yellow-300 transition-colors"
                aria-label="Facebook Profile"
              >
                <FaFacebook className="text-lg" />
              </a>
              <a 
                href="#" 
                className="hover:text-yellow-300 transition-colors"
                aria-label="Twitter Profile"
              >
                <FaTwitter className="text-lg" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Navigation Header */}
        <header className="w-full bg-blue-800 shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div>
                <h1 className="text-xl font-bold text-white md:text-2xl">
                  Tariqul Islam Hazary
                </h1>
                <p className="text-blue-200 text-sm">Civil Engineer</p>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="text-white hover:text-yellow-300 transition-colors"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden pb-4"
              >
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="block w-full text-left py-2 px-4 text-white hover:bg-blue-700 hover:text-yellow-300 rounded"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </header>
      </div>

      {/* Main Content with padding for fixed header */}
      <main className="pt-28">{children}</main>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-yellow-400 text-blue-900 w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: showScrollTop ? "auto" : "none" }}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </motion.button>

      {/* CV Button - Only shown on pages other than home and resume */}
      {location !== "/" && location !== "/resume" && (
        <motion.div 
          className="fixed bottom-6 left-6 z-40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/resume">
            <div className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 p-4 rounded-full shadow-lg flex items-center justify-center transition-colors cursor-pointer">
              <FileText className="h-5 w-5" />
              <span className="ml-2 hidden md:inline">View Resume</span>
            </div>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Layout;
