"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const properties = [
  {
    id: "canary-wharf-luxury-apartment",
    title: "Canary Wharf Luxury Apartment",
    subtext:
      "A modern luxury apartment in the heart of Canary Wharf with stunning skyline views.",
    location: "Canary Wharf, London",
    price: "£1,250,000",
    pricePer: "",
    beds: 3,
    baths: 3,
    sqft: 1450,
    type: "apartment",
    city: "london",
    image: "/canary-img.jpg",
    about:
      "Located in one of London's most sought-after financial districts, this elegant 3-bedroom apartment offers contemporary living with high-end finishes. The property features an open-plan living area, floor-to-ceiling windows, and a fully integrated kitchen. Residents benefit from concierge services, secure access, and proximity to major transport links including the Jubilee Line and Elizabeth Line.",
    keyFeatures: [
      "24/7 Concierge",
      "Residents' Gym",
      "Secure Parking",
      "Balcony with City Views",
      "Lift Access",
    ],
    gallery: [
      "/canary-img-01.jpg",
      "/canary-img-02.jpg",
      "/canary-img-03.jpg",
      "/canary-img-04.jpg",
      "/canary-img-05.jpg",
    ],
    owner: {
      name: "James Walker",
      title: "Senior Property Consultant",
      image: "/james-walker.jpg",
      experience: "12+ Years",
      phone: "+44 20 7946 0821",
      email: "james.walker@estatepro.co.uk",
      about:
        "James specialises in high-end apartments across Canary Wharf and Central London. With over a decade of experience, he has helped both local and international clients secure premium properties with confidence. Known for his attention to detail and market insight, James ensures a smooth and transparent buying process.",
      ownerDescription:
        "Owned by an international finance professional, this property has been meticulously maintained and upgraded to meet modern living standards. The owner is relocating overseas, presenting a rare opportunity to acquire a prime apartment in Canary Wharf.",
    },
  },
  {
    id: "kensington-townhouse",
    title: "Kensington Townhouse",
    subtext:
      "A beautifully designed townhouse in one of London’s most prestigious neighbourhoods.",
    location: "Kensington, London",
    price: "£3,800,000",
    pricePer: "",
    beds: 5,
    baths: 4,
    sqft: 3200,
    type: "apartment",
    city: "london",
    image: "/kensington-img.jpg",
    about:
      "This exceptional townhouse in Kensington combines classic architecture with modern interiors. Featuring spacious reception rooms, a private garden, and luxury finishes throughout, it offers an ideal home for families seeking both comfort and prestige. Located close to Hyde Park, top schools, and boutique shops.",
    keyFeatures: [
      "Private Garden",
      "Fireplace",
      "Smart Home System",
      "Wine Cellar",
      "Security System",
    ],
    gallery: [
      "/kesington-img-01.jpg",
      "/kesington-img-02.jpg",
      "/kesington-img-03.jpg",
      "/kesington-img-04.jpg",
      "/kesington-img-05.jpg",
    ],
    owner: {
      name: "Charlotte Bennett",
      title: "Luxury Property Specialist",
      image: "/charlotte-bennett.jpg",
      experience: "15+ Years",
      phone: "+44 20 7946 1134",
      email: "charlotte.bennett@estatepro.co.uk",
      about:
        "Charlotte is an expert in luxury real estate, focusing on prime London locations such as Kensington and Chelsea. She has a strong network of high-net-worth clients and is known for delivering discreet, high-value transactions.",
      ownerDescription:
        "This home belongs to a long-established London family who have preserved its architectural charm while introducing modern upgrades. The property is now being offered as part of a portfolio transition.",
    },
  },
  {
    id: "manchester-city-office-space",
    title: "Manchester City Office Space",
    subtext:
      "A modern office space in the heart of Manchester’s business district.",
    location: "Manchester City Centre",
    price: "£85,000",
    pricePer: "/ year",
    beds: 5,
    baths: 4,
    sqft: 3200,
    type: "workspace",
    city: "manchester",
    image: "/manchester-img.jpg",
    about:
      "Position your business in Manchester’s thriving commercial hub. This premium office space offers flexible working areas, modern meeting rooms, and excellent connectivity. Ideal for startups and established companies looking to scale",
    keyFeatures: [
      "High-Speed Internet",
      "Lift Access",
      "Secure Entry",
      "Parking Nearby",
      "Breakout Areas",
    ],
    gallery: [
      "/manchester-img-01.jpg",
      "/manchester-img-02.jpg",
      "/manchester-img-03.jpg",
      "/manchester-img-04.jpg",
      "/manchester-img-05.jpg",
    ],
    owner: {
      name: "Olivia Turner",
      title: "Residential Sales Consultant",
      image: "/olivia-turner.jpg",
      experience: "8+ Years",
      phone: "+44 1483 920451",
      email: "olivia.turner@estatepro.co.uk",
      about:
        "Olivia specialises in family homes across Surrey, helping buyers find properties that match their lifestyle needs. She is known for her friendly approach and deep knowledge of suburban markets.",
      ownerDescription:
        "Owned by a growing tech firm that recently expanded to a larger headquarters, this space is now available for lease. It has been optimised for productivity and modern business operations.",
    },
  },
  {
    id: "surrey-family-home",
    title: "Surrey Family Home",
    subtext: "A spacious family home in a peaceful Surrey neighbourhood.",
    location: "Guildford, Surrey",
    price: "£950,000",
    pricePer: "",
    beds: 4,
    baths: 4,
    sqft: 2100,
    type: "apartment",
    city: "manchester",
    image: "/surreu-img.jpg",
    about:
      "Located in Guildford, this charming detached home offers a perfect balance of countryside living and city access. The property includes a large garden, modern kitchen, and bright living spaces. Ideal for families seeking tranquillity with easy access to London.",
    keyFeatures: [
      "Private Garden",
      "Garage",
      "Modern Kitchen",
      "Storage Space",
    ],
    gallery: [
      "/surrey-img-01.jpg",
      "/surrey-img-02.jpg",
      "/surrey-img-03.jpg",
      "/surrey-img-04.jpg",
      "/surrey-img-05.jpg",
    ],
    owner: {
      name: "Daniel Hughes",
      title: "Commercial Property Advisor",
      image: "/daniel-hughes.jpg",
      experience: "10+ Years",
      phone: "+44 161 850 2231",
      email: "daniel.hughes@estatepro.co.uk",
      about:
        "Daniel works closely with businesses to secure strategic commercial spaces across Manchester. His expertise in office leasing and market trends helps companies find the perfect environment to grow.",
      ownerDescription:
        "The property is owned by a family relocating closer to central London for work. It has been carefully maintained and is ideal for buyers seeking a move-in-ready home in a peaceful setting.",
    },
  },
  {
    id: "short-stay-shoreditch",
    title: "Short Stay – Shoreditch",
    subtext: "A stylish short-stay apartment in the vibrant Shoreditch area.",
    location: "Shoreditch, London",
    price: "£180",
    pricePer: "/night",
    beds: 2,
    baths: 2,
    sqft: 850,
    type: "apartment",
    city: "london",
    image: "/shoreditch-img.jpg",
    about:
      "Perfect for business travellers and tourists, this fully furnished apartment offers modern interiors, fast Wi-Fi, and easy access to central London. Located near restaurants, galleries, and nightlife, it provides both comfort and convenience.",
    keyFeatures: [
      "Wi-Fi",
      "Smart TV",
      "Fully Furnished",
      "Weekly Cleaning",
      "Secure Access",
    ],
    gallery: [
      "/shoreditch-img-01.jpg",
      "/shoreditch-img-02.jpg",
      "/shoreditch-img-03.jpg",
      "/shoreditch-img-04.jpg",
      "/shoreditch-img-05.jpg",
    ],
    owner: {
      name: "Ethan Clarke",
      title: "Lettings & Short Let Specialist",
      image: "/ethan-clarke.jpg",
      experience: "7+ Years",
      phone: "+44 20 7946 2290",
      email: "ethan.clarke@estatepro.co.uk",
      about:
        "Ethan focuses on short-let and rental properties in vibrant areas like Shoreditch. He helps clients maximise rental returns while ensuring tenants enjoy a seamless experience.",
      ownerDescription:
        "Managed by a professional short-let operator with a strong track record in hospitality, this apartment has consistently delivered high occupancy rates and excellent guest reviews.",
    },
  },
  {
    id: "birmingham-modern-terrace",
    title: "Birmingham Modern Terrace",
    subtext:
      "A modern and affordable home in a growing Birmingham neighbourhood.",
    location: "Birmingham",
    price: "£320,000",
    pricePer: "",
    beds: 3,
    baths: 2,
    sqft: 1200,
    type: "workspace",
    city: "manchester",
    image: "/birmingham-img.jpg",
    about:
      "This well-designed terraced house is ideal for first-time buyers or investors. Featuring a contemporary layout, energy-efficient fittings, and a convenient location close to schools and transport links, it offers great long-term value.",
    keyFeatures: [
      "Energy Efficient Design",
      "Parking Space",
      "Modern Kitchen",
      "Good Transport Links",
    ],
    gallery: [
      "/birmingham-img-01.jpg",
      "/birmingham-img-02.jpg",
      "/birmingham-img-03.jpg",
      "/birmingham-img-04.jpg",
      "/birmingham-img-05.jpg",
    ],
    owner: {
      name: "Sophie Patel",
      title: "Property Investment Advisor",
      image: "/sophie-patel.jpg",
      experience: "9+ Years",
      phone: "+44 121 820 5543",
      email: "sophie.patel@estatepro.co.uk",
      about:
        "Sophie works with investors and first-time buyers across Birmingham. She specialises in identifying high-growth opportunities and guiding clients toward smart property investments.",
      ownerDescription:
        "Owned by a property investor focusing on high-growth areas, this home has been developed with modern standards and long-term value in mind, making it ideal for first-time buyers or investors.",
    },
  },
];

export default function PropertyDetail() {
  const params = useParams();
  const slug = params.slug;

  const property = properties.find((p) => p.id === slug);

  if (!property) {
    return (
      <>
        <Navbar isSticky={false} bgColor="bg-white" textColor="black" />
        <main className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Property Not Found</h1>
            <p className="text-gray-500">
              The property you're looking for doesn't exist.
            </p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar isSticky={false} bgColor="bg-white" textColor="black" />
      <main>
        {/* Header Section */}
        <section className="py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {property.title}
            </h1>
            <p className="text-gray-500 text-lg md:text-xl">
              {property.subtext}
            </p>
          </div>
        </section>

        {/* Main Property Image */}
        <section className="px-6 pb-10">
          <div className="max-w-7xl mx-auto relative">
            <div className="rounded-3xl overflow-hidden relative h-[500px] md:h-[600px]">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute top-8 left-8 bg-fuchsia-600 text-white text-3xl font-bold px-6 py-4 rounded-2xl flex flex-col">
              {property.price}
              {property.pricePer && <span>{property.pricePer}</span>}
            </div>
          </div>
        </section>

        {/* Property Stats Bar */}
        <section className="px-6 pb-10">
          <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
              <div className="text-xl font-semibold">{property.location}</div>
              <div className="text-xl font-semibold">
                {property.beds} Bedrooms
              </div>
              <div className="text-xl font-semibold">
                {property.baths} Bathrooms
              </div>
              <div className="text-xl font-semibold">{property.sqft} sq ft</div>
            </div>
          </div>
        </section>

        {/* About the Property & Key Features */}
        <section className="px-6 pb-10">
          <div className="max-w-7xl mx-auto">
            {/* About */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                About the property
              </h2>
              <p className="text-gray-500 text-base leading-relaxed max-w-lg">
                {property.about}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Key Features
              </h2>
              <ul className="space-y-1 text-gray-500 text-base">
                {property.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-black font-bold mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Image Gallery - Two Columns */}
        {property.gallery.length >= 2 && (
          <section className="px-6 pb-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-3xl overflow-hidden relative h-80">
                  <Image
                    src={property.gallery[0]}
                    alt={`${property.title} - 1`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden relative h-80">
                  <Image
                    src={property.gallery[1]}
                    alt={`${property.title} - 2`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Image Gallery - Three Columns */}
        {property.gallery.length >= 5 && (
          <section className="px-6 pb-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-3xl overflow-hidden relative h-72">
                  <Image
                    src={property.gallery[2]}
                    alt={`${property.title} - 3`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden relative h-72">
                  <Image
                    src={property.gallery[3]}
                    alt={`${property.title} - 4`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden relative h-72">
                  <Image
                    src={property.gallery[4]}
                    alt={`${property.title} - 5`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* About the Owner */}
        {property.owner && (
          <section className="px-6 pb-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    About the owner
                  </h2>
                  <p className="text-gray-500 text-base leading-relaxed">
                    {property.owner.ownerDescription}
                  </p>
                </div>

                <div className="bg-white rounded-3xl shadow-lg p-8">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                      <Image
                        src={property.owner.image}
                        alt={property.owner.name}
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {property.owner.name}
                    </h3>
                    <p className="text-gray-500 mb-4 text-sm">
                      {property.owner.title}
                    </p>
                    <div className="w-full h-px bg-gray-200 mb-4"></div>
                    <div className="w-full space-y-2 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Experience</span>
                        <span className="font-semibold">
                          {property.owner.experience}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Phone</span>
                        <span className="font-semibold">
                          {property.owner.phone}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Email</span>
                        <span className="font-semibold">
                          {property.owner.email}
                        </span>
                      </div>
                    </div>
                    <div className="w-full">
                      <h4 className="font-semibold mb-2 text-sm">
                        About Agent
                      </h4>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {property.owner.about}
                      </p>
                    </div>
                    <button className="mt-6 w-full bg-fuchsia-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-fuchsia-500 transition-all cursor-pointer text-sm">
                      Contact Agent
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* See More Properties */}
        <section className="px-6 pb-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              See more Properties
            </h2>
            {property.id === "kensington-townhouse" ? (
              <div className="grid md:grid-cols-2 gap-8">
                {properties
                  .filter(
                    (p) =>
                      p.id === "canary-wharf-luxury-apartment" ||
                      p.id === "manchester-city-office-space",
                  )
                  .map((relatedProperty) => (
                    <Link
                      key={relatedProperty.id}
                      href={`/properties/${relatedProperty.id}`}
                      className="block bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all cursor-pointer"
                    >
                      <div className="relative h-56 md:h-72 overflow-hidden">
                        <Image
                          src={relatedProperty.image}
                          alt={relatedProperty.title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex flex-wrap items-start justify-between mb-1 gap-2">
                          <h3 className="text-lg font-bold">
                            {relatedProperty.title}
                          </h3>
                          <p className="text-lg font-bold text-fuchsia-600">
                            {relatedProperty.price}
                            {relatedProperty.pricePer}
                          </p>
                        </div>
                        <p className="text-gray-500 mb-4 text-sm">
                          {relatedProperty.location}
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">
                            {relatedProperty.beds} Bedrooms
                          </span>
                          <span className="text-gray-500">
                            {relatedProperty.baths} Bathrooms
                          </span>
                          <span className="text-gray-500">
                            {relatedProperty.sqft} sq ft
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            ) : property.id === "manchester-city-office-space" ? (
              <div className="grid md:grid-cols-2 gap-8">
                {properties
                  .filter(
                    (p) =>
                      p.id === "kensington-townhouse" ||
                      p.id === "surrey-family-home",
                  )
                  .map((relatedProperty) => (
                    <Link
                      key={relatedProperty.id}
                      href={`/properties/${relatedProperty.id}`}
                      className="block bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all cursor-pointer"
                    >
                      <div className="relative h-56 md:h-72 overflow-hidden">
                        <Image
                          src={relatedProperty.image}
                          alt={relatedProperty.title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex flex-wrap items-start justify-between mb-1 gap-2">
                          <h3 className="text-lg font-bold">
                            {relatedProperty.title}
                          </h3>
                          <p className="text-lg font-bold text-fuchsia-600">
                            {relatedProperty.price}
                            {relatedProperty.pricePer}
                          </p>
                        </div>
                        <p className="text-gray-500 mb-4 text-sm">
                          {relatedProperty.location}
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">
                            {relatedProperty.beds} Bedrooms
                          </span>
                          <span className="text-gray-500">
                            {relatedProperty.baths} Bathrooms
                          </span>
                          <span className="text-gray-500">
                            {relatedProperty.sqft} sq ft
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            ) : property.id === "surrey-family-home" ? (
              <div className="grid md:grid-cols-2 gap-8">
                {properties
                  .filter(
                    (p) =>
                      p.id === "manchester-city-office-space" ||
                      p.id === "short-stay-shoreditch",
                  )
                  .map((relatedProperty) => (
                    <Link
                      key={relatedProperty.id}
                      href={`/properties/${relatedProperty.id}`}
                      className="block bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all cursor-pointer"
                    >
                      <div className="relative h-56 md:h-72 overflow-hidden">
                        <Image
                          src={relatedProperty.image}
                          alt={relatedProperty.title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex flex-wrap items-start justify-between mb-1 gap-2">
                          <h3 className="text-lg font-bold">
                            {relatedProperty.title}
                          </h3>
                          <p className="text-lg font-bold text-fuchsia-600">
                            {relatedProperty.price}
                            {relatedProperty.pricePer}
                          </p>
                        </div>
                        <p className="text-gray-500 mb-4 text-sm">
                          {relatedProperty.location}
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">
                            {relatedProperty.beds} Bedrooms
                          </span>
                          <span className="text-gray-500">
                            {relatedProperty.baths} Bathrooms
                          </span>
                          <span className="text-gray-500">
                            {relatedProperty.sqft} sq ft
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            ) : property.id === "short-stay-shoreditch" ? (
              <div className="grid md:grid-cols-2 gap-8">
                {properties
                  .filter(
                    (p) =>
                      p.id === "surrey-family-home" ||
                      p.id === "birmingham-modern-terrace",
                  )
                  .map((relatedProperty) => (
                    <Link
                      key={relatedProperty.id}
                      href={`/properties/${relatedProperty.id}`}
                      className="block bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all cursor-pointer"
                    >
                      <div className="relative h-56 md:h-72 overflow-hidden">
                        <Image
                          src={relatedProperty.image}
                          alt={relatedProperty.title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex flex-wrap items-start justify-between mb-1 gap-2">
                          <h3 className="text-lg font-bold">
                            {relatedProperty.title}
                          </h3>
                          <p className="text-lg font-bold text-fuchsia-600">
                            {relatedProperty.price}
                            {relatedProperty.pricePer}
                          </p>
                        </div>
                        <p className="text-gray-500 mb-4 text-sm">
                          {relatedProperty.location}
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">
                            {relatedProperty.beds} Bedrooms
                          </span>
                          <span className="text-gray-500">
                            {relatedProperty.baths} Bathrooms
                          </span>
                          <span className="text-gray-500">
                            {relatedProperty.sqft} sq ft
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            ) : property.id === "birmingham-modern-terrace" ? (
              <div className="space-y-8">
                {properties
                  .filter((p) => p.id === "short-stay-shoreditch")
                  .map((relatedProperty) => (
                    <Link
                      key={relatedProperty.id}
                      href={`/properties/${relatedProperty.id}`}
                      className="block bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all cursor-pointer"
                    >
                      <div className="relative h-56 md:h-72 overflow-hidden">
                        <Image
                          src={relatedProperty.image}
                          alt={relatedProperty.title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex flex-wrap items-start justify-between mb-1 gap-2">
                          <h3 className="text-lg font-bold">
                            {relatedProperty.title}
                          </h3>
                          <p className="text-lg font-bold text-fuchsia-600">
                            {relatedProperty.price}
                            {relatedProperty.pricePer}
                          </p>
                        </div>
                        <p className="text-gray-500 mb-4 text-sm">
                          {relatedProperty.location}
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">
                            {relatedProperty.beds} Bedrooms
                          </span>
                          <span className="text-gray-500">
                            {relatedProperty.baths} Bathrooms
                          </span>
                          <span className="text-gray-500">
                            {relatedProperty.sqft} sq ft
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            ) : (
              <div className="space-y-8">
                {properties
                  .filter((p) =>
                    property.id === "canary-wharf-luxury-apartment"
                      ? p.id === "kensington-townhouse"
                      : p.id !== property.id,
                  )
                  .slice(
                    0,
                    property.id === "canary-wharf-luxury-apartment" ? 1 : 3,
                  )
                  .map((relatedProperty) => (
                    <Link
                      key={relatedProperty.id}
                      href={`/properties/${relatedProperty.id}`}
                      className="block bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all cursor-pointer"
                    >
                      <div className="relative h-56 md:h-72 overflow-hidden">
                        <Image
                          src={relatedProperty.image}
                          alt={relatedProperty.title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex flex-wrap items-start justify-between mb-1 gap-2">
                          <h3 className="text-lg font-bold">
                            {relatedProperty.title}
                          </h3>
                          <p className="text-lg font-bold text-fuchsia-600">
                            {relatedProperty.price}
                            {relatedProperty.pricePer}
                          </p>
                        </div>
                        <p className="text-gray-500 mb-4 text-sm">
                          {relatedProperty.location}
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">
                            {relatedProperty.beds} Bedrooms
                          </span>
                          <span className="text-gray-500">
                            {relatedProperty.baths} Bathrooms
                          </span>
                          <span className="text-gray-500">
                            {relatedProperty.sqft} sq ft
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
