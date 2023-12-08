'use client'

import {IoMdArrowUp} from "react-icons/io";
import {motion} from "framer-motion";

export default function BackToTopButton() {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <motion.div whileHover={{
            scale: 1.05,
        }} className={"p-4 rounded shadow bg-white fixed right-12 bottom-12 cursor-pointer z-30"} onClick={handleClick}>
            <IoMdArrowUp />
        </motion.div>
    )
}