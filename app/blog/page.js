"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const blogs = [
  {
    id: "real-estate-trends-uk-2026",
    title: "Real Estate Trends to Watch in the UK in 2026",
    date: "June 12 2026",
    image: "/blog-img-01.jpg",
  },
  {
    id: "first-time-property-buyers-guide-uk",
    title: "A Complete Guide for First-Time Property Buyers in the UK",
    date: "June 10 2026",
    image: "/blog-img-02.jpg",
  },
  {
    id: "investment-property-tips-london",
    title: "Simple Ways to Increase Your Property Value Before Selling",
    date: "May 22 2026",
    image: "/blog-img-03.jpg",
  },
  {
    id: "rental-market-outlook-2026",
    title: "How to Identify High-Return Property Investments in the UK",
    date: "May 22 2025",
    image: "/blog-img-04.jpg",
  },
];

export default function Blog() {
  return (
    <>
      <Navbar isSticky={false} bgColor="bg-white" textColor="black" />
      <main className="bg-white">
        <section className="py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight lg:max-w-[48%]">
              Latest in UK Real Estate
            </h1>
            <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-md lg:max-w-[40%] leading-relaxed">
              Explore expert perspectives, property guides,
              <br className="hidden md:block" />
              and market trends designed to keep you ahead.
            </p>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
              {blogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.id}`}
                  className="block group cursor-pointer"
                >
                  <div className="overflow-hidden relative aspect-[21/9] mb-4">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-gray-500 text-sm md:text-base mb-2">
                    {blog.date}
                  </p>
                  <h2 className="text-base md:text-lg lg:text-xl font-bold mb-4">
                    {blog.title}
                  </h2>
                  <div className="inline-block px-5 py-2 md:px-6 md:py-2.5 bg-fuchsia-600 text-white rounded-full font-semibold text-xs md:text-sm hover:bg-fuchsia-500 transition-all">
                    Read Blog
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
