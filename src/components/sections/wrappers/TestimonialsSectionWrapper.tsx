import client from "../../../../tina/__generated__/client";
import {Testimonials} from "../../../../tina/__generated__/types";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default async function TestimonialsSectionWrapper() {
    const query = await client.queries.testimonialsConnection()
    const testimonials = query.data.testimonialsConnection.edges?.map((edge) => edge?.node as Testimonials)

    return (
        <TestimonialsSection testimonials={testimonials ?? []}/>
    )
}