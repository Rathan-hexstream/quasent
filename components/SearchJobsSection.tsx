import { HiSearch, HiLocationMarker } from "react-icons/hi";

export default function SearchJobsSection() {
    return (
        <section className="w-full bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-6 md:px-8">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-gray-900 text-center">
                    Search Jobs
                </h2>
                <p className="text-gray-600 text-center mt-2">
                    Find opportunities that match your skills and ambitions.
                </p>

                {/* Search Bar */}
                <div className="mt-10 bg-white shadow-md border border-gray-200 p-6 rounded-2xl">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Job Title / Keywords */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 mb-1">
                                Job / Title / Keyword
                            </label>
                            <div className="flex items-center gap-2 p-3 border rounded-lg bg-gray-50">
                                <HiSearch className="text-gray-500 text-lg" />
                                <input
                                    type="text"
                                    placeholder="e.g. Software Engineer"
                                    className="w-full bg-transparent focus:outline-none text-gray-800"
                                />
                            </div>
                        </div>

                        {/* Location (Dropdown) */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 mb-1">
                                Location
                            </label>
                            <div className="flex items-center gap-2 p-3 border rounded-lg bg-gray-50">
                                <HiLocationMarker className="text-gray-500 text-lg" />
                                <select
                                    className="w-full bg-transparent focus:outline-none text-gray-800"
                                >
                                    <option value="">Select Location</option>
                                    <option value="hyderabad">Hyderabad</option>
                                    <option value="bangalore">Bangalore</option>
                                    <option value="chennai">Chennai</option>
                                    <option value="mumbai">Mumbai</option>
                                    <option value="remote">Remote</option>
                                </select>
                            </div>
                        </div>

                        {/* Search Button */}
                        <div className="flex flex-col justify-end">
                            <button
                                className="
                  w-full py-3 rounded-lg text-white font-semibold text-sm
                  bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500
                  shadow-md hover:opacity-90 transition
                "
                            >
                                Search All Jobs
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
