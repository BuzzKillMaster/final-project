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
        <div className='grid sm:grid-cols-5 grid-rows-1'>
            
            <Image className='hidden sm:block sm:col-span-2 sm:col-start-4 sm:row-start-1'
                src={imgSource}
                width={imgWidth}
                height={imgHeight}
                alt={altText}
            />

            <div className='grid gap-5 sm:col-span-4 sm:col-start-1 sm:row-start-1 h-fit py-9'>
                <Image
                    src="https://fakeimg.pl/50"
                    width={100}
                    height={100}
                    // doesnt change the height?
                    alt="Citationstegn"
                ></Image>

                <div className='grid gap-4 px-12'>
                    <h2 className='text-2xl lg:text-5xl'>{heading}</h2>
                    <p className='text-sm lg:text-base'>{testimonial}</p>
                    <p className='text-xs lg:text-sm'>{author}</p>
                </div>
            </div>
            
        </div>
    )
}
