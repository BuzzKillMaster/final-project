'use client'

import SectionContainer from "@/components/sections/partials/SectionContainer";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import PrimaryButton from "@/components/PrimaryButton";
import {Blog} from "@/../tina/__generated__/types";
import {useEffect, useState} from "react";
import client from "@/../tina/__generated__/client";
import {AnimatePresence} from "framer-motion";
import BlogPopover from "@/components/BlogPopover";
import Image from "next/image";

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
                    <BlogPopover hidePopover={() => setShowPopover(false)}/>
                )}
            </AnimatePresence>

            <SectionContainer sectionId={"blog_section"} sectionClassName={"relative overflow-hidden"}>
                <SectionHeader subheading={blog.subheading} heading={blog.heading} description={blog.description} />
                <Image src={"/background_assets/paws_02.svg"} alt={"Paws"} fill={true} className={"opacity-30 -scale-x-100"} />

                <div className={"z-10 relative"}>
                    <PrimaryButton type={"button"} text={blog.button} onClick={() => setShowPopover(!showPopover)} secondary={true}/>
                </div>
            </SectionContainer>
        </>
    )
}