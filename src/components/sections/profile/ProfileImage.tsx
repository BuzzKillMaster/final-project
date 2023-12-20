import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function ProfileImage({imageSrc, imageAlt}: {imageSrc: string, imageAlt: string}) {
    return (
        <ScrollAnimation className={"grid justify-self-center col-start-1 md:col-start-2"}>
            <div className={"col-start-1 row-start-1 w-full h-full flex items-center justify-center"}>
                <Image
                    className={"h-full w-full object-cover"}
                    src={imageSrc}
                    alt={imageAlt}
                    width={1000}
                    height={1000}
                />
            </div>

            <Image
                className={"col-start-1 row-start-1 w-full h-full"}
                src={"/profile_mask.png"}
                alt={""}
                width={1000}
                height={1000}
            />
        </ScrollAnimation>
    )
}