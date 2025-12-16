import PermanentHireBanner from "@/components/PermanentHireBanner";
import PermanentHireContent from "@/components/PermanentHireContent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PermanentHirePage() {
    return (
        <>
            <Navbar />
            <PermanentHireBanner />
            <PermanentHireContent />

            <Footer />
        </>
    );
}
