interface PrimaryButtonProps {
    type: "button" | "submit"
    text: string
    onClick: () => void
}

export default function PrimaryButton({type, text, onClick}: PrimaryButtonProps) {
    return (
        <button type={type} onClick={onClick}>
            {text}
        </button>
    )
}