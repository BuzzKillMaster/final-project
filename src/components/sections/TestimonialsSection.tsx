'use client'

// Vicky

import CustomerTestimonial from "../CustomerTestimonial";
import {useState, useEffect} from 'react'
import SectionContainer from "@/components/sections/partials/SectionContainer";
import {Testimonials} from "@/../tina/__generated__/types";
import client from "@/../tina/__generated__/client";


export default function TestimonialsSection() {
    const [testimonials, setTestimonials] = useState<Testimonials[]>()

    useEffect(() => {
        (async () => {
            const query = await client.queries.testimonialsConnection()
            setTestimonials(query.data.testimonialsConnection.edges?.map((edge) => edge?.node as Testimonials))
        })()
    }, [])

    const [testimonialIndex, setTestimonialIndex] = useState(0);

    useEffect(() => {
        if (!testimonials) return

        const interval = setInterval(() => {
            setTestimonialIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            )
        }, 5000)

        return () => clearInterval(interval);
    }, [testimonialIndex, testimonials])

    const showTestimonial = (index: number) => {
        setTestimonialIndex(index)
    }

    if (!testimonials) return null

    const renderTestimonials = () => {
        return testimonials.map((_, index) => (
            <div
                key={index}
                onClick={() => showTestimonial(index)}
                className="testimonial-tab"
                style={{
                    height: '10px',
                    width: index === testimonialIndex ? '45px' : '25px',
                    backgroundColor: index === testimonialIndex ? 'black' : 'gray',
                    borderRadius: '2px',
                }}
            ></div>
        ))
    }

    return (
        <SectionContainer sectionId={"testimonials_section"}>
            <CustomerTestimonial
                imgSource={testimonials[testimonialIndex].image}
                imgWidth={600}
                imgHeight={600}
                altText={testimonials[testimonialIndex].imageAlt}
                heading={testimonials[testimonialIndex].heading}
                testimonial={testimonials[testimonialIndex].quote}
                author={testimonials[testimonialIndex].name}
            />

            <div className="testimonial-tabs flex gap-1">
                {renderTestimonials()}
            </div>
        </SectionContainer>
    )
}