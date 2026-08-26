"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/subscribe-newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: "success", message: data.message });
        setEmail("");
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
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Brand and Address Row */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <Link
            href="/"
            className="text-3xl font-bold cursor-pointer mb-6 md:mb-0"
          >
            EstatePro
          </Link>
          <div className="text-right">
            <p className="text-gray-600">
              Flat 12, Regency Court 45 Victoria Road
            </p>
            <p className="text-gray-600">
              Kensington London W8 5RH United Kingdom
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-12"></div>

        {/* Main Footer Content - Pages, Socials, Contact */}
        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Pages Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Pages</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/properties"
                    className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    Properties
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    Agent
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Socials</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    X(Twitter)
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    Tik Tok
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    Whatsapp
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    Linkedin
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="mailto:ayanrindetaiwo2@gmail.com"
                    className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    hello@estatepro.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:work@estatepro.com"
                    className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    work@estatepro.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+781312345678"
                    className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    +7813-1234-5678
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-16"></div>

        {/* Newsletter Section - at the bottom */}
        <div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-gray-600 mb-4">Newsletter</h3>
              <p className="text-gray-600 max-w-md">
                Subscribe to our newsletter for exclusive real estate updates,
                tips, and market insights.
              </p>
            </div>
            <div>
              <form onSubmit={handleSubscribe} className="space-y-6">
                <div>
                  <label className="block text-gray-600 mb-3">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Type your email"
                    className="w-full py-3 px-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-fuchsia-600 transition-colors"
                    required
                  />
                </div>
                {status.type && (
                  <div
                    className={`p-4 rounded-xl ${
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
                  className="w-auto px-12 py-4 bg-fuchsia-600 text-white rounded-full font-semibold hover:bg-fuchsia-500 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
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
                      Subscribing...
                    </>
                  ) : (
                    "Join us Now"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
