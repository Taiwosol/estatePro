"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ScrollImageGallery from "@/components/ScrollImageGallery";
import LatestBlogs from "@/components/LatestBlogs";
import CTASection from "@/components/CTASection";

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

const featuredProperties = [
  {
    id: "canary-wharf-luxury-apartment",
    title: "Canary Wharf Luxury Apartment",
    titleLine1: "Canary Wharf",
    titleLine2: "Luxury Apartment",
    location: "Canary Wharf, London",
    price: "£1,250,000",
    pricePer: "",
    beds: 3,
    baths: 3,
    sqft: 1450,
    mainImage: "/canary-img.jpg",
    floatImage: "/canary-img-05.jpg",
  },
  {
    id: "kensington-townhouse",
    title: "Kensington Townhouse",
    titleLine1: "Kensington",
    titleLine2: "Townhouse",
    location: "Kensington, London",
    price: "£3,800,000",
    pricePer: "",
    beds: 5,
    baths: 4,
    sqft: 3200,
    mainImage: "/kensington-img.jpg",
    floatImage: "/kesington-img-05.jpg",
  },
  {
    id: "manchester-city-office-space",
    title: "Manchester City Office Space",
    titleLine1: "Manchester City",
    titleLine2: "Office Space",
    location: "Manchester City Centre",
    price: "£85,000",
    pricePer: " / year",
    beds: 5,
    baths: 4,
    sqft: 3200,
    mainImage: "/manchester-img.jpg",
    floatImage: "/manchester-img-05.jpg",
  },
  {
    id: "surrey-family-home",
    title: "Surrey Family Home",
    titleLine1: "Surrey Family",
    titleLine2: "Home",
    location: "Guildford, Surrey",
    price: "£950,000",
    pricePer: "",
    beds: 4,
    baths: 4,
    sqft: 2100,
    mainImage: "/surreu-img.jpg",
    floatImage: "/surrey-img-05.jpg",
  },
  {
    id: "short-stay-shoreditch",
    title: "Short Stay – Shoreditch",
    titleLine1: "Short Stay",
    titleLine2: "Shoreditch",
    location: "Shoreditch, London",
    price: "£180",
    pricePer: " / night",
    beds: 2,
    baths: 2,
    sqft: 850,
    mainImage: "/shoreditch-img.jpg",
    floatImage: "/shoreditch-img-05.jpg",
  },
  {
    id: "birmingham-modern-terrace",
    title: "Birmingham Modern Terrace",
    titleLine1: "Birmingham",
    titleLine2: "Modern Terrace",
    location: "Birmingham",
    price: "£320,000",
    pricePer: "",
    beds: 3,
    baths: 2,
    sqft: 1200,
    mainImage: "/birmingham-img.jpg",
    floatImage: "/birmingham-img-05.jpg",
  },
];

function FeaturedPropertiesSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-500vw"]);

  return (
    <section ref={targetRef} className="h-[600vh] bg-white relative">
      <div className="sticky top-0 h-screen w-screen overflow-hidden bg-white">
        <motion.div style={{ x }} className="flex h-full w-full">
          {featuredProperties.map((property, index) => {
            return (
              <div
                key={property.id}
                className="group relative w-screen h-screen flex-shrink-0"
              >
                <Link
                  href={`/properties/${property.id}`}
                  className="absolute inset-0 block cursor-pointer"
                >
                  <div className="absolute inset-0">
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={property.mainImage}
                        alt={property.title}
                        fill
                        className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-20" />
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center pointer-events-none">
                    <div className="w-full flex justify-end pr-6 md:pr-12 lg:pr-20">
                      <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden w-full max-w-[380px] transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-fuchsia-200/50">
                        <div className="p-5 md:p-6">
                          <div className="relative w-full h-[220px] md:h-[250px] rounded-2xl overflow-hidden mb-5">
                            <Image
                              src={property.floatImage}
                              alt={`${property.title} detail`}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl md:text-2xl font-bold leading-tight">
                                {property.titleLine1}
                              </h3>
                              <h3 className="text-xl md:text-2xl font-bold leading-tight">
                                {property.titleLine2}
                              </h3>
                            </div>
                            <p className="text-lg md:text-xl font-bold text-fuchsia-600 whitespace-nowrap pl-4">
                              {property.price}
                              {property.pricePer}
                            </p>
                          </div>

                          <p className="text-gray-500 text-sm md:text-base mb-5">
                            {property.location}
                          </p>

                          <div className="flex items-center justify-between text-gray-600 text-sm md:text-base border-t border-gray-100 pt-4">
                            <span>{property.beds} Bedrooms</span>
                            <span>{property.baths} Bathrooms</span>
                            <span>{property.sqft} sq ft</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      let attempts = 0;
      const tryScroll = () => {
        const el = document.getElementById(hash);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          try {
            window.scrollTo({ top, behavior: "auto" });
          } catch {
            window.scrollTo(0, Math.max(top, 0));
          }
          // Final re-check after one more paint to catch post-anim/layout shifts
          requestAnimationFrame(() => {
            const el2 = document.getElementById(hash);
            if (!el2) return;
            const top2 = el2.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo(0, Math.max(top2, 0));
          });
        } else if (attempts < 20) {
          attempts++;
          requestAnimationFrame(tryScroll);
        }
      };
      tryScroll();
    };
    // Run after mount + after one paint so sections with layout effects are measured
    requestAnimationFrame(() => requestAnimationFrame(scrollToHash));
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

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

      {/* Featured Properties Horizontal Scroll Section */}
      <FeaturedPropertiesSection />

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
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 16L13 21L24 10"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 16L13 21L24 10"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 16L13 21L24 10"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 16L13 21L24 10"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
              <div className="mb-4">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 10V19"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 7V19"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 14L8 19"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 5V19C4 19.5523 4.44772 20 5 20H19"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
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
              <div className="mb-4">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 10V19"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 7V19"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 14L8 19"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 5V19C4 19.5523 4.44772 20 5 20H19"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Investment Advisory
              </h3>
              <p className="text-gray-600">
                Get expert investment advice tailored to your real estate goals,
                whether you&apos;re buying, selling, or renting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ScrollImageGallery />

      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            {/* Valuation Services Card */}
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="mb-4">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 10V19"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 7V19"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 14L8 19"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 5V19C4 19.5523 4.44772 20 5 20H19"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Valuation Services</h3>
              <p className="text-gray-600">
                Receive accurate, professional property valuations backed by
                local market data and expert analysis.
              </p>
            </div>
            {/* Rental Services Card */}
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="mb-4">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 10V19"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 7V19"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 14L8 19"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 5V19C4 19.5523 4.44772 20 5 20H19"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rental Services</h3>
              <p className="text-gray-600">
                Explore personalized rental services tailored to help you find
                or lease your ideal home with ease and confidence.
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

      {/* Latest Blogs Section */}
      <LatestBlogs />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </>
  );
}
