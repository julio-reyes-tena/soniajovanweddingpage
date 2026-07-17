import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import FAQPage from "./pages/FAQPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<FAQPage />} />
    </Routes>
  );
}

export default App;