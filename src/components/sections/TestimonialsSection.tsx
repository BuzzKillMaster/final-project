'use client'

// Vicky

import CustomerTestimonial from "../CustomerTestimonial";
import {useState, useEffect} from 'react'
import SectionContainer from "@/components/sections/partials/SectionContainer";
import useMockCMS from "@/MockCMS";


export default function TestimonialsSection() {
    const {testimonials} = useMockCMS()

    const [testimonialIndex, setTestimonialIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTestimonialIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        )
      }, 5000)
  
      return () => clearInterval(interval);
    }, [testimonialIndex])
  
    const showTestimonial = (index:number) => {
      setTestimonialIndex(index)
    }
  
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
      <SectionContainer>
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