"use client";

import { motion } from "framer-motion";
import { FaBookmark, FaStar } from "react-icons/fa";

/* ================= JOB DATA ================= */
const jobs = [
    {
        title: "Project Manager",
        location: "Texas",
        type: "Permanent",
        sector: "Engineering and Renewables",
        salary: "$45k – $55k",
        posted: "Posted 3 days ago",
        featured: true,
        description:
            "Are you ready to take charge and lead impactful projects? We are seeking a proactive Project Manager to oversee complex engineering programmes."
    },
    {
        title: "Junior Grid Connection Manager",
        location: "California",
        type: "Permanent",
        sector: "Energy & Utilities",
        salary: "Up to $45k",
        posted: "Posted 4 days ago",
        featured: true,
        description:
            "Our client is a fast-growing renewable energy developer delivering battery storage projects across the UK."
    },
    {
        title: "Frontend Developer",
        location: "Remote",
        type: "Contract",
        sector: "Technology",
        salary: "$250/day",
        posted: "Posted 1 day ago",
        featured: false,
        description:
            "Build modern, high-performance frontend applications using React and Next.js."
    }
];

export default function JobsList() {

    /* ================= DYNAMIC COUNTS ================= */
    const sectorCounts = jobs.reduce<Record<string, number>>((acc, job) => {
        acc[job.sector] = (acc[job.sector] || 0) + 1;
        return acc;
    }, {});

    const contractTypeCounts = jobs.reduce<Record<string, number>>((acc, job) => {
        acc[job.type] = (acc[job.type] || 0) + 1;
        return acc;
    }, {});

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* ================= LEFT FILTERS ================= */}
                <aside className="lg:col-span-4 bg-white p-6 rounded-xl border border-gray-200">

                    {/* BUSINESS SECTORS */}
                    <div className="mb-10">
                        <h3 className="font-semibold text-gray-800 mb-4">
                            Business Sectors
                        </h3>

                        {Object.entries(sectorCounts).map(([sector, count]) => (
                            <label
                                key={sector}
                                className="flex items-center justify-between py-3 border-b text-sm text-gray-700"
                            >
                                <span className="flex gap-2 items-center">
                                    <input type="checkbox" />
                                    {sector}
                                </span>
                                <span className="text-gray-400">{count}</span>
                            </label>
                        ))}
                    </div>

                    {/* CONTRACT TYPES */}
                    <div>
                        <h3 className="font-semibold text-gray-800 mb-4">
                            Contract Types
                        </h3>

                        {Object.entries(contractTypeCounts).map(([type, count]) => (
                            <label
                                key={type}
                                className="flex items-center justify-between py-3 border-b text-sm text-gray-700"
                            >
                                <span className="flex gap-2 items-center">
                                    <input type="checkbox" />
                                    {type}
                                </span>
                                <span className="text-gray-400">{count}</span>
                            </label>
                        ))}
                    </div>
                </aside>

                {/* ================= RIGHT CONTENT ================= */}
                <div className="lg:col-span-8">

                    {/* SEARCH BAR */}
                    <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input
                            placeholder="Job title or keywords"
                            className="px-4 py-3 border border-gray-300 rounded-md"
                        />
                        <input
                            placeholder="Location"
                            className="px-4 py-3 border border-gray-300 rounded-md"
                        />
                        <button className="px-6 py-3 font-semibold text-white rounded-md bg-[#0E3A5D]">
                            Search
                        </button>
                    </div>

                    {/* FOUND COUNT */}
                    <p className="mb-6 text-gray-600 text-sm">
                        Found {jobs.length} jobs
                    </p>

                    {/* JOB CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {jobs.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-400 transition"
                            >
                                {/* FEATURED TAG */}
                                {job.featured && (
                                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded">
                                        <FaStar />
                                        featured
                                    </div>
                                )}

                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-xl font-bold text-gray-800">
                                        {job.title}
                                    </h4>
                                    <span className="text-sm text-gray-500">
                                        {job.posted}
                                    </span>
                                </div>

                                <p className="text-sm text-gray-600 mb-3">
                                    {job.location} | {job.salary}
                                </p>

                                <p className="text-gray-700 text-sm mb-6">
                                    {job.description}
                                </p>

                                {/* ACTIONS */}
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-3">
                                        <button className="px-5 py-2 text-sm font-semibold text-white rounded bg-[#0E3A5D]">
                                            Apply Now
                                        </button>
                                        <button className="px-5 py-2 text-sm font-semibold border border-gray-300 rounded hover:bg-gray-100">
                                            Read More
                                        </button>
                                    </div>

                                    <button className="text-gray-400 hover:text-gray-700">
                                        <FaBookmark />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
