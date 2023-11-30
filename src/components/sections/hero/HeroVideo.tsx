interface HeroVideoProps {
    src: string
}

export default function HeroVideo({src}: HeroVideoProps) {
    return (
        <div className="relative h-full w-full aspect-square overflow-hidden">
            <video className="min-w-full min-h-full object-cover" autoPlay loop muted>
                <source src={src} type="video/mp4" />
            </video>
        </div>
    )
}