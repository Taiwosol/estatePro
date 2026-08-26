"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const blogs = [
  {
    id: "real-estate-trends-uk-2026",
    title: "Real Estate Trends to Watch in the UK in 2026",
    category: "Market Trends",
    readTime: "6 min read",
    date: "June 12 2026",
    heroImage: "/blog-img-01.jpg",
    author: {
      name: "Oliver Grant",
      role: "Property Market Analyst",
      avatar: "/oliver-grant.jpg",
    },
    content: [
      {
        heading: "Rising Demand in Regional Cities",
        text: "Cities such as Manchester, Birmingham, and Leeds continue to attract both investors and homebuyers due to strong rental demand and ongoing regeneration projects. These regions offer more accessible price points compared to London, while still delivering solid long-term growth potential and improving infrastructure.",
      },
      {
        heading: "London Remains a Global Hub",
        text: "Despite shifts in pricing and interest rates, London remains one of the most attractive real estate markets globally. Areas like Canary Wharf and Stratford are seeing renewed interest thanks to modern developments and enhanced transport links, making them appealing to both investors and professionals.",
      },
      {
        heading: "Shift Towards Energy-Efficient Homes",
        text: "Energy efficiency is becoming a major factor for buyers across the UK, especially with rising energy costs and stricter regulations. Homes with higher EPC ratings, better insulation, and sustainable features not only reduce utility expenses but also increase long-term property value.",
      },
    ],
  },
  {
    id: "first-time-property-buyers-guide-uk",
    title: "A Complete Guide for First-Time Property Buyers in the UK",
    category: "Buying Guide",
    readTime: "7 min read",
    date: "June 10 2026",
    heroImage: "/blog-img-02.jpg",
    author: {
      name: "Sophie Bennett",
      role: "Residential Property Consultant",
      avatar: "/sophie-bennett.jpg",
    },
    content: [
      {
        heading: "Understanding Your Budget",
        text: "Before beginning your property search, it's essential to have a clear understanding of your financial position and overall budget. This includes not only your deposit but also additional costs such as stamp duty, legal fees, and ongoing maintenance expenses.",
      },
      {
        heading: "Securing a Mortgage in Principle",
        text: "A mortgage in principle gives you a realistic estimate of how much you can borrow and shows sellers that you are a serious buyer. It also helps streamline the buying process, allowing you to move quickly when you find the right property.",
      },
      {
        heading: "Choosing the Right Location",
        text: "Location plays a critical role in both your lifestyle and the long-term value of your investment. Factors such as transport links, nearby schools, and future development plans can significantly influence property appreciation and overall convenience.",
      },
    ],
  },
  {
    id: "investment-property-tips-london",
    title: "Simple Ways to Increase Your Property Value Before Selling",
    category: "Tips",
    readTime: "4 min read",
    date: "May 22 2026",
    heroImage: "/blog-img-03.jpg",
    author: {
      name: "Charlotte Bennett",
      role: "Property Specialist",
      avatar: "/charlotte-bennet.jpg",
    },
    content: [
      {
        heading: "Improve Kerb Appeal",
        text: "First impressions play a crucial role in attracting potential buyers, and the exterior of your property sets the tone. Simple improvements such as fresh paint, landscaping, and updated lighting can significantly enhance your home's visual appeal.",
      },
      {
        heading: "Upgrade Key Areas",
        text: "Kitchens and bathrooms are often the most influential spaces when buyers evaluate a property. Updating fixtures, finishes, and layouts in these areas can greatly increase perceived value without requiring a full renovation.",
      },
      {
        heading: "Enhance Energy Efficiency",
        text: "Energy-efficient upgrades are becoming increasingly important for modern buyers looking to reduce long-term costs. Improvements such as better insulation, double glazing, and efficient heating systems can make your property more competitive in the market.",
      },
    ],
  },
  {
    id: "rental-market-outlook-2026",
    title: "How to Identify High-Return Property Investments in the UK",
    category: "Investment",
    readTime: "5 min read",
    date: "May 22 2025",
    heroImage: "/blog-img-04.jpg",
    author: {
      name: "Daniel Hughes",
      role: "Investment Property Advisor",
      avatar: "/daniel-hughe.jpg",
    },
    content: [
      {
        heading: "Focus on Rental Yield",
        text: "Rental yield is one of the most important indicators when evaluating the profitability of an investment property. Properties located in high-demand rental areas often provide consistent income and long-term financial stability.",
      },
      {
        heading: "Look at Regeneration Areas",
        text: "Investing in areas undergoing regeneration can offer significant long-term benefits as infrastructure and local amenities improve. These developments often lead to increased demand and rising property values over time.",
      },
      {
        heading: "Understand Market Demand",
        text: "Different locations attract different types of tenants, so it's important to understand what the local market requires. For example, city centres may favour apartments for professionals, while suburban areas may appeal more to families.",
      },
    ],
  },
];

export default function BlogDetail() {
  const params = useParams();
  const slug = params.slug;

  const blog = blogs.find((b) => b.id === slug);

  if (!blog) {
    return (
      <>
        <Navbar isSticky={false} bgColor="bg-white" textColor="black" />
        <main className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-gray-500 mb-8">
              The blog post you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/blog"
              className="inline-block px-8 py-3 bg-fuchsia-600 text-white rounded-full font-semibold hover:bg-fuchsia-500 transition-all cursor-pointer"
            >
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const similarBlogs = blogs;

  return (
    <>
      <Navbar isSticky={false} bgColor="bg-white" textColor="black" />
      <main className="bg-white">
        {/* Header Section */}
        <section className="py-10 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Metadata Row */}
            <div className="flex flex-wrap items-center gap-x-12 gap-y-3 mb-6 md:mb-8">
              <span className="text-sm md:text-base font-medium">
                {blog.category}
              </span>
              <span className="text-sm md:text-base font-medium">
                {blog.readTime}
              </span>
              <span className="text-sm md:text-base font-medium">
                {blog.date}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 leading-[1.1] tracking-tight max-w-[90%]">
              {blog.title}
            </h1>

            {/* Author Section */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-base md:text-lg font-medium">
                  {blog.author.name}
                </p>
                <p className="text-gray-500 text-sm md:text-base">
                  {blog.author.role}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Full-Width Hero Image */}
        <section className="w-full">
          <div className="relative w-full aspect-[21/9]">
            <Image
              src={blog.heroImage}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Description Content Section */}
        <section className="py-10 md:py-14 px-6">
          <div className="max-w-5xl mx-auto space-y-10 md:space-y-16">
            {blog.content.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight">
                  {section.heading}
                </h2>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-600">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Similar Blog Section */}
        <section className="py-10 md:py-14 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 leading-tight">
              Similar Blog
            </h2>

            <div className="space-y-8 md:space-y-12">
              {similarBlogs.map((b) => (
                <div
                  key={b.id}
                  className="flex flex-col md:flex-row gap-5 md:gap-8"
                >
                  {/* Blog Image */}
                  <div className="md:w-[28%] lg:w-[26%] flex-shrink-0">
                    <Link
                      href={`/blog/${b.id}`}
                      className="block cursor-pointer"
                    >
                      <div className="relative w-full aspect-[4/3] overflow-hidden">
                        <Image
                          src={b.heroImage}
                          alt={b.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>
                  </div>

                  {/* Blog Content */}
                  <div className="flex-1 flex flex-col justify-start">
                    <p className="text-sm md:text-base text-gray-500 mb-2 md:mb-3">
                      {b.date}
                    </p>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 leading-snug">
                      {b.title}
                    </h3>
                    <div className="mt-auto">
                      <Link
                        href={`/blog/${b.id}`}
                        className="inline-block px-4 md:px-5 py-1.5 md:py-2 bg-fuchsia-600 text-white rounded-full font-semibold text-xs md:text-sm hover:bg-fuchsia-500 transition-all cursor-pointer"
                      >
                        Read Blog
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
