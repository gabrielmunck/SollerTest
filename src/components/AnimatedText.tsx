"use client";
import { motion } from "framer-motion";




// Componente para animar texto

export const AnimatedText = ({
    text,
    className,
}: {
    text: string;
    className?: string;
}) => {
    return (
        <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className={className}
        >
            {text}
        </motion.div>
    );
};
