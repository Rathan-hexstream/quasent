import JobsBanner from "@/components/JobsBanner";
import JobsList from "@/components/JobsList";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function JobsPage() {
    return (
        <>
            <Navbar />
            <JobsBanner />
            <JobsList />
            <Footer />;
        </>
    );
}
