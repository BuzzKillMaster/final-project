import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ['latin'] })

interface NavLinkProps {
    text: string
}

export default function NavLink({text}: NavLinkProps) {
    return (
        <li className={quicksand.className + " font-semibold cursor-pointer hover:text-[#AA7F55]"}>
            {text}
        </li>
    )
}