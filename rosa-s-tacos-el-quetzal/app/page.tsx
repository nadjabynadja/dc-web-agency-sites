'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Star, ChevronDown } from 'lucide-react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const business = {
    name: "Rosa's Tacos El Quetzal",
    tagline: "Authentic Street Tacos Since Day One",
    phone: "(202) 387-0800",
    address: "1827 Columbia Rd NW, Washington, DC 20009",
    rating: 4.7,
    reviews: 342,
    hours: "Mon-Thu 11am-11pm, Fri-Sat 11am-12am, Sun 11am-11pm",
    neighborhood: "Adams Morgan",
    specialties: ["Al Pastor Tacos", "Carnitas", "Fresh Tortillas", "Horchata"],
    reviews_list: [
      "Best tacos in DC, hands down. The al pastor is incredible.",
      "Family-owned, amazing food, super friendly staff.",
      "Worth the wait, every single time."
    ],
    heroImage: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1200&h=600&fit=crop"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1 className="text-2xl font-bold text-gray-900">Rosa's Tacos</motion.h1>
          <motion.a
            href="tel:(202) 387-0800"
            whileHover={{ scale: 1.05 }}
            className="hidden md:block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-shadow"
          >
            Call Now
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center pt-20">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60"
          style={{
            backgroundImage: `url(${business.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: scrollY * 0.5
          }}
        />
        
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full"
          >
            <span className="text-sm font-semibold">⭐ {business.rating}/5 from {business.reviews} reviews</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-7xl md:text-8xl font-black mb-6 leading-tight"
          >
            Rosa's Tacos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl text-gray-100 mb-12 font-light"
          >
            {business.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <motion.a
              href="tel:(202) 387-0800"
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
            >
              📞 Call Now
            </motion.a>
            <motion.a
              href="https://maps.google.com/?q=1827+Columbia+Rd+NW+Washington+DC"
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-lg font-bold text-lg hover:bg-white/30 transition-all"
            >
              📍 Get Directions
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </section>

      {/* About */}
      <section className="py-24 px-6 bg-white">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <motion.h2 className="text-5xl font-bold mb-8 text-gray-900">
            About Rosa's Tacos
          </motion.h2>
          <motion.p className="text-xl text-gray-700 leading-relaxed mb-6">
            For generations, Rosa's has been the heartbeat of Adams Morgan. Every taco tells a story — handmade tortillas, slow-cooked meats, and family recipes passed down through time. We're not just serving food; we're sharing culture, warmth, and the flavors that make DC home.
          </motion.p>
          <motion.p className="text-xl text-gray-700 leading-relaxed">
            With a 4.7★ rating from over 342 customers, we've earned your trust one taco at a time. Come experience why people line up for Rosa's.
          </motion.p>
        </motion.div>
      </section>

      {/* Specialties */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-5xl font-bold mb-16 text-center text-gray-900">
            Fan Favorites
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {business.specialties.map((specialty, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{specialty}</h3>
                <p className="text-gray-600">Crafted with care and passion</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2 className="text-5xl font-bold mb-16 text-center">
            What People Love
          </motion.h2>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {business.reviews_list.map((review, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-amber-500/50 transition-all"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-lg text-gray-100 italic">"{review}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2 className="text-5xl font-bold mb-16 text-center text-gray-900">
            Visit Rosa's Today
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.a
              href="tel:(202) 387-0800"
              variants={itemVariants}
              className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl text-center hover:shadow-lg transition-all"
            >
              <Phone className="w-8 h-8 text-amber-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Call</h3>
              <p className="text-amber-600 font-semibold">(202) 387-0800</p>
            </motion.a>

            <motion.a
              href="https://maps.google.com/?q=1827+Columbia+Rd+NW+Washington+DC"
              variants={itemVariants}
              className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl text-center hover:shadow-lg transition-all"
            >
              <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Visit</h3>
              <p className="text-amber-600 font-semibold text-sm">1827 Columbia Rd NW, DC 20009</p>
            </motion.a>

            <motion.div
              variants={itemVariants}
              className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl text-center"
            >
              <Clock className="w-8 h-8 text-amber-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Hours</h3>
              <p className="text-amber-600 font-semibold text-sm">11am-11pm Daily</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 text-center">
        <p className="mb-2">&copy; 2024 Rosa's Tacos El Quetzal</p>
        <p className="text-gray-400">Proud Adams Morgan business • 4.7★ Rated</p>
      </footer>
    </main>
  );
}
