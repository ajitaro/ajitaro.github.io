import { useEffect, useRef } from 'react';
import { COMMUNITY } from '../data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Community = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray('.community-item');

            items.forEach((item: any) => {
                gsap.from(item, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        end: "bottom 60%",
                        toggleActions: "play none none reverse"
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="community" ref={containerRef} className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">
                    Community
                </h2>

                <div className="space-y-8">
                    {COMMUNITY.map((item, index) => (
                        <div key={index} className="community-item p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                {item.institution}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                {item.degree}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Community;
