import { motion } from "framer-motion";
import ProgressBar from "./ui/progress-bar";
import { technicalSkills, softwareSkills, additionalSkills } from "@/lib/constants";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center text-blue-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg border border-blue-200"
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-700">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <ProgressBar
                  key={index}
                  label={skill.name}
                  sublabel={`${skill.percentage}%`}
                  percentage={skill.percentage}
                  color="bg-blue-600"
                  className="text-gray-700"
                />
              ))}
            </div>
          </motion.div>
          
          {/* Software Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg border border-blue-200"
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-700">Software Skills</h3>
            <div className="space-y-4">
              {softwareSkills.map((skill, index) => (
                <ProgressBar
                  key={index}
                  label={skill.name}
                  sublabel={`${skill.percentage}%`}
                  percentage={skill.percentage}
                  color="bg-yellow-500"
                  className="text-gray-700"
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Additional Skills */}
        <motion.div 
          className="mt-12 bg-white p-6 rounded-lg shadow-lg border border-blue-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-blue-700">Additional Skills</h3>
          <div className="flex flex-wrap gap-3">
            {additionalSkills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-blue-100 text-blue-700 hover:bg-yellow-300 hover:text-blue-800 transition-colors px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
