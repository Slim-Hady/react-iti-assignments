import { useState } from "react";

const initialForm = {
  fullName: "",
  email: "",
  password: "",
  phone: "",
  message: "",
};

function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setSubmitted(false);
  };

  const validate = () => {
    const errs = {};

    if (!form.fullName.trim()) {
      errs.fullName = "Full name is required.";
    } else if (form.fullName.trim().length < 3) {
      errs.fullName = "Name must be at least 3 characters.";
    }

    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address.";
    }

    if (!form.password) {
      errs.password = "Password is required.";
    } else if (form.password.length < 6) {
      errs.password = "Password must be at least 6 characters.";
    }

    if (!form.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (!/^01[0125][0-9]{8}$/.test(form.phone)) {
      errs.phone = "Enter a valid Egyptian phone number (e.g. 01012345678).";
    }

    if (!form.message.trim()) {
      errs.message = "Message is required.";
    } else if (form.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // handle submit without refreshing the page
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  return (
    <section className="contact">
      <h1 className="page-title">Contact Us</h1>
      <p className="page-subtitle">Fill the form below and we will get back to you soon.</p>

      {submitted && (
        <div className="alert alert-success" role="alert">
          ✅ Thank you! Your message has been sent successfully.
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
            placeholder="John Doe"
            value={form.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            placeholder="john@example.com"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password *
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            placeholder="At least 6 characters"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            placeholder="01012345678"
            value={form.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message / Address *
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            placeholder="Tell us what you need..."
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactPage;