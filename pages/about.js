import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import AboutBanner from "@/components/AboutBanner";
import AboutSection from "@/components/AboutSection";

export default function AboutPage() {
    return (
        <div className="w-full min-h-screen bg-white text-gray-900">
            <Navbar />

            <AboutBanner />

            <AboutSection />

            <Footer />
        </div>
    );
}
