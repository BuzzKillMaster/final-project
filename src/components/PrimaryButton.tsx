interface PrimaryButtonProps {
    type: "button" | "submit"
    text: string
    onClick: () => void
}

export default function PrimaryButton({type, text, onClick}: PrimaryButtonProps) {
    return (
        <button type={type} onClick={onClick} className={"py-3 px-5 bg-neutral-950 text-neutral-50 rounded-full shadow font-semibold hover:bg-neutral-700"}>
            {text}
        </button>
    )
}