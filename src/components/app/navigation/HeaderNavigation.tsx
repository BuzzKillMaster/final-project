import NavLink from "@/components/app/navigation/NavLink";
import {HiMenuAlt3} from "react-icons/hi";

const destinations = [
    "Home",
    "About",
    "Services",
    "Contact",
    "Blog",
    "Careers"
]

export default function HeaderNavigation() {
    return (
        <nav>
            <ul className={"hidden lg:flex gap-4"}>
                {destinations.map((destination, index) => (
                    <NavLink key={index} text={destination}/>
                ))}
            </ul>

            <HiMenuAlt3 className={"lg:hidden text-2xl cursor-pointer"}/>
        </nav>
    )
}