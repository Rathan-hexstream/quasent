"use client";

import { motion } from "framer-motion";

export default function ContractorsWorkforceContent() {
    return (
        <>
            {/* ================= INTRO ================= */}
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
                            Flexible Workforce Solutions
                        </span>
                        Contractors Workforce
                    </motion.h2>

                    <p className="mt-6 text-lg text-gray-600 leading-relaxed text-justify">
                        A flexible, well-managed contract workforce is critical for organizations operating in fast-moving and competitive environments. Quasent’s Contractors Workforce solutions are designed to give businesses immediate access to skilled professionals without the complexity of long-term commitments.
                    </p>

                    <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
                        We help organizations scale teams quickly, fill specialized skill gaps, and respond to evolving project demands with confidence. Through our extensive talent network and streamlined deployment processes, we ensure contractors are not only technically proficient but also aligned with your delivery standards and work culture.
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
                            Workforce Agility{" "}
                            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500
                                text-transparent bg-clip-text">
                                When You Need
                            </span>
                        </h3>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed text-justify">
                            Workforce agility means having the right skills, at the right time, without slowing down your business. Our contract workforce model is built to support rapid change—whether you’re launching new initiatives, managing peak workloads, or navigating shifting market conditions.
                        </p>

                        <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
                            We partner closely with your leadership and project teams to understand timelines, deliverables, and performance expectations. This allows us to deploy ready-to-contribute professionals who integrate seamlessly into your teams and deliver impact from day one.
                        </p>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
                            By handling contractor sourcing, onboarding, compliance, and workforce management, Quasent removes operational complexity—giving you the flexibility to adapt, innovate, and execute with confidence whenever the need arises.
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
                            src="/contract.jpg"
                            alt="Contract Workforce"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-cyan-500/20"></div>
                    </motion.div>

                </div>
            </section>

            {/* ================= MODERN TILES ================= */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {[
                        "Rapid Talent Deployment",
                        "Project-Based Staffing",
                        "Specialized Skill Access",
                        "Compliance & Payroll Management",
                        "Cost-Effective Scaling",
                        "Global Contractor Network"
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
                                Delivering flexible workforce solutions with speed,
                                reliability, and full operational support.
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ================= PROVEN RESULTS ================= */}
            <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h2 className="text-4xl font-extrabold">
                        Proven Results
                    </h2>

                    <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
                        Our contractor workforce model delivers measurable impact across
                        speed, cost efficiency, and project success.
                    </p>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { value: "48 hrs", label: "Average Deployment Time" },
                            { value: "35%", label: "Cost Savings on Workforce Spend" },
                            { value: "92%", label: "Client Project Success Rate" }
                        ].map((stat, index) => (
                            <div
                                key={index}
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
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}
