'use client'

// Vicky

import CustomerTestimonial from "../CustomerTestimonial";
import {useState, useEffect, useCallback} from 'react'
import SectionContainer from "@/components/sections/partials/SectionContainer";
import {Testimonials} from "@/../tina/__generated__/types";
import {AnimatePresence} from "framer-motion";
import {motion} from "framer-motion";
import Image from "next/image";
import {PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi";
import {BiSolidQuoteAltRight} from "react-icons/bi";
import ScrollAnimation from "@/components/ScrollAnimation";

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

export default function TestimonialsSection({testimonials}: { testimonials: Testimonials[]}) {
    const [testimonialIndex, setTestimonialIndex] = useState(0)

    const changeTestimonial = useCallback((previous: false | true = false) => {
        if (!testimonials) return

        const newIndex = previous ? testimonialIndex - 1 : testimonialIndex + 1

        if (newIndex < 0) {
            setTestimonialIndex(testimonials.length - 1)
        } else if (newIndex >= testimonials.length) {
            setTestimonialIndex(0)
        } else {
            setTestimonialIndex(newIndex)
        }
    }, [testimonialIndex, testimonials])

    useEffect(() => {
        if (!testimonials) return

        const interval = setInterval(() => {
            changeTestimonial()
        }, 5000)

        return () => clearInterval(interval)
    }, [testimonialIndex, testimonials, changeTestimonial])

    const showTestimonial = (index: number) => {
        setTestimonialIndex(index)
    }

    if (!testimonials) return null


    return (
        <SectionContainer sectionId={"testimonials_section"} sectionClassName={"bg-primary"}
                          containerClassName={"grid grid-cols-1 items-center"}>
            <ScrollAnimation className={"col-start-1 row-start-1 z-10"}>
                <BiSolidQuoteAltRight className={"text-9xl hidden md:block opacity-75 text-[#294E3D]"} />

                <div className={"grid grid-cols-1 px-4 md:px-0"}>
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

                <div className={"hidden md:flex gap-2 justify-center md:justify-start"}>
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => showTestimonial(index)}
                            className={(index === testimonialIndex ? "w-12 bg-[#754B3E]" : "w-8 bg-[#DFCFB4] hover:brightness-75") + " testimonial-tab h-4 rounded shadow cursor-pointer"}
                        ></div>
                    ))}
                </div>
            </ScrollAnimation>


            <ScrollAnimation className={"grid grid-cols-1 col-start-1 row-start-1 justify-self-end w-full md:w-fit"}>
                <AnimatePresence>
                    <motion.div
                        key={testimonialIndex}
                        className={"col-start-1 row-start-1"}
                        variants={ANIMATION_VARIANTS}
                        initial={"initial"}
                        animate={"animate"}
                        exit={"exit"}
                    >
                        <Image className={"aspect-square object-cover rounded shadow w-full"}
                               src={testimonials[testimonialIndex].image}
                               alt={testimonials[testimonialIndex].imageAlt}
                               width={600}
                               height={600}
                        />
                    </motion.div>
                </AnimatePresence>
            </ScrollAnimation>

            <ScrollAnimation className={"flex gap-12 justify-center md:hidden mt-12"}>
                <div className={"bg-neutral-100 rounded shadow hover:bg-neutral-200 cursor-pointer"} onClick={() => changeTestimonial(true)}>
                    <PiCaretLeftBold className={"h-6 w-6 m-4"} />
                </div>

                <div className={"bg-neutral-100 rounded shadow hover:bg-neutral-200 cursor-pointer"} onClick={() => changeTestimonial()}>
                    <PiCaretRightBold className={"h-6 w-6 m-4"} />
                </div>
            </ScrollAnimation>
        </SectionContainer>
    )
}