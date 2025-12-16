"use client";

import { motion } from "framer-motion";
import { FaBuilding, FaHandshake, FaShieldAlt } from "react-icons/fa";

export default function ContractorClients() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-extrabold text-gray-900 text-center"
                >
                    Clients &{" "}
                    <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
                        Umbrella Companies
                    </span>
                </motion.h2>

                <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 text-center leading-relaxed">
                    We work closely with trusted end-clients and compliant umbrella
                    companies to ensure contractors receive a seamless, transparent,
                    and fully compliant engagement experience.
                </p>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">

                    <motion.div
                        whileHover={{ y: -6 }}
                        className="bg-white p-8 rounded-3xl shadow-lg text-center"
                    >
                        <FaBuilding className="text-4xl mx-auto text-blue-500" />
                        <h3 className="mt-4 text-xl font-bold text-gray-900">
                            End Clients
                        </h3>
                        <p className="mt-3 text-gray-600">
                            Access contract opportunities with leading organisations
                            across technology, engineering, and professional services.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -6 }}
                        className="bg-white p-8 rounded-3xl shadow-lg text-center"
                    >
                        <FaHandshake className="text-4xl mx-auto text-purple-500" />
                        <h3 className="mt-4 text-xl font-bold text-gray-900">
                            Umbrella Partners
                        </h3>
                        <p className="mt-3 text-gray-600">
                            We partner with approved umbrella companies that ensure
                            compliant payroll, tax handling, and contractor protection.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -6 }}
                        className="bg-white p-8 rounded-3xl shadow-lg text-center"
                    >
                        <FaShieldAlt className="text-4xl mx-auto text-green-500" />
                        <h3 className="mt-4 text-xl font-bold text-gray-900">
                            Compliance First
                        </h3>
                        <p className="mt-3 text-gray-600">
                            Every engagement follows strict compliance standards,
                            giving contractors confidence and peace of mind.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
