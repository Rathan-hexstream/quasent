import ContractorsBanner from "@/components/ContractorsBanner";
import ContractorsContent from "@/components/ContractorsContent";
import ContractorClients from "@/components/ContractorClients";
import ContractorOnboarding from "@/components/ContractorOnboarding";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContractorsPage() {
    return (
        <>
            <Navbar />
            <ContractorsBanner />
            <ContractorsContent />
            <ContractorClients />
            <ContractorOnboarding />
            <Footer />
        </>
    );
}
