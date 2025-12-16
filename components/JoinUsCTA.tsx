"use client";

import Link from "next/link";

export default function JoinUsCTA() {
    return (
        <section className="py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-center">
            <div className="max-w-4xl mx-auto px-6">

                <h2 className="text-4xl font-extrabold">
                    Ready to Grow With Quasent?
                </h2>

                <p className="mt-6 text-lg text-gray-300">
                    Explore opportunities to build a rewarding career and make
                    a lasting impact in the world of talent and workforce solutions.
                </p>

                <div className="mt-10">
                    <Link
                        href="/careers"
                        className="inline-block px-10 py-4 rounded-xl font-semibold text-white
                        bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500
                        hover:opacity-90 transition"
                    >
                        View Open Positions
                    </Link>
                </div>
            </div>
        </section>
    );
}
