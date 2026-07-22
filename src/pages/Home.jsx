import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Story from "../components/Story";
import Schedule from "../components/Schedule";
import Venue from "../components/Venue";
import Footer from "../components/Footer";
import Venmo from "../components/Venmo";

function Home() {
  return (
    <div className="site-shell home-page">
      <Navbar />
      <Hero />

      <main className="home-content">
        <Story />
        <Venue />
        <Schedule />
        <Venmo />

      </main>

      <Footer />
    </div>
  );
}

export default Home;