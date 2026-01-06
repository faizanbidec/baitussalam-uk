// "use client";
// import { useState } from "react";

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);

//     // Reset form
//     setFormData({ name: "", email: "", subject: "", message: "" });
//     setSubmitted(true);

//     // Optional: clear the success message after 3 seconds
//     setTimeout(() => setSubmitted(false), 3000);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4">
//       {/* Name & Email */}
//       <div className="flex flex-wrap gap-4 mb-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="flex-1 p-3 text-sm border border-black rounded-md outline-none"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="flex-1 p-3 text-sm border border-black rounded-md outline-none"
//           required
//         />
//       </div>

//       {/* Subject */}
//       <div className="mb-4">
//         <input
//           type="text"
//           name="subject"
//           placeholder="Enter Subject"
//           value={formData.subject}
//           onChange={handleChange}
//           className="w-full p-3 text-sm border border-black rounded-md outline-none"
//           required
//         />
//       </div>

//       {/* Message */}
//       <div className="mb-4">
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleChange}
//           rows={4}
//           className="w-full p-3 text-sm border border-black rounded-md outline-none resize-none"
//           required
//         ></textarea>
//       </div>

//       {/* Submit Button */}
//       <button
//         type="submit"
//         className="w-full bg-[#22305B] text-white py-3 rounded-full text-sm hover:bg-[#1a2447] transition-colors"
//       >
//         Submit
//       </button>

//       {/* Success Message */}
//       {submitted && (
//         <p className="mt-4 text-green-600 text-center">Form submitted successfully!</p>
//       )}
//     </form>
//   );
// }
"use client";
import { useState } from "react";
import { contactAPI } from "../api/contactUsAPI";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
  const response = await contactAPI.submitContactForm(formData);
  console.log("API response:", response.data);

  if (response.data?.success) {
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  } else {
    console.error("Email not sent:", response.data?.message);
  }
} catch (err) {
  console.error("Error submitting form:", err);
} finally {
      setLoading(false);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="w-ful max-w-[900px] mx-auto p-4">
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="flex-1 p-3 text-sm border border-black rounded-md outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="flex-1 p-3 text-sm border border-black rounded-md outline-none"
          required
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          name="subject"
          placeholder="Enter Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-3 text-sm border border-black rounded-md outline-none"
          required
        />
      </div>

      <div className="mb-4">
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full p-3 text-sm border border-black rounded-md outline-none resize-none"
          required
        />
      </div>

      {error && <p className="text-red-600 mb-4">{error}</p>}
      {submitted && <p className="text-green-600 mb-4">Message sent successfully!</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#22305B] text-white py-3 rounded-full text-sm hover:bg-[#1a2447] transition-colors disabled:opacity-50"
      >
        {loading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
