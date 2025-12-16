"use client";

import { motion } from "framer-motion";

export default function SubmitVacancyIntro() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
                >
                    Hiring Made{" "}
                    <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500
                        text-transparent bg-clip-text">
                        Simple & Strategic
                    </span>
                </motion.h2>

                <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Whether you’re hiring for permanent roles, contract positions, or
                    project-based teams, submitting your vacancy is the first step toward
                    building a workforce that delivers real business impact.
                </p>

                {/* Highlights */}
                <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        {
                            title: "Consultative Approach",
                            desc: "We understand your business, culture, and hiring goals before sourcing talent."
                        },
                        {
                            title: "Faster Hiring Outcomes",
                            desc: "Access qualified candidates quickly through our global talent network."
                        },
                        {
                            title: "Long-Term Value",
                            desc: "Every hire is aligned for performance, retention, and sustainable growth."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-gray-50 border border-gray-200 hover:shadow-xl transition"
                        >
                            <h3 className="text-xl font-bold text-gray-900">
                                {item.title}
                            </h3>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
