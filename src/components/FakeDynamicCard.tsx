'use client'

import {useEffect} from "react";
import Image from "next/image";

interface FakeDynamicCardProps {
    title: string
    description: string
    horizontal?: boolean
    imageUri?: string
    imageAlt?: string
    imageHeight?: number
    imageWidth?: number
}

export default function FakeDynamicCard({title, description, horizontal = true, imageUri, imageAlt, imageHeight = 500, imageWidth = 500}: FakeDynamicCardProps) {
    useEffect(() => {
        if (imageUri && !imageAlt) {
            throw new Error("If you provide an image URI, you must provide a non-empty image alt text.")
        }
    }, [imageUri, imageAlt])

    return (
        <article className={"flex items-start " + (horizontal ? "gap-4" : "flex-col")}>
            {imageUri && (
                <Image
                    className={"mb-2"}
                    src={imageUri}
                    alt={imageAlt!}
                    height={imageHeight}
                    width={imageWidth}
                />
            )}

            <div className={"mt-2"}>
                <h4 className={"text-2xl mb-2"}>{title}</h4>
                <p>{description}</p>
            </div>
        </article>
    )
}