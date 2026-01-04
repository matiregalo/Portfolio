import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const location = useLocation();
  const baseUrl = window.location.origin;
  const currentUrl = `${baseUrl}${location.pathname}`;
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log("Email enviado exitosamente!", result.text);
          setStatus({
            message: "Message sent successfully! I'll get back to you soon.",
            type: "success",
          });
          e.target.reset();
          setIsLoading(false);
        },
        (error) => {
          console.error("Error al enviar email:", error);
          setStatus({
            message:
              "An error occurred while sending the message. Please try again later.",
            type: "error",
          });
          setIsLoading(false);
        },
      );
  };
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
            <form onSubmit={sendEmail}>
              <label htmlFor="from_name">Name</label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                placeholder="Your name"
                required
                aria-label="Your name"
              />
              <label htmlFor="from_email">Email</label>
              <input
                type="email"
                id="from_email"
                name="from_email"
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
              {status && (
                <div
                  className={`status-message ${
                    status.type === "success" ? "success" : "error"
                  }`}
                >
                  {status.message}
                </div>
              )}
              <input
                type="submit"
                value={isLoading ? "Sending..." : "Send Message"}
                disabled={isLoading}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
