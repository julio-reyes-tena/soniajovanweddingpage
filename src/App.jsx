import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  );
}

export default App;