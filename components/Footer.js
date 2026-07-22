"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log("Subscribed:", email);
    setEmail("");
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
                <button
                  type="submit"
                  className="w-auto px-12 py-4 bg-fuchsia-600 text-white rounded-full font-semibold hover:bg-fuchsia-500 transition-all cursor-pointer"
                >
                  Join us Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
