import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePDF() {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
      headless: 'new', // Use the new headless mode
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Get absolute path to the HTML file
    const htmlPath = path.join(__dirname, 'client', 'public', 'tariqul_cv.html');
    const outputPath = path.join(__dirname, 'client', 'public', 'tariqul_cv.pdf');
    
    console.log(`Loading HTML from: ${htmlPath}`);
    
    // Load the HTML content
    await page.goto(`file://${htmlPath}`, {
      waitUntil: 'networkidle0',
    });
    
    // Wait for fonts to load
    await page.waitForTimeout(1000);
    
    console.log('Generating PDF...');
    
    // Generate PDF
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px',
      },
    });
    
    console.log(`PDF saved to: ${outputPath}`);
    
    await browser.close();
    console.log('Browser closed');
    
    return outputPath;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
}

generatePDF()
  .then(() => {
    console.log('PDF generation complete');
  })
  .catch((error) => {
    console.error('Failed to generate PDF:', error);
    process.exit(1);
  });