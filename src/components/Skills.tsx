import { useEffect, useRef } from 'react';
import { SKILLS } from '../data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered skill categories reveal
            const categories = gsap.utils.toArray('.skill-category');

            categories.forEach((cat: any, i) => {
                gsap.from(cat, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.1, // Stagger categories slightly
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: cat,
                        start: "top 85%",
                        end: "bottom 30%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="skills" ref={containerRef} className="py-24 px-6 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">
                    Technical Skills
                </h2>

                <div className="space-y-12">
                    {SKILLS.map((category, index) => (
                        <div
                            key={index}
                            className="skill-category"
                        >
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                <span className="w-8 h-1 bg-blue-500 rounded-full mr-4"></span>
                                {category.category}
                            </h3>

                            <div className="flex flex-wrap gap-4">
                                {category.items.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="group relative px-6 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                                    >
                                        <span className="text-gray-700 dark:text-gray-200 font-medium">
                                            {skill}
                                        </span>
                                        <div className="absolute inset-0 rounded-xl border-2 border-blue-500 opacity-0 group-hover:opacity-10 scale-95 group-hover:scale-100 transition-all duration-300" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
