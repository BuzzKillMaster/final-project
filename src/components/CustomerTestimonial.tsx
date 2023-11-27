// Vicky

import Image from 'next/image'

interface CustomerTestimonialProps {
    imgSource: string
    imgWidth: number
    imgHeight: number
    altText: string
    heading: string
    testimonial: string
    author: string
}

export default function CustomerTestimonial({imgSource, imgWidth, imgHeight, altText, heading, testimonial, author}: CustomerTestimonialProps) {
    return (
        <div>

            <Image
                src={imgSource}
                width={imgWidth}
                height={imgHeight}
                alt={altText}
            />

            <div>
                <Image
                    src="https://fakeimg.pl/50"
                    width="50"
                    height="50"
                    alt="Citationstegn"
                ></Image>

                <div>
                    <h2>{heading}</h2>
                    <p>{testimonial}</p>
                    <p>{author}</p>
                </div>
            </div>
            
        </div>
    )
}
