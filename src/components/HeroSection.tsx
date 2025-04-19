import { motion } from "framer-motion";
import { personalInfo } from "@/lib/constants";
import profileImage from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section className="pt-40 pb-16 bg-gradient-to-b from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              <span className="text-yellow-300">MD. TARIQUL</span> ISLAM HAZARY
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-100">
              Aspiring Civil Engineer
            </h2>
            <p className="text-lg mb-8 text-gray-100 max-w-lg">
              Seeking an entry-level position to utilize my technical knowledge and
              passion for construction and infrastructure development.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-yellow-300 transition-colors shadow-md"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Me
              </a>
              {/* Download CV button hidden as requested */}
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-yellow-300">
              <img 
                src={profileImage} 
                alt="Tariqul Islam Hazary" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
