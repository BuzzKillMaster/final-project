import NavLink from "@/components/app/navigation/NavLink";

const destinations = [
    "Terms of Service",
    "Privacy Policy",
    "Cookie Policy",
]

export default function FooterNavigation() {
    return (
        <nav>
            <ul className={"flex gap-4 flex-col sm:flex-row items-center"}>
                {destinations.map((destination, index) => (
                    <NavLink key={index} text={destination}/>
                ))}
            </ul>
        </nav>
    )
}