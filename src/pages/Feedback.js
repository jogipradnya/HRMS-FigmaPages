import React, { useState, useRef } from "react";

const defaultValues = {
  name: "",
  email: "",
  type: "",
  message: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FeedbackForm = ({
  title = "Feedback",
  description = "We’d love your feedback. Help us improve by sharing your thoughts, suggestions, or reporting issues.",
  initialValues = {},
  onSubmit,
  submitLabel = "Submit Feedback",
  className = "",
}) => {
  // Merge defaults with provided initial values
  const [formData, setFormData] = useState({
    ...defaultValues,
    ...initialValues,
  });

  // Track validation errors
  const [errors, setErrors] = useState({});
  // Track which fields have been touched (optional but helpful UX)
  const [touched, setTouched] = useState({});
  // optional submit state
  const [submitting, setSubmitting] = useState(false);

  // refs to focus the first invalid field
  const refs = {
    name: useRef(null),
    email: useRef(null),
    type: useRef(null),
    message: useRef(null),
  };

  // Single-field validation
  const validateField = (name, value) => {
    value = typeof value === "string" ? value.trim() : value;
    switch (name) {
      case "name":
        if (!value) return "Name is required.";
        if (value.length < 2) return "Name must be at least 2 characters.";
        return "";
      case "email":
        if (!value) return "Email is required.";
        if (!emailRegex.test(value)) return "Please enter a valid email address.";
        return "";
      case "type":
        if (!value) return "Please select a feedback type.";
        return "";
      case "message":
        if (!value) return "Message is required.";
        if (value.length < 10) return "Please enter at least 10 characters.";
        return "";
      default:
        return "";
    }
  };

  // Validate all fields and return errors object
  const validateAll = (data) => {
    const e = {};
    Object.keys(defaultValues).forEach((key) => {
      const err = validateField(key, data[key]);
      if (err) e[key] = err;
    });
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const next = { ...prev, [name]: value };
      // live-validate this field if it was already touched
      if (touched[name]) {
        setErrors((prevErr) => {
          const nextErr = { ...prevErr };
          const fieldError = validateField(name, value);
          if (fieldError) nextErr[name] = fieldError;
          else delete nextErr[name];
          return nextErr;
        });
      }
      return next;
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldError = validateField(name, value);
    setErrors((prev) => {
      const next = { ...prev };
      if (fieldError) next[name] = fieldError;
      else delete next[name];
      return next;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // trim all values before validation/submit
    const trimmed = {};
    Object.keys(formData).forEach((k) => {
      trimmed[k] = typeof formData[k] === "string" ? formData[k].trim() : formData[k];
    });

    const validationErrors = validateAll(trimmed);
    setErrors(validationErrors);
    // mark all touched so errors show
    setTouched({ name: true, email: true, type: true, message: true });

    if (Object.keys(validationErrors).length > 0) {
      // focus first invalid field
      const firstInvalid = Object.keys(defaultValues).find((k) => validationErrors[k]);
      if (firstInvalid && refs[firstInvalid]?.current) {
        refs[firstInvalid].current.focus();
      }
      return;
    }

    // proceed with submit
    setSubmitting(true);
    try {
      if (onSubmit) {
        onSubmit(trimmed);
      } else {
        console.log("Feedback submitted:", trimmed);
      }
    } finally {
      // mimic async finish
      setSubmitting(false);
    }
  };

  // helper to display error text
  const FieldError = ({ name }) =>
    errors[name] && touched[name] ? (
      <p className="mt-1 text-sm text-red-600" role="alert">
        {errors[name]}
      </p>
    ) : null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-8">
      {/* 👇 This wrapper puts the form in the middle of the page */}
      <div
        className={
          "w-full max-w-3xl bg-white rounded-3xl shadow-sm px-6 sm:px-10 py-8 sm:py-10 " +
          className
        }
      >
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
          {description && (
            <p className="text-sm text-slate-500 mt-2 max-w-xl">{description}</p>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Name:
            </label>
            <input
              ref={refs.name}
              type="text"
              name="name"
              placeholder="Enter Recipient Name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full rounded-md border px-4 py-2.5 text-sm
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                placeholder:text-slate-400 ${
                  errors.name && touched.name ? "border-red-400 ring-red-100" : "border-slate-200"
                }`}
            />
            <FieldError name="name" />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email:
            </label>
            <input
              ref={refs.email}
              type="email"
              name="email"
              placeholder="abc@gmail.com"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full rounded-md border px-4 py-2.5 text-sm
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                placeholder:text-slate-400 ${
                  errors.email && touched.email ? "border-red-400 ring-red-100" : "border-slate-200"
                }`}
            />
            <FieldError name="email" />
          </div>

          {/* Feedback Type */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Feedback Type:
            </label>
            <div className="relative">
              <select
                ref={refs.type}
                name="type"
                value={formData.type}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`block w-full appearance-none rounded-md border px-3 sm:px-4 py-2.5 text-sm sm:text-base bg-white pr-10
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.type && touched.type ? "border-red-400 ring-red-100" : "border-slate-200"
                  }`}
              >
                <option value="">Select</option>
                <option value="bug">Bug / Issue</option>
                <option value="feature">Feature Request</option>
                <option value="general">General Feedback</option>
              </select>

              {/* Dropdown Arrow */}
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
                ▾
              </span>
            </div>
            <FieldError name="type" />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Message:
            </label>
            <textarea
              ref={refs.message}
              name="message"
              rows={6}
              placeholder="Share your thoughts with us..."
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full rounded-md border px-4 py-3 text-sm
                resize-none
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                placeholder:text-slate-400 ${
                  errors.message && touched.message ? "border-red-400 ring-red-100" : "border-slate-200"
                }`}
            />
            <FieldError name="message" />
          </div>

          {/* Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-md bg-[#0056FF] py-3 text-sm font-semibold 
                text-white shadow-sm hover:bg-[#0044cc] active:scale-[0.99] 
                transition disabled:opacity-60"
            >
              {submitting ? "Submitting..." : submitLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
