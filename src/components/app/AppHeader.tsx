import HeaderNavigation from "@/components/app/navigation/HeaderNavigation";

export default function AppHeader() {
    return (
        <header className={"p-12 bg-white shadow"}>
            <div className={"container mx-auto max-w-7xl flex items-center justify-between"}>
                <h1 className={"text-4xl"}>Lorem Ipsum</h1>

                <HeaderNavigation/>
            </div>
        </header>
    )
}