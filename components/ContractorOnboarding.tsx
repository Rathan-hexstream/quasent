"use client";

import { motion } from "framer-motion";
import {
    FaFileUpload,
    FaUserCheck,
    FaFileSignature,
    FaIdBadge,
    FaRocket
} from "react-icons/fa";

const steps = [
    {
        icon: FaFileUpload,
        title: "Submit Your CV",
        desc: "Share your profile and contract preferences."
    },
    {
        icon: FaUserCheck,
        title: "Role Matching",
        desc: "We match you with suitable contract opportunities."
    },
    {
        icon: FaFileSignature,
        title: "Compliance & Contracts",
        desc: "Complete right-to-work, IR35, and contract documentation."
    },
    {
        icon: FaIdBadge,
        title: "Umbrella Setup",
        desc: "Onboard with an approved umbrella company if required."
    },
    {
        icon: FaRocket,
        title: "Start Your Contract",
        desc: "Begin your assignment fully compliant and supported."
    }
];

export default function ContractorOnboarding() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-extrabold text-gray-900 text-center"
                >
                    Seamless{" "}
                    <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
                        Onboarding
                    </span>
                </motion.h2>

                <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 text-center">
                    Our contractor onboarding process is designed to be fast,
                    transparent, and fully supported—so you can focus on delivering
                    impact from day one.
                </p>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center
                                bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white shadow-lg">
                                <step.icon className="text-2xl" />
                            </div>

                            <h4 className="mt-5 text-lg font-bold text-gray-900">
                                {step.title}
                            </h4>

                            <p className="mt-2 text-sm text-gray-600">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}
