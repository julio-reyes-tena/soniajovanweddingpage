import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function InformationPage() {
  return (
    <div className="site-shell">
      <Navbar />

      <main className="section">
        <div className="container">
          <h2>Information</h2>

          <div className="info-card-grid info-card-grid-two">
            <article className="card info-card">
              <h3>Court</h3>

              <div className="info-list">
                <p>Bridesmaid Name</p>
                <p>Bridesmaid Name</p>
                <p>Groomsman Name</p>
                <p>Groomsman Name</p>
              </div>
            </article>

            <article className="card info-card">
              <h3>Parents</h3>

              <div className="info-list">
                <p>Parents of the Bride</p>
                <p>Name & Name</p>

                <p>Parents of the Groom</p>
                <p>Name & Name</p>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default InformationPage;