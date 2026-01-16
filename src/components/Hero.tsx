import { HERO } from '../data';
import { motion, type Variants } from 'framer-motion';

const Hero = () => {
    const text = "Software Engineer";
    const characters = text.split("");

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2,
            },
        },
    };

    const childVariants: Variants = {
        hidden: {
            y: 100,
            opacity: 0,
            rotate: 10
        },
        visible: {
            y: 0,
            opacity: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
            },
        },
    };

    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950 px-6 py-20"
        >
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-black opacity-50" />

            <div
                className="relative z-10 max-w-4xl w-full flex flex-col items-start space-y-8"
            >
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {HERO.name}
                    </h1>

                    <motion.h2
                        className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-400 overflow-hidden"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        aria-label={text}
                    >
                        {characters.map((char, index) => (
                            <motion.span
                                key={index}
                                variants={childVariants}
                                className="inline-block origin-bottom"
                                style={{
                                    marginRight: char === " " ? "0.25em" : "0"
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h2>
                </div>

                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
                    {HERO.summary}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                    <a
                        href="#experience"
                        className="px-8 py-4 bg-gray-900 text-white dark:bg-white dark:text-black rounded-full font-semibold transition-transform hover:scale-105 active:scale-95"
                    >
                        {HERO.cta.experience}
                    </a>
                    <a
                        href="#projects"
                        className="px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-full font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        {HERO.cta.projects}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
