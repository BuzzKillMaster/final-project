export default function AppFooter() {
    return (
        <footer className={"py-12 px-4"}>
            <div className={"container mx-auto max-w-7xl"}>
                <div className={"flex flex-col md:flex-row gap-12 items-center justify-between"}>
                    <h2 className={"text-2xl font-semibold"}>Company Name ApS</h2>
                </div>

                <p className={"mt-4"}>Copyright 2023 &copy; Company Name ApS. All rights reserved.</p>
            </div>
        </footer>
    )
}