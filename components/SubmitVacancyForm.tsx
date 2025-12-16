"use client";

import { motion } from "framer-motion";

export default function SubmitVacancyForm() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* ================= LEFT CONTENT ================= */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                        Let’s Talk{" "}
                        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500
                            text-transparent bg-clip-text">
                            Hiring
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        Tell us about your vacancy and our recruitment specialists will
                        get in touch to understand your requirements, timelines, and
                        workforce goals.
                    </p>

                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                        We support permanent hiring, contract staffing, and project-based
                        workforce solutions—tailored to your business needs.
                    </p>

                    <div className="mt-8 space-y-3 text-gray-700">
                        <p>✔ Fast response from hiring experts</p>
                        <p>✔ Consultative, insight-driven approach</p>
                        <p>✔ Quality talent aligned to long-term impact</p>
                    </div>
                </motion.div>

                {/* ================= FORM ================= */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl shadow-xl border border-gray-200 p-10"
                >
                    <form className="space-y-6">

                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Your full name"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3
                                focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        {/* Company */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Company Name
                            </label>
                            <input
                                type="text"
                                placeholder="Your company name"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3
                                focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="you@company.com"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3
                                focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        {/* Telephone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Telephone
                            </label>
                            <input
                                type="tel"
                                placeholder="+91 XXXXX XXXXX"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3
                                focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        {/* Source */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                How did you hear about us?
                            </label>
                            <select
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-white
                                focus:outline-none focus:ring-2 focus:ring-purple-500"
                            >
                                <option value="">Select an option</option>
                                <option>Google Search</option>
                                <option>LinkedIn</option>
                                <option>Referral</option>
                                <option>Website</option>
                                <option>Social Media</option>
                                <option>Other</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Your Message
                            </label>
                            <textarea
                                rows={4}
                                placeholder="Tell us about the role, skills required, and timelines"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3
                                focus:outline-none focus:ring-2 focus:ring-purple-500"
                            ></textarea>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl font-semibold text-white
                            bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500
                            hover:opacity-90 transition"
                        >
                            Submit Vacancy
                        </button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
}
