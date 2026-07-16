import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Story from "../components/Story";
import Schedule from "../components/Schedule";
import Venue from "../components/Venue";
import RSVPForm from "../components/RSVPForm";
import Registry from "../components/Registry";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

function Home() {
  return (
    <div className="site-shell">
      <Navbar />
      <Hero />
       <Schedule />
      <Story />
      <Gallery />
      <Schedule />
      <Venue />
      <RSVPForm />
      <Registry />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;