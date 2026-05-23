import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

// Success Popup
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

      {/* Popup Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center z-10"
      >
        {/* Close */}
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

        <h3 className="text-2xl font-bold text-black mb-2">Booking Confirmed!</h3>
        <p className="text-gray-500 text-sm leading-6">
          Your seat is reserved. Our team will contact you shortly with class details.
        </p>

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

const Form = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    topics: [],
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error on type
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Checkbox Change
  const handleCheckboxChange = (topic) => {
    setFormData((prev) => ({
      ...prev,
      topics: prev.topics.includes(topic)
        ? prev.topics.filter((t) => t !== topic)
        : [...prev.topics, topic],
    }));
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

    return newErrors;
  };

  // Submit
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
      message: formData.topics.join(", "),
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
      setFormData({ fullName: "", email: "", phone: "", topics: [] });
      setErrors({});

    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <>
      {showSuccess && <SuccessPopup onClose={() => setShowSuccess(false)} />}

      <form
        onSubmit={handleSubmit}
        noValidate
        className="w-full h-full bg-white rounded-2xl border border-orange-200 shadow-xl p-4 sm:p-10"
      >
        {/* Heading */}
        <div>
          <h1 className="text-2xl md:text-3xl tracking-tight font-semibold text-black leading-snug">
            Book a Live Class, For{" "}
            <span className="font-bold text-orange-500">Free!</span>
          </h1>

          <p className="mt-4 text-gray-600 text-sm">
            Your Topic of Interest{" "}
            <span className="text-red-500">*</span>
          </p>
        </div>

        {/* Topics */}
        <div className="flex flex-wrap gap-4 mt-5">
          {["Fullstack Java", "Internship", "Live Projects"].map((topic) => (
            <div className="flex items-center gap-2" key={topic}>
              <Checkbox
                checked={formData.topics.includes(topic)}
                onCheckedChange={() => handleCheckboxChange(topic)}
              />
              <label className="text-sm text-gray-700 font-medium">
                {topic}
              </label>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-orange-100 my-6"></div>

        {/* Inputs */}
        <div className="space-y-4">

          {/* Name */}
          <div>
            <Input
              placeholder="Full Name *"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`h-12 transition-colors ${
                errors.fullName
                  ? "border-red-400 focus-visible:ring-red-400 bg-red-50"
                  : "border-orange-100 focus-visible:ring-orange-500"
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <Input
              placeholder="Email Address *"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`h-12 transition-colors ${
                errors.email
                  ? "border-red-400 focus-visible:ring-red-400 bg-red-50"
                  : "border-orange-100 focus-visible:ring-orange-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <Input
              placeholder="Phone Number *"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`h-12 transition-colors ${
                errors.phone
                  ? "border-red-400 focus-visible:ring-red-400 bg-red-50"
                  : "border-orange-100 focus-visible:ring-orange-500"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Button */}
        <div className="mt-7">
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-semibold"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Submitting...
              </span>
            ) : (
              "Continue Booking Live Class"
            )}
          </Button>

          <p className="text-sm text-gray-500 mt-4 text-center">
            Limited seats left
          </p>
        </div>
      </form>
    </>
  );
};

export default Form;