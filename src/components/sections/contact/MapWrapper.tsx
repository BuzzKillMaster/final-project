'use client'

import MapContainer from "@/components/sections/contact/MapContainer";
import React, {useState} from "react";
import Image from "next/image";
import {AnimatePresence} from "framer-motion";
import {motion} from "framer-motion";

enum Tab {
    PHOTO,
    MAP
}

const VARIANTS = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 1
        }
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

export default function MapWrapper() {
    const [activeTab, setActiveTab] = useState<Tab>(Tab.PHOTO)

    return (
        <div className={"hidden lg:block -mx-4 lg:ml-0 z-0 relative"}>
            <div className={"grid grid-cols-2 text-center absolute top-12 left-1/2 -translate-x-1/2 z-40 shadow"}>
                <div className={(activeTab === Tab.PHOTO ? "bg-neutral-300" : "bg-neutral-200") + " py-3 px-5 rounded-l cursor-pointer hover:bg-neutral-300"} onClick={() => setActiveTab(Tab.PHOTO)}>
                    <p>Billede</p>
                </div>

                <div className={(activeTab === Tab.MAP ? "bg-neutral-300" : "bg-neutral-200") + " py-3 px-5 rounded-r cursor-pointer hover:bg-neutral-300"} onClick={() => setActiveTab(Tab.MAP)}>
                    <p>Kort</p>
                </div>
            </div>

            <AnimatePresence>
                {activeTab === Tab.PHOTO && (
                    <motion.div
                        key={Tab.PHOTO}
                        variants={VARIANTS}
                        initial={"hidden"}
                        animate={"visible"}
                        exit={"hidden"}
                        className={"absolute inset-0 overflow-hidden z-10"}>
                        <Image src={"/drone-photo.jpg"} alt={""} layout={"fill"} className={"object-cover"}/>
                    </motion.div>
                )}

                {activeTab === Tab.MAP && (
                    <motion.div
                        key={Tab.MAP}
                        variants={VARIANTS}
                        initial={"hidden"}
                        animate={"visible"}
                        exit={"hidden"}
                        className={"absolute inset-0 z-10"}>
                        <MapContainer/>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}