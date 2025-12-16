export default function CaseStudies() {
    const cases = [
        {
            title: "Enterprise Automation Platform",
            desc: "Delivered a full workflow automation platform resulting in a 40% reduction in operational overhead.",
        },
        {
            title: "Cloud Migration for Finance",
            desc: "Moved a legacy financial system to a secure cloud-native architecture with zero downtime.",
        },
        {
            title: "AI Analytics Dashboard",
            desc: "Built an intelligent analytics dashboard enabling real-time decision-making for executives.",
        },
    ];

    return (
        <section id="case-studies" className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8">

                <h2 className="text-3xl font-bold text-gray-900 text-center">
                    Case Studies
                </h2>

                <p className="text-gray-600 text-center max-w-2xl mx-auto mt-3">
                    Real-world examples of digital transformation delivered by Quasent.
                </p>

                {/* Cards */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cases.map((c) => (
                        <div
                            key={c.title}
                            className="rounded-2xl p-8 border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
                        >
                            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500"></div>

                            <h3 className="text-xl font-semibold mt-4 text-gray-900">
                                {c.title}
                            </h3>

                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                {c.desc}
                            </p>

                            <a
                                href="#"
                                className="text-sm font-semibold mt-4 inline-block
                bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500
                text-transparent bg-clip-text"
                            >
                                Read More →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
