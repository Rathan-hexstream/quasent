import JoinUsBanner from "@/components/JoinUsBanner";
import JoinUsIntro from "@/components/JoinUsIntro";
import WhyJoinQuasent from "@/components/WhyJoinQuasent";
import JoinUsCTA from "@/components/JoinUsCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function JoinUsPage() {
    return (
        <>
            <Navbar />
            <JoinUsBanner />
            <JoinUsIntro />
            <WhyJoinQuasent />
            <JoinUsCTA />
            <Footer />
        </>
    );
}
