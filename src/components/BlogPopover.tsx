'use client'

import {motion} from "framer-motion";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import DynamicCard from "@/components/DynamicCard";
import {useEffect, useState} from "react";
import {Blog} from "../../tina/__generated__/types";
import client from "../../tina/__generated__/client";
import {MdClose} from "react-icons/md";

const POPOVER_VARIANTS = {
    open: { y: 0 },
    closed: { y: "100%" }
}

interface BlogPost {
    image: string
    title: string
    description: string
    urlText: string
    urlDestination: string
}

const blogPosts: BlogPost[] = [
    {
        image: "https://fakeimg.pl/500",
        title: "Har din hund brug for et selvtillidsboost?",
        description: "Oplever din hund nervøsitet? Giv din bedste ven tryghed og selvtillid med konkrete råd, så hverdagssituationer ikke længere føles som en udfordring. ",
        urlText: "Læs tips om nervøsitet og angst ",
        urlDestination: "#"
    },
    
    {
        image: "https://fakeimg.pl/500",
        title: "Min hund er udfordret af trafik og cykler",
        description: "Ser din hund cykler og biler som trusler? Få praktiske råd til at gøre gåture til en behagelig oplevelse, hvor trafik bliver en sekundær bekymring for din hund.",
        urlText: "Læs mere om tips til sikkerhed i trafikken",
        urlDestination: "#"
    },
    
    {
        image: "https://fakeimg.pl/500",
        title: "Hvordan sikrer jeg, at min hvalp bliver en godt tilpasset hund?",
        description: "Hjælpe din hvalp med at forstå verden? Få indsigt og råd om socialisering, så din hvalp kan vokse op til at være en glad og velafbalanceret hund.",
        urlText: "Læs mere om socialisering af hvalpe",
        urlDestination: "#"
    },

    {
        image: "https://fakeimg.pl/500",
        title: "Er din hund nervøs ved besøg hos dyrlægen?",
        description: "Finder din hund dyrlægebesøg og pleje skræmmende? Få praktiske råd til at gøre besøg hos dyrlægen med mere positive og stressfrie.",
        urlText: "Få tips til angst ved dyrlæge og pleje",
        urlDestination: "#"
    },

    {
        image: "https://fakeimg.pl/500",
        title: "Hvordan etablerer du balance i en flok af pelsede familiemedlemmer?",
        description: "Ønsker du harmoni i din hundeflok? Jeg deler strategier til at etablere klare hierarkier og skabe en tryg og kærlig atmosfære, så både du og dine pelsede venner trives.",
        urlText: "Læs mere om harmoni blandt hunde",
        urlDestination: "#"
    },

    {
        image: "https://fakeimg.pl/500",
        title: "Er din hund lidt for ivrig når den møder nye mennesker?",
        description: "Stræber din hund efter opmærksomhed ved at hoppe op? Opdag enkle og effektive strategier til at afhjælpe denne og anden uønskede adfærd og skab en behagelig oplevelse ved mødet med nye mennesker.",
        urlText: "Læs mere om tips til uønsket adfærd",
        urlDestination: "#"
    },
]

export default function BlogPopover({hidePopover}: {hidePopover: () => void}) {
    const [blog, setBlog] = useState<Blog>()

    useEffect(() => {
        (async () => {
            const query = await client.queries.blog({ relativePath: 'BLOG.md' })
            setBlog(query.data.blog as Blog)
        })()
    }, [])

    return (
        <motion.section
            variants={POPOVER_VARIANTS}
            initial={"closed"}
            animate={"open"}
            transition={{duration: 0.2}}
            exit={"closed"}
            className={"fixed h-screen w-screen inset-0 bg-neutral-100 z-50"}
        >
            <div className={"py-24 px-4 relative h-full w-full overflow-scroll"}>
                <div className={"absolute right-24 bg-neutral-200 rounded-full hover:bg-neutral-400 cursor-pointer"} onClick={hidePopover}>
                    <MdClose className={"h-8 w-8 m-4"}/>
                </div>

                <div className="container max-w-7xl mx-auto">
                    <SectionHeader subheading={"Blog"} heading={"Velkommen til min mini blog"}
                                   description={blog?.description}/>

                    <div className={"grid md:grid-cols-2 xl:grid-cols-3 gap-12 mt-20"}>
                        {blogPosts.map((blogPost, index) => (
                            <div key={index} className={"flex flex-col gap-4 justify-between"}>
                                <DynamicCard
                                    imgSource={blogPost.image}
                                    imgWidth={150}
                                    imgHeight={150}
                                    altText={blogPost.title}
                                    heading={blogPost.title}
                                    description={blogPost.description}
                                    flexDirection={"flex-col"}
                                />


                                <a href={blogPost.urlDestination}
                                   className={"text-primary-500 font-semibold hover:underline"}>{blogPost.urlText}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    )
}