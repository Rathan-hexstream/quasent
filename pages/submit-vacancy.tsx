import SubmitVacancyContent from "@/components/SubmitVacancyContent";
import SubmitVacancyBanner from "@/components/SubmitVacancyBanner";
import SubmitVacancyForm from "@/components/SubmitVacancyForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function SubmitVacancyPage() {
    return (
        <>

            <Navbar />
            <SubmitVacancyBanner/>;
            <SubmitVacancyContent />;
            <SubmitVacancyForm />
            <Footer />;


        </>
    );
}
