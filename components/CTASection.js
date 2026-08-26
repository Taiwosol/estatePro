"use client";

import { useState } from "react";

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    property: "",
    location: "",
    budget: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/send-cta-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: "success", message: data.message });
        setFormData({
          name: "",
          property: "",
          location: "",
          budget: "",
          email: "",
          phone: "",
        });
      } else {
        setStatus({ type: "error", message: data.message });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="cta"
      className="relative w-full max-w-[100vw] h-[100vh] overflow-hidden scroll-mt-20"
      style={{
        backgroundImage: "url('/birmingham-img-04.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 w-full h-full px-4 md:px-8 lg:px-12 py-4 lg:py-8">
        <div className="w-full h-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 xl:gap-16">
          <div className="lg:col-span-6 flex flex-col justify-between py-6 lg:py-10 xl:py-14">
            <div className="text-white">
              <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 lg:mb-8 leading-tight max-w-md">
                Let&apos;s help you find your next property
              </h1>
              <p className="text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed max-w-sm opacity-90">
                Speak with our team today and take the next step toward owning
                or renting your ideal space.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 md:gap-12 text-white mt-8 lg:mt-12">
              <div>
                <h3 className="text-sm sm:text-base md:text-base lg:text-lg font-semibold mb-1 md:mb-2">
                  Location
                </h3>
                <p className="text-xs sm:text-sm md:text-sm lg:text-base opacity-90">
                  742 Evergreen Terrace, Springfield
                </p>
              </div>
              <div>
                <h3 className="text-sm sm:text-base md:text-base lg:text-lg font-semibold mb-1 md:mb-2">
                  Contact Us
                </h3>
                <p className="text-xs sm:text-sm md:text-sm lg:text-base opacity-90">
                  +781 3-1234-5678
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex items-start lg:items-center justify-end pt-4 lg:pt-0">
            <div className="w-full max-w-lg bg-white rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
                <div className="grid grid-cols-2 gap-6 lg:gap-8">
                  <div>
                    <label className="block text-gray-600 text-xs sm:text-sm md:text-sm lg:text-base mb-1.5 md:mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full py-1.5 md:py-2 lg:py-2.5 px-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-400 transition-colors text-xs sm:text-sm md:text-sm lg:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-xs sm:text-sm md:text-sm lg:text-base mb-1.5 md:mb-2">
                      Property
                    </label>
                    <select
                      name="property"
                      value={formData.property}
                      onChange={handleChange}
                      className="w-full py-1.5 md:py-2 lg:py-2.5 px-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-400 transition-colors text-xs sm:text-sm md:text-sm lg:text-base appearance-none cursor-pointer pr-8"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right center",
                        backgroundSize: "0.875rem",
                      }}
                    >
                      <option value="">Select...</option>
                      <option value="House">House</option>
                      <option value="Land">Land</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 lg:gap-8">
                  <div>
                    <label className="block text-gray-600 text-xs sm:text-sm md:text-sm lg:text-base mb-1.5 md:mb-2">
                      Location
                    </label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full py-1.5 md:py-2 lg:py-2.5 px-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-400 transition-colors text-xs sm:text-sm md:text-sm lg:text-base appearance-none cursor-pointer pr-8"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right center",
                        backgroundSize: "0.875rem",
                      }}
                    >
                      <option value="">Select...</option>
                      <option value="Amsterdam">Amsterdam</option>
                      <option value="Barcelona">Barcelona</option>
                      <option value="United Kingdom">United Kingdom</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-600 text-xs sm:text-sm md:text-sm lg:text-base mb-1.5 md:mb-2">
                      Desired Budget
                    </label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="200,000"
                      className="w-full py-1.5 md:py-2 lg:py-2.5 px-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-400 transition-colors text-xs sm:text-sm md:text-sm lg:text-base"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 lg:gap-8">
                  <div>
                    <label className="block text-gray-900 text-xs sm:text-sm md:text-sm lg:text-base font-semibold mb-1.5 md:mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Type your email"
                      className="w-full py-1.5 md:py-2 lg:py-2.5 px-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-400 transition-colors text-xs sm:text-sm md:text-sm lg:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-xs sm:text-sm md:text-sm lg:text-base mb-1.5 md:mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+440"
                      className="w-full py-1.5 md:py-2 lg:py-2.5 px-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-400 transition-colors text-xs sm:text-sm md:text-sm lg:text-base"
                    />
                  </div>
                </div>

                <div className="pt-2 lg:pt-3">
                  {status.type && (
                    <div
                      className={`mb-6 p-4 rounded-xl text-sm md:text-base ${
                        status.type === "success"
                          ? "bg-green-50 text-green-700 border border-green-200"
                          : "bg-red-50 text-red-700 border border-red-200"
                      }`}
                    >
                      {status.message}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full md:w-auto px-12 md:px-16 lg:px-20 py-2.5 md:py-3 lg:py-3.5 bg-fuchsia-600 text-white rounded-full font-semibold hover:bg-fuchsia-500 transition-all cursor-pointer text-xs sm:text-sm md:text-sm lg:text-base disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 md:h-5 md:w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Details"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
