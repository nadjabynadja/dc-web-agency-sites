'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-4"
          >
            District Dry Cleaners
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl mb-8 text-gray-200"
          >
            Suit cleaning
          </motion.p>
          <motion.a
            href="tel:(202) 338-9012"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition"
          >
            Call Now: (202) 338-9012
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-6"
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg text-gray-700 leading-relaxed mb-4"
          >
            At District Dry Cleaners, we're committed to delivering exceptional service in Dry Cleaner. With a rating of 4.5/5 stars from 198 happy customers, we pride ourselves on quality, attention to detail, and genuine care for our clients.
          </motion.p>
        </div>
      </section>

      {/* Services/Menu Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Our Specialties
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-2">Suit cleaning</h3>
              <p className="text-gray-600">Premium quality service tailored to your needs.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-2">Alterations</h3>
              <p className="text-gray-600">Premium quality service tailored to your needs.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-2">Leather/suede</h3>
              <p className="text-gray-600">Premium quality service tailored to your needs.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.30000000000000004 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-2">Rush service available</h3>
              <p className="text-gray-600">Premium quality service tailored to your needs.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            What Our Customers Say
          </motion.h2>
          <div className="space-y-6">
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0 }}
              className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500"
            >
              <p className="text-gray-700 italic mb-2">"Best dry cleaning in DC. Quality is incredible."</p>
              <p className="text-yellow-500 text-sm font-semibold">★★★★★</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500"
            >
              <p className="text-gray-700 italic mb-2">"Fast turnaround, fair prices, attention to detail."</p>
              <p className="text-yellow-500 text-sm font-semibold">★★★★★</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500"
            >
              <p className="text-gray-700 italic mb-2">"My clothes look brand new after their service."</p>
              <p className="text-yellow-500 text-sm font-semibold">★★★★★</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Visit Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Location</h3>
              <p className="text-gray-300 mb-6">3245 M Street NW, Washington, DC 20007</p>
              <h3 className="text-2xl font-bold mb-4">Hours</h3>
              <p className="text-gray-300 whitespace-pre-line">Mon-Fri 7am-6pm, Sat 8am-5pm, Closed Sun</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact</h3>
              <a href="tel:(202) 338-9012" className="text-yellow-400 text-xl font-bold hover:underline">
                (202) 338-9012
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6 text-center">
        <p>&copy; 2024 District Dry Cleaners. All rights reserved. Proud Georgetown business.</p>
      </footer>
    </main>
  );
}
