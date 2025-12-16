import ContractorsWorkforceBanner from "@/components/ContractorsWorkforceBanner";
import ContractorsWorkforceContent from "@/components/ContractorsWorkforceContent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContractorsWorkforcePage() {
    return (
        <>
            <Navbar />
            <ContractorsWorkforceBanner />
            <ContractorsWorkforceContent />
            <Footer />
        </>
    );
}
