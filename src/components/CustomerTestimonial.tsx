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
        <div className='grid grid-cols-5 grid-rows-1'>

            <Image className='col-span-2 col-start-4 row-start-1'
                src={imgSource}
                width={imgWidth}
                height={imgHeight}
                alt={altText}
            />

            <div className='grid gap-5 col-span-4 col-start-1 row-start-1 h-fit py-9'>
                <Image
                    src="https://fakeimg.pl/50"
                    width={100}
                    height={100}
                    // doesnt change the height?
                    alt="Citationstegn"
                ></Image>

                <div className='grid gap-4 px-12'>
                    <h2 className='text-5xl'>{heading}</h2>
                    <p>{testimonial}</p>
                    <p className='text-sm'>{author}</p>
                </div>
            </div>
            
        </div>
    )
}
