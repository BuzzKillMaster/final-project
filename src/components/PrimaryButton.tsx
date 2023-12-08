interface PrimaryButtonProps {
    type: "button" | "submit"
    text: string
    onClick: () => void
    secondary?: boolean
}

export default function PrimaryButton({type, text, onClick, secondary = false}: PrimaryButtonProps) {
    const buttonColor = secondary ? "bg-[#B4D4CB] text-neutral-950 hover:brightness-75" : "bg-[#294E3D] text-neutral-50 hover:brightness-125"

    return (
        <button type={type} onClick={onClick} className={buttonColor + " py-4 px-8 rounded-full shadow font-semibold"}>
            {text}
        </button>
    )
}