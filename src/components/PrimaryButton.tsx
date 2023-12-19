interface PrimaryButtonProps {
    type: "button" | "submit"
    text: string
    onClick: () => void
    secondary?: boolean
    disabled?: boolean
}

export default function PrimaryButton({type, text, onClick, secondary = false, disabled = false}: PrimaryButtonProps) {
    const buttonColor = secondary ? "bg-[#B4D4CB] text-neutral-950 hover:brightness-75" : "bg-[#294E3D] text-neutral-50 hover:brightness-125"

    return (
        <button type={type} onClick={onClick} className={buttonColor + " py-4 px-8 rounded-full shadow font-semibold disabled:bg-neutral-500 disabled:hover:brightness-100"} disabled={disabled}>
            {text}
        </button>
    )
}