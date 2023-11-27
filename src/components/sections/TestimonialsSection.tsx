import CustomerTestimonial from "../CustomerTestimonial";

// Vicky

const fakeCMS = Array(3).fill({
    heading: "Lorem ipsum dolor sit",
    description: "Vivamus quis semper tortor. Duis sapien sem, pretium non tristique nec, volutpat ut diam. Proin euismod mollis purus id porta.",
    imgSource: "https://fakeimg.pl/500/",
    altText: "temp",
})

export default function TestimonialsSection() {
    return (
        <section>
            {/* Change to sectionContainer */}
            <CustomerTestimonial
                imgSource="https://fakeimg.pl/500/"
                imgWidth={600}
                imgHeight={600}
                altText="this is the alt text"
                heading="This is the title of the testimonial"
                testimonial="Vivamus quis semper tortor. Duis sapien sem, pretium non tristique nec, volutpat ut diam. Proin euismod mollis purus id porta."
                author="Name of owner and dog"
            />
        </section>
    )
}