import NavLink from "@/components/app/navigation/NavLink";

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
        </nav>
    )
}