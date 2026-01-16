import { CONTACT } from '../data';
import { FaHeart } from 'react-icons/fa';

const Contact = () => {
    return (
        <footer id="contact" className="py-20 px-6 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Contact
                </h2>

                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
                    {CONTACT.cta}
                </p>

                <div className="flex justify-center gap-8 mb-16">
                    {CONTACT.social.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
                            aria-label={social.name}
                        >
                            <social.icon size={32} />
                        </a>
                    ))}
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col items-center">
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                        Built with <FaHeart className="text-red-500" /> using React, Tailwind & GSAP
                    </p>
                    <p className="text-gray-600 text-xs mt-2">
                        © {new Date().getFullYear()} Fitriaji Taqiy Robbaanii. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
