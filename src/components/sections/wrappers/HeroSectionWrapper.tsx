import client from "../../../../tina/__generated__/client";
import {Hero} from "../../../../tina/__generated__/types";
import HeroSection from "@/components/sections/HeroSection";

export default async function HeroSectionWrapper() {
    const query = await client.queries.hero({ relativePath: 'HERO.md' })
    const hero = query.data.hero as Hero

    return (
        <HeroSection hero={hero} />
    )
}