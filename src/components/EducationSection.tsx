import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { education, professionalQualifications } from "@/lib/constants";

const EducationSection = () => {
  return (
    <section id="education" className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education & Qualifications
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-white shadow-lg border-blue-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-blue-700 border-b border-blue-200 pb-2">Academic Education</h3>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-yellow-400 pl-4 py-1">
                      <h4 className="text-lg font-medium text-blue-800">{edu.degree}</h4>
                      <p className="text-blue-600">{edu.institution}</p>
                      <p className="text-gray-600 text-sm">{edu.period}</p>
                      <p className="mt-2 text-gray-700">Specialization in {edu.specialization}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-white shadow-lg border-blue-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-blue-700 border-b border-blue-200 pb-2">Professional Qualification</h3>
                
                <div className="space-y-6">
                  {professionalQualifications.map((qual, index) => (
                    <div key={index} className="border-l-4 border-yellow-400 pl-4 py-1">
                      <h4 className="text-lg font-medium text-blue-800">{qual.title}</h4>
                      <p className="text-blue-600">{qual.institution}</p>
                      <p className="text-gray-600 text-sm">{qual.status}</p>
                      {qual.description && (
                        <p className="mt-2 text-gray-700">{qual.description}</p>
                      )}
                    </div>
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

export default EducationSection;
