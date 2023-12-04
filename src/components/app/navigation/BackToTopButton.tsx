'use client'

import {IoMdArrowUp} from "react-icons/io";

export default function BackToTopButton() {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className={"p-4 rounded shadow bg-white fixed right-12 bottom-12 cursor-pointer z-50"} onClick={handleClick}>
            <IoMdArrowUp />
        </div>
    )
}