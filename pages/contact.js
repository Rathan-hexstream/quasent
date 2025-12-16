import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBanner from "@/components/ContactBanner";
import ContactSection from "@/components/ContactSectionPage";

export default function ContactPage() {
    return (
        <div className="w-full min-h-screen bg-white text-gray-900">

            <Navbar />

            <ContactBanner />

            <ContactSection />

            {/* GOOGLE MAP */}
            <div className="w-full h-[400px] mt-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019156508032!2d-122.40388868468168!3d37.785834779757336!
                        2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c113c771%3A0xa45bdf22151f0d2!
                        2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1694109156899!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <Footer />
        </div>
    );
}
