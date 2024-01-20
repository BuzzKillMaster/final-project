'use client'

import AppLogo from "@/components/app/AppLogo";
import NavLink from "@/components/app/navigation/NavLink";
import {HiMenuAlt3} from "react-icons/hi";
import {AnimatePresence, motion} from "framer-motion";
import {BsArrowRight} from "react-icons/bs";
import {useRef, useState} from "react";

const destinations = [
    {
        name: "Træning",
        target: "training_section"
    },
    {
        name: "Profil",
        target: "profile_section"
    },
    {
        name: "Kvalifikationer",
        target: "qualifications_section"
    },
    {
        name: "Tilgang",
        target: "approach_section"
    },
    {
        name: "Udtalelser",
        target: "testimonials_section"
    },
    {
        name: "Blog",
        target: "blog_section"
    },
    {
        name: "Kontakt",
        target: "contact_section"
    }
]

export default function AppHeader() {
    const header = useRef<HTMLDivElement>(null)
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const navigate = (destination: string) => {
        const element = document.getElementById(destination)

        if (element && header.current) {
            window.scrollTo({
                top: element.getBoundingClientRect().top + window.scrollY - header.current.clientHeight,
                behavior: "smooth"
            })
        }

        if (showMobileMenu) setShowMobileMenu(false)
    }

    return (
        <header ref={header} className={"fixed top-0 right-0 left-0 z-50 p-6 bg-primary shadow"}>
            <div className={"container mx-auto max-w-7xl flex items-center justify-between"}>
                <AppLogo/>

                <nav>
                    <ul className={"hidden lg:flex gap-8"}>
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
                                initial={{width: 0}}
                                animate={{width: "max-content"}}
                                exit={{width: 0}}
                                className={"fixed shadow max-w-full z-50 top-0 right-0 bg-white h-screen overflow-auto"}>

                                <ul className={"w-96 max-w-full py-4 flex flex-col items-start"}>
                                    <li className={"text-2xl w-full flex justify-end py-4 px-8"}
                                        onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                        <BsArrowRight className={"cursor-pointer hover:text-emerald-400"}/>
                                    </li>

                                    {destinations.map((destination, index) => (
                                        <div key={index} onClick={() => navigate(destination.target)}
                                             className={"w-full py-4 px-8"}>
                                            <NavLink text={destination.name}/>
                                        </div>
                                    ))}
                                </ul>
                            </motion.aside>
                        }
                    </AnimatePresence>
                </nav>
            </div>
        </header>
    )
}