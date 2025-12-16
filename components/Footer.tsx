export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

                <p className="text-gray-600 text-sm">
                    © {new Date().getFullYear()} Quasent. All rights reserved.
                </p>

                <div className="flex items-center gap-6 text-sm text-gray-600">
                    <a href="#" className="hover:text-black">Privacy Policy</a>
                    <a href="#" className="hover:text-black">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
