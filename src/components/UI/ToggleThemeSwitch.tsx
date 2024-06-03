import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from '../../contexts/Theme/ThemeContext';

export default function DarkModeSwitcher() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.div
      animate={isDarkMode ? "dark" : "light"}
      className="rounded-full bg-gray-300 w-14 h-8 flex items-center justify-start p-1 dark:bg-gray-700 cursor-pointer"
      onClick={toggleTheme}
    >
      <motion.div
        initial={isDarkMode ? "dark" : "light"}
        animate={isDarkMode ? "dark" : "light"}
        variants={{
          dark: { x: 6 },
          light: { x: 26 },
        }}
        className={`w-4 h-4 rounded-full flex items-center justify-center`}
      >
        {isDarkMode ? <FaMoon color="gray" /> : <FaSun color="yellow" />}
      </motion.div>
    </motion.div>
  );
}