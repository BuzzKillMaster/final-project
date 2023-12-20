'use client'

import {ReactNode} from "react";
import {motion} from "framer-motion";

interface ScrollAnimationProps {
    children: ReactNode
    className?: string
}

export default function ScrollAnimation({children, className}: ScrollAnimationProps) {
    const variants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
        }
    }

    return (
        <motion.div
            variants={variants}
            initial={"hidden"}
            whileInView={"visible"}
            transition={{duration: 1}}
            viewport={{once: true}}
            className={className}
        >
            {children}
        </motion.div>
    )
}