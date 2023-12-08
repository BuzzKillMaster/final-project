'use client'

// Vicky

import CustomerTestimonial from "../CustomerTestimonial";
import {useState, useEffect} from 'react'
import SectionContainer from "@/components/sections/partials/SectionContainer";
import {Testimonials} from "@/../tina/__generated__/types";
import client from "@/../tina/__generated__/client";
import {AnimatePresence} from "framer-motion";
import {motion} from "framer-motion";
import Image from "next/image";

const ANIMATION_VARIANTS = {
    initial: {
        opacity: 0,
        transition: {
            duration: 1,
        }
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 1,
        }
    },
}

export default function TestimonialsSection() {
    const [testimonials, setTestimonials] = useState<Testimonials[]>()
    const [testimonialIndex, setTestimonialIndex] = useState(0)

    useEffect(() => {
        (async () => {
            const query = await client.queries.testimonialsConnection()
            setTestimonials(query.data.testimonialsConnection.edges?.map((edge) => edge?.node as Testimonials))
        })()
    }, [])

    useEffect(() => {
        if (!testimonials) return

        const interval = setInterval(() => {
            setTestimonialIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            )
        }, 5000)

        return () => clearInterval(interval)
    }, [testimonialIndex, testimonials])

    const showTestimonial = (index: number) => {
        setTestimonialIndex(index)
    }

    if (!testimonials) return null

    return (
        <SectionContainer sectionId={"testimonials_section"} sectionClassName={"bg-primary"} containerClassName={"grid grid-cols-1 items-center"}>
            <div className={"col-start-1 row-start-1 z-10"}>
                <div className={"flex gap-6"}>
                    <div className={"w-8 h-24 bg-neutral-950 rounded shadow opacity-75"}></div>
                    <div className={"w-8 h-24 bg-neutral-950 rounded shadow opacity-75"}></div>
                </div>

                <div className={"grid grid-cols-1"}>
                    <AnimatePresence>
                        <motion.div
                            key={testimonialIndex}
                            className={"col-start-1 row-start-1"}
                            variants={ANIMATION_VARIANTS}
                            initial={"initial"}
                            animate={"animate"}
                            exit={"exit"}
                        >
                            <CustomerTestimonial
                                heading={testimonials[testimonialIndex].heading}
                                testimonial={testimonials[testimonialIndex].quote}
                                author={testimonials[testimonialIndex].name}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className={"flex gap-2"}>
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => showTestimonial(index)}
                            className={(index === testimonialIndex ? "w-12 bg-neutral-900" : "w-8 bg-neutral-100 hover:bg-neutral-400") + " testimonial-tab h-4 rounded shadow cursor-pointer"}
                        ></div>
                    ))}
                </div>
            </div>


            <div className={"grid grid-cols-1 col-start-1 row-start-1 justify-self-end"}>
                <AnimatePresence>
                    <motion.div
                        key={testimonialIndex}
                        className={"col-start-1 row-start-1"}
                        variants={ANIMATION_VARIANTS}
                        initial={"initial"}
                        animate={"animate"}
                        exit={"exit"}
                    >
                        <Image className={"aspect-square object-cover rounded shadow"}
                               src={testimonials[testimonialIndex].image}
                               alt={testimonials[testimonialIndex].imageAlt}
                               width={600}
                               height={600}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </SectionContainer>
    )
}