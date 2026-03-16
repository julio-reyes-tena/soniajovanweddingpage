function RSVPForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("RSVP submitted!.");
  };

  return (
    <section id="rsvp" className="section section-alt">
      <div className="container form-wrap">
        <h2>RSVP</h2>

        <form onSubmit={handleSubmit} className="card form-card">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input id="fullName" type="text" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="attendance">Will you attend?</label>
            <select id="attendance">
              <option>Joyfully Accept</option>
              <option>Respectfully Decline</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" />
          </div>

          <button type="submit" className="button-primary full-width">
            Send RSVP
          </button>
        </form>
      </div>
    </section>
  );
}

export default RSVPForm;