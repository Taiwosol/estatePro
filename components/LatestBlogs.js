"use client";

import Link from "next/link";
import Image from "next/image";

const blogs = [
  {
    id: "real-estate-trends-uk-2026",
    title: "Real Estate Trends to Watch in the UK in 2026",
    date: "June 12 2026",
    image: "/blog-img-01.jpg",
    description:
      "Cities such as Manchester, Birmingham, and Leeds continue to attract both investors and homebuyers due to strong rental demand and ongoing regeneration projects. These regions offer more accessible price points compared to...",
  },
  {
    id: "first-time-property-buyers-guide-uk",
    title: "A Complete Guide for First-Time Property Buyers in the UK",
    date: "June 10 2026",
    image: "/blog-img-02.jpg",
    description:
      "Before beginning your property search, it&apos;s essential to have a clear understanding of your financial position and overall budget. This includes not only your deposit but also additional costs such as stamp duty, legal fees, and...",
  },
  {
    id: "rental-market-outlook-2026",
    title: "How to Identify High-Return Property Investments in the UK",
    date: "May 22 2025",
    image: "/blog-img-04.jpg",
    description:
      "Rental yield is one of the most important indicators when evaluating the profitability of an investment property. Properties located in high-demand rental areas often provide consistent income and long-term financial stability.",
  },
  {
    id: "investment-property-tips-london",
    title: "Simple Ways to Increase Your Property Value Before Selling",
    date: "May 22 2026",
    image: "/blog-img-03.jpg",
    description:
      "First impressions play a crucial role in attracting potential buyers, and the exterior of your property sets the tone. Simple improvements such as fresh paint, landscaping, and updated lighting can significantly enhance your home&apos;s...",
  },
];

export default function LatestBlogs() {
  return (
    <section className="py-10 px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 lg:mb-12">
          Latest Blogs
        </h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-12">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.id}`}
              className="block group cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl relative aspect-[16/7] mb-4 md:mb-5 lg:mb-6">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-gray-500 text-sm md:text-base mb-2 md:mb-3">
                {blog.date}
              </p>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 leading-tight">
                {blog.title}
              </h3>
              <p
                className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.description }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
