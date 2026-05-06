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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1 className="text-2xl font-bold text-gray-900">Bella Nails Studio</motion.h1>
          <motion.a
            href="tel:(202) 234-5678"
            className="hidden md:block bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-shadow"
          >
            Call Now
          </motion.a>
        </div>
      </nav>

      <section className="relative h-screen overflow-hidden flex items-center justify-center pt-20">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&h=600&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: scrollY * 0.5
          }}
        />
        
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full"
          >
            <span className="text-sm font-semibold">⭐ 4.8/5 from 267 reviews</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-7xl md:text-8xl font-black mb-6 leading-tight"
          >
            Bella Nails
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl text-gray-100 mb-12 font-light"
          >
            Beauty That Lasts
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <motion.a
              href="tel:(202) 234-5678"
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
            >
              📞 Call Now
            </motion.a>
            <motion.a
              href="https://maps.google.com/?q=2834+Georgia+Ave+NW+Washington+DC"
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

      <section className="py-24 px-6 bg-white">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <motion.h2 className="text-5xl font-bold mb-8 text-gray-900">
            More Than Just Nails
          </motion.h2>
          <motion.p className="text-xl text-gray-700 leading-relaxed mb-6">
            At Bella Nails Studio, we believe beauty is personal. Our master technicians take time to understand exactly what you want, and deliver gel sets that last 3+ weeks without fading or lifting.
          </motion.p>
          <motion.p className="text-xl text-gray-700 leading-relaxed">
            With a perfect 4.8★ rating from 267 loyal clients, we've perfected the art of nails. Experience the Bella difference today.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-5xl font-bold mb-16 text-center text-gray-900">
            Our Services
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {["Gel Manicures", "Acrylic Nails", "Pedicures", "Nail Art"].map((s, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s}</h3>
                <p className="text-gray-600">Precision. Beauty. Lasting results.</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2 className="text-5xl font-bold mb-16 text-center">
            What Clients Love
          </motion.h2>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {[
              "The best nails in the city. Super clean and professional.",
              "Been coming for 3 years, never disappointed.",
              "My gel sets last 3+ weeks. Highly recommend."
            ].map((review, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-pink-500/50 transition-all"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-pink-400 text-pink-400" />
                  ))}
                </div>
                <p className="text-lg text-gray-100 italic">"{review}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2 className="text-5xl font-bold mb-16 text-center text-gray-900">
            Visit Bella Today
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.a
              href="tel:(202) 234-5678"
              variants={itemVariants}
              className="p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl text-center hover:shadow-lg transition-all"
            >
              <Phone className="w-8 h-8 text-pink-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Call</h3>
              <p className="text-pink-600 font-semibold">(202) 234-5678</p>
            </motion.a>

            <motion.a
              href="https://maps.google.com/?q=2834+Georgia+Ave+NW+Washington+DC"
              variants={itemVariants}
              className="p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl text-center hover:shadow-lg transition-all"
            >
              <MapPin className="w-8 h-8 text-pink-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Visit</h3>
              <p className="text-pink-600 font-semibold text-sm">2834 Georgia Ave NW, DC 20001</p>
            </motion.a>

            <motion.div
              variants={itemVariants}
              className="p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl text-center"
            >
              <Clock className="w-8 h-8 text-pink-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Hours</h3>
              <p className="text-pink-600 font-semibold text-sm">Tue-Sat 10am-7pm<br/>Sun 12pm-5pm</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6 text-center">
        <p className="mb-2">&copy; 2024 Bella Nails Studio</p>
        <p className="text-gray-400">Proud U Street Corridor nail studio • 4.8★ Rated</p>
      </footer>
    </main>
  );
}
