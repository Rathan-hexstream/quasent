"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUsSection() {
    return (
        <section id="about-us" className="w-full py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

                {/* LEFT — IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <Image
                        src="/about.png"
                        alt="About our company"
                        width={560}
                        height={500}
                        className="rounded-2xl shadow-lg object-cover"
                    />

                    {/* decorative gradient circle */}
                    <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full
                        bg-gradient-to-r from-purple-500 to-cyan-500 opacity-20 blur-2xl">
                    </div>
                </motion.div>

                {/* RIGHT — CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
                        About{" "}
                        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500
                            text-transparent bg-clip-text">
                            Us
                        </span>
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        We are a forward-thinking recruitment & workforce solutions company, committed
                        to connecting world-class talent with industry-leading organizations.
                        Our mission is to empower businesses and professionals through innovative hiring
                        strategies and deep domain expertise.
                    </p>

                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        Built on integrity, transparency, and long-term partnerships, we help organizations
                        thrive through specialized hiring, workforce transformation, and future-ready
                        talent solutions.
                    </p>

                    {/* KEY FEATURES */}
                    <div className="grid grid-cols-2 gap-4 text-gray-800 font-medium text-[15px] mb-10">
                        <div className="flex items-center gap-2">🌍 Global Talent Network</div>
                        <div className="flex items-center gap-2">🤝 Long-term Partnerships</div>
                        <div className="flex items-center gap-2">⚡ Fast & Scalable Hiring</div>
                        <div className="flex items-center gap-2">🎯 Industry-specialized Experts</div>
                    </div>

                    {/* CTA BUTTON */}
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.03 }}
                        className="inline-block px-8 py-4 rounded-full text-white font-semibold text-lg
                            bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500 shadow
                            hover:opacity-90 transition-all duration-300"
                    >
                        Learn More →
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
