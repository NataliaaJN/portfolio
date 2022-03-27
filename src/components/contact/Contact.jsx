import "../../styles/components/contact/Contact.scss";
import ContactForm from "./form/ContactForm";
const Contact = () => {
  return (
    <section className="contactSection">
      <div class="contactSection__formContainer">
        <div class="contactSection__formContainer--screen">
          <div class="contactSection__formContainer--screen--screen-header">
            <div class="screen-header-left">
              <div class="screen-header-button close"></div>
              <div class="screen-header-button maximize"></div>
              <div class="screen-header-button minimize"></div>
            </div>
            <div class="screen-header-right">
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
            </div>
          </div>
          <div class="screen-body">
            <div class="screen-body-item left">
              <div class="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
            </div>

            

            <div class="screen-body-item">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
