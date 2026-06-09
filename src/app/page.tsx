"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  Wifi,
  Car,
  Coffee,
  Dumbbell,
  Users,
  Heart,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Check,
  Instagram,
  Facebook,
  Twitter,
  BedDouble,
  Bath,
  Maximize,
  Utensils,
  Sparkles,
  Award,
  ShieldCheck,
  Globe,
  Plane,
  MessageCircle,
} from "lucide-react";

/* ─────────────── Animated Section Wrapper ─────────────── */
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────── Section Heading ─────────────── */
function SectionHeading({
  subtitle,
  title,
  description,
  light = false,
}: {
  subtitle: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center mb-16">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`font-sans text-sm tracking-[0.3em] uppercase mb-4 ${
          light ? "text-gold-light" : "text-gold"
        }`}
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </motion.h2>
      <div className="gold-divider mb-6" />
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`font-sans text-lg max-w-2xl mx-auto leading-relaxed ${
            light ? "text-white/80" : "text-muted-foreground"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

/* ─────────────── Navigation ─────────────── */
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Rooms", href: "#rooms" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#home");
            }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center">
              <span className="font-serif text-gold text-lg font-bold">A</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-white text-xl font-bold leading-tight">
                Aphrodite
              </h1>
              <p className="font-sans text-gold text-[10px] tracking-[0.25em] uppercase">
                International Hotel
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="font-sans text-sm text-white/80 hover:text-gold transition-colors duration-300 elegant-link tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="font-sans text-sm px-6 py-2.5 bg-gold text-white rounded-none hover:bg-gold-light transition-all duration-300 tracking-wider uppercase"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-charcoal/98 backdrop-blur-md border-t border-gold/20 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block font-sans text-white/80 hover:text-gold transition-colors py-2 text-lg"
                >
                  {link.label}
                </motion.a>
              ))}
              <button
                onClick={() => scrollTo("#contact")}
                className="w-full mt-4 font-sans text-sm px-6 py-3 bg-gold text-white tracking-wider uppercase hover:bg-gold-light transition-all duration-300"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

/* ─────────────── Hero Section ─────────────── */
function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/images/hotel-exterior.png",
      title: "Aphrodite International Hotel",
      subtitle: "Serving for Extraordinary Expectations",
      description:
        "A four-star luxury hotel in the heart of Addis Ababa, where Ethiopian heritage meets world-class hospitality",
    },
    {
      image: "/images/executive-suite.png",
      title: "Executive Suite",
      subtitle: "A Premier Suite Experience",
      description:
        "Spacious king bedroom, large outdoor terrace, expansive living room with formal pouring for eight",
    },
    {
      image: "/images/hotel-lobby.png",
      title: "Grand Lobby",
      subtitle: "Where Luxury Begins",
      description:
        "Step into a world of refined elegance and warm Ethiopian hospitality from the moment you arrive",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-4"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            {[1, 2, 3, 4].map((s) => (
              <Star
                key={s}
                size={16}
                className="text-gold fill-gold"
              />
            ))}
          </div>
          <p className="font-sans text-gold-light text-sm tracking-[0.4em] uppercase mb-6">
            {slides[currentSlide].subtitle}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-tight"
          >
            {slides[currentSlide].title}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-white/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            {slides[currentSlide].description}
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#rooms"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#rooms")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-sans px-10 py-4 bg-gold text-white tracking-widest uppercase text-sm hover:bg-gold-light transition-all duration-300 flex items-center gap-2 group"
          >
            Explore Rooms
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-sans px-10 py-4 border-2 border-white/30 text-white tracking-widest uppercase text-sm hover:border-gold hover:text-gold transition-all duration-300"
          >
            Reserve Now
          </a>
        </motion.div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-12 h-1 transition-all duration-500 ${
                i === currentSlide ? "bg-gold" : "bg-white/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Scroll Down */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="text-gold" size={28} />
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── Quick Info Bar ─────────────── */
function QuickInfoBar() {
  return (
    <section className="bg-charcoal relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-white/80 font-sans text-sm">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-gold" />
            <span>Kasanchis, Addis Ababa</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20" />
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-gold" />
            <span>+251 11 557 22 28</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20" />
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-gold" />
            <span>info@aphroditeaddis.com</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20" />
          <div className="flex items-center gap-2">
            <Star size={16} className="text-gold fill-gold" />
            <span>4-Star Luxury Hotel</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── About Section ─────────────── */
function AboutSection() {
  const features = [
    { icon: Award, text: "4-Star Luxury" },
    { icon: ShieldCheck, text: "Safe & Secure" },
    { icon: Globe, text: "International Standard" },
    { icon: Plane, text: "Airport Shuttle" },
  ];

  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <AnimatedSection>
            <div className="relative">
              <div className="img-zoom rounded-sm overflow-hidden shadow-2xl">
                <img
                  src="/images/hotel-lobby.png"
                  alt="Aphrodite Hotel Lobby"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-8 -right-4 md:right-8 bg-gold text-white p-6 shadow-2xl max-w-[240px]"
              >
                <p className="font-serif text-4xl font-bold">52+</p>
                <p className="font-sans text-sm tracking-wider mt-1">
                  Luxurious Rooms & Suites
                </p>
              </motion.div>
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/40" />
            </div>
          </AnimatedSection>

          {/* Right - Content */}
          <AnimatedSection delay={0.2}>
            <div>
              <p className="font-sans text-sm tracking-[0.3em] uppercase text-gold mb-4">
                About Us
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Where Luxury Meets
                <br />
                <span className="text-shimmer">Ethiopian Heritage</span>
              </h2>
              <div className="gold-divider-left mb-8" />
              <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                Aphrodite International Hotel is a suitably appointed four-star
                hotel at the city center of Addis Ababa, Ethiopia, just ten
                minutes away from Addis Ababa Bole International Airport with
                convenient shuttle transportation available to get you to and
                from the hotel easily.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                Meeting international standards with exceptional levels of
                personalized service, it offers exclusive, luxury accommodation,
                luxurious restaurant, and bars for both corporate and leisure
                travelers as our motto &ldquo;Serving for Extraordinary
                Expectations&rdquo; implies.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed mb-8">
                Situated at Guinea Conakry Street in the Kasanchis Business
                District, Aphrodite is within walking distance to the United
                Nations Economic Commission for Africa (UNECA) headquarters and
                the African Union headquarters, making it the perfect base for
                exploring Addis Ababa and attending conferences.
              </p>

              {/* Feature badges */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 p-3 bg-white rounded-sm shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <span className="font-sans text-sm text-charcoal font-medium">
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 font-sans px-8 py-3.5 bg-charcoal text-white tracking-wider uppercase text-sm hover:bg-charcoal/80 transition-all duration-300 group"
              >
                Learn More
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Rooms Section ─────────────── */
function RoomsSection() {
  const rooms = [
    {
      name: "Executive Suite",
      price: "$135",
      image: "/images/executive-suite.png",
      size: "75 sqm",
      bed: "King Bed",
      features: [
        "Spacious living room",
        "Large outdoor terrace",
        "En-suite bathroom",
        "Formal dining for eight",
        "City panorama view",
      ],
      badge: "Premier",
    },
    {
      name: "Deluxe Suite",
      price: "$90",
      image: "/images/deluxe-suite.png",
      size: "55 sqm",
      bed: "King Bed",
      features: [
        "King bed suite",
        "Large outdoor terrace",
        "Luxury furnishings",
        "Floor-to-ceiling windows",
        "Premium amenities",
      ],
      badge: "Popular",
    },
    {
      name: "Twin Room",
      price: "$90",
      image: "/images/twin-room.png",
      size: "65 sqm",
      bed: "Twin Beds",
      features: [
        "Addis cityscape view",
        "700 sq ft of space",
        "Work desk area",
        "Premium toiletries",
        "High-speed WiFi",
      ],
      badge: "City View",
    },
    {
      name: "Standard Room",
      price: "$70",
      image: "/images/standard-room.png",
      size: "35 sqm",
      bed: "Queen Bed",
      features: [
        "Queen bed",
        "Contemporary design",
        "Room service",
        "Telephone on desk",
        "Cozy atmosphere",
      ],
      badge: "Value",
    },
  ];

  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);

  return (
    <section id="rooms" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Accommodation"
          title="Our Rooms & Suites"
          description="Each room is a sanctuary of comfort, thoughtfully designed with contemporary elegance and equipped with state-of-the-art facilities to make your stay truly extraordinary."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room, index) => (
            <AnimatedSection key={room.name} delay={index * 0.1}>
              <div
                className="group luxury-border bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
                onMouseEnter={() => setHoveredRoom(index)}
                onMouseLeave={() => setHoveredRoom(null)}
              >
                {/* Image */}
                <div className="relative img-zoom h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="font-sans text-xs tracking-wider uppercase px-3 py-1.5 bg-gold text-white">
                      {room.badge}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-xl font-bold text-charcoal">
                      {room.name}
                    </h3>
                    <div className="text-right">
                      <span className="font-serif text-2xl font-bold text-gold">
                        {room.price}
                      </span>
                      <span className="font-sans text-xs text-muted-foreground">
                        /night
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4 font-sans text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Maximize size={13} /> {room.size}
                    </span>
                    <span className="flex items-center gap-1">
                      <BedDouble size={13} /> {room.bed}
                    </span>
                  </div>

                  <div className="flex-1 space-y-2 mb-5">
                    {room.features.map((f) => (
                      <div
                        key={f}
                        className="flex items-center gap-2 font-sans text-sm text-muted-foreground"
                      >
                        <Check size={14} className="text-gold flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <button className="w-full font-sans py-3 border-2 border-charcoal text-charcoal tracking-wider uppercase text-xs hover:bg-charcoal hover:text-white transition-all duration-300">
                    Book This Room
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Services Section ─────────────── */
function ServicesSection() {
  const services = [
    {
      icon: Utensils,
      title: "Restaurant & Bar",
      description:
        "Savor exquisite Ethiopian and international cuisine at our Grand Restaurant, complemented by fine cocktails and premium beverages at the Piano Bar. Our chefs craft every dish with passion and the freshest ingredients.",
      image: "/images/restaurant-bar.png",
    },
    {
      icon: Users,
      title: "Conference & Events",
      description:
        "Our versatile conference hall accommodates up to 250 guests and can be divided into 3 individual halls. Equipped with high-tech sound systems, LCD projectors, and free WiFi, it is ideal for corporate meetings, conferences, and social events.",
      image: "/images/conference-hall.png",
    },
    {
      icon: Sparkles,
      title: "Spa & Wellness",
      description:
        "Rejuvenate your body and mind at our luxury spa. Experience therapeutic massages, aromatherapy treatments, and holistic wellness programs in a tranquil setting designed for your complete relaxation and well-being.",
      image: "/images/spa-wellness.png",
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description:
        "Maintain your fitness routine in our state-of-the-art gymnasium featuring modern cardio and strength training equipment. Open daily with personal trainers available to assist with your workout needs.",
      image: "/images/fitness-center.png",
    },
    {
      icon: Heart,
      title: "Wedding Venue",
      description:
        "Celebrate your special day in our elegant ballroom. From intimate ceremonies to grand celebrations, our dedicated wedding planning team ensures every detail is perfect for an unforgettable experience.",
      image: "/images/wedding-venue.png",
    },
    {
      icon: Wifi,
      title: "Business Services",
      description:
        "Stay connected with complimentary high-speed WiFi throughout the hotel. Our business center offers printing, copying, and secretarial services, plus a spacious lobby lounge for informal meetings.",
      image: "/images/addis-skyline.png",
    },
  ];

  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="What We Offer"
          title="Hotel Services"
          description="From world-class dining to state-of-the-art conference facilities, every service at Aphrodite is designed to exceed your expectations."
          light
        />

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setActiveService(i)}
              className={`font-sans px-5 py-2.5 text-sm tracking-wider uppercase transition-all duration-300 ${
                i === activeService
                  ? "bg-gold text-white"
                  : "border border-white/20 text-white/60 hover:border-gold hover:text-gold"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Active Service Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="img-zoom rounded-sm overflow-hidden shadow-2xl">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center">
                  {(() => {
                    const Icon = services[activeService].icon;
                    return <Icon size={24} className="text-gold" />;
                  })()}
                </div>
                <h3 className="font-serif text-3xl font-bold text-white">
                  {services[activeService].title}
                </h3>
              </div>
              <div className="gold-divider-left mb-6" />
              <p className="font-sans text-white/70 text-lg leading-relaxed mb-8">
                {services[activeService].description}
              </p>
              <button className="font-sans px-8 py-3.5 bg-gold text-white tracking-wider uppercase text-sm hover:bg-gold-light transition-all duration-300 flex items-center gap-2 group">
                Learn More
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ─────────────── Experience Counter ─────────────── */
function ExperienceCounter() {
  const stats = [
    { number: "52+", label: "Luxury Rooms" },
    { number: "250", label: "Conference Capacity" },
    { number: "24/7", label: "Room Service" },
    { number: "4", label: "Star Rating" },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/addis-skyline.png"
          alt="Addis Ababa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/85" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.15}>
              <div className="text-center">
                <p className="font-serif text-5xl md:text-6xl font-bold text-gold mb-2">
                  {stat.number}
                </p>
                <p className="font-sans text-white/70 tracking-wider uppercase text-sm">
                  {stat.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Gallery Section ─────────────── */
function GallerySection() {
  const images = [
    { src: "/images/hotel-exterior.png", alt: "Hotel Exterior", span: "md:col-span-2 md:row-span-2" },
    { src: "/images/executive-suite.png", alt: "Executive Suite", span: "" },
    { src: "/images/restaurant-bar.png", alt: "Restaurant & Bar", span: "" },
    { src: "/images/conference-hall.png", alt: "Conference Hall", span: "" },
    { src: "/images/spa-wellness.png", alt: "Spa & Wellness", span: "" },
    { src: "/images/hotel-lobby.png", alt: "Hotel Lobby", span: "md:col-span-2" },
    { src: "/images/wedding-venue.png", alt: "Wedding Venue", span: "" },
    { src: "/images/fitness-center.png", alt: "Fitness Center", span: "" },
  ];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Visual Journey"
          title="Our Gallery"
          description="Explore the elegance and charm of Aphrodite International Hotel through our curated collection of photographs."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[220px]">
          {images.map((img, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.05}
              className={`${img.span}`}
            >
              <div
                className="img-zoom rounded-sm overflow-hidden h-full cursor-pointer group relative"
                onClick={() => setSelectedImage(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500 flex items-center justify-center">
                  <span className="font-sans text-white text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.alt}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ─────────────── Testimonials ─────────────── */
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Business Traveler",
      text: "An exceptional experience from check-in to check-out. The proximity to UNECA made it perfect for my conference, and the staff went above and beyond to make my stay comfortable.",
      rating: 5,
    },
    {
      name: "Dawit Haile",
      role: "Conference Organizer",
      text: "We hosted our annual summit at Aphrodite and the conference facilities were outstanding. The divisible hall, modern equipment, and attentive team made everything seamless.",
      rating: 5,
    },
    {
      name: "Maria Santos",
      role: "Leisure Traveler",
      text: "The rooftop views of Addis are breathtaking, and the restaurant serves some of the best Ethiopian cuisine I have had. A true gem in the heart of the city.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Guest Reviews"
          title="What Our Guests Say"
          description="Discover why Aphrodite International Hotel is the most preferred hotel in Addis Ababa through the words of our valued guests."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.15}>
              <div className="bg-cream p-8 rounded-sm relative h-full flex flex-col">
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-gold flex items-center justify-center">
                    <span className="font-serif text-white text-2xl leading-none">
                      &ldquo;
                    </span>
                  </div>
                </div>
                <div className="flex gap-1 mb-4 mt-4">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star
                      key={si}
                      size={14}
                      className="text-gold fill-gold"
                    />
                  ))}
                </div>
                <p className="font-sans text-muted-foreground leading-relaxed flex-1 mb-6">
                  {t.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="font-serif text-gold font-bold text-lg">
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-charcoal text-sm">
                      {t.name}
                    </p>
                    <p className="font-sans text-xs text-muted-foreground">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CTA Section ─────────────── */
function CTASection() {
  return (
    <section className="py-20 bg-gold relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.3),transparent)]" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-white/80 mb-4">
            Special Offer
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            We Understand Your Needs on Hotel Services
          </h2>
          <p className="font-sans text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Book directly and get the best price guaranteed. Experience
            extraordinary hospitality at Aphrodite International Hotel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-sans px-10 py-4 bg-charcoal text-white tracking-widest uppercase text-sm hover:bg-charcoal/80 transition-all duration-300 inline-flex items-center gap-2 group"
            >
              Book Your Stay
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="tel:+251115572228"
              className="font-sans px-10 py-4 border-2 border-white text-white tracking-widest uppercase text-sm hover:bg-white hover:text-gold transition-all duration-300 inline-flex items-center gap-2"
            >
              <Phone size={16} />
              Call Us
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─────────────── Contact Section ─────────────── */
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    []
  );

  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Get In Touch"
          title="Contact Us"
          description="We would love to hear from you. Reach out for reservations, inquiries, or any special requests."
        />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <AnimatedSection>
            <div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-6">
                Reaching Our Office
              </h3>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-charcoal mb-1">
                      Visit Us
                    </h4>
                    <p className="font-sans text-muted-foreground">
                      Kasanchis Business District, Guinea Conakry Street,
                      <br />
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-charcoal mb-1">
                      Call Us
                    </h4>
                    <p className="font-sans text-muted-foreground">
                      Tel: +251 11 557 22 28 / 29
                      <br />
                      Mobile: +251 94 760 4545
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-charcoal mb-1">
                      Email Us
                    </h4>
                    <p className="font-sans text-muted-foreground">
                      info@aphroditeaddis.com
                      <br />
                      reservations@aphroditeaddis.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-charcoal mb-1">
                      Working Hours
                    </h4>
                    <p className="font-sans text-muted-foreground">
                      We work 7 days a week, every day including major holidays.
                      <br />
                      Mon - Sun: 8:30 AM - 6:30 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-sm overflow-hidden shadow-lg h-[250px]">
                <iframe
                  src="https://maps.google.com/maps?q=Aphrodite+International+Hotel+Kazanchis+Addis+Ababa&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aphrodite International Hotel Location"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white p-8 md:p-10 rounded-sm shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                We Love to Hear
              </h3>
              <p className="font-sans text-muted-foreground mb-8">
                Send us your request for information, inquiry, or comment.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Check size={32} className="text-green-600" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-charcoal mb-2">
                    Message Sent!
                  </h4>
                  <p className="font-sans text-muted-foreground">
                    Thank you for reaching out. We will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-sans text-sm text-charcoal font-medium block mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full font-sans px-4 py-3 border border-border rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all bg-cream/50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-sm text-charcoal font-medium block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full font-sans px-4 py-3 border border-border rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all bg-cream/50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-sm text-charcoal font-medium block mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full font-sans px-4 py-3 border border-border rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all bg-cream/50"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-sm text-charcoal font-medium block mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full font-sans px-4 py-3 border border-border rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all bg-cream/50 resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full font-sans py-4 bg-gold text-white tracking-widest uppercase text-sm hover:bg-gold-dark transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Footer ─────────────── */
function Footer() {
  return (
    <footer className="bg-charcoal pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center">
                <span className="font-serif text-gold text-lg font-bold">
                  A
                </span>
              </div>
              <div>
                <h3 className="font-serif text-white text-xl font-bold">
                  Aphrodite
                </h3>
                <p className="font-sans text-gold text-[10px] tracking-[0.25em] uppercase">
                  International Hotel
                </p>
              </div>
            </div>
            <p className="font-sans text-white/60 leading-relaxed mb-6">
              A four-star luxury hotel situated within the heart of Addis Ababa.
              Walking distance from UNECA &amp; African Union with 52 comfortable
              &amp; spacious rooms, conference &amp; meeting facilities,
              restaurant &amp; cafe, Grand &amp; Piano Bars.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/aphroditeaddis/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.twitter.com/aphroditeaddis/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-gold text-sm tracking-[0.2em] uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Accommodation",
                "Bar & Restaurant",
                "Fitness Center & Spa",
                "Conference & Events",
                "Wedding Venue",
                "Airport Shuttle",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector("#services")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="font-sans text-white/60 hover:text-gold transition-colors duration-300 text-sm elegant-link"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-gold text-sm tracking-[0.2em] uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Rooms & Suites", href: "#rooms" },
                { label: "Gallery", href: "#gallery" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="font-sans text-white/60 hover:text-gold transition-colors duration-300 text-sm elegant-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-gold text-sm tracking-[0.2em] uppercase mb-6">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <p className="font-sans text-white/60 text-sm">
                  Kasanchis Business District,
                  <br />
                  Addis Ababa, Ethiopia
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <p className="font-sans text-white/60 text-sm">
                  +251 11 557 22 28/29
                </p>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle
                  size={16}
                  className="text-gold flex-shrink-0"
                />
                <p className="font-sans text-white/60 text-sm">
                  WhatsApp: +251 94 760 4545
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <p className="font-sans text-white/60 text-sm">
                  info@aphroditeaddis.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-white/40 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Aphrodite International Hotel.
              All rights reserved.
            </p>
            <p className="font-sans text-white/40 text-sm text-center md:text-right">
              Serving for Extraordinary Expectations
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────── Main Page ─────────────── */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <QuickInfoBar />
        <AboutSection />
        <RoomsSection />
        <ServicesSection />
        <ExperienceCounter />
        <GallerySection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
