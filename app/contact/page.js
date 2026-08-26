"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Navbar isSticky={true} bgColor="bg-transparent" textColor="white" />
      <section className="relative h-[40vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/contact-img.png"
            alt="Contact"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Connect With Us
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-md leading-relaxed">
            We're here to answer your questions, discuss your ideas, or help you
            start your next architectural journey.
          </p>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 max-w-2xl">
            Contact us our offices around the world
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                Fulham, London
              </h3>
              <p className="text-gray-400 text-sm mb-6">London</p>
              <div className="w-64 h-px bg-gray-200 mb-6"></div>
              <p className="text-lg md:text-xl mb-2">+7813-1234-5678</p>
              <p className="text-lg md:text-xl">hello@estatepro.com</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                Manchester, UK
              </h3>
              <p className="text-gray-400 text-sm mb-6">Manchester</p>
              <div className="w-64 h-px bg-gray-200 mb-6"></div>
              <p className="text-lg md:text-xl mb-2">+440 3-1234-5678</p>
              <p className="text-lg md:text-xl">hello@estatepro.com</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      <Footer />
    </>
  );
}
