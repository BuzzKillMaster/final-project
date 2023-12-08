'use client'

import SectionContainer from "@/components/sections/partials/SectionContainer";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import PrimaryButton from "@/components/PrimaryButton";
import {Blog} from "@/../tina/__generated__/types";
import {useEffect, useState} from "react";
import client from "@/../tina/__generated__/client";
import {AnimatePresence, motion} from "framer-motion";

const POPOVER_VARIANTS = {
    open: { y: 0 },
    closed: { y: '100%' }
};


export default function BlogSection() {
    const [blog, setBlog] = useState<Blog>()
    const [showPopover, setShowPopover] = useState(false)

    useEffect(() => {
        (async () => {
            const query = await client.queries.blog({ relativePath: 'BLOG.md' })
            setBlog(query.data.blog as Blog)
        })()
    }, [])

    if (!blog) return null

    return (
        <>
            <AnimatePresence>
                {showPopover && (
                    <motion.section
                        variants={POPOVER_VARIANTS}
                        initial={"closed"}
                        animate={"open"}
                        transition={{ duration: 0.2 }}
                        exit={"closed"}
                        className={"fixed h-screen w-screen inset-0 bg-neutral-100 z-50 flex items-center justify-center cursor-pointer"}
                        onClick={() => setShowPopover(!showPopover)}
                    >
                        <p className={"text-9xl font-black"}>Coming Soon</p>
                    </motion.section>
                )}
            </AnimatePresence>

            <SectionContainer sectionId={"blog_section"}>
                <SectionHeader subheading={blog.subheading} heading={blog.heading} description={blog.description} />

                <div>
                    <PrimaryButton type={"button"} text={blog.button} onClick={() => setShowPopover(!showPopover)} secondary={true}/>
                </div>
            </SectionContainer>
        </>
    )
}