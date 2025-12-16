"use client";

import { motion } from "framer-motion";

export default function PermanentHireContent() {
    return (
        <>
            {/* ================= INTRO CONTENT ================= */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 max-w-3xl">

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900"
                    >
                        <span className="block text-sm font-semibold uppercase tracking-widest
                            bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500
                            text-transparent bg-clip-text mb-3">
                            What We Do Best
                        </span>
                        Permanent Hiring Solutions
                    </motion.h2>

                    <p className="mt-6 text-lg text-gray-600 leading-relaxed text-justify">
                        Our Permanent Hiring Solutions are built to help organizations secure exceptional talent that drives long-term business success. By combining deep industry expertise, advanced talent mapping, and a consultative recruitment approach, we identify professionals who align with your technical needs, organizational culture, and strategic vision.
                    </p>

                    <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
                        We go beyond transactional hiring—focusing on quality, retention, and impact—so every hire strengthens your workforce and supports sustained growth.
                    </p>

                </div>
            </section>

            {/* ================= SIDE IMAGE ================= */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                            Hiring Built for{" "}
                            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500
                                text-transparent bg-clip-text">
                                Long-Term Impact
                            </span>
                        </h3>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed text-justify">
                            Hiring built for long-term impact goes beyond filling immediate vacancies—it’s about creating a workforce that evolves with your business. At Quasent, we take a strategic, insight-driven approach to recruitment, ensuring every hire contributes to your organization’s long-term vision, stability, and growth.
                        </p>

                        <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
                            Our teams work closely with business leaders to understand not just role requirements, but also organizational culture, leadership expectations, and future workforce needs. This allows us to identify professionals who are not only technically capable today, but adaptable, resilient, and ready to grow into tomorrow’s challenges.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl"
                    >
                        <img
                            src="/permanent-job.jpg"
                            alt="Permanent Hire Team"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-cyan-500/20"></div>
                    </motion.div>

                </div>
            </section>

            {/* ================= MODERN COLORED TILES ================= */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {[
                        "Strategic Talent Sourcing",
                        "Culture & Skill Alignment",
                        "Leadership Hiring",
                        "End-to-End Recruitment",
                        "Reduced Time-to-Hire",
                        "Long-Term Retention"
                    ].map((title, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            className="relative p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition"
                        >
                            <div className="absolute top-0 left-0 h-1.5 w-full rounded-t-3xl
                                bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                            </div>

                            <h4 className="text-xl font-bold text-gray-900">
                                {title}
                            </h4>

                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Delivering consistent hiring outcomes through proven
                                methodologies and deep market expertise.
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ================= PROVEN RESULTS ================= */}
            <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl font-extrabold"
                    >
                        Proven Results
                    </motion.h2>

                    <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
                        Our permanent hiring solutions consistently deliver measurable
                        outcomes for organizations across industries.
                    </p>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { value: "95%", label: "Offer Acceptance Rate" },
                            { value: "40%", label: "Reduced Time-to-Hire" },
                            { value: "90%+", label: "12-Month Retention Rate" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-10 rounded-3xl bg-white/10 backdrop-blur border border-white/20"
                            >
                                <div className="text-5xl font-extrabold
                                    bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500
                                    text-transparent bg-clip-text">
                                    {stat.value}
                                </div>
                                <p className="mt-4 text-gray-300 text-lg">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}
