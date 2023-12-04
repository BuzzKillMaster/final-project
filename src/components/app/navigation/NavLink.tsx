'use client'

interface NavLinkProps {
    text: string
    destination: string
}

export default function NavLink({text, destination}: NavLinkProps) {
    const navigate = () => {
        const element = document.getElementById(destination)

        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }
    }

    return (
        <li className={"cursor-pointer"} onClick={navigate}>
            {text}
        </li>
    )
}