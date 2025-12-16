"use client";

import { motion } from "framer-motion";

export default function JoinUsIntro() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
                >
                    Careers That{" "}
                    <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500
                        text-transparent bg-clip-text">
                        Make a Difference
                    </span>
                </motion.h2>

                <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    At Quasent, we believe great careers are built on purpose, growth,
                    and collaboration. We’re a global recruitment and workforce solutions
                    partner driven by innovation, integrity, and impact.
                </p>

                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    When you join Quasent, you become part of a team that values people,
                    encourages ideas, and empowers you to shape the future of work.
                </p>
            </div>
        </section>
    );
}
