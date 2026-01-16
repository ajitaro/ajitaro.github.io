import { useEffect, useRef } from 'react';
import { EDUCATION } from '../data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGraduationCap, FaChalkboardTeacher } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".education-item", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".education-list",
                    start: "top 85%",
                    end: "bottom 30%",
                    toggleActions: "play none none reverse"
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="education" ref={containerRef} className="py-20 px-6 bg-white dark:bg-gray-950">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">
                    Education & Teaching
                </h2>

                <div className="education-list grid grid-cols-1 md:grid-cols-2 gap-8">
                    {EDUCATION.map((item, index) => (
                        <div
                            key={index}
                            className="education-item flex flex-col items-center text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800"
                        >
                            <div className="w-16 h-16 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl">
                                {index === 0 ? <FaGraduationCap /> : <FaChalkboardTeacher />}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                {item.institution}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                                {item.degree}
                            </p>

                            {item.gpa && (
                                <span className="mt-4 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold rounded-full">
                                    GPA: {item.gpa}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
