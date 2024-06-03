import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from '../../contexts/Theme/ThemeContext';

export default function DarkModeSwitcher() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.div
      animate={isDarkMode ? "dark" : "light"}
      className={`rounded-full  w-14 h-5 flex items-center justify-start p-1 dark:bg-gray-700 cursor-pointer ${isDarkMode ? "bg-gray-300" : "bg-black hover:bg-blue-700"}`}
      onClick={toggleTheme}
    >
      <motion.div
        initial={isDarkMode ? "dark" : "light"}
        animate={isDarkMode ? "dark" : "light"}
        variants={{
          dark: { x: 0 },
          light: { x: 22 },
        }}
        className={`w-7 h-4 rounded-full flex items-center justify-center bg-white`}
      >
      </motion.div>
    </motion.div>
  );
}