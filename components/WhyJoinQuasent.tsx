"use client";

import { motion } from "framer-motion";

export default function WhyJoinQuasent() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-extrabold text-gray-900 text-center"
                >
                    Why Join{" "}
                    <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500
                        text-transparent bg-clip-text">
                        Quasent
                    </span>
                </motion.h2>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            title: "People-First Culture",
                            desc: "We value collaboration, respect, and diversity—creating an environment where everyone belongs."
                        },
                        {
                            title: "Career Growth",
                            desc: "Continuous learning, mentorship, and opportunities to grow across roles and regions."
                        },
                        {
                            title: "Global Exposure",
                            desc: "Work with clients, candidates, and teams across global markets and industries."
                        },
                        {
                            title: "Innovation-Driven",
                            desc: "We embrace new ideas, modern hiring practices, and forward-thinking solutions."
                        },
                        {
                            title: "Meaningful Impact",
                            desc: "Help businesses build teams and professionals build careers that matter."
                        },
                        {
                            title: "Flexible Work Culture",
                            desc: "We support balance, agility, and modern ways of working."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            className="relative p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition"
                        >
                            <div className="absolute top-0 left-0 h-1.5 w-full rounded-t-3xl
                                bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"></div>

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
