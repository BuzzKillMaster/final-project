'use client'

import SectionContainer from "@/components/sections/partials/SectionContainer";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import PrimaryButton from "@/components/PrimaryButton";
import {Blog} from "@/../tina/__generated__/types";
import {useEffect, useState} from "react";
import client from "@/../tina/__generated__/client";

export default function BlogSection() {
    const [blog, setBlog] = useState<Blog>()

    useEffect(() => {
        (async () => {
            const query = await client.queries.blog({ relativePath: 'BLOG.md' })
            setBlog(query.data.blog as Blog)
        })()
    }, [])

    if (!blog) return null

    return (
        <SectionContainer sectionId={"blog_section"} containerClassName={"grid gap-12"}>
            <SectionHeader subheading={blog.subheading} heading={blog.heading} description={blog.description} />

            <div>
                <PrimaryButton type={"button"} text={blog.button} onClick={() => {}} />
            </div>
        </SectionContainer>
    )
}