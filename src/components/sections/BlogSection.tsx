'use client'

import SectionContainer from "@/components/sections/partials/SectionContainer";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import PrimaryButton from "@/components/PrimaryButton";
import {Blog} from "@/../tina/__generated__/types";
import {useState} from "react";
import {AnimatePresence} from "framer-motion";
import BlogPopover from "@/components/BlogPopover";
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function BlogSection({blog}: { blog: Blog }) {
    const [showPopover, setShowPopover] = useState(false)

    return (
        <>
            <AnimatePresence>
                {showPopover && (
                    <BlogPopover blog={blog} hidePopover={() => setShowPopover(false)}/>
                )}
            </AnimatePresence>

            <SectionContainer sectionId={"blog_section"} sectionClassName={"relative overflow-hidden"}>
                <SectionHeader subheading={blog.subheading} heading={blog.heading} description={blog.description} />
                <Image src={"/background_assets/paws_02.svg"} alt={"Paws"} fill={true} className={"opacity-30 -scale-x-100"} />

                <ScrollAnimation className={"z-10 relative"}>
                    <PrimaryButton type={"button"} text={blog.button} onClick={() => setShowPopover(!showPopover)} secondary={true}/>
                    <a href={"https://www.facebook.com"} target={"_blank"} rel={"noreferrer"} className={"ml-4 py-4 px-8 bg-[#1877F2] text-neutral-50 rounded-full shadow font-semibold hover:brightness-125"}>Følg mig på Facebook</a>
                </ScrollAnimation>
            </SectionContainer>
        </>
    )
}