import AppLogo from "@/components/app/AppLogo";

export default function AppFooter() {
    return (
        <footer className={"py-12 px-4 bg-primary"}>
            <div className={"container mx-auto max-w-7xl"}>
                <AppLogo/>

                <p className={"mt-8 opacity-75 font-medium text-center"}>Copyright 2023 &copy; Borreby Adfærdstræning. Alle rettigheder reserveret.</p>
            </div>
        </footer>
    )
}