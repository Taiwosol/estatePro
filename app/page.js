"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

function Counter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            let startTime = null;
            const animate = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              setCount(Math.floor(progress * target));
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Navbar isSticky={true} />
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/estateproo-hero-img.png"
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          <div className="h-40"></div>

          {/* Main Content */}
          <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                {/* Avatar images with gap and smaller size */}
                <div className="flex">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full overflow-hidden"
                    >
                      <Image
                        src={`/hero-small-0${i}.png`}
                        alt={`Person ${i}`}
                        width={24}
                        height={24}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-sm md:text-base max-w-md">
                Trusted by investors, realtors, founders and teams shaping the
                next generation of future builders and billionaires
              </p>
            </div>

            {/* Headline - smaller size */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight">
              Find Properties That Match Your Lifestyle
            </h1>

            {/* Subheadline - ash/gray color */}
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl">
              Discover verified listings, connect with trusted agents, and
              secure your next home or investment with confidence.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all cursor-pointer">
                Book Inspection
              </button>
              <button className="px-8 py-4 bg-fuchsia-600 text-white rounded-full font-semibold hover:bg-fuchsia-500 transition-all cursor-pointer">
                Browse Listings
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* New About Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Built on trust, focused on your future
              </h2>
              <p className="text-gray-600 mb-8 max-w-md">
                At EstatePro, we guide you through every step of your property
                journey. From verified listings to expert support, we ensure a
                seamless and confident buying or renting experience.
              </p>
              <button className="px-8 py-4 bg-fuchsia-600 text-white rounded-full font-semibold hover:bg-fuchsia-500 transition-all cursor-pointer">
                More About Us
              </button>
            </div>

            {/* Right Content */}
            <div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {/* Left Image - smaller, bottom-aligned */}
                <div className="flex flex-col justify-end">
                  <div className="relative rounded-3xl overflow-hidden">
                    <Image
                      src="/about-img-01.png"
                      alt="About 1"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                {/* Right Image - taller */}
                <div>
                  <div className="relative rounded-3xl overflow-hidden">
                    <Image
                      src="/about-img-02.jpg"
                      alt="About 2"
                      width={400}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-5xl font-medium mb-2">
                    <Counter target={18} />
                  </div>
                  <div className="w-full h-px bg-gray-200"></div>
                </div>
                <div>
                  <div className="text-5xl font-medium mb-2">
                    <Counter target={50} suffix="+" />
                  </div>
                  <div className="w-full h-px bg-gray-200"></div>
                </div>
                <div>
                  <div className="text-5xl font-medium mb-2">
                    <Counter target={200} suffix="+" />
                  </div>
                  <div className="w-full h-px bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Expertise Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              Why choose our real estate expertise
            </h2>
          </div>
          <div className="max-w-3xl">
            <div className="space-y-8">
                {/* Feature 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-fuchsia-600 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 16L13 21L24 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Expert Guidance
                    </h3>
                    <p className="text-gray-600">
                      Get professional support at every stage—from property search
                      to final documentation.
                    </p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-fuchsia-600 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 16L13 21L24 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Verified Listings
                    </h3>
                    <p className="text-gray-600">
                      Every property is carefully reviewed to ensure accuracy,
                      transparency, and trust.
                    </p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-fuchsia-600 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 16L13 21L24 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Smart Investment Insights
                    </h3>
                    <p className="text-gray-600">
                      Access market trends and data to make informed property
                      decisions.
                    </p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-fuchsia-600 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 16L13 21L24 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Proven Track Record
                    </h3>
                    <p className="text-gray-600">
                      Trusted by hundreds of clients with a history of successful
                      transactions.
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Expertise Images Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {/* Left Image - top-left */}
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/expertise-img-01.png"
                alt="Expertise 1"
                width={350}
                height={250}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Empty column */}
            <div></div>
            {/* Empty column */}
            <div></div>
            {/* Empty column */}
            <div></div>
            {/* Empty column */}
            <div></div>
            {/* Right Image - bottom-right */}
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/expertise-img-02.png"
                alt="Expertise 2"
                width={350}
                height={250}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Unlock Value Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              Unlock more value with EstatePro
            </h2>
          </div>
          <div className="space-y-8">
            {/* Property Management Card */}
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="text-fuchsia-600 text-3xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-2">
                Property Management
              </h3>
              <p className="text-gray-600">
                Manage, buy, sell, or rent with expert backed support tailored
                to your needs.
              </p>
            </div>
            {/* Investment Advisory Card */}
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="text-fuchsia-600 text-3xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-2">
                Investment Advisory
              </h3>
              <p className="text-gray-600">
                Get expert investment advice tailored to your real estate goals,
                whether you're buying, selling, or renting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Image Section */}
      <section className="relative w-full h-screen">
        <Image
          src="/home-img.jpg"
          alt="Home"
          fill
          className="object-cover"
          priority
        />
      </section>
      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
