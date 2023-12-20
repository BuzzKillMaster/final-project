'use client'

// Vicky

import Image from 'next/image'
import React from 'react'
import { ReactNode } from 'react'
import ScrollAnimation from "@/components/ScrollAnimation";

interface DynamicCardProps {
    imgSource: string
    imgWidth: number
    imgHeight: number
    altText: string
    heading: string
    description: string
    children?: ReactNode
    flexDirection: "flex-col" | "flex-row"
}

export default function DynamicCard({imgSource, imgWidth, imgHeight, altText, heading, description, children, flexDirection}: DynamicCardProps) {
    return (
        <ScrollAnimation className={'flex ' + flexDirection + ' items-start gap-3 lg:gap-5'}>
            <Image
                className={"shrink-0"}
                src={imgSource}
                width={imgWidth}
                height={imgHeight}
                alt={altText}
            />

            <div className='grid gap-2 lg:gap-4'>
                <h4 className='text-lg lg:text-2xl font-medium'>{heading}</h4>
                <p className='text-sm lg:text-base'>{description}</p>
                {children}
            </div>
        </ScrollAnimation>
    )
}