import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg bg-gray-900 text-yellow-400 dark:bg-white dark:text-gray-900 transition-colors focus:outline-none"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {theme === 'dark' ? <FaMoon size={20} /> : <FaSun size={20} />}
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;
