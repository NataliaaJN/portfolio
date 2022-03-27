import "../../../styles/components/contact/form/ContactForm.scss";

const ContactForm = () => {
  return (
    <form
      className="contactSection__form"
      action="https://formspree.io/f/mdoyqqaa"
      method="post"
    >
      <label htmlFor="">
        Nombre y Apellidos
        <input id="" className="" type="text" />
      </label>
      <label for="emailAddress">
        Email <span className="highlight">*</span>
      </label>
      <input
        className="contact__form--item emailAddress"
        placeholder="nombre.apellidos@mail.com"
        id="emailAddress"
        type="email"
        name="email"
        title="Introduce un email válido"
        pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[.][a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
        required
      />

      <div class="app-form">
        <div class="app-form-group">
          <input class="app-form-control" placeholder="NAME" />
        </div>
        <div class="app-form-group">
          <input class="app-form-control" placeholder="EMAIL" />
        </div>

        <div class="app-form-group message">
          <input class="app-form-control" placeholder="MESSAGE" />
        </div>
        <div class="app-form-group buttons">
          <button class="app-form-button">CANCEL</button>
          <button class="app-form-button">SEND</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
