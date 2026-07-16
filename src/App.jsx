import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";
import FAQPage from "./pages/FAQPage";
import InformationPage from "./pages/InformationPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/information" element={<InformationPage />} />
    </Routes>
  );
}

export default App;