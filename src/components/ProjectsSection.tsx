import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building, TrafficCone, FileDigit } from "lucide-react";
import { projects } from "@/lib/constants";

const ProjectsSection = () => {
  // Map icon name to component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "building":
        return <Building className="h-12 w-12 text-blue-900" />;
      case "road":
        return <TrafficCone className="h-12 w-12 text-blue-900" />;
      case "drafting-compass":
        return <FileDigit className="h-12 w-12 text-blue-900" />;
      default:
        return <Building className="h-12 w-12 text-blue-900" />;
    }
  };

  return (
    <section id="projects" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center text-blue-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="transition-transform duration-300 hover:scale-105"
            >
              <Card className="overflow-hidden h-full bg-white shadow-lg border-blue-200">
                <div className="h-48 bg-blue-100 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center">
                    {getIcon(project.icon)}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">{project.title}</h3>
                  <p className="text-blue-600 mb-4">{project.location}</p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-yellow-500 font-medium inline-flex items-center"
                  >
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
