import React from "react";

const ContactPage = () => {
  return (
    <div className="contact">
      <section>
        <article className="one">
          <img src="/images/envelope-solid.svg" alt="Icon" />{" "}
          <span>
            <strong>Mail:</strong>diusa.com
          </span>
        </article>
        <article className="two">
          <img src="/images/map-marker-alt-solid.svg" alt="Icon" />{" "}
          <span>
            <strong>Location:</strong>Nyamagabe
          </span>
        </article>
        <article className="three">
          <img src="/images/phone-square-alt-solid.svg" alt="Icon" />{" "}
          <span>
            <strong>Phone:</strong>+2507852189054
          </span>
        </article>
      </section>

      <form>
        <div className="input">
          <input type="text" name="name" placeholder="Enter name" />
          <input type="email" placeholder="Enter email here" />
        </div>
        <textarea
          name="message"
          id="message"
          placeholder="message"
          cols="30"
          rows="10"
        ></textarea>
        <button>Send</button>
      </form>
    </div>
  );
};

export default ContactPage;
