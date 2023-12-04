interface NavLinkProps {
    text: string
}

export default function NavLink({text,}: NavLinkProps) {
    return (
        <li className={"cursor-pointer"}>
            {text}
        </li>
    )
}