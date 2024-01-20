export default function AppFooter() {
    return (
        <footer className={"py-12 px-4"}>
            <div className={"container mx-auto flex flex-col items-center gap-4 max-w-7xl"}>
                <h2 className={"text-lg font-semibold"}>Borreby Adfærdstræning</h2>

                <div className={"grid md:grid-cols-[1fr_min-content_1fr]"}>
                    <a className={"cursor-pointer hover:text-[#AA7F55]"} href={"mailto:borreby@example.com"} rel={"noreferrer"}>borreby@example.com</a>

                    <div className={"hidden md:block mx-4 w-1 bg-neutral-300 rounded justify-self-center"}></div>

                    <a className={"cursor-pointer hover:text-[#AA7F55]"} href={"sms:12345678"} rel={"noreferrer"}>+45 12 34 56 78</a>
                </div>

                <a href={"https://www.google.com/maps/dir//55.3192116,10.2745909/@55.3304934,10.2505897,11.57z?entry=ttu"} target={"_blank"} rel={"noreferrer"} className={"cursor-pointer hover:text-[#AA7F55]"}>Bryllevej 7, 2454 Bellinge</a>

                <p className={"opacity-75 font-medium text-center mt-12"}>Copyright 2023 &copy; Borreby Adfærdstræning. Alle rettigheder reserveret.</p>
            </div>
        </footer>
    )
}