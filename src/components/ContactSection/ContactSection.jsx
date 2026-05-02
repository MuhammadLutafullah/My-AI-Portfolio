import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.message === 'Failed to fetch') {
        setStatus({ type: 'error', message: 'Cannot connect to server. Please make sure the API is running on port 5000.' });
      } else {
        setStatus({ type: 'error', message: error.message || 'Failed to send message. Please try again later.' });
      }
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="pt-[96px] max-sm:pt-[40px]">
      <div className="bg-black text-white py-16 max-sm:py-[30px]">
        <div className="custom-container mx-auto max-w-[1440px] px-[20px] text-center">
          <div className="text-center">
            <p className="hero-heading font-bold text-[40px] leading-[50px] max-md:text-[27px] max-md:leading-[37px]">
              Contact Me
            </p>
            <p className="parallex-desc max-w-[670px] mx-auto py-[21px] max-md:py-[15px] font-medium font-normal text-[18px] leading-[27px] text-[#ffffff] max-xxsm:text-[16px]">
              If you'd like to get in touch, send me your details via email, and
              I'll connect with you. Thank you for reaching out!
            </p>
          </div>
          
          {status.message && (
            <div className={`mb-4 p-3 rounded ${
              status.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            } text-white`}>
              {status.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-[770px] mx-auto">
            <div className="flex max-sm:flex-col flex-row gap-4 justify-center items-center">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="max-sm:w-full flex-1 w-[250px] font-medium text-[18px] leading-[30px] px-[24px] py-[10px] border border-[#777777] rounded-[8px] bg-white text-black outline-none"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="max-sm:w-full flex-1 w-[250px] font-medium text-[18px] leading-[30px] px-[24px] py-[10px] border border-[#777777] rounded-[8px] bg-white text-black outline-none"
                required
              />
            </div>

            <div className="flex max-sm:flex-col flex-row gap-4 justify-center items-center">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="max-sm:w-full flex-1 w-[250px] font-medium text-[18px] leading-[30px] px-[24px] py-[10px] border border-[#777777] rounded-[8px] bg-white text-black outline-none"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="max-sm:w-full flex-1 w-[250px] font-medium text-[18px] leading-[30px] px-[24px] py-[10px] border border-[#777777] rounded-[8px] bg-white text-black outline-none"
              />
            </div>

            <div className="flex max-sm:flex-col flex-row gap-4 justify-center items-center">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full font-medium text-[18px] leading-[30px] px-[24px] py-[10px] border border-[#777777] rounded-[8px] bg-white text-black outline-none"
                rows="4"
                required
              />
            </div>

            <div className="flex justify-center mt-2">
              <button
                type="submit"
                disabled={isSending}
                className="w-full max-w-[250px] cursor-pointer rounded-[8px] bg-transparent border border-[#ffffff] text-white font-medium text-[18px] leading-[30px] px-[24px] py-[10px] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;