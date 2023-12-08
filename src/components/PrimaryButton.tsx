interface PrimaryButtonProps {
    type: "button" | "submit"
    text: string
    onClick: () => void
}

export default function PrimaryButton({type, text, onClick}: PrimaryButtonProps) {
    return (
        <button type={type} onClick={onClick} className={"py-3 px-5 bg-[#294E3D] text-neutral-50 rounded-full shadow font-semibold hover:brightness-125"}>
            {text}
        </button>
    )
}