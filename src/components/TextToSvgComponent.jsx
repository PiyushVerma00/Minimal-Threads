import { motion } from "framer-motion";

function LessButBetterSVG({ width = "220", height = "60", stroke = "#9C2605" }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 100"
      width={width}
      height={height}
      fill="9C2605"
      stroke={stroke}
      strokeWidth="2"
      className="inline-block"
    >
      <motion.text
        x="0"
        y="70"
        fontFamily="'Dancing Script', cursive"
        fontSize="60"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        less, but better.
      </motion.text>
    </motion.svg>
  );
}

export default LessButBetterSVG;
