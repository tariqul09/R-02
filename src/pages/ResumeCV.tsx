import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { FileDown, ChevronLeft } from "lucide-react";
import { Link } from "wouter";

const ResumeCV = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ 
          duration: 0.6, 
          ease: [0.22, 1, 0.36, 1] 
        }}
        className="min-h-screen"
      >
        <section className="bg-gradient-to-b from-blue-600 to-blue-800 py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                <span className="text-yellow-300">Resume &</span> CV
              </h1>
              <p className="text-lg text-gray-100 max-w-xl mb-8">
                Download my professional resume to learn more about my qualifications, 
                skills, and experience in civil engineering.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/">
                  <a className="inline-flex items-center gap-2 bg-blue-700 text-white border border-blue-500 px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors shadow-sm">
                    <ChevronLeft size={20} />
                    Back to Portfolio
                  </a>
                </Link>
                <a
                  href="/api/download-cv"
                  className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-yellow-300 transition-colors shadow-md"
                  download
                >
                  <FileDown size={20} />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-800 mb-8">Resume Preview</h2>
              
              <div className="border-2 border-gray-200 rounded-lg p-8 shadow-lg mb-10">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-blue-900 mb-2">MD. TARIQUL ISLAM HAZARY</h1>
                  <p className="text-lg text-gray-700">Aspiring Civil Engineer</p>
                  <div className="w-16 h-1 bg-yellow-400 mx-auto my-4"></div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-blue-800 border-b-2 border-blue-100 pb-2 mb-4">CONTACT INFORMATION</h2>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-medium w-24">Phone:</span>
                      <span>+8801712635731</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium w-24">Email:</span>
                      <span>saifulhazary1977@gmail.com</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium w-24">Address:</span>
                      <span>Hazari Bhaban, Comilla, Bangladesh</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-blue-800 border-b-2 border-blue-100 pb-2 mb-4">EDUCATION</h2>
                  <div className="mb-4">
                    <h3 className="font-medium">Diploma in Civil Engineering</h3>
                    <p className="text-gray-600">Comilla Polytechnic Institute | 2021-current</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-blue-800 border-b-2 border-blue-100 pb-2 mb-4">EXPERIENCE</h2>
                  <div className="mb-4">
                    <h3 className="font-medium">Site Engineer</h3>
                    <p className="text-gray-600">Rammala Project | 2019-2021</p>
                    <ul className="list-disc list-inside text-gray-700 mt-2">
                      <li>Supervised pile checking and site maintenance</li>
                      <li>Coordinated with construction teams</li>
                      <li>Ensured compliance with safety regulations</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold text-blue-800 border-b-2 border-blue-100 pb-2 mb-4">SKILLS</h2>
                  <ul className="grid grid-cols-2 gap-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                      <span>AutoCAD</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                      <span>Revit</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                      <span>MS Office</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                      <span>Construction Management</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 mb-6">This is just a preview. Download the full CV for more details.</p>
                <a
                  href="/api/download-cv"
                  className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-yellow-300 transition-colors shadow-md"
                  download
                >
                  <FileDown size={20} />
                  Download Complete CV
                </a>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
};

export default ResumeCV;