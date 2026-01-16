import { useEffect, useRef } from 'react';
import { EXPERIENCE } from '../data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate each timeline item
            const items = gsap.utils.toArray('.experience-item');

            items.forEach((item: any) => {
                gsap.from(item, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%", // Animates when top of item hits 80% viewport height
                        end: "bottom 60%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

            // Animate the vertical line
            gsap.from(".timeline-line", {
                scaleY: 0,
                transformOrigin: "top",
                ease: "none",
                scrollTrigger: {
                    trigger: ".experience-list",
                    start: "top 70%",
                    end: "bottom 70%",
                    scrub: true
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="experience" ref={containerRef} className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">
                    Professional Experience
                </h2>

                <div className="experience-list relative space-y-12 pl-8 md:pl-0">
                    {/* Vertical Line for Mobile/Desktop */}
                    <div className="timeline-line absolute left-2 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 -translate-x-1/2 hidden md:block" />
                    <div className="timeline-line absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 block md:hidden" />

                    {EXPERIENCE.map((job, index) => (
                        <div
                            key={index}
                            className={`experience-item relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Dot on the line */}
                            <div className="absolute left-[-2rem] md:left-1/2 top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 -translate-x-1/2 border-4 border-white dark:border-gray-900 z-10" />

                            {/* Content */}
                            <div className="flex-1 md:w-1/2 pl-0 md:pl-8">
                                {/* Spacer for alternating layout */}
                            </div>

                            <div className="flex-1 md:w-1/2 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                                    {job.period}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                    {job.role}
                                </h3>
                                <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-4">
                                    {job.company}
                                </h4>
                                <ul className="space-y-2">
                                    {job.description.map((desc, i) => (
                                        <li key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm flex items-start">
                                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
