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
        <SectionContainer containerClassName={"grid gap-12"}>
            <SectionHeader subheading={guide.subheading} heading={guide.heading} description={guide.description} />

            <div>
                <PrimaryButton type={"button"} text={guide.button} onClick={() => alert("Hello World!")} />
            </div>
        </SectionContainer>
    )
}