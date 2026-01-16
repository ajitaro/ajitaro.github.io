import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROJECTS } from '../data';

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "center center"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

    return (
        <motion.div
            ref={cardRef}
            style={{
                scale,
                opacity
            }}
            className="group relative bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-800"
        >
            <div className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
                            {project.type}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                            {project.name}
                        </h3>
                    </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-auto space-y-3 border-t border-gray-200 dark:border-gray-800 pt-6 mb-6">
                    {project.details.map((detail, i) => (
                        <div key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                            <span className="mr-2 mt-1.5 w-1 h-1 bg-green-500 rounded-full flex-shrink-0" />
                            {detail}
                        </div>
                    ))}
                </div>

                {project.url && (
                    <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl transition-colors hover:bg-gray-800 dark:hover:bg-gray-100"
                    >
                        View Project
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </motion.a>
                )}
            </div>
        </motion.div>
    );
}

const Work = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section
            id="projects"
            ref={containerRef}
            className="relative py-24 bg-white dark:bg-gray-950 overflow-hidden"
        >
            {/* Parallax Background Text */}
            <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
                <motion.div style={{ x }} className="whitespace-nowrap">
                    <span className="text-[20rem] font-black leading-none text-gray-900 dark:text-white uppercase">
                        Selected Work Projects &mdash;
                    </span>
                </motion.div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">
                    Selected Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
