"use client";

const Footer = () => {
    return (
        <div className="flex flex-auto">
            <footer className="bottom-0 w-full bg-header text-white text-center md:py-3 sm:py-3 py-3 md:px-0 sm:px-3 px-3 md:text-base sd:text-xs text-xs">
                <div className="container mx-auto flex flex-col text-left justify-items-stretch pb-2">
                    <p className="mb-4">Contact us at:</p>
                    <div className="flex mb-4 md:text-base sm:text-xs text-xs">
                        <a href="mailto:disetir.atasan@gmail.com" className="mr-4">
                            <div className="w-6 h-6">
                                <img src="/Logo/logo-email.svg" alt="Email Logo" className="w-full h-full filter invert" />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/example/" target="_blank" className="mr-4">
                            <div className="w-6 h-6">
                                <img src="/Logo/logo-instagram.svg" alt="Instagram Logo" className="w-full h-full filter invert" />
                            </div>
                        </a>
                        <a href="https://wa.me/1234567890" target="_blank">
                            <div className="w-6 h-6">
                                <img src="/Logo/logo-whatsapp.svg" alt="WhatsApp Logo" className="w-full h-full filter invert" />
                            </div>
                        </a>
                    </div>
                </div>
                <div>
                    <p className="md:text-xs sm:text-xs text-0.3xs pb-2">
                        We and third parties use cookies and similar tools to enhance and track your experience on our Sites, conduct analytics, and personalize marketing to you. By using the Sites, you agree to our use of these technologies.For more information, visit the Cookies section within our Privacy Notice. To manage your Cookie Preferences, <u className="cursor-pointer">click here</u>.
                    </p>
                    <p className="md:text-xs sm:text-xs text-0.3xs">
                        &copy; 2024 DISETIR ATASAN | DO NOT SELL MY INFO - CA RESIDENT ONLY
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
