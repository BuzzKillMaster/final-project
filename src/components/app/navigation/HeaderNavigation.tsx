'use client'

import NavLink from "@/components/app/navigation/NavLink";
import {HiMenuAlt3} from "react-icons/hi";
import {motion, AnimatePresence} from "framer-motion";
import {useState} from "react";
import {BsArrowRight} from "react-icons/bs";

const destinations = [
    // {
    //     name: "Home",
    //     target: "hero_section"
    // },
    {
        name: "Training",
        target: "training_section"
    },
    {
        name: "Profile",
        target: "profile_section"
    },
    {
        name: "Qualifications",
        target: "qualifications_section"
    },
    {
        name: "Approach",
        target: "approach_section"
    },
    {
        name: "Testimonials",
        target: "testimonials_section"
    },
    {
        name: "Blog",
        target: "blog_section"
    },
    {
        name: "Contact",
        target: "contact_section"
    }
]


export default function HeaderNavigation() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const navigate = (destination: string) => {
        const element = document.getElementById(destination)

        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }

        setShowMobileMenu(false)
    }

    return (
        <nav>
            <ul className={"hidden lg:flex gap-4"}>
                {destinations.map((destination, index) => (
                    <div key={index} onClick={() => navigate(destination.target)}>
                        <NavLink text={destination.name}/>
                    </div>
                ))}
            </ul>

            <div onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <HiMenuAlt3 className={"lg:hidden text-2xl cursor-pointer"}/>
            </div>

            <AnimatePresence>
                {showMobileMenu &&
                    <motion.aside
                        initial={{ width: 0 }}
                        animate={{ width: "max-content" }}
                        exit={{ width: 0 }}
                        className={"fixed shadow max-w-full z-50 top-0 right-0 bg-white h-screen overflow-auto"}>

                        <ul className={"w-96 max-w-full py-4 flex flex-col items-start"}>
                            <li className={"text-2xl w-full flex justify-end py-4 px-8"} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <BsArrowRight className={"cursor-pointer hover:text-emerald-400"}/>
                            </li>

                            {destinations.map((destination, index) => (
                                <div key={index} onClick={() => navigate(destination.target)} className={"w-full py-4 px-8"}>
                                    <NavLink text={destination.name}/>
                                </div>
                            ))}
                        </ul>
                    </motion.aside>
                }
            </AnimatePresence>
        </nav>
    )
}