import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone, Globe } from "lucide-react";
import { personalInfo } from "@/lib/constants";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all required fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send data to the API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }
      
      toast({
        title: "Thank you!",
        description: "Your message has been sent successfully. I will get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full bg-white shadow-lg border-blue-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-blue-700">Get In Touch</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border-blue-200 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border-blue-200 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border-blue-200 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border-blue-200 focus:border-blue-500"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="bg-yellow-400 text-blue-900 px-6 py-3 font-medium hover:bg-yellow-300 transition-colors w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full bg-white shadow-lg border-blue-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-blue-700">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="text-blue-700 h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800">Address</h4>
                      <p className="text-gray-700">{personalInfo.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="text-blue-700 h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800">Email</h4>
                      <p className="text-gray-700">{personalInfo.email}</p>
                      <p className="text-gray-700">{personalInfo.alternateEmail}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="text-blue-700 h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800">Phone</h4>
                      <p className="text-gray-700">{personalInfo.phone}</p>
                      <p className="text-gray-700">{personalInfo.alternatePhone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Globe className="text-blue-700 h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800">Social</h4>
                      <div className="flex gap-4 mt-2">
                        <a 
                          href={personalInfo.linkedin} 
                          className="text-blue-600 hover:text-yellow-500 text-xl" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin />
                        </a>
                        <a 
                          href="#" 
                          className="text-blue-600 hover:text-yellow-500 text-xl"
                        >
                          <FaFacebook />
                        </a>
                        <a 
                          href="#" 
                          className="text-blue-600 hover:text-yellow-500 text-xl"
                        >
                          <FaTwitter />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
