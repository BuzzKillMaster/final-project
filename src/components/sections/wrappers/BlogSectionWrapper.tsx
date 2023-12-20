import client from "../../../../tina/__generated__/client";
import {Blog} from "../../../../tina/__generated__/types";
import BlogSection from "@/components/sections/BlogSection";

export default async function BlogSectionWrapper() {
    const query = await client.queries.blog({ relativePath: 'BLOG.md' })
    const blog = query.data.blog as Blog

    return (
        <BlogSection blog={blog} />
    )
}