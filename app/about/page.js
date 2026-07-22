"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

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

export default function About() {
  return (
    <>
      <Navbar isSticky={false} bgColor="bg-white" textColor="black" />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="py-10 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Building a smarter way to buy, sell, and invest in property
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              At EstatePro, we simplify real estate with verified listings,
              expert guidance, and a seamless experience from search to
              ownership.
            </p>
            <Link
              href="/properties"
              className="inline-block px-10 py-4 bg-fuchsia-600 text-white rounded-full font-semibold hover:bg-fuchsia-500 transition-all cursor-pointer"
            >
              Explore Properties
            </Link>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-10 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Built on trust and focused on your future
              </h2>
              <p className="text-gray-600 text-lg">
                At EstatePro, we believe real estate should be simple,
                transparent, and rewarding. We combine verified listings with
                expert support to help you make confident decisions—whether
                you're buying, selling, or investing.
              </p>
            </div>

            {/* Counters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-3">
                  <Counter target={18} />
                </div>
                <div className="w-32 h-px bg-gray-300 mx-auto mb-3"></div>
                <p className="text-gray-600">Years of experience</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-3">
                  <Counter target={50} suffix="+" />
                </div>
                <div className="w-32 h-px bg-gray-300 mx-auto mb-3"></div>
                <p className="text-gray-600">Expert members</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-3">
                  <Counter target={200} suffix="+" />
                </div>
                <div className="w-32 h-px bg-gray-300 mx-auto mb-3"></div>
                <p className="text-gray-600">Satisfied clients</p>
              </div>
            </div>
          </div>
        </section>

        {/* Image & Mission Section */}
        <section className="py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Left Column: Tall Image (about-img-02) */}
              <div className="rounded-2xl overflow-hidden relative">
                <Image
                  src="/about-img-02.jpg"
                  alt="About EstatePro"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Right Column: Shorter Image + Text */}
              <div className="flex flex-col gap-8">
                {/* Top: Shorter Image (about-img-01) */}
                <div className="rounded-2xl overflow-hidden aspect-[3/2] relative">
                  <Image
                    src="/about-img-01.png"
                    alt="About EstatePro"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Bottom: Mission Text */}
                <div className="text-gray-600 text-lg">
                  Our mission is to make property access easier and more
                  reliable for everyone. By combining local market expertise
                  with modern tools, we help clients find the right
                  opportunities and make smarter real estate decisions.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Section */}
        <section className="py-10 px-6">
          <div className="max-w-5xl mx-auto text-center mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your trusted real estate experts
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Work with experienced professionals who understand the market,
              negotiate effectively, and guide you toward the right property
              decisions.
            </p>
            <Link
              href="#"
              className="inline-block px-10 py-4 bg-fuchsia-600 text-white rounded-full font-semibold hover:bg-fuchsia-500 transition-all cursor-pointer"
            >
              Meet Our Experts
            </Link>
          </div>

          {/* Rotating Expert Images */}
          <div
            className="max-w-4xl mx-auto relative w-full aspect-square"
            suppressHydrationWarning
          >
            <style>{`
              @keyframes rotate {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
              @keyframes counter-rotate {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(-360deg);
                }
              }
              .rotate-container {
                animation: rotate 20s linear infinite;
              }
              .counter-rotate {
                animation: counter-rotate 20s linear infinite;
              }
            `}</style>
            <div
              className="rotate-container w-full h-full"
              suppressHydrationWarning
            >
              {[
                "expert-img-01.jpg",
                "expert-img-02.jpg",
                "expert-img-03.jpg",
                "expert-img-04.jpg",
                "expert-img-05.jpg",
                "expert-img-06.jpg",
                "expert-img-07.jpg",
                "expert-img-08.jpg",
                "expert-img-09.jpg",
              ].map((img, index) => {
                const baseAngle = index * 40;
                return (
                  <div
                    key={index}
                    className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `translate(-50%, -50%) rotate(${baseAngle}deg) translateY(-160px)`,
                    }}
                    suppressHydrationWarning
                  >
                    {/* This div counteracts the container's continuous rotation */}
                    <div
                      className="counter-rotate w-full h-full"
                      suppressHydrationWarning
                    >
                      {/* This div counteracts the initial base angle rotation */}
                      <div
                        className="w-full h-full"
                        style={{ transform: `rotate(-${baseAngle}deg)` }}
                        suppressHydrationWarning
                      >
                        <Image
                          src={`/${img}`}
                          alt={`Expert ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
