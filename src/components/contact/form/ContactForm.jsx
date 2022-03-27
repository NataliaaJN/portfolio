import "../../../styles/components/contact/form/ContactForm.scss";

const ContactForm = () => {
  return (
    <form
      className="contactForm"
      action="https://formspree.io/f/mdoyqqaa"
      method="post"
    >
      <label htmlFor="" className="contactForm__label">
        Nombre y Apellidos
        <input
          id=""
          className="contactForm__label--input"
          placeholder="NAME"
          type="text"
        />
      </label>
      <label for="emailAddress" className="contactForm__label">
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
      <label className="contactForm__label">
        <input className="contactForm__label--input" placeholder="MESSAGE" />
      </label>
      <div className="app-form-group buttons">
        <button className="app-form-button">CANCEL</button>
        <button className="app-form-button">SEND</button>
      </div>
    </form>
  );
};

export default ContactForm;
