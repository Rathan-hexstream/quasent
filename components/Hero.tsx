export default function Hero() {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 px-6 md:px-8 items-center">

                {/* Left */}
                <div className="md:col-span-7">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                        Building the Future of{" "}
                        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
              Digital Transformation
            </span>
                    </h1>

                    <p className="mt-6 text-gray-600 max-w-xl text-lg">
                        Quasent delivers scalable enterprise software, cloud engineering,
                        automation and AI-driven solutions designed for modern business needs.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-md
              bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white shadow-lg"
                        >
                            Contact Us
                        </a>

                        <a
                            href="#services"
                            className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-md
              border border-gray-300 bg-white hover:bg-gray-50"
                        >
                            Explore Services
                        </a>
                    </div>

                    {/* Trusted logos placeholder */}
                    <div className="mt-12 text-gray-500 text-sm font-medium">
                        Trusted by leading companies
                        <div className="flex items-center gap-6 mt-4">
                            <div className="h-8 w-24 bg-gray-100 border border-gray-200 rounded-md"></div>
                            <div className="h-8 w-24 bg-gray-100 border border-gray-200 rounded-md"></div>
                            <div className="h-8 w-24 bg-gray-100 border border-gray-200 rounded-md"></div>
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className="md:col-span-5 flex justify-center">
                    <div className="w-full max-w-md p-6 bg-white shadow-xl rounded-2xl border border-gray-100">
                        <img
                            src="/logo/quasent.png"
                            alt="logo"
                            className="w-full h-40 object-contain"
                        />
                        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                            Innovative solutions combining engineering, automation, cloud, and AI
                            to help ambitious organisations move faster.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
