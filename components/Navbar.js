"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const SMART_SECTION_IDS = ["faq", "cta"];

export default function Navbar({
  isSticky = true,
  bgColor = null,
  textColor = "white",
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setHoveredLink(null);
    }
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
    // eslint-disable-next-line react-hooks/immutability
    document.body.style.overflow = "auto";
    setHoveredLink(null);
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    try {
      window.scrollTo({ top, behavior: "smooth" });
    } catch {
      window.scrollTo(0, Math.max(top, 0));
    }
  };

  const runScrollWithRetries = (id) => {
    scrollToId(id);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        scrollToId(id);
      }),
    );
    setTimeout(() => scrollToId(id), 80);
  };

  // Smart handler for FAQ / CTA links:
  // If the target section exists on the CURRENT page -> scroll to it in-place.
  // Otherwise -> let Link navigate to the homepage with the hash so the
  // homepage can scroll to it after rendering.
  const handleAnchorClick = (e, href) => {
    if (!href.startsWith("/#")) {
      closeMenu();
      return;
    }
    const id = href.slice(2);
    const isSmartSection = SMART_SECTION_IDS.includes(id);

    if (isSmartSection) {
      const existsOnPage = !!document.getElementById(id);
      if (existsOnPage) {
        // Section is present here — intercept and scroll.
        e.preventDefault();
        closeMenu();
        runScrollWithRetries(id);
        return;
      }
      // Section is NOT here — allow the <Link> to navigate to `/#id`.
      closeMenu();
      return;
    }

    // Legacy behavior for any other /# anchors (intercept only on homepage).
    if (!isHome) {
      closeMenu();
      return;
    }
    e.preventDefault();
    closeMenu();
    runScrollWithRetries(id);
  };

  // Cleanup overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Nav links with their corresponding images
  const navLinks = [
    { href: "/", label: "Home", image: "/home-nav-img.jpg" },
    { href: "/about", label: "About", image: "/about-nav-img.jpg" },
    {
      href: "/properties",
      label: "Properties",
      image: "/property-nav-img.jpg",
    },
    { href: "/contact", label: "Contact", image: "/contact-nav-img.jpg" },
    { href: "/#faq", label: "FAQ", image: "/faq-nav-img.jpg" },
    { href: "/#cta", label: "CTA", image: "/cta-nav-img.jpg" },
    { href: "/blog", label: "Blog", image: "/blog-nav-img.jpg" },
  ];

  // Get current image
  const currentImage = hoveredLink ? hoveredLink.image : "/main-nav-img.jpg";

  return (
    <>
      {/* Navbar */}
      <nav
        className={`
          ${isSticky ? "fixed top-0" : "relative"} left-0 right-0 z-50 px-6 py-6 transition-all duration-300
          ${bgColor ? bgColor : isHome ? "bg-transparent" : "bg-black"}
        `}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold cursor-pointer"
            style={{ color: textColor }}
          >
            EstatePro
          </Link>

          {/* Menu Button */}
          <button
            onClick={toggleMenu}
            className="flex items-center gap-2 text-xl font-semibold cursor-pointer"
            style={{ color: textColor }}
          >
            {isMenuOpen ? "Close" : "Menu"}
            <span className="text-2xl">{isMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black text-white">
          <div className="h-full flex">
            {/* Left Section: Image */}
            <div className="hidden md:flex md:w-1/3 p-6 pt-24">
              <Image
                src={currentImage}
                alt="Menu"
                width={400}
                height={500}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Right Section: Links */}
            <div className="flex-1 flex flex-col justify-center px-6 md:px-20">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {navLinks.slice(0, 4).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      scroll={!link.href.startsWith("/#") || !isHome}
                      onMouseEnter={() => setHoveredLink(link)}
                      onMouseLeave={() => setHoveredLink(null)}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="block text-4xl md:text-6xl font-bold hover:text-fuchsia-500 transition-all duration-300 cursor-pointer overflow-hidden"
                    >
                      <span className="inline-block transition-transform duration-300 hover:translate-y-2">
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="space-y-6">
                  {navLinks.slice(4).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      scroll={!link.href.startsWith("/#") || !isHome}
                      onMouseEnter={() => setHoveredLink(link)}
                      onMouseLeave={() => setHoveredLink(null)}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="block text-4xl md:text-6xl font-bold hover:text-fuchsia-500 transition-all duration-300 cursor-pointer overflow-hidden"
                    >
                      <span className="inline-block transition-transform duration-300 hover:translate-y-2">
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
