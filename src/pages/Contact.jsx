import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

   
    if (!formData.firstName) {
      errors.firstName = "First name is required";
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.message) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);

   
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted", formData);
   
    }
  };

  return (
    <div>
      <Header />
      <div
        className="h-[400px] mb-4 bg-cover bg-center flex justify-center items-center w-full overflow-hidden"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dj7wogsju/image/upload/v1741711262/Group_238820_fsqqzy.png')",
        }}
        id="Hero"
      >
        <h2 className="text-center text-white text-[80px] font-[400]">
          Contact Us
        </h2>
      </div>
      <div className="lx:w-[1280px] lg:w-[1080px] md:w-[786px] sm:w-[600px] sm:mx-auto mx-4">
        <div className="sm:flex block items-center gap-20 h-full">
        <div className="sm:w-[60%] bg-black p-10  rounded-[20px] mx-10 sm:mx-0">
            <p className="sm:text-[36px] text-[32px] mb-5 text-white">
              Stay connected with us to <br className="sm:block hidden" />
              explore the taste of Best Sizzlers
            </p>
            <ul className="text-white text-[16px] font-[400]">
              <li className="flex items-center gap-3 mb-2">
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.570312"
                    width="40"
                    height="40"
                    rx="20"
                    fill="#808080"
                    fill-opacity="0.41"
                  />
                  <path
                    d="M19.8203 27.5938C19.2578 26.9062 18.5599 25.9792 17.7266 24.8125C16.9141 23.6667 16.1953 22.4792 15.5703 21.25C14.9453 20.0208 14.612 18.9375 14.5703 18C14.612 16.2917 15.1953 14.875 16.3203 13.75C17.4453 12.625 18.862 12.0417 20.5703 12C22.2786 12.0417 23.6953 12.625 24.8203 13.75C25.9453 14.875 26.5286 16.2917 26.5703 18C26.5286 18.9375 26.1953 20.0208 25.5703 21.25C24.9245 22.4792 24.1953 23.6667 23.3828 24.8125C22.5703 25.9792 21.8828 26.9062 21.3203 27.5938C21.112 27.8438 20.862 27.9688 20.5703 27.9688C20.2786 27.9688 20.0286 27.8438 19.8203 27.5938ZM20.5703 20C21.1328 19.9792 21.6016 19.7812 21.9766 19.4062C22.3516 19.0312 22.5495 18.5625 22.5703 18C22.5495 17.4375 22.3516 16.9688 21.9766 16.5938C21.6016 16.2188 21.1328 16.0208 20.5703 16C20.0078 16.0208 19.5391 16.2188 19.1641 16.5938C18.7891 16.9688 18.5911 17.4375 18.5703 18C18.5911 18.5625 18.7891 19.0312 19.1641 19.4062C19.5391 19.7812 20.0078 19.9792 20.5703 20Z"
                    fill="white"
                  />
                </svg>
                114 Desborough Road, high <br />
                wycombe, HP11 2PU
              </li>
              <li>
                <a
                  className="flex items-center gap-3 mb-2"
                  href="mailto:info@bestsizzler.com"
                >
                  <svg
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.570312"
                      width="40"
                      height="40"
                      rx="20"
                      fill="#808080"
                      fill-opacity="0.41"
                    />
                    <path
                      d="M27.0703 14C27.487 14.0208 27.8411 14.1667 28.1328 14.4375C28.4036 14.7292 28.5495 15.0833 28.5703 15.5C28.5495 16 28.3516 16.3958 27.9766 16.6875L21.1641 21.8125C20.7682 22.0625 20.3724 22.0625 19.9766 21.8125L13.1641 16.6875C12.7891 16.3958 12.5911 16 12.5703 15.5C12.5911 15.0833 12.737 14.7292 13.0078 14.4375C13.2995 14.1667 13.6536 14.0208 14.0703 14H27.0703ZM19.3828 22.5938C19.737 22.8646 20.1328 23 20.5703 23C21.0078 23 21.4036 22.8646 21.7578 22.5938L28.5703 17.5V24C28.5495 24.5625 28.3516 25.0312 27.9766 25.4062C27.6016 25.7812 27.1328 25.9792 26.5703 26H14.5703C14.0078 25.9792 13.5391 25.7812 13.1641 25.4062C12.7891 25.0312 12.5911 24.5625 12.5703 24V17.5L19.3828 22.5938Z"
                      fill="white"
                    />
                  </svg>
                  info@bestsizzler.com
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-3 mb-2"
                  href="tel:(+44) 01494 473000"
                >
                  <svg
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.570312"
                      width="40"
                      height="40"
                      rx="20"
                      fill="#808080"
                      fill-opacity="0.41"
                    />
                    <path
                      d="M28.5391 24.0938L27.8203 27.25C27.6745 27.7292 27.3516 27.9792 26.8516 28C24.2057 27.9792 21.8099 27.3229 19.6641 26.0312C17.5182 24.7604 15.8099 23.0521 14.5391 20.9062C13.2474 18.7604 12.5911 16.3646 12.5703 13.7188C12.5911 13.2188 12.8411 12.8958 13.3203 12.75L16.4766 12.0312C16.9766 11.9479 17.3516 12.1354 17.6016 12.5938L19.0391 15.9688C19.2057 16.4271 19.112 16.8125 18.7578 17.125L17.1016 18.4688C17.6224 19.5521 18.3099 20.5208 19.1641 21.375C20.0182 22.2292 20.987 22.9271 22.0703 23.4688L23.4453 21.7812C23.7578 21.4271 24.1432 21.3333 24.6016 21.5L27.9766 22.9375C28.4141 23.2083 28.6016 23.5938 28.5391 24.0938Z"
                      fill="white"
                    />
                  </svg>
                  (+44) 01494 473000
                </a>
              </li>
              <li className="flex items-center gap-3 mb-2">
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.570312"
                    width="40"
                    height="40"
                    rx="20"
                    fill="#808080"
                    fill-opacity="0.41"
                  />
                  <path
                    d="M20.5703 28C19.0703 27.9792 17.7266 27.6146 16.5391 26.9062C15.3307 26.1979 14.3724 25.2396 13.6641 24.0312C12.9557 22.8438 12.5911 21.5 12.5703 20C12.5911 18.5 12.9557 17.1562 13.6641 15.9688C14.3724 14.7604 15.3307 13.8021 16.5391 13.0938C17.7266 12.3854 19.0703 12.0208 20.5703 12C22.0703 12.0208 23.4141 12.3854 24.6016 13.0938C25.8099 13.8021 26.7682 14.7604 27.4766 15.9688C28.1849 17.1562 28.5495 18.5 28.5703 20C28.5495 21.5 28.1849 22.8438 27.4766 24.0312C26.7682 25.2396 25.8099 26.1979 24.6016 26.9062C23.4141 27.6146 22.0703 27.9792 20.5703 28ZM19.8203 20C19.8203 20.2708 19.9349 20.4688 20.1641 20.5938L23.1641 22.5938C23.5599 22.8438 23.8932 22.7812 24.1641 22.4062C24.4141 22.0104 24.3516 21.6667 23.9766 21.375L21.3203 19.5938V15.75C21.2786 15.2917 21.0182 15.0417 20.5391 15C20.3307 15 20.1536 15.0729 20.0078 15.2188C19.862 15.3646 19.7891 15.5417 19.7891 15.75L19.8203 20Z"
                    fill="white"
                  />
                </svg>
                Mon - Friday 09:00 AM - 09:00 PM
              </li>
            </ul>
            <hr className="bg-white w-full " />
          </div>
          <div className="sm:w-[40%] mx-10 sm:mx-0 mt-10 sm:mt-0">
            <form onSubmit={handleSubmit}>
              <p className="text-[20px] font-[500]">First Name</p>
              <input
                type="text"
                name="firstName"
                className="w-full outline-none border border-[#ADADAD] text-[#A6A6A6] py-3 px-4 rounded-[4px] mt-2"
                placeholder="Enter Your Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              {formErrors.firstName && (
                <p className="text-red-500 text-sm">{formErrors.firstName}</p>
              )}

              <p className="text-[20px] font-[500] mt-5">Email Address</p>
              <input
                type="email"
                name="email"
                className="w-full outline-none border border-[#ADADAD] text-[#A6A6A6] py-3 px-4 rounded-[4px] mt-2"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm">{formErrors.email}</p>
              )}

              <p className="text-[20px] font-[500] mt-5">Message</p>
              <textarea
                name="message"
                className="w-full outline-none border border-[#ADADAD] text-[#A6A6A6] py-2 px-4 rounded-[4px] mt-2"
                placeholder="Message!"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              {formErrors.message && (
                <p className="text-red-500 text-sm">{formErrors.message}</p>
              )}

              <button
                type="submit"
                className="text-white bg-[#DA0025] w-full px-1 py-2 text-[20px] font-[600] rounded-full mt-8"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
        <div className="map-container my-10 sm:mx-0 mx-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.5734381322736!2d-0.761083223010584!3d51.63102260166429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766138c0fa2383%3A0x91133632a583675b!2sSizzler%20High%20Wycombe%20(Halal)!5e0!3m2!1sen!2sin!4v1741775767998!5m2!1sen!2sin"
            width="100%"
            height="450"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
