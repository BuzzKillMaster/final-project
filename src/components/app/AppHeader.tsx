import HeaderNavigation from "@/components/app/navigation/HeaderNavigation";
import AppLogo from "@/components/app/AppLogo";

export default function AppHeader() {
    return (
        <header className={"p-6 bg-white shadow"}>
            <div className={"container mx-auto max-w-7xl flex items-center justify-between"}>
                <AppLogo/>

                <HeaderNavigation/>
            </div>
        </header>
    )
}