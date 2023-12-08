// Vicky

interface CustomerTestimonialProps {
    heading: string
    testimonial: string
    author: string
}

export default function CustomerTestimonial({heading, testimonial, author}: CustomerTestimonialProps) {
    return (
        <div className={"grid gap-4 px-8 py-12 bg-neutral-50 bg-opacity-75 my-8 rounded shadow md:mr-[25%]"}>
            <h2 className={"text-4xl"}>{heading}</h2>
            <p className={"text-lg"}>{testimonial}</p>
            <p className={"text-base font-semibold"}>{author}</p>
        </div>
    )
}
