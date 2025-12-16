"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const insights = [
    {
        title: "Renewable Energy Hiring Trends 2025",
        category: "Natural Resources",
        image: "/images/insights/natural.jpeg",
        link: "#",
    },
    {
        title: "AI Adoption in Health Sciences",
        category: "Health Sciences",
        image: "/images/insights/health-science.jpeg",
        link: "#",
    },
    {
        title: "Infrastructure Boom in APAC Market",
        category: "Building Infrastructure",
        image: "/images/insights/construction.jpeg",
        link: "#",
    },
    {
        title: "Industrial Automation Skills Shortage",
        category: "Industrial & Engineering",
        image: "/images/insights/robotic-industry.jpeg",
        link: "#",
    },
    {
        title: "Technology & SaaS Expansion 2025",
        category: "Technology",
        image: "/images/insights/Technology-SaaS.jpeg",
        link: "#",
    },
];

export default function MarketInsights() {
    return (
        <section
            className="
        relative w-full overflow-hidden
        bg-cover bg-center bg-fixed
        py-20
      "
            style={{ backgroundImage: `url('/images/insights/market-bg.jpeg')` }}
        >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative mb-4 text-center text-4xl font-extrabold tracking-tight text-white"
            >
                Market Insights
            </motion.h2>

            <p className="relative mx-auto mb-12 max-w-2xl text-center text-lg text-gray-300">
                Latest trends shaping global industries
            </p>

            {/* GRID */}
            <div className="relative grid w-full gap-0 px-4 md:grid-cols-2 lg:px-0">
                {/* FEATURED */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="relative h-[480px] border border-white/10"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                        style={{ backgroundImage: `url(${insights[0].image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/25" />

                    <div className="absolute inset-0 flex flex-col justify-end p-8">
            <span className="text-sm font-semibold text-amber-300">
              {insights[0].category}
            </span>
                        <h3 className="mt-2 text-3xl font-bold text-white">
                            {insights[0].title}
                        </h3>
                        <Link
                            href={insights[0].link}
                            className="mt-4 inline-flex items-center text-sm font-semibold text-amber-300 hover:text-amber-200"
                        >
                            Read More →
                        </Link>
                    </div>
                </motion.div>

                {/* SMALL INSIGHTS */}
                <div className="grid grid-cols-1 border-l border-white/10 md:grid-cols-2">
                    {insights.slice(1).map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: index * 0.07 }}
                            className="relative h-60 cursor-pointer overflow-hidden border border-white/10"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/30" />

                            <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span className="text-xs font-semibold text-blue-300">
                  {item.category}
                </span>
                                <h4 className="mt-1 text-lg font-semibold text-white">
                                    {item.title}
                                </h4>
                                <Link
                                    href={item.link}
                                    className="mt-2 inline-block text-xs font-semibold text-amber-300 hover:text-amber-200"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
