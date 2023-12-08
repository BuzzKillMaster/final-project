import Image from "next/image";

export default function AppLogo() {
    return (
        <div className={"flex items-center"}>
            <Image src={"/logo.png"} alt={""} height={224 / 3} width={250 / 3} />
            <h2 className={"font-semibold ml-6"}>
                <span className={"block"}>Borreby</span>
                <span>Adfærdstræning</span>
            </h2>
        </div>
    )
}