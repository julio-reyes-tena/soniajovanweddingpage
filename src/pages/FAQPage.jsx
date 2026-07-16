import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function FAQPage() {
  return (
    <div className="site-shell">
      <Navbar />

      <main>
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default FAQPage;