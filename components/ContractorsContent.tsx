"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    FaBriefcase,
    FaClock,
    FaMoneyCheckAlt,
    FaHandsHelping,
    FaGlobe,
    FaInfinity
} from "react-icons/fa";

export default function ContractorsContent() {
    return (
        <>
            {/* INTRO */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 max-w-3xl text-center">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
                    >
                        Contracting Built for{" "}
                        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
                            Flexibility & Growth
                        </span>
                    </motion.h2>

                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        At Quasent, we connect skilled contractors with exciting project-based
                        and contract opportunities across industries. Whether you’re looking
                        for flexibility, exposure to new technologies, or your next challenge,
                        we help you find roles that match your expertise and career goals.
                    </p>
                </div>
            </section>

            {/* WHY CONTRACT WITH US */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">

                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl font-extrabold text-gray-900 text-center"
                    >
                        Why Work With{" "}
                        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
                            Quasent
                        </span>
                    </motion.h3>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            {
                                icon: FaBriefcase,
                                title: "Premium Contract Opportunities",
                                desc: "Access carefully selected contract roles with reputable clients aligned to your expertise."
                            },
                            {
                                icon: FaClock,
                                title: "Flexible Engagement Models",
                                desc: "Choose assignments that suit your availability, working preferences, and lifestyle."
                            },
                            {
                                icon: FaMoneyCheckAlt,
                                title: "Transparent & Timely Payments",
                                desc: "Clear pay structures and reliable payment cycles with full transparency."
                            },
                            {
                                icon: FaHandsHelping,
                                title: "Dedicated Contractor Support",
                                desc: "Ongoing guidance and support throughout your contract lifecycle."
                            },
                            {
                                icon: FaGlobe,
                                title: "Global Client Opportunities",
                                desc: "Work with leading organisations across multiple industries and regions."
                            },
                            {
                                icon: FaInfinity,
                                title: "Long-Term Partnerships",
                                desc: "We focus on sustained relationships, offering continuity beyond a single contract."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                className="relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition"
                            >
                                {/* Accent Bar */}
                                <div
                                    className="absolute top-0 left-0 h-1.5 w-full rounded-t-3xl
                                    bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
                                />

                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center
                                    bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white shadow-md">
                                    <item.icon className="text-xl" />
                                </div>

                                {/* Content */}
                                <h4 className="mt-5 text-xl font-bold text-gray-900">
                                    {item.title}
                                </h4>

                                <p className="mt-3 text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* HOW WE SUPPORT CONTRACTORS */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-extrabold text-gray-900">
                            Contractor Support at Every Step
                        </h3>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            From onboarding and compliance to contract extensions and
                            redeployment, our team supports you throughout your contracting
                            journey. We focus on building long-term relationships, not
                            just filling roles.
                        </p>

                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            You’ll work with dedicated consultants who understand your
                            skills, preferences, and career aspirations.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 p-10 rounded-3xl border border-gray-200"
                    >
                        <h4 className="text-xl font-bold text-gray-900">
                            Ready to get started?
                        </h4>

                        <p className="mt-4 text-gray-600">
                            Submit your CV and explore contract opportunities tailored to you.
                        </p>

                        <Link
                            href="#"
                            className="inline-block mt-6 px-8 py-3 rounded-xl font-semibold text-white
                            bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:opacity-90 transition"
                        >
                            Submit Your CV
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
