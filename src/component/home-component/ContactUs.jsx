import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, X } from "lucide-react";

// Success Popup Component
const SuccessPopup = ({ onClose }) => (
  <AnimatePresence>
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      {/* Popup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center z-10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5"
        >
          <CheckCircle className="w-10 h-10 text-green-500" />
        </motion.div>

        {/* Text */}
        <h3 className="text-2xl font-bold text-black mb-2">Message Sent!</h3>
        <p className="text-gray-500 text-sm leading-6">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onClose}
          className="mt-6 w-full h-11 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-semibold transition-colors"
        >
          Done
        </motion.button>
      </motion.div>
    </div>
  </AnimatePresence>
);

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error on type
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validation
  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Enter a valid 10-digit number";
    }

    // message is optional — no validation

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    const payload = {
      name: formData.fullName,
      email: formData.email,
      contact: formData.phone,
      message: formData.message,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbze-z134s0pkc14QxVS5907AknecFVYoKMaANyqceBnYXVgC5K87Dy51G-5bZE0Sr0B3g/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(payload),
        }
      );

      setShowSuccess(true);
      setFormData({ fullName: "", email: "", phone: "", message: "" });
      setErrors({});

    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <>
      {/* Success Popup */}
      {showSuccess && <SuccessPopup onClose={() => setShowSuccess(false)} />}

      <section id="contact" className="bg-white py-10 md:py-20 px-5 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <span className="text-xs font-semibold tracking-wide text-orange-600">
                CONTACT US
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
              Let's Connect With{" "}
              <span className="text-orange-500">ThreeSyntax</span>
            </h2>

            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-5 leading-7">
              Have questions about courses, placements or learning?
              Our team is here to help you.
            </p>
          </motion.div>

          {/* Main Layout */}
          <div className="grid lg:grid-cols-2 gap-5 md:gap-8">

            {/* Left Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white md:bg-orange-50 md:border border-orange-100 rounded-3xl p-0 md:p-8"
            >
              <div className="space-y-5">

                <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-orange-100">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-black font-semibold mb-1">Email Address</h4>
                    <p className="text-gray-600 text-sm">contact@threesyntax.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-orange-100">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-black font-semibold mb-1">Phone Number</h4>
                    <p className="text-gray-600 text-sm">
                      +91 9343760176, 9109859062
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-orange-100">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-black font-semibold mb-1">Office Address</h4>
                    <p className="text-gray-600 text-sm leading-6">
                      162-A 1st Floor, MangalCity Mall, Above Vishal Mega Mart,
                      Vijay Nagar, Indore, MP India
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-orange-100 h-[250px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.350701871944!2d75.90040327508328!3d22.752362779364113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d55a1ceab57%3A0x71e7b209090b9d88!2sMangal%20city%2C%205%2C%20Vijay%20Nagar%2C%20Scheme%20No%2054%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1779455421328!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="border-0"
                ></iframe>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border border-orange-100 rounded-md md:rounded-3xl p-5 md:p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-black mb-8">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                {/* Name */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full h-12 px-4 rounded-xl border focus:outline-none transition-colors ${
                      errors.fullName
                        ? "border-red-400 focus:border-red-500 bg-red-50"
                        : "border-orange-100 focus:border-orange-500"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`w-full h-12 px-4 rounded-xl border focus:outline-none transition-colors ${
                      errors.email
                        ? "border-red-400 focus:border-red-500 bg-red-50"
                        : "border-orange-100 focus:border-orange-500"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your number"
                    className={`w-full h-12 px-4 rounded-xl border focus:outline-none transition-colors ${
                      errors.phone
                        ? "border-red-400 focus:border-red-500 bg-red-50"
                        : "border-orange-100 focus:border-orange-500"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Message - Optional */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Message{" "}
                    <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className="w-full px-4 py-3 rounded-xl border border-orange-100 focus:outline-none focus:border-orange-500 resize-none transition-colors"
                  ></textarea>
                </div>

                {/* Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;