"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Properties() {
  const properties = [
    {
      id: "canary-wharf-luxury-apartment",
      title: "Canary Wharf Luxury Apartment",
      location: "Canary Wharf, London",
      price: "£1,250,000",
      pricePer: "",
      beds: 3,
      baths: 3,
      sqft: 1450,
      type: "apartment",
      city: "london",
      image: "/canary-img.jpg",
    },
    {
      id: "kensington-townhouse",
      title: "Kensington Townhouse",
      location: "Kensington, London",
      price: "£3,800,000",
      pricePer: "",
      beds: 5,
      baths: 4,
      sqft: 3200,
      type: "apartment",
      city: "london",
      image: "/kensington-img.jpg",
    },
    {
      id: "manchester-city-office-space",
      title: "Manchester City Office Space",
      location: "Manchester City Centre",
      price: "£85,000",
      pricePer: "/ year",
      beds: 5,
      baths: 4,
      sqft: 3200,
      type: "workspace",
      city: "manchester",
      image: "/manchester-img.jpg",
    },
    {
      id: "surrey-family-home",
      title: "Surrey Family Home",
      location: "Guildford, Surrey",
      price: "£950,000",
      pricePer: "",
      beds: 4,
      baths: 4,
      sqft: 2100,
      type: "apartment",
      city: "manchester",
      image: "/surreu-img.jpg",
    },
    {
      id: "short-stay-shoreditch",
      title: "Short Stay – Shoreditch",
      location: "Shoreditch, London",
      price: "£180",
      pricePer: "/night",
      beds: 2,
      baths: 2,
      sqft: 850,
      type: "apartment",
      city: "london",
      image: "/shoreditch-img.jpg",
    },
    {
      id: "birmingham-modern-terrace",
      title: "Birmingham Modern Terrace",
      location: "Birmingham",
      price: "£320,000",
      pricePer: "",
      beds: 3,
      baths: 2,
      sqft: 1200,
      type: "workspace",
      city: "manchester",
      image: "/birmingham-img.jpg",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProperties = properties.filter((property) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "apartment") return property.type === "apartment";
    if (activeFilter === "workspace") return property.type === "workspace";
    if (activeFilter === "london") return property.city === "london";
    if (activeFilter === "manchester") return property.city === "manchester";
    return true;
  });

  return (
    <>
      <Navbar isSticky={false} bgColor="bg-white" textColor="black" />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="py-10 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Find your perfect home with ease
            </h1>
            <p className="text-gray-500 text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
              Explore listings and find your perfect home with expert guidance
              and seamless search.
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-4 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {["all", "apartment", "workspace", "london", "manchester"].map(
                (filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all cursor-pointer ${
                      activeFilter === filter
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProperties.map((property) => (
                <Link
                  key={property.id}
                  href={`/properties/${property.id}`}
                  className="rounded-3xl overflow-hidden bg-white border border-gray-100 hover:shadow-lg transition-all cursor-pointer"
                >
                  {/* Property Image with Zoom */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <div className="w-full h-full p-4">
                      <div className="w-full h-full rounded-3xl overflow-hidden relative">
                        <Image
                          src={property.image}
                          alt={property.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-110"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                  {/* Property Details */}
                  <div className="px-6 pb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold">{property.title}</h3>
                      <p className="text-2xl font-bold text-fuchsia-600">
                        {property.price}
                        {property.pricePer}
                      </p>
                    </div>
                    <p className="text-gray-500 mb-6">{property.location}</p>
                    <div className="flex justify-between text-gray-600">
                      <span>{property.beds} Bedrooms</span>
                      <span>{property.baths} Bathrooms</span>
                      <span>{property.sqft} sq ft</span>
                    </div>
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
