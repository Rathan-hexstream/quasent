"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Industry = {
    name: string;
    colorClass: string;
    imageUrl: string;
    sublinks: string[];
};

const industries: Industry[] = [
    {
        name: "Natural Resources",
        colorClass: "text-cyan-400",
        imageUrl: "/images/industries/naturalresources.webp",
        sublinks: ["Renewable Energy", "Mining, Minerals & Metals", "Chemicals", "Water", "Agriculture"],
    },
    {
        name: "Health Sciences",
        colorClass: "text-pink-500",
        imageUrl: "/images/industries/healthscience.webp",
        sublinks: ["Life Science", "Medical Devices", "Diagnostics"],
    },
    {
        name: "Building Infrastructure",
        colorClass: "text-teal-400",
        imageUrl: "/images/industries/highway.webp",
        sublinks: [
            "Architecture",
            "Building Materials",
            "Civil Engineering",
            "Construction",
            "Construction Equipment",
            "Facilities Management",
        ],
    },
    {
        name: "Industrial & Engineering",
        colorClass: "text-yellow-400",
        imageUrl: "/images/industries/engimage.webp",
        sublinks: [
            "Industrial Automation",
            "Industrial Engineering",
            "HVAC/R",
            "Maritime",
            "Testing, Inspection & Certification",
        ],
    },
    {
        name: "Technology",
        colorClass: "text-orange-400",
        imageUrl: "/images/industries/technology.webp",
        sublinks: ["Aerospace & Defense", "Future Mobility", "SaaS", "Data Centres & Electronics", "BPO"],
    },
    {
        name: "Consumer",
        colorClass: "text-blue-500",
        imageUrl: "/images/industries/consumer.webp",
        sublinks: ["Food & Beverage", "Consumer Packaged Goods"],
    },
];

export default function OurIndustriesSection() {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#131217] via-[#1a1820] to-[#131217] py-20">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10 text-center text-4xl font-extrabold tracking-tight text-white"
            >
                Our Industries
            </motion.h2>

            <div className="grid w-full gap-0 md:grid-cols-2 lg:grid-cols-4">
                {industries.map((industry, index) => (
                    <motion.div
                        key={industry.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="group relative h-64 cursor-pointer overflow-hidden border border-black/40 bg-black"
                    >
                        {/* BG image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                            style={{ backgroundImage: `url(${industry.imageUrl})` }}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/70 to-black/30 transition-opacity duration-300 group-hover:bg-black/80" />

                        {/* CONTENT LAYER */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none">
                            {/* SUBLINKS appear ABOVE heading, only on hover */}
                            <ul className="
                                mb-2 space-y-1 text-sm text-gray-200
                                opacity-0 max-h-0 overflow-hidden
                                transition-all duration-300
                                group-hover:opacity-100 group-hover:max-h-40
                            ">
                                {industry.sublinks.map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <span className="text-xs font-medium">›</span>
                                        <span className="text-xs font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* HEADING stays ALWAYS at bottom */}
                            <h3 className={`text-xl font-semibold tracking-tight ${industry.colorClass}`}>
                                {industry.name}
                            </h3>
                        </div>
                    </motion.div>
                ))}

                {/* CTA TILE */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="relative col-span-1 h-64 bg-gradient-to-br from-[#24355c] via-[#232b4a] to-[#1a1c27] p-10 text-white md:col-span-2 lg:col-span-2"
                >
                    <div className="pointer-events-none absolute right-8 top-8 h-20 w-20 border border-white/10" />
                    <div className="pointer-events-none absolute right-14 top-14 h-14 w-14 border border-white/10" />
                    <div className="flex h-full flex-col justify-between">
                        <div>
                            <p className="text-lg font-semibold">Contact us to</p>
                            <p className="text-3xl font-bold">learn more</p>
                        </div>
                        <Link href="/contact" className="inline-flex items-center text-sm font-semibold text-amber-300 hover:text-amber-200">
                            Get In Touch →
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
