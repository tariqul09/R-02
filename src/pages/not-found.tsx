import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-blue-700 to-blue-900">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card className="w-full max-w-md mx-4 border-2 border-yellow-400 shadow-xl">
          <CardContent className="pt-6 pb-6">
            <div className="flex flex-col items-center text-center mb-6">
              <AlertCircle className="h-16 w-16 text-yellow-500 mb-4" />
              <h1 className="text-3xl font-bold text-blue-900">404 Not Found</h1>
              <div className="w-16 h-1 bg-yellow-400 my-4 rounded-full"></div>
              <p className="mt-2 text-gray-600">
                The page you're looking for doesn't exist.
              </p>
            </div>
            
            <Link href="/">
              <a className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition-colors duration-300 font-medium mt-6">
                Return to Home
              </a>
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
