import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function InformationPage() {
  return (
    <div className="site-shell">
      <Navbar />

      <main className="section">
        <div className="container">
          <h2>Corte de Bodas</h2>

          <div className="info-card-grid info-card-grid-two">
            <article className="card info-card">
              <h3>Damas</h3>

              <div className="info-list">
                <p>Bridesmaid Name</p>
                <p>Bridesmaid Name</p>
                <p>Bridesmaid Name</p>
                <p>Bridesmaid Name</p>
                <p>Bridesmaid Name</p>
                <p>Bridesmaid Name</p>
                <p>Groomsman Name</p>
                <p>Groomsman Name</p>
              </div>
            </article>

               <article className="card info-card">
              <h3>Caballeros</h3>

              <div className="info-list">
                <p>Caballeros Name</p>
                <p>Caballeros Name</p>
                <p>Caballeros Name</p>
                <p>Caballeros Name</p>
                <p>Caballeros Name</p>
                <p>Caballeros Name</p>
                <p>Caballeros Name</p>
                <p>Caballeros Name</p>
              </div>
            </article>



            <article className="card info-card">
              <h3>Padres de la Novia</h3>

              <div className="info-list">
                <p>Parents of the Bride</p>
                <p>Name & Name</p>

                <p>Parents of the Groom</p>
                <p>Name & Name</p>
              </div>
            </article>

                    <article className="card info-card">
              <h3>Padres del Novio</h3>

              <div className="info-list">
                <p>Parents of the Bride</p>
                <p>Name & Name</p>

                <p>Parents of the Groom</p>
                <p>Name & Name</p>
              </div>
            </article>



                    <article className="card info-card">
              <h3>Padrinos</h3>

              <div className="info-list">
                <p>Parents of the Bride</p>
                <p>Name & Name</p>

                <p>Parents of the Groom</p>
                <p>Name & Name</p>
              </div>
            </article>

                      <article className="card info-card">
              <h3>Padrinos</h3>

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