'use client'

import SectionContainer from "@/components/sections/partials/SectionContainer";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import PrimaryButton from "@/components/PrimaryButton";
import {Blog} from "@/../tina/__generated__/types";
import {useEffect, useState} from "react";
import client from "@/../tina/__generated__/client";
import {AnimatePresence} from "framer-motion";
import BlogPopover from "@/components/BlogPopover";

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

            <SectionContainer sectionId={"blog_section"}>
                <SectionHeader subheading={blog.subheading} heading={blog.heading} description={blog.description} />

                <div>
                    <PrimaryButton type={"button"} text={blog.button} onClick={() => setShowPopover(!showPopover)} secondary={true}/>
                </div>
            </SectionContainer>
        </>
    )
}