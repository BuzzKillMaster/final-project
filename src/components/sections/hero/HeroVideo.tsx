export default function HeroVideo() {
    return (
        <div className="relative h-full w-full aspect-square overflow-hidden">
            <video className="min-w-full min-h-full object-cover" autoPlay loop muted>
                <source src="/hero_video.mp4" type="video/mp4" />
            </video>
        </div>

)
}