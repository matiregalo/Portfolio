import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const location = useLocation();
  const baseUrl = window.location.origin;
  const currentUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact | Matías Regaló</title>
        <link rel="icon" type="image/png" href="/logoMRTransparente.png" />
        <meta
          name="description"
          content="Matías Regaló - Deja un mensaje a para comenzar a trabajar juntos."
        />
        <link rel="canonical" href={currentUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content="Contact | Matías Regaló" />
        <meta
          property="og:description"
          content="Matías Regaló - Deja un mensaje a para comenzar a trabajar juntos."
        />
        <meta property="og:site_name" content="Contact | Matías Regaló" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content="Contact | Matías Regaló" />
        <meta
          name="twitter:description"
          content="Matías Regaló - Deja un mensaje a para comenzar a trabajar juntos."
        />
      </Helmet>

      <div className="container">
        <div className="contact-content">
          <div className="contact-section">
            <h2 className="contact-greeting text-center">
              Contact <span className="text-primary">Me</span>
            </h2>
            <form>
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                placeholder="Your name" 
                required
                aria-label="Your name"
              />
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="Your email address"
                required
                aria-label="Your email address"
              />
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message"
                rows="6"
                placeholder="Talk to me about your project, an idea or anything I can help you..."
                required
                aria-label="Your message"
              />
              <input 
                type="button" 
                value="Send Message" 
                aria-label="Send message"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
