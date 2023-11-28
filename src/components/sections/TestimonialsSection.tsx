'use client'

import CustomerTestimonial from "../CustomerTestimonial";
import {useState, useEffect} from 'react'
import SectionContainer from "@/components/sections/partials/SectionContainer";

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
    const [testimonialIndex, setTestimonialIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTestimonialIndex((prevIndex) =>
          prevIndex === fakeTestimonialCMS.length - 1 ? 0 : prevIndex + 1
        )
      }, 5000)
  
      return () => clearInterval(interval);
    }, [testimonialIndex])
  
    const showTestimonial = (index:number) => {
      setTestimonialIndex(index)
    }
  
    const renderTestimonials = () => {
        return fakeTestimonialCMS.map((_, index) => (
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
      <SectionContainer>
        <CustomerTestimonial
          imgSource={fakeTestimonialCMS[testimonialIndex].imgSource}
          imgWidth={600}
          imgHeight={600}
          altText={fakeTestimonialCMS[testimonialIndex].altText}
          heading={fakeTestimonialCMS[testimonialIndex].heading}
          testimonial={fakeTestimonialCMS[testimonialIndex].testimonial}
          author={fakeTestimonialCMS[testimonialIndex].author}
        />
  
        <div className="testimonial-tabs flex gap-1">
          {renderTestimonials()}
        </div>
      </SectionContainer>
    )
  }