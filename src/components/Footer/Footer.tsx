const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} TCM Logistics. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-gray-600 hover:text-red-600 transition-colors duration-200">Privacy Policy</a>
                        <a href="#" className="text-gray-600 hover:text-red-600 transition-colors duration-200">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;