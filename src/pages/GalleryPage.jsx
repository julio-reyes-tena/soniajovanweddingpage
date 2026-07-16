import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

function GalleryPage() {
  return (
    <div className="site-shell">
      <Navbar />
      <main className="gallery-page">
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default GalleryPage;