"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-10 px-8 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg lg:text-lg leading-relaxed text-gray-600">
              Got questions? we definitely got answers. Here are some of the
              everyday questions we get to answer.
            </p>
          </div>
          <div className="lg:col-span-7">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-300 py-8 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-xl md:text-2xl lg:text-2xl font-normal">
                    {faq.question}
                  </h3>
                  <span className="text-3xl transition-transform duration-300">
                    {openIndex === index ? "×" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <div className="mt-6 text-base md:text-lg lg:text-lg text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
