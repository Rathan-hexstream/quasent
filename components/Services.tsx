export default function Services() {
    const services = [
        {
            title: "Software Engineering",
            desc: "Custom enterprise-grade web, mobile, and platform development.",
        },
        {
            title: "Cloud & DevOps",
            desc: "Scalable cloud architecture, CI/CD automation, and infrastructure management.",
        },
        {
            title: "AI & Automation",
            desc: "Intelligent process automation, data pipelines, and ML-driven insights.",
        },
    ];

    return (
        <section id="services" className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8">

                <h2 className="text-3xl font-bold text-gray-900 text-center">
                    Our Services
                </h2>

                <p className="text-gray-600 text-center max-w-2xl mx-auto mt-3">
                    Solutions crafted to help businesses innovate, scale, and operate efficiently.
                </p>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {services.map((s) => (
                        <div
                            key={s.title}
                            className="p-8 rounded-2xl border border-gray-200 shadow-sm bg-white hover:shadow-md transition"
                        >
                            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 opacity-90"></div>

                            <h3 className="text-xl font-semibold text-gray-900 mt-4">
                                {s.title}
                            </h3>

                            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                                {s.desc}
                            </p>

                            <a
                                href="#"
                                className="text-sm font-semibold mt-4 inline-block text-transparent bg-clip-text
                bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
                            >
                                Learn more →
                            </a>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
