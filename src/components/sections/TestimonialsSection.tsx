'use client'

import CustomerTestimonial from "../CustomerTestimonial";
import {useState, useEffect} from 'react'

// Vicky

const fakeTestimonialCMS = [{
        heading: "Testimonial 1",
        testimonial: "Vivamus quis semper tortor. Duis sapien sem, pretium non tristique nec, volutpat ut diam. Proin euismod mollis purus id porta.",
        imgSource: "https://fakeimg.pl/500/",
        altText: "temp",
        author: "Name 1",
    },
    {
        heading: "Testimonial 2",
        testimonial: "Vivamus quis semper tortor. Duis sapien sem, pretium non tristique nec, volutpat ut diam. Proin euismod mollis purus id porta.",
        imgSource: "https://fakeimg.pl/500/",
        altText: "temp",
        author: "Name 2",
    },
    {
        heading: "Testimonial 3",
        testimonial: "Vivamus quis semper tortor. Duis sapien sem, pretium non tristique nec, volutpat ut diam. Proin euismod mollis purus id porta.",
        imgSource: "https://fakeimg.pl/500/",
        altText: "temp",
        author: "Name 3",
    }
]

export default function TestimonialsSection() {

    const [testimonialIndex, setTestimonialIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setTestimonialIndex((previousIndex) => previousIndex === fakeTestimonialCMS.length - 1 ? 0 : previousIndex + 1)
    
        }, 10000)
    
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="px-80 grid gap-12 py-20">
            {/* Change to sectionContainer */}
            <CustomerTestimonial
                imgSource={fakeTestimonialCMS[testimonialIndex].imgSource}
                imgWidth={600}
                imgHeight={600}
                altText={fakeTestimonialCMS[testimonialIndex].altText}
                heading={fakeTestimonialCMS[testimonialIndex].heading}
                testimonial={fakeTestimonialCMS[testimonialIndex].testimonial}
                author={fakeTestimonialCMS[testimonialIndex].author}
            />
        </section>
    )
}