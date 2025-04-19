import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { personalInfo } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-yellow-400">Tariqul Islam Hazary</h3>
            <p className="text-blue-200">Civil Engineer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a 
                href={personalInfo.linkedin} 
                className="text-white hover:text-yellow-400 transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <FaTwitter className="text-xl" />
              </a>
            </div>
            <p className="text-blue-200 text-sm">&copy; {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
