import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Story from "../components/Story";
import Schedule from "../components/Schedule";
import Venue from "../components/Venue";
import Registry from "../components/Registry";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="site-shell">
      <Navbar />
      <Hero />
      <Registry />
      <Story />
      <Schedule />
      <Venue />
      
      <Footer />
    </div>
  );
}

export default Home;