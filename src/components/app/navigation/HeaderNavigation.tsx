import NavLink from "@/components/app/navigation/NavLink";
import {HiMenuAlt3} from "react-icons/hi";

const destinations = [
    {
        name: "Home",
        target: "hero_section"
    },
    {
        name: "Training",
        target: "training_section"
    },
    {
        name: "Profile",
        target: "profile_section"
    },
    {
        name: "Qualifications",
        target: "qualifications_section"
    },
    {
        name: "Approach",
        target: "approach_section"
    },
    {
        name: "Testimonials",
        target: "testimonials_section"
    },
    {
        name: "Blog",
        target: "blog_section"
    },
    {
        name: "Contact",
        target: "contact_section"
    }
]


export default function HeaderNavigation() {
    return (
        <nav>
            <ul className={"hidden lg:flex gap-4"}>
                {destinations.map((destination, index) => (
                    <NavLink key={index} text={destination.name} destination={destination.target}/>
                ))}
            </ul>

            <HiMenuAlt3 className={"lg:hidden text-2xl cursor-pointer"}/>
        </nav>
    )
}