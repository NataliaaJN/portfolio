import "../../../styles/components/contact/form/ContactForm.scss";

const ContactForm = () => {
  return (
    <form
      className="contactForm"
      action="https://formspree.io/f/mzboaewg"
      method="post"
    >
      <label htmlFor="" className="contactForm__label">
        Nombre y Apellidos <span class="highlight">*</span>
        <input
          id=""
          className="contactForm__label--input"
          placeholder="Nombre"
          type="text"
        />
      </label>
      <label htmlFor="emailAddress" className="contactForm__label">
        Email <span className="highlight">*</span>
        <input
          className="contactForm__label--input"
          placeholder="nombre@gmail.com"
          id="emailAddress"
          type="email"
          name="email"
          title="Introduce un email válido"
          pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[.][a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
          required
        />
      </label>
      <label htmlFor="message" className="contactForm__label">
        Mensaje <span class="highlight">*</span>
        <textarea
          id="message"
          name="message"
          rows="5"
          cols="50"
          className="contactForm__label--input"
          placeholder="Hola Natalia, ¿qué tal? Me encantaría que te unieses a nuestro equipo 😜"
        />
      </label>
      <div className="contactForm__buttons">
        <button className="contactForm__buttons--cancelBtn">CANCEL</button>
        <button type="submit" className="contactForm__buttons--sendBtn">
          SEND
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
