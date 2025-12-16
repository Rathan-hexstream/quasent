export default function Industries() {
    const industries = [
        { name: "Finance", desc: "Digital solutions for banking, fintech, and enterprise finance." },
        { name: "Healthcare", desc: "Secure, compliant technology for modern healthcare systems." },
        { name: "Energy", desc: "Digital transformation for energy, renewables, and utilities." },
        { name: "Enterprise", desc: "Large-scale automation and software transformation for organisations." },
    ];

    return (
        <section id="industries" className="w-full py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 md:px-8">

                <h2 className="text-3xl font-bold text-gray-900 text-center">
                    Industries We Serve
                </h2>

                <p className="text-gray-600 text-center max-w-2xl mx-auto mt-3">
                    Helping businesses across multiple sectors achieve operational excellence.
                </p>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {industries.map((i) => (
                        <div
                            key={i.name}
                            className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
                        >
                            <div className="h-1 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full"></div>

                            <h3 className="text-lg font-semibold text-gray-900 mt-4">
                                {i.name}
                            </h3>

                            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                                {i.desc}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
