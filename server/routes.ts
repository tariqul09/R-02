import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoints for form submission
  app.post("/api/contact", async (req, res) => {
    try {
      // Parse and validate the request body using zod schema
      const contactData = insertContactMessageSchema.parse(req.body);
      
      // Save the message to the database
      const savedMessage = await storage.createContactMessage(contactData);
      
      return res.status(200).json({ 
        message: "Message received successfully",
        data: savedMessage
      });
    } catch (error) {
      console.error("Error handling contact form:", error);
      
      // Handle validation errors
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      return res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  });
  
  // Get all contact messages (admin endpoint)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      return res.status(200).json({ messages });
    } catch (error) {
      console.error("Error getting contact messages:", error);
      return res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  });

  // Serve the CV file for download
  app.get("/api/download-cv", (req, res) => {
    // Send the HTML CV file as a download
    const root = process.cwd();
    const cvPath = path.join(root, 'client', 'public', 'tariqul_cv.html');
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Disposition', 'attachment; filename="Tariqul_Islam_Hazary_CV.html"');
    res.sendFile(cvPath);
  });

  const httpServer = createServer(app);

  return httpServer;
}
