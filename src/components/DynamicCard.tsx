// Vicky

import Image from 'next/image'
import React from 'react'
import { ReactNode } from 'react'

interface DynamicCardProps {
    imgSource: string
    imgWidth: number
    imgHeight: number
    altText: string
    heading: string
    description: string
    children: ReactNode
    flexDirection: "flex-col" | "flex-row"
}

export default function DynamicCard({imgSource, imgWidth, imgHeight, altText, heading, description, children, flexDirection}: DynamicCardProps) {
    console.log(imgSource)
    console.log("jeg virker")

    return (
        <header className={'flex ' + flexDirection}>
            <div>
                <Image
                    src={imgSource}
                    width={imgWidth}
                    height={imgHeight}
                    alt={altText}
                />
            </div>
            <div>
                <h4>{heading}</h4>
                <p>{description}</p>
                {children}
            </div>
        </header>
    )
}