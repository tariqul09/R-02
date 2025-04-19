import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add title and meta description
document.title = "Tariqul Islam Hazary - Civil Engineer Portfolio";
const metaDescription = document.createElement("meta");
metaDescription.name = "description";
metaDescription.content = "Portfolio of Tariqul Islam Hazary, Civil Engineer, showcasing skills, education, and experience in civil engineering and construction projects.";
document.head.appendChild(metaDescription);

createRoot(document.getElementById("root")!).render(<App />);
