import emailjs from '@emailjs/browser'
export default function ContactMe() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9xc1gpr', 'template_bg52oy5', e.target, 'Z83lrT8wPuGVRL8HX')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });

  }
    return (
      <section id="Contact" className="contact--section">
        <div>
          {/* <p className="sub--title">Get In Touch</p> */}
          <p className="text-lg">
            Great to see you, Let's get in touch.
          </p>
          <h2>Contact Me</h2>
          {/* <p className="text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
          </p> */}
        </div>
        <form className="contact--form--container" onSubmit={sendEmail}>
          <div className="container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="first-name"
                id="first-name"
                required
              />
            </label>
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md">Last Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="last-name"
                id="last-name"
                
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">Contact Number</span>
              <input
                type="number"
                className="contact--input text-md"
                name="phone-number"
                id="phone-number"
                required
              />
            </label>
          </div>
          
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              name= "message"
              id="message"
              rows="8"
              placeholder="Type your message..."
            />
          </label>
          <label htmlFor="checkboc" className="checkbox--label">
            <input type="checkbox" required name="checkbox" id="checkbox" />
            <span className="text-sm">I accept the terms</span>
          </label>
          <div>
            <button className="btn btn-primary contact--form--btn">SEND</button>
          </div>
        </form>
      </section>
    );
  }