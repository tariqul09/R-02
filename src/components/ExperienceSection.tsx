import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Building } from "lucide-react";
import { workExperience } from "@/lib/constants";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        
        <div className="relative border-l-4 border-yellow-400 pl-6 ml-6 space-y-12">
          {workExperience.map((experience, index) => (
            <motion.div 
              key={index} 
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center text-blue-800">
                {index === 0 ? (
                  <Briefcase className="h-4 w-4" />
                ) : (
                  <Building className="h-4 w-4" />
                )}
              </div>
              
              <Card className="bg-white shadow-lg border-blue-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-800">{experience.title}</h3>
                      <p className="text-blue-600">{experience.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                        {experience.period}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{experience.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="bg-blue-100 text-blue-700 hover:bg-yellow-300 hover:text-blue-800 transition-colors text-sm px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          
          {/* Years of Experience Label */}
          <motion.div 
            className="absolute -left-16 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-blue-800 px-4 py-2 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="text-center">
              <span className="block font-bold text-lg">2+</span>
              <span className="text-xs">YEARS</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
