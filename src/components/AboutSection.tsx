import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo, languages, professionalRoles } from "@/lib/constants";
import ProgressBar from "./ui/progress-bar";
import { Mail, Phone, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center text-blue-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full bg-white shadow-lg border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Professional Summary</h3>
                <p className="text-gray-700 mb-4">
                  {personalInfo.about}
                </p>
                <div className="flex flex-col gap-2 mt-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-blue-600 h-5 w-5" />
                    <span className="text-gray-700">{personalInfo.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-blue-600 h-5 w-5" />
                    <span className="text-gray-700">
                      {personalInfo.email} / {personalInfo.alternateEmail}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-blue-600 h-5 w-5" />
                    <span className="text-gray-700">
                      {personalInfo.phone} / {personalInfo.alternatePhone}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full bg-white shadow-lg border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Languages</h3>
                <div className="space-y-4">
                  {languages.map((language, index) => (
                    <ProgressBar
                      key={index}
                      label={language.name}
                      sublabel={language.level}
                      percentage={language.percentage}
                      color="bg-blue-600"
                      className="text-gray-700"
                    />
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-blue-600">Professional Roles</h3>
                <div className="flex flex-wrap gap-3">
                  {professionalRoles.map((role, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-100 text-blue-700 hover:bg-yellow-300 hover:text-blue-800 transition-colors px-3 py-1 rounded-full text-sm"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
